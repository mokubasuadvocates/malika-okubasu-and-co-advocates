import fs from "fs";
import path from "path";

const blogsFilePath = path.join(process.cwd(), "src", "data", "blogs.ts");
let fileContent = fs.readFileSync(blogsFilePath, "utf8");

let currentIndex = 0;
while (true) {
    const contentStart = fileContent.indexOf("content: [", currentIndex);
    if (contentStart === -1) break;
    
    let openBrackets = 0;
    let contentEnd = -1;
    for (let j = contentStart + "content: ".length; j < fileContent.length; j++) {
        if (fileContent[j] === '[') openBrackets++;
        else if (fileContent[j] === ']') {
            openBrackets--;
            if (openBrackets === 0) {
                contentEnd = j;
                break;
            }
        }
    }
    
    if (contentEnd === -1) {
        currentIndex = contentStart + "content: ".length;
        continue;
    }
    
    let contentBlock = fileContent.substring(contentStart, contentEnd + 1);
    
    const numberMapping = new Map<string, number>();
    let currentId = 1;
    
    const authIndex = contentBlock.search(/{[\s\n]*type:\s*"heading",[\s\n]*level:\s*2,[\s\n]*text:\s*"(Authorities|References)"[\s\n]*}/);
    let references = [];
    
    if (authIndex !== -1) {
        const listStartIndex = contentBlock.indexOf("items: [", authIndex);
        if (listStartIndex !== -1) {
            let listOpenBrackets = 0;
            let listEndIndex = -1;
            for (let j = listStartIndex + "items: ".length; j < contentBlock.length; j++) {
                if (contentBlock[j] === '[') listOpenBrackets++;
                else if (contentBlock[j] === ']') {
                    listOpenBrackets--;
                    if (listOpenBrackets === 0) {
                        listEndIndex = j;
                        break;
                    }
                }
            }
            
            if (listEndIndex !== -1) {
                const listBlock = contentBlock.substring(listStartIndex + "items: [".length, listEndIndex);
                const matches = listBlock.match(/"([^"\\]*(\\.[^"\\]*)*)"/g);
                if (matches) {
                    references = matches.map(m => {
                        const text = m.substring(1, m.length - 1).replace(/\\"/g, '"');
                        const match = text.match(/^\[(\d+)\]\s*(.*)/);
                        if (match) {
                            return { originalNum: match[1], title: match[2] };
                        } else {
                            return { originalNum: null, title: text };
                        }
                    });
                }
                
                const objectStart = contentBlock.lastIndexOf("{", authIndex);
                let nextBracket = contentBlock.indexOf("}", listEndIndex);
                if (contentBlock[nextBracket + 1] === ',') nextBracket++;
                
                contentBlock = contentBlock.substring(0, objectStart) + contentBlock.substring(nextBracket + 1);
            }
        }
    }
    
    // Replace inline citations
    const newContentBlock = contentBlock.replace(/text:\s*"([^"\\]*(\\.[^"\\]*)*)"/g, (match, p1) => {
        let text = p1;
        text = text.replace(/\[(\d+)\]/g, (m2, num) => {
            if (!numberMapping.has(num)) {
                numberMapping.set(num, currentId++);
            }
            return `[${numberMapping.get(num)}]`;
        });
        return `text: "${text}"`;
    });
    
    let referencesString = "";
    if (references.length > 0) {
        const structuredRefs = [];
        for (const ref of references) {
            let assignedId;
            if (ref.originalNum && numberMapping.has(ref.originalNum)) {
                assignedId = numberMapping.get(ref.originalNum);
            } else if (ref.originalNum) {
                 // Even if not found inline, keep it
                 assignedId = currentId++;
            } else {
                 assignedId = currentId++;
            }
            structuredRefs.push(`    { id: ${assignedId}, title: "${ref.title.replace(/"/g, '\\"')}" }`);
        }
        
        structuredRefs.sort((a, b) => {
            const idA = parseInt(a.match(/id: (\d+)/)[1]);
            const idB = parseInt(b.match(/id: (\d+)/)[1]);
            return idA - idB;
        });
        
        referencesString = `,\n  references: [\n${structuredRefs.join(',\n')}\n  ]`;
    }
    
    fileContent = fileContent.substring(0, contentStart) + newContentBlock + referencesString + fileContent.substring(contentEnd + 1);
    
    // Adjust currentIndex
    currentIndex = contentStart + newContentBlock.length + referencesString.length;
}

fs.writeFileSync(blogsFilePath, fileContent);
console.log("Audit complete!");
