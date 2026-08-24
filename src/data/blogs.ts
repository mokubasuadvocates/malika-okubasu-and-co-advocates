import { blogAuthors, type BlogAuthorSlug } from "@/data/authors";

export type BlogContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  authorSlug: BlogAuthorSlug;
  date: string;
  datePublished: string;
  dateModified: string;
  category: string;
  primaryPracticeArea?: string;
  practiceArea: string;
  practiceAreas: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  content: BlogContentBlock[];
  references?: { id: number; title: string; url?: string }[];
};

// Add future publications by adding one object to this array and placing the
// featured image under /public/images/blogs. Keep slugs stable once published.
export const blogPosts: BlogPost[] = [
  {
    title:
      "Bigamy, Customary Unions, and Inheritance: Unpacking High Court Decision [2026] KEHC 9445 (KLR)",
    slug: "bigamy-customary-unions-inheritance-kenya",
    date: "August 24, 2026",
    datePublished: "2026-08-24T00:00:00Z",
    dateModified: "2026-08-24T00:00:00Z",
    category: "Family Law",
    practiceArea: "Family Law and Succession Planning",
    practiceAreas: ["Family Law and Succession Planning", "Dispute Resolution"],
    tags: [
      "Bigamy",
      "Customary Law",
      "Inheritance",
      "Law of Succession",
      "Marriage Act",
      "Succession",
    ],
    image: "/images/blogs/bigamy-customary-unions-inheritance-kenya.png",
    imageAlt:
      "Probate documents, wedding rings, and scales of justice representing succession and customary union disputes in Kenya",
    excerpt:
      "A case update on how the High Court applied Section 3(5) of the Law of Succession Act to protect a surviving partner and children despite the technical invalidity of a second marriage.",
    authorSlug: "oduor-khamati",
    readTime: "5 min read",
    seoTitle:
      "Bigamy, Customary Unions and Inheritance in Kenya | Malika Okubasu & Company Advocates",
    seoDescription:
      "A case update on In re Estate of the Late Musyimi and how Section 3(5) of the Law of Succession Act may protect surviving dependants despite a void second marriage.",
    content: [
      {
        type: "paragraph",
        text: "When a person in a monogamous statutory marriage contracts a second marriage before divorce is finalised, marriage law generally treats the second union as null and void. The harder question arises when the estate goes to probate: what becomes of the second wife and the children born or raised within that relationship?",
      },
      {
        type: "paragraph",
        text: "In In re Estate of the Late Musyimi (Deceased) (Succession Cause E600 of 2022) [2026] KEHC 9445 (KLR), the High Court addressed the tension between strict civil marriage law and the protective policy of Kenyan succession law. [1]",
      },
      {
        type: "heading",
        level: 2,
        text: "Background",
      },
      {
        type: "paragraph",
        text: "In 1987, the deceased contracted a statutory monogamous marriage under the African Christian Marriage and Divorce Act with his first wife. In 2015, while that statutory marriage was still legally subsisting, he paid dowry under customary law and subsequently entered into a civil marriage in Tanzania with the objector.",
      },
      {
        type: "paragraph",
        text: "In 2020, the original statutory marriage was formally dissolved by a decree absolute. The deceased then passed away in 2021. When members of the first family petitioned for letters of administration, the objector sought recognition as a co-administrator and beneficiary for herself and her minor children.",
      },
      {
        type: "heading",
        level: 2,
        text: "Primary Legal Issue",
      },
      {
        type: "paragraph",
        text: "The first wife argued that because the statutory monogamous marriage was still active in 2015, the deceased lacked legal capacity to marry the objector. On that view, the subsequent union was a nullity and could not confer spousal rights.",
      },
      {
        type: "paragraph",
        text: "The core issue was whether Section 3(5) of the Law of Succession Act protects a woman who contracts a customary union, followed by a civil marriage, while a prior monogamous marriage is still subsisting.",
      },
      {
        type: "paragraph",
        text: "Section 3(5) provides that notwithstanding any other written law, a woman married under a system of law that permits polygamy remains a wife for succession purposes where her husband has contracted a previous or subsequent monogamous marriage to another woman. Her children are accordingly treated as children within the meaning of the Act.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Findings of the Court",
      },
      {
        type: "list",
        items: [
          "The Court acknowledged that, under general family law, the second union was technically void and constituted bigamy because the earlier monogamous marriage was still subsisting.",
          "The Court reiterated that Parliament used the phrase \"notwithstanding the provisions of any other written law\" in Section 3(5) to insulate surviving dependants in estate disputes.",
          "The judgment treated succession law as concerned not only with strict contractual validity, but also with protecting women and children who were treated as family during the deceased's lifetime.",
          "The Court extended the provision beyond the more familiar scenario of a subsequent customary wife by holding that the protection also applied where the deceased underwent customary dowry rites and later contracted a civil union.",
        ],
      },
      {
        type: "paragraph",
        text: "The High Court allowed the objection, declared the objector a legal wife for succession purposes, and appointed her as a joint administrator of the estate alongside the petitioners. The Court also directed that an application for confirmation of grant be filed within 45 days.",
      },
      {
        type: "paragraph",
        text: "Importantly, the Court noted that disputes over whether specific assets, including property acquired during the first marriage, amount to matrimonial property would be determined at the distribution stage.",
      },
      {
        type: "heading",
        level: 2,
        text: "Takeaway for Estate Practitioners and Families",
      },
      {
        type: "paragraph",
        text: "The decision reinforces the protective policy underlying Kenyan succession law. Technical invalidity under the Marriage Act does not automatically strip a surviving partner or children of dependant rights under the Law of Succession Act.",
      },
      {
        type: "paragraph",
        text: "For estate practitioners, the judgment is a reminder to separate two questions: whether a marriage is valid under marriage law, and whether a person is recognised as a wife or child for purposes of succession. The latter question may be answered by Section 3(5), especially where the deceased treated the second household as family during his lifetime.",
      },
      {
        type: "heading",
        level: 2,
        text: "Discussion Point",
      },
      {
        type: "paragraph",
        text: "What are your thoughts on the Court's extension of Section 3(5) to subsequent civil unions contracted during an active statutory marriage?",
      },
    ],
    references: [
      {
        id: 1,
        title:
          "In re Estate of the Late Musyimi (Deceased) (Succession Cause E600 of 2022) [2026] KEHC 9445 (KLR) (Family) (2 July 2026) (Judgment)",
        url: "https://new.kenyalaw.org/akn/ke/judgment/kehc/2026/9445/eng@2026-07-02",
      },
    ],
  },
  {
    title: "Factoring Accounts Receivable in Kenya: A Legal Perspective",
    slug: "factoring-accounts-receivable-kenya",
    date: "June 23, 2026",
    datePublished: "2026-06-23T00:00:00Z",
    dateModified: "2026-06-23T00:00:00Z",
    category: "Corporate and Commercial Law",
    practiceArea: "Corporate and Commercial Law",
    practiceAreas: [
      "Corporate and Commercial Law",
      "Banking and Finance"
    ],
    tags: ["Factoring", "Invoice Discounting", "Commercial Law", "Kenya"],
    image: "/images/blogs/sham-contracts.png",
    imageAlt: "Factoring Accounts Receivable in Kenya",
    excerpt: "A comprehensive guide to factoring and invoice discounting in Kenya, including the legal framework under the Moveable Property Security Rights Act, and key considerations for agreements.",
    authorSlug: "oduor-khamati",
    readTime: "8 min read",
    seoTitle: "Factoring Accounts Receivable in Kenya: Legal Perspective",
    seoDescription: "Explore the legal framework, risks, and considerations of factoring accounts receivable and invoice discounting in Kenya.",
    content: [
      { type: "heading", level: 2, text: "1. INTRODUCTION" },
      { type: "paragraph", text: "Many businesses often face a cash crunch. This mainly occurs when collections are not coming in steadily or when it takes time for invoices to be honoured. This has led to many of such business seeking alternative short-term financing based on invoices and account receivables. This is called factoring." },
      { type: "paragraph", text: "Think of invoice factoring as getting paid today for a sale you made for tomorrow. Factoring is selling of a business’s receivable at a discount to a factor which assumes the credit risk of the customer (debtor) and the factor receives money from the debtor when they pay. Factoring operates majorly without recourse. Mostly the factor will take charge of controlling the account receivables and will receive payment directly from the debtor." },
      { type: "paragraph", text: "On the other hand, invoice discounting is the process where the invoices are not sold but discounted with full recourse to the company. Simply put, a business agreed to accept a slightly lower sum on an invoice but is responsible for collecting its own debts." },
      { type: "paragraph", text: "There can also be a hybrid arrangement which uses elements of discounting and factoring depending on what the parties agree." },
      { type: "paragraph", text: "Generally this is how it works. Instead of waiting 30, 60 or 90 days for a client to pay their invoice, a business sells that unpaid invoice to a third-party company (the factor). They give the business the bulk of the cash right away, to allow the business pay its staff and keep running. Afterwards, the factor collects the full payment from the client later. The business received funding faster and the factor gets to keep a small share (often a percentage) of the invoice as fee." },
      { type: "paragraph", text: "In the Kenyan commercial landscape, factoring and receivable financing have emerged as vital tools for businesses. While not very popular the trend is catching up especially within the Small and Medium-sized Enterprises (SMEs). Factoring is used to unlock liquidity by converting the outstanding invoices and receivables into immediate cash. Factoring is very common in sector like manufacturing, wholesale, staffing, recruitment agencies, transport, logistics, consulting and IT. For example in the US factoring is a trillion-dollar industry." },
      { type: "paragraph", text: "The North America Factoring Services Market is projected to grow from US$ 1.58 trillion in 2024 to US$ 2.63 trillion by 2033, achieving a CAGR of 5.77% during 2025-2033." },
      { type: "heading", level: 2, text: "2. HOW FACTORING WORKS" },
      { type: "heading", level: 3, text: "2.1. Delivery and Invoicing" },
      { type: "paragraph", text: "The process begins when the business provide goods or services to the customer (the debtor) and issue an invoice with standard payment terms (for instance Net 30, 60, or 90 days)." },
      { type: "heading", level: 3, text: "2.2. Submission to the Factor" },
      { type: "paragraph", text: "Instead of waiting for the customer to pay, the business submits (seller of invoice) this invoice to the factoring company. The factor conducts a brief due diligence check to verify that the goods services were indeed delivered and that the invoice is legitimate. This may include verification of invoices against delivery notes, attendance sheets." },
      { type: "paragraph", text: "Initial due diligence is often conducted by the factor before entering in the factoring agreement. The business which requires financing and which submits its invoices to the factor is called the seller." },
      { type: "heading", level: 3, text: "2.3. The Advance Payment" },
      { type: "paragraph", text: "Once the invoice is approved, the factor will pay the business an advance. Depending on the business risk factor and the agreement, this advance will typically range from 70% to 90% of the total invoice value. This cash hits the bank account, often within 24–48 hours, allowing the business to cover immediate costs like payroll, rent, or inventory without hurdles." },
      { type: "heading", level: 3, text: "2.4. Collection by the Factor" },
      { type: "paragraph", text: "The factor then takes responsibility for collecting the payment from the customer when the invoice reaches its due date." },
      { type: "paragraph", text: "Disclosed Factoring: The customer will be notified that the debt has been assigned to the factor and pays the factor directly. This is what many factoring companies use as it gives them security and control of the collections." },
      { type: "paragraph", text: "Undisclosed (Silent) Factoring: The customer is not notified and continues paying the business. The business then promptly forward those payments to the factor." },
      { type: "heading", level: 3, text: "2.5. The Final Settlement or Rebate" },
      { type: "paragraph", text: "Once the customer pays the full invoice amount to the factor, the factor releases the remaining balance (or reserve) to the business. This is the portion of the invoice not covered by the initial advance. In some cases, the factoring agreement is written so that the factor can build large reserves which are released to the business after a certain period of time." },
      { type: "heading", level: 3, text: "2.6. Deduction of Fees" },
      { type: "paragraph", text: "Before releasing that final balance, the factor deducts their factoring fee (discount rate). The fee is the cost of the service and is typically a percentage of the total invoice value." },
      { type: "heading", level: 2, text: "3. THE LEGAL FRAMEWORK" },
      { type: "paragraph", text: "Currently, there is no specific legislation solely dedicated to regulating factoring transactions in Kenya. Consequently, the legal validity of these arrangements rests on two primary pillars: Parties have to rely on contract law principle and the Moveable Property Security Rights Act (MPSRA) of 2017." },
      { type: "heading", level: 3, text: "3.1. General Contract Law" },
      { type: "paragraph", text: "Factoring is fundamentally a contractual relationship between the supplier (the client) and the factor (the financial institution). The rights, obligations, and risk-allocation mechanisms are governed by the specific terms negotiated within the factoring agreement." },
      { type: "heading", level: 3, text: "3.2. The Moveable Property Security Rights Act (MPSRA) of 2017" },
      { type: "paragraph", text: "This is the most significant statutory instrument for this sector. Section 2 of the MPSRA recognizes receivables as intangible assets that can be used as security to obtain financing. It provides a legal mechanism for the creation and registration of security interests, which is crucial for factors seeking to protect their interest in the assigned debt." },
      { type: "paragraph", text: "The Act covers both future assets and intangible assets. Intangible assets includes receivables, choses in action, deposit accounts, electronic securities and intellectual property rights while future assets means a movable asset, which does not exist or which the grantor does not have rights in or the power to encumber at the time the security agreement is concluded." },
      { type: "heading", level: 2, text: "4. LEGAL ISSUES" },
      { type: "heading", level: 3, text: "4.1. Risk of Re-characterization" },
      { type: "paragraph", text: "In a legal dispute, a court might re-characterize a factoring agreement as a loan secured by receivables. If the transaction is treated as a loan, the factor may be subject to the In Duplum Rule (which limits the total interest charged to the principal amount)." },
      { type: "paragraph", text: "The agreement must be drafted to reflect a true sale of the debt rather than a collateralized lending arrangement. Ensure the language clearly distinguishes between the assignment of an asset and the granting of a security interest, although the MPSRA provides a mechanism to register the latter to protect your interest." },
      { type: "paragraph", text: "Even so, the law does not support unconscionable contracts terms. If the terms of the factoring agreement are unconscionable for instance excessive interests and penalties." },
      { type: "heading", level: 3, text: "4.2. Perfection and Priority Issues (under the MPSRA 2017)" },
      { type: "paragraph", text: "The MPSRA 2017 allows factors to perfect their interest in receivables by registering them on the Collateral Registry." },
      { type: "paragraph", text: "The risk of non-registration of the collateral: If a factor fails to register their security interest, another creditor (such as a bank with a floating charge over the seller’s assets) might claim priority. In a liquidation scenario, the unregistered factor risks becoming an unsecured creditor, losing their right to the specific receivables they intended to factor." },
      { type: "paragraph", text: "Mitigation of risk by registration of collateral: Immediate registration of the assignment/security interest in the Collateral Registry is mandatory to establish priority over subsequent creditors." },
      { type: "heading", level: 3, text: "4.3. Set-Off Rights of the Debtor" },
      { type: "paragraph", text: "Even after an invoice is assigned to a factor, the customer (debtor) may retain legal rights that undermine the factor’s position. If the business failed to deliver the goods or services correctly, the customer my legally be entitled to set off the value of the defect against the debt. The factor may find that the invoice they purchased has been reduced or invalidated by a dispute between the seller and the buyer." },
      { type: "paragraph", text: "In addition, there may be circumstances such breach of contract which may affect the ability of the factor to collect on the invoice." },
      { type: "paragraph", text: "The factoring agreement can mitigate such eventualities by inclosing Representations and Warranties from the business, confirming that the invoices are free from disputes, existing liens, or claims of set-off at the time of purchase." },
      { type: "heading", level: 3, text: "4.4. Bankruptcy and Insolvency of the Seller" },
      { type: "paragraph", text: "If the seller of the invoices enters insolvency, the liquidator may challenge the factoring agreement. A liquidator might argue that the factoring arrangement constitutes a preferential payment or a transaction at an undervalue, potentially voiding the transfer of receivables." },
      { type: "paragraph", text: "For a factoring it is crucial to ensure that factoring agreement is negotiated at arm’s length and that all assignments are properly documented and registered to prove that the factor acquired the rights in good faith and for value." },
      { type: "heading", level: 3, text: "4.5. Regulatory and Licensing Risks" },
      { type: "paragraph", text: "While factoring is a commercial activity, financial institutions providing it must remain compliant with the Central Bank of Kenya (CBK) guidelines if they operate as deposit-taking institutions or specific types of credit providers. Operating a financing business without proper regulatory standing can lead to the agreement being deemed unenforceable in court." },
      { type: "paragraph", text: "It is crucial to verify that the factoring entity is properly licensed to carry out credit business and adheres to relevant consumer protection and anti-money laundering (AML) laws. Nothing stops banks, microfinances and saccos from offering factoring services as long as this is done within their respective regulatory framework and licencing conditions of the regulators." },
      { type: "paragraph", text: "Factoring can be categorised as traditional lending and this means that lending rules may be applicable such as in duplum rule." },
      { type: "heading", level: 2, text: "5. KEY CONSIDERATIONS FOR FACTORING AGREEMENTS" },
      { type: "paragraph", text: "When entering into a factoring agreement, businesses must exercise due diligence. Because the law relies heavily on contract terms rather than a specific regulatory code, the following clauses are critical:" },
      { type: "heading", level: 3, text: "5.1. Recourse vs. Non-Recourse Terms" },
      { type: "paragraph", text: "Recourse Factoring: The business remains liable if the customer defaults. If the customer fails to pay, the factor can demand that the supplier buy back the invoice or deduct the amount from future advances." },
      { type: "paragraph", text: "Non-Recourse Factoring: The factor assumes the credit risk of the customer. If the customer becomes insolvent or fails to pay, the factor generally bears the loss. This is typically more expensive due to the higher risk taken by the factor. This is not common in factoring, as many factors will often protect risks and hold the business liable." },
      { type: "heading", level: 3, text: "5.2. Eligibility Criteria" },
      { type: "paragraph", text: "The contract will explicitly define which invoices qualify for factoring. A factor may want to deal with invoices from a reputable customers and avoid invoices from some institutions after due due diligence. Common hurdles will include:" },
      { type: "list", items: [
        "B2B Limitation: Most factors only accept favour or business-to-business (B2B) invoices, excluding consumer (B2C) sales.",
        "Dispute Status: Factors generally refuse to purchase invoices that are subject to disputes, chargebacks, or quality complaints.",
        "Customer Creditworthiness: The factor will reserve the right to vet your customers. If your customer base has a poor credit profile, the factor may reject specific invoices. This could potentially affect the relationship between the business and the customer."
      ]},
      { type: "heading", level: 3, text: "5.3. Fee Structure and Transparency" },
      { type: "paragraph", text: "Factoring costs can quickly erode profit margins. Look for clarity on:" },
      { type: "list", items: [
        "Factoring Fees: Administrative charges (often a percentage per invoice) for processing and collection. These fees may be high depending on the risk factor associated with the business or the customer.",
        "Discount Rates: Interest charged on the cash advance, usually tied to the time the invoice remains outstanding.",
        "Hidden Costs: Be wary of setup fees, credit-check fees, and penalties for late payments or invoice cancellations. Penalties may erode any profitability of the business of the business leading to the business being over reliant on the factor."
      ]},
      { type: "heading", level: 3, text: "5.4. Customer Notification and Relationship Management" },
      { type: "paragraph", text: "Disclosure: It is important to determine whether the arrangement is disclosed. That is whether the customer has been notified that the debt has been assigned to the factor." },
      { type: "paragraph", text: "Control: It is also crucial to specify who handles collection efforts. If the factor interacts directly with your clients, ensure their communication style aligns with your brand’s standards and customer service expectations to prevent damaging long-term business relationships." },
      { type: "paragraph", text: "In operation, the factor may contact the customer and demand payment of invoices directly if the customer dies not pay on time. This may create hostile working environment when invoices are often delayed. For many businesses a late invoice is normal as a delay of a couple of days is not a big deal. This may not sit well with the factor." },
      { type: "heading", level: 3, text: "5.5. Termination Clauses" },
      { type: "paragraph", text: "It is also important to ensure the contract specifies the procedure for ending the relationship. Some agreements may include restrictive exit fees or long notice periods that could trap you in a high-cost financing cycle." },
      { type: "heading", level: 2, text: "6. CASE LAW ON FACTORING" },
      { type: "heading", level: 3, text: "TRANS NATIONAL BANK LIMITED V SWIFT TRUCKERS LIMITED (IN RECEIVERSHIP) & 3 OTHERS [2012] eKLR" },
      { type: "paragraph", text: "Herein below is a summary of the case Trans National Bank Limited v Swift Truckers Limited (In Receivership) & 3 Others [2012] KEHC 2988 (KLR) formatted as a classic case brief, followed by an analysis of what the judgment establishes regarding invoice factoring." },
      { type: "heading", level: 3, text: "6.1. Facts" },
      { type: "paragraph", text: "In October 2005, Trans National Bank (the Plaintiff) granted an invoice factoring facility of up to KShs 25 million to Swift Truckers Limited (1st Defendant). This commercial arrangement allowed the 1st Defendant to assign its accounts receivables (invoices) to the bank in exchange for immediate cash flow funding. The financing was secured by verified invoices alongside personal guarantees executed by the company’s directors, including Nazir J. Virjee (the 3rd Defendant)." },
      { type: "paragraph", text: "By December 2007, the 1st Defendant fell into financial arrears. The parties restructured the credit facilities, converting KShs 25 million of overdue, mature invoices into a formal loan, while KShs 19.7 million in current invoices remained under the active factoring arrangement. The 3rd Defendant signed a restructured personal guarantee to secure up to KShs 44.7 million." },
      { type: "paragraph", text: "In January 2010, Diamond Trust Bank placed the 1st Defendant under receivership. The Plaintiff subsequently filed suit, claiming outstanding balances on the loan account, overdrafts, a US dollar account, and further alleging that the directors fraudulently bypassed the factoring agreement by intercepting and directly collecting payments from clients (such as Damco Logistics and Desbro Uganda) on invoices already assigned to the bank." },
      { type: "paragraph", text: "The 3rd Defendant offered no testimonial or documentary evidence at the hearing. Instead, his counsel raised several legal technicalities in submissions, arguing that:" },
      { type: "list", items: [
        "1. The factoring agreement was invalid because it was not stamped or registered.",
        "2. The personal guarantee was unenforceable because the specific liability figure only appeared on the first page, whereas the directors only signed the final page.",
        "3. The banking documentation was contractually defective due to a minor typographical error in an early facility letter."
      ]},
      { type: "heading", level: 3, text: "6.2. Issues" },
      { type: "list", items: [
        "1. Whether an invoice factoring agreement requires statutory stamping or registration to be legally enforceable.",
        "2. Whether a personal guarantee is legally binding under the Law of Contract Act if the guarantor only signs the final execution page and not every individual page of the document.",
        "3. Whether the Plaintiff sufficiently proved the allegations of corporate fraud regarding the direct collection of factored invoices."
      ]},
      { type: "heading", level: 3, text: "6.3. Ratio Decidendi" },
      { type: "paragraph", text: "1. Enforceability of Factoring Agreements: An invoice factoring agreement does not involve immovable property or mortgages, meaning it is not subject to compulsory registration. Furthermore, it is not a registrable instrument under the Schedule to the Stamp Duty Act; hence, a lack of immediate stamping does not invalidate the agreement or render it inadmissible." },
      { type: "paragraph", text: "2. Validity of Guarantees: Section 3(1) of the Law of Contract Act (Cap 23) strictly requires a guarantee memorandum to be in writing and signed by the party to be charged. Kenyan law does not mandate that a guarantor sign every sequential page of a contract. If clear intent to be contractually bound is demonstrated by an execution on the final signature page, the guarantee is valid and enforceable for the full amount stated within the body of the text." },
      { type: "paragraph", text: "3. Standard of Proof for Fraud: Fraud is a serious civil allegation that requires strict, clear, and unambiguous documentary tracing. Merely demonstrating that a client paid a company directly is insufficient to establish fraud unless the underlying specific invoices are produced to confirm they were legally factored to the bank at that precise time." },
      { type: "heading", level: 3, text: "6.4. Conclusion" },
      { type: "paragraph", text: "The High Court dismissed the claims of fraud (Prayer C) due to an insufficient paper trail. However, the court upheld the validity of the personal guarantee. Justice Havelock entered judgment in favours of Trans National Bank against the 3rd Defendant for the proven principal sums of KShs 23,611,616.70 and US$ 9,700.00, plus interest at a commercial rate of 17.25% per annum calculated from March 1, 2010." },
      { type: "heading", level: 3, text: "6.5. Legal Definition & Principles of Invoice Factoring" },
      { type: "paragraph", text: "The judgment provides useful clarity on how Kenyan banking law characterizes invoice account receivable factoring:" },
      { type: "paragraph", text: "Commercial Purpose of Factoring & Definition: The court defines invoice factoring as a specialized business facility wherein a borrowing company assigns or sells its outstanding accounts receivables (unpaid customer invoices) to a lender (the bank or microfinance) in exchange for a fee or commission. This serves as an immediate liquidity mechanism, allowing businesses to bridge cash-flow gaps between generating an invoice and receiving delayed payments from clients." },
      { type: "paragraph", text: "The Mechanism of Security: Unlike traditional commercial lending, which relies heavily on physical collateral or standard overdraft protections, the primary security in a factoring ecosystem is the actual face value of the invoice." },
      { type: "paragraph", text: "Legal Assignment of Debt: When an invoice is factored, the underlying debt legally changes hands and belongs entirely to the bank. To execute this properly, the borrower must physically endorse the buyer’s copy of the invoice with a clear directive instruction, notifying the customer/debtor that payment must be remitted directly to the bank." },
      { type: "heading", level: 2, text: "7. CONCLUSION" },
      { type: "paragraph", text: "While factoring is a powerful instrument for financial inclusion and cash flow management in Kenya, with the factoring agreement being the primarily reference point for determined the rights and obligations of the parties. Before signing, it is imperative to ensure that the document clearly defines risk allocation, due diligence, costs, and the limits of the factor’s authority over you’re a business and the customers." },
      { type: "paragraph", text: "With many lenders and microfinance institutions in Kenya venturing into factoring and invoice discounting arrangements, the sector is likely to grow. This is supported by the enactment of the 2017 Act which recognizes receivables as security and provides a comprehensive framework for factoring and invoice discounting." }
    ],
    references: [
      { id: 1, title: "North America Factoring Services Market", url: "https://finance.yahoo.com/news/north-america-factoring-services-market-095200187.html" }
    ]
  },
  {
    title:
      "Domain Squatting in Kenya: How the Law Protects Domain Names and Brand Owners in Kenya",
    slug: "domain-squatting-in-kenya",
    date: "January 20, 2026",
    category: "Tech Law",
    practiceArea: "Media, Technology and Intellectual Property",
    practiceAreas: [
      "Media, Technology and Intellectual Property",
      "Dispute Resolution",
      "Corporate and Commercial Law",
    ],
    tags: ["Domain Names", "Intellectual Property", "Kenya", "Digital Law"],
    image: "/images/blogs/domain-names-ip-rights-kenya.png",
    imageAlt: "Domain name and intellectual property protection in Kenya",
    excerpt:
      "A legal overview of domain squatting in Kenya and remedies for brand owners protecting domains, goodwill, and trademarks.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-01-20",
    dateModified: "2026-01-20",
    readTime: "5 min read",
    seoTitle:
      "Domain Squatting in Kenya: How the Law Protects Domain Names and Brand Owners in Kenya | Malika Okubasu & Company Advocates",
    seoDescription:
      "A legal overview of domain squatting in Kenya and remedies for brand owners protecting domains, goodwill, and trademarks.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Kenya's digitisation intersects with intellectual property in several ways. This makes domain names crucial tools which businesses can use to showcase their products and services to online consumers. As businesses migrate online, they may be faced with domain squatting, which creates a big problem in IP, especially interfering with trademark integrity.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Is a Domain?",
      },
      {
        type: "paragraph",
        text: "A domain name is a unique address that is used for the identification of an internet location. For example, .ke, .co.ke, .or.ke, and .ac.ke domains in Kenya. Having a domain name does not automatically mean that there are intellectual property rights. However, there may be legal protection where there is an overlap between business name, goodwill, and trademark.",
      },
      {
        type: "heading",
        level: 2,
        text: "Domain Squatting",
      },
      {
        type: "paragraph",
        text: "This is the act of registering, trafficking or using a domain name in bad faith, particularly when the registrant intends to sell the domain at an inflated price, the domain is used to divert traffic from a business or to exploit the reputation and goodwill of another, or when the registration is aimed at preventing the rightful business name or trademark owner from using the domain.",
      },
      {
        type: "paragraph",
        text: "Typo squatting is a form of domain squatting whereby the registrants register common misspellings of a brand. Examples can be Gogle.co.ke.",
      },
      {
        type: "paragraph",
        text: "Identity theft occurs when someone registers the domain of a famous person or business entity so as to extort money from them or sell the domain to the person at an exorbitant fee.",
      },
      {
        type: "paragraph",
        text: "Competition squatting is another type. This is characterised by registering a competitor's name or one almost similar to divert traffic.",
      },
      {
        type: "paragraph",
        text: "The key indicators of bad faith which need to be proven include:",
      },
      {
        type: "list",
        items: [
          "Using a domain to confuse consumers;",
          "Registering multiple well-known brand names;",
          "The nonexistence of legitimate business purposes; and",
          "Intention to sell the domain to the rightful owners to make a profit.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Legal Framework – Statutes and Institutions",
      },
      {
        type: "paragraph",
        text: "The regulation of domain names in Kenya and IP protection is not housed under one legislation or institution. Rather, there are multiple pieces of legislation and institutions which are relevant in domain protection.",
      },
      {
        type: "paragraph",
        text: "The Trade Marks Act (Cap 506)",
      },
      {
        type: "paragraph",
        text: "This is the main legislation protecting brand owners. Section 7 of the law provides exclusive rights to the trademark owner to use the mark in exclusion of others. In the digital world, exploiting a domain name that is identical or confusingly similar to a registered trademark will constitute infringement.",
      },
      {
        type: "paragraph",
        text: "Common law tort of passing off",
      },
      {
        type: "paragraph",
        text: "Protection of marks also relies on passing off. The domain name need not be exact, but it could be confusing to the registered mark. If a business passes off its products as those belonging to another, using a domain or using a confusingly similar domain, an action for passing off can be commenced by the aggrieved party.",
      },
      {
        type: "paragraph",
        text: "Kenya Information and Communication Act (KICA) 1998",
      },
      {
        type: "paragraph",
        text: "It creates the Communication Authority of Kenya (CA), which regulates and oversees the ICT sector in Kenya. Section 5 of the Act mandates CA to manage the .ke country code. The management has been delegated to the Kenya Network Information Centre (KeNIC).",
      },
      {
        type: "paragraph",
        text: "The Computer Misuse and Cybercrimes Act 12018",
      },
      {
        type: "paragraph",
        text: "This is an important statute which is often ignored. Section 28 specifically deals with cybersquatting. It defined the offence of cybersquatting as the acquisition of a domain name in bad faith with the intention to profit, destroy reputation and mislead.",
      },
      {
        type: "paragraph",
        text: "The criminal liability under the Act is a fine of KShs. 200,000 or imprisonment for up to 2 years, or both.",
      },
      {
        type: "heading",
        level: 2,
        text: "Remedies for Domain Squatting",
      },
      {
        type: "paragraph",
        text: "An aggrieved party can pursue the following actions against a domain squatter:",
      },
      {
        type: "list",
        items: [
          "File a dispute with KeNIC for takedown",
          "Trademark infringement action under the Trade Marks Act",
          "The common law tort of passing off;",
          "Unfair competition",
          "A court may grant an injunction, damages or account for profits (equitable remedy), an order for transfer or deregistration of a domain.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preventive Measures for Right Holders",
      },
      {
        type: "paragraph",
        text: "The best preventive measure is to register the domain early. Any related domain names should be secured to avoid registration of domains which may lead to confusion.",
      },
      {
        type: "paragraph",
        text: "Monitoring registration and acting immediately against infringing registration would also help a right holder protect business, goodwill and reputation.",
      },
      {
        type: "paragraph",
        text: "Trademark first – A domain name registration does not equate to IP rights. It is recommended to secure the trademark through the Kenya Industrial Property Institute (KIPI) to gain the legal protection and leverage that is needed for a takedown action.",
      },
      {
        type: "paragraph",
        text: "Businesses can employ tools which alert the business when a similar domain is registered. It is recommended to seek technical advice from tech gurus to understand which tools are best for monitoring domain registration.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Decisions",
      },
      {
        type: "paragraph",
        text: "Kenya Airways v. Caroline Kariemu Domain Name Dispute – c. 2000",
      },
      {
        type: "paragraph",
        text: "This is a key case whereby the Defendant registered the domain name ‘kenyaairways.com’ in 1999. Kenya Airways held the registered trademark for the name ‘Kenya Airways’ and moved for an order transferring the domain from the Defendant. The administrative panel found in favour of the national carrier. There was bad faith on the part of the Defendant because:",
      },
      {
        type: "list",
        items: [
          "The registrant was clearly aware of the airline’s existence.",
          "The domain did not resolve to an active website (passive holding).",
          "The registrant failed to demonstrate any legitimate interest in the name.",
        ],
      },
      {
        type: "paragraph",
        text: "The panel also found that ‘kenyaairways.com’ was identical or confusingly similar to the trademark right which Kenya Airways held. The domain was transferred to Kenya Airways.",
      },
      {
        type: "paragraph",
        text: "A similar finding can be seen from the UEFA case, UEFA v Funzi Furniture, where the administrative panel found that the respondent had no rights or legitimate interest in the domain name that it had registered (uefachampionsleague.com).",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "As Kenya continues its rapid digital transformation, domain names have evolved from mere technical identifiers into valuable commercial assets closely tied to brand identity, goodwill, and consumer trust. While domain registration in itself does not confer intellectual property rights, Kenyan law provides a multi-layered framework through which businesses can protect their brands against abusive and bad-faith domain registrations.",
      },
      {
        type: "paragraph",
        text: "The interaction between trademark law, common law principles such as passing off, sectoral regulation under KICA, criminal sanctions under the Computer Misuse and Cybercrimes Act, and administrative dispute resolution mechanisms through KeNIC demonstrates that domain squatting is not merely a technical inconvenience, but a legally actionable wrong. Kenyan and international decisions, including Kenya Airways v Caroline Kariemu and UEFA v Funzi Furniture, affirm that bad-faith registrations, whether through passive holding, diversion of traffic, or exploitation of goodwill, will not be protected by law.",
      },
      {
        type: "paragraph",
        text: "Ultimately, the protection of domain names in Kenya requires a proactive, informed, and strategic approach. Rights holders who act promptly and leverage the available legal and administrative remedies stand a far better chance of safeguarding their brands in the digital marketplace.",
      },
      {
        type: "heading",
        level: 2,
        text: "Authorities",
      },
      {
        type: "list",
        items: [
          "Union des Associations Europeennes de Football (UEFA) v Funzi Furniture [2000] WIPO Arbitration and Mediation Centre WIPO Domain Name Decision: D2000-0710",
          "Kenya Airways v. Caroline Kariemu Domain Name Dispute – c. 2000",
        ],
      },
    ],
  },
  {
    title:
      "Why Mercedes Is Looking to BMW for Engines, How Regulation Influences Automotive Industry Trends",
    slug: "mercedes-bmw-engines-automotive-regulation",
    date: "August 28, 2025",
    category: "Regulatory Compliance",
    practiceArea: "Policy and Legislative Drafting",
    practiceAreas: [
      "Policy and Legislative Drafting",
      "Corporate and Commercial Law",
    ],
    tags: ["Automotive", "Regulation", "Industry Trends", "Emissions"],
    image: "/images/blogs/automotive-industry-trends-mercedes-bmw.png",
    imageAlt: "Mercedes and BMW automotive regulation and engine collaboration",
    excerpt:
      "How emissions regulation, costs, and electrification pressure may influence Mercedes, BMW, and wider automotive powertrain strategy.",
    authorSlug: "oduor-khamati",
    datePublished: "2025-08-28",
    dateModified: "2025-08-28",
    readTime: "4 min read",
    seoTitle:
      "Why Mercedes Is Looking to BMW for Engines, How Regulation Influences Automotive Industry Trends | Malika Okubasu & Company Advocates",
    seoDescription:
      "How emissions regulation, costs, and electrification pressure may influence Mercedes, BMW, and wider automotive powertrain strategy.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "The regulation of the automotive engine sector",
      },
      {
        type: "paragraph",
        text: "The automotive industry is one of the most heavily regulated in the world. For a vehicle or engine to be approved, it must meet strict requirements related to the environment, emissions, and safety. Regulations cover everything from CO₂ emissions and particulate limits to durability standards such as mileage.",
      },
      {
        type: "paragraph",
        text: "These laws are becoming stricter with each update. For example, under Euro 7, cars must maintain a stoichiometric air-fuel mixture ratio (λ=1 or 14.7:1 for gasoline) throughout engine operation. The law also mandates three-way catalytic converters to reduce emissions like NOx and CO. Running rich increases CO emissions, while running lean creates more NOx particles.",
      },
      {
        type: "paragraph",
        text: "To comply, manufacturers must invest heavily in improving ignition systems, engine timing, and fuel-air management. Unlike earlier standards, which allowed flexibility in mixture settings under certain conditions, today’s rules require precise controls and advanced technologies to achieve compliance.",
      },
      {
        type: "paragraph",
        text: "These regulatory demands significantly raise development costs. Rising raw material prices and ongoing tariff disputes, particularly involving the United States and China, have further increased the financial burden. This has led many automakers to reconsider whether to develop engines in-house or outsource to specialised manufacturers.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sourcing engines from external partners",
      },
      {
        type: "paragraph",
        text: "To remain competitive, many carmakers have partnered with other manufacturers. Mercedes, for instance, has shared engines with Renault in its smaller models such as the A-Class, CLA, and GLA. Range Rover and Ineos have sourced engines from BMW, while Toyota’s Supra relies on BMW’s B58 powertrain.",
      },
      {
        type: "paragraph",
        text: "Mercedes has also partnered with Geely to produce four-cylinder engines in China. However, these engines are often viewed as less compatible with advanced hybrid technologies when compared to BMW’s offerings. In addition, geopolitical factors and the perception of “Made in China” may dilute Mercedes’ premium image if such engines become widespread.",
      },
      {
        type: "heading",
        level: 2,
        text: "BMW’s history of making engines for other manufacturers",
      },
      {
        type: "paragraph",
        text: "Against this backdrop, BMW stands out as a trusted source of high-performance and reliable engines. The company has a long history of supplying powertrains to other manufacturers. BMW engines have powered Formula 1 teams, the iconic McLaren F1 supercar with its naturally aspirated V12, and multiple generations of Range Rovers. More recently, BMW’s 4.4L twin-turbo V8 has been fitted in newer Land Rover models. Toyota, Morgan, and Ineos Grenadier also use BMW engines, demonstrating the company's versatility and reputation.",
      },
      {
        type: "heading",
        level: 2,
        text: "Some of the best modern engines are from BMW.",
      },
      {
        type: "paragraph",
        text: "BMW’s engineering strength lies in both performance and adaptability. Its modular engines, such as the four-cylinder B48 and six-cylinder B58, are designed to meet future regulatory standards while supporting modern technologies, including mild hybrid systems, plug-in hybrids, start-stop functions, and even range extenders.",
      },
      {
        type: "paragraph",
        text: "BMW’s B-series engines, which include the B38 3-cylinder, B48 4-cylinder, and B58 6-cylinder, are built on a modular architecture. This platform allows them to share common components and design principles across the different ranges. This family approach reduces development and production costs while ensuring consistent quality and performance. This means the B58 is essentially a B48 with two extra cylinders added, while the B48 itself can be seen as a four-cylinder expansion of the three-cylinder B38 (displacement ranging from 1.5L, 2.0L and 3.0L respectively. The advantage of this architecture is that components such as sensors, mounting points, transmission, and engine auxiliary parts like belts, AC pump, water pumps, serpentine belts, fans, and electronic and wiring can be shared with minimum changes across the range of engines. This saves costs and time in production. For example, BMW can use the same starter motor for its start-stop technology because of similar mounting points on the B48 and B54 engines, saving costs across its range of cars.",
      },
      {
        type: "paragraph",
        text: "The B38 provides efficient power for smaller BMW and MINI models, the B48 offers a balance of strength and economy for mid-sized cars and SUVs, and the legendary B58 delivers refined performance for larger sedans and sports cars – mainly used in M performance models like the M240i and M340i.",
      },
      {
        type: "paragraph",
        text: "Despite their differences in size and application, all these engines are designed to integrate with modern technologies such as range extending technology, mild hybrid systems and plug-in hybrids, a factor that makes these engines flexible enough to meet strict global environment and emissions regulations. This modular architecture enhances efficiency and adaptability across BMW’s lineup.",
      },
      {
        type: "paragraph",
        text: "These engines can be mounted either transversely or longitudinally, making them suitable for a wide range of vehicles such as front-wheel-drive hatchbacks, xDrive SUVs, and rear-wheel-drive sedans. This flexibility has positioned BMW as a preferred engine supplier for brands seeking reliable and regulation-ready powertrains.",
      },
      {
        type: "heading",
        level: 2,
        text: "Will Mercedes Use BMW Engines?",
      },
      {
        type: "paragraph",
        text: "This adaptability, performance, and flexibility of BMW engines are the key reasons Mercedes is rumoured to be exploring BMW powertrains for its future models. If talks progress, vehicles such as the CLA, GLA, GLB, C-Class, E-Class, and GLC could potentially adopt BMW’s four-cylinder B48 engine.",
      },
      {
        type: "paragraph",
        text: "Such a collaboration would be remarkable given the decades-long rivalry between the two German automakers. It would also signal a shift in how traditional competitors cooperate under the pressures of regulation, cost, and electrification. While speculation currently centres on four-cylinder engines, future collaborations could expand to other powertrains.",
      },
      {
        type: "paragraph",
        text: "Regardless of the outcome, the possibility of a Mercedes rolling out of the factory with a BMW engine highlights just how much the automotive landscape is changing. What was once unthinkable, with arch rivals sharing engineering resources, may soon become a practical solution in the face of global challenges.",
      },
      {
        type: "paragraph",
        text: "All in all, one key denominator permeates the intended collaboration with BMW: environmental and emission regulations. Mercedes has to ensure that its engines are cleaner, have a mild hybrid system which aligns with modern regulatory requirements.",
      },
    ],
  },
  {
    title:
      "What Is “Open Source”? What to Look Out for When Using Open-Source Code",
    slug: "open-source-code-legal-risks-kenya",
    date: "July 28, 2025",
    category: "Tech Law",
    practiceArea: "Media, Technology and Intellectual Property",
    practiceAreas: [
      "Media, Technology and Intellectual Property",
      "Corporate and Commercial Law",
      "Policy and Legislative Drafting",
    ],
    tags: ["Open Source", "Software", "Licensing", "Compliance"],
    image: "/images/blogs/open-source-blog.png",
    imageAlt: "Open-source software licensing and legal compliance",
    excerpt:
      "A practical guide to open-source licensing, key license types, and legal risks for Kenyan developers and businesses.",
    authorSlug: "oduor-khamati",
    datePublished: "2025-07-28",
    dateModified: "2025-07-28",
    readTime: "7 min read",
    seoTitle:
      "What Is “Open Source”? What to Look Out for When Using Open-Source Code | Malika Okubasu & Company Advocates",
    seoDescription:
      "A practical guide to open-source licensing, key license types, and legal risks for Kenyan developers and businesses.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Open source refers to a legal licensing model for software or firmware (and increasingly, other types of digital content) that allows users to freely access, use, modify, and share the source code or content—subject to specific conditions set out in an open-source license.",
      },
      {
        type: "paragraph",
        text: "Open sources do not mean the public domain. One must read the open-source licensing agreement carefully when opting to use open-source code. There may be conditions that, when ignored, may lead to legal consequences.",
      },
      {
        type: "heading",
        level: 2,
        text: "Definition and Practical Implications",
      },
      {
        type: "paragraph",
        text: "Open-source software is distributed under a license that has:",
      },
      {
        type: "list",
        items: [
          "Granted users the freedom to run the software for any purpose (or specific purposes outlined in the open-source licensing agreement)",
          "Allows access to the source code",
          "Permits modification and distribution of the software",
          "May require attribution or preservation of the same license in derivative works",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Types of Licenses",
      },
      {
        type: "paragraph",
        text: "There are different types of open licenses. The type of licenses varies depending on the conditions imposed by the creator. These conditions are defined by open-source licenses such as:",
      },
      {
        type: "paragraph",
        text: "MIT License",
      },
      {
        type: "paragraph",
        text: "These are very permissive. They allow a user to use, copy, modify, merge, publish, distribute, sublicense, and sell the software. The condition is that there should be inclusion of the original copyright notice and licensing text in a copy or a substantial portion of the software.",
      },
      {
        type: "paragraph",
        text: "This license is very flexible and does not require one to open-source the changes made to the software. The licensing allows the use of the code alongside proprietary software without risks. For instance, this allows integration of the code with proprietary software and code.",
      },
      {
        type: "paragraph",
        text: "For MIT, a user is not required to disclose any derivative works or changes to the open-sourced code. This option is suitable for users who may wish to combine open source with proprietary code or software.",
      },
      {
        type: "paragraph",
        text: "This license does not have any provisions relating to patents. Even though the terms of the copyright are permissive, the contributor can sue someone who used the code under MIT for patent infringement. This creates ambiguity in the manner in which MIT interacts with patents.",
      },
      {
        type: "paragraph",
        text: "GNU General Public License (GPL)",
      },
      {
        type: "paragraph",
        text: "This is a copyleft license created by the Free Software Foundation (FSF). A copyleft license is a type of open-source license that allows users to freely use, modify, and distribute a work. However, there is a requirement that any modified or extended versions of the work are also shared under the same license terms. When a user makes modifications, they are to publish their modifications or share the modifications based on the conditions.",
      },
      {
        type: "paragraph",
        text: "Unlike MIT and Apache 2.0, GPL mandates that any software that is derived from GPL-licensed code must also be licensed under the same model. Hence, if you use any GPL-licensed code (modify or combine it) with your code, you are mandated to release the new code that you create under GPL. This release should include the source code and make continued use, updates, and development possible. A user cannot sue someone else for using GPL-covered software if the user contributed to the code.",
      },
      {
        type: "paragraph",
        text: "The main principle is that you can use the code freely, but once you finish building on the code, you are required to share and give others the same freedom that you were given. Hence, derivative works must be disclosed, and it must be ensured that the software or code remains open and free for future users.",
      },
      {
        type: "paragraph",
        text: "The legal enforcement under the GPL is done under the license terms and copyright law. A creator of open-source code can enforce the terms by mandating a user to publish and share any code and software derived from the open-source code.",
      },
      {
        type: "paragraph",
        text: "This type of license is suitable for developers who wish to have their software remain open source for all in the future.",
      },
      {
        type: "paragraph",
        text: "This licensing is not ideal when a user wishes to combine the proprietary code with open-source code. The licensing can be better used in Kenya for university and research projects, government and technology development using public finance, social good, and civil technology programs.",
      },
      {
        type: "paragraph",
        text: "Apache License 2.0",
      },
      {
        type: "paragraph",
        text: "This is a license that is a permissive open-source license developed by the Apache Software Foundation (ASF), but it has stronger protection for patents and contributions. It allows users to use, modify, and distribute freely. It also allows use alongside proprietary software. The conditions that must be met by a licensee include",
      },
      {
        type: "list",
        items: [
          "Must include a notice of any changes made to the free code.",
          "Must preserve the original license and copyright.",
          "Includes an express grant of patent rights to contributors.",
        ],
      },
      {
        type: "paragraph",
        text: "The main legal point to factor in is that it offers strong protection against patent claims. Hence, this is more comprehensive when compared to MIT. This license is suitable for commercial projects where there is a keen concern to retain freedom to use open source with limited legal risks.",
      },
      {
        type: "paragraph",
        text: "Any users and contributors automatically allow other users the license to use any patents they hold that are related to the software. When a user sues someone over a patent infringement on software, they automatically lose the license to use the software.",
      },
      {
        type: "heading",
        level: 2,
        text: "Creative Commons (CC) Licenses (for Content, Not Software Code)",
      },
      {
        type: "paragraph",
        text: "This licensing works for content such as designs, articles, videos, and photos. The license varies depending on various factors. Based on the license, it allows use, sharing, remixing, and even commercial use. The different types are as follows:",
      },
      {
        type: "list",
        items: ["Attribution (CC BY)"],
      },
      {
        type: "paragraph",
        text: "Here, the licensing allows one to copy, distribute, remix, adapt, and build upon the work—even for commercial use. The only condition is that the user must give proper credit to the original creator of the work. This is mainly used in blogs, written content, videos, or educational materials that want to reach a wide audience. It is a flexible licensing framework as long as the user gives credit.",
      },
      {
        type: "list",
        items: ["Attribution-ShareAlike (CC BY-SA)"],
      },
      {
        type: "paragraph",
        text: "This licensing allows the same type of freedoms that are given to a user in a CC VY licensing. The user is thus able to copy, modify, distribute, and use commercially. Under this licensing model, a user must credit the creator, and any derivative work is shared under the license (ShareAlike). The best example is collaborative work like Wikipedia. It has the advantage of ensuring that all future versions and updates remain open and free.",
      },
      {
        type: "list",
        items: ["Attribution-Non-Commercial (CC BY-NC)"],
      },
      {
        type: "paragraph",
        text: "This is a license that only allows users to copy, modify, and share the work as long as the same is not done commercially. The user must credit the original creator under this license. Hence, the major disadvantage is that users cannot commercially exploit the work; hence, selling, ads, or monetisation of content is not allowed.",
      },
      {
        type: "paragraph",
        text: "Common examples include student projects, educational tools, and nonprofit materials.",
      },
      {
        type: "list",
        items: ["Public Domain Dedication (CC0)"],
      },
      {
        type: "paragraph",
        text: "Here, there is no restriction at all. A user can copy, modify, share, and use the work. Both personal and commercial exploitation of work is allowed without giving credit. This licensing model is only possible when the creator has waived all his or her rights, and hence it is the licensing that mirrors or is close to the public domain.",
      },
      {
        type: "heading",
        level: 2,
        text: "Legal Framework for Open-Source Licensing in Kenya",
      },
      {
        type: "paragraph",
        text: "The legal framework for open-source falls under the law of contract. Enforcement of open-source licenses would be regulated under the Law of Contract Act (Cap. 23, Laws of Kenya), which governs contracts, and the Copyright Act, 2001 (Cap. 130), which protects digital works and software.",
      },
      {
        type: "paragraph",
        text: "Developers in Kenya need to be cautious when using open source. A full understanding of the licensing obligations will ensure that the developers have a firm understanding of GPL restrictions and the requirement to attribute.",
      },
      {
        type: "paragraph",
        text: "There may also be the issue of mixing open-source code with proprietary code. Before doing this, it is important to ensure that there is legal clarity. For example, ascertaining that there is no requirement to publish and share derivative work is one of the things that a business can consider.",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Open-source licensing offers powerful opportunities for innovation, cost-efficiency, and collaboration, but only when used responsibly and with full legal awareness. Each license, from MIT to GPL to Apache 2.0, comes with specific obligations that affect how you can use, modify, distribute, or commercialise the code.",
      },
      {
        type: "paragraph",
        text: "In Kenya, developers, businesses, and institutions must treat open-source licenses as binding legal agreements. Misunderstanding or ignoring license terms, such as attribution requirements, share-alike conditions, or patent clauses, can expose users to legal risks, including breach of contract or copyright infringement.",
      },
      {
        type: "paragraph",
        text: "Before integrating open-source code into your project, especially in commercial or proprietary settings, carefully review the license terms. Choose licenses that align with your development goals, whether you want to keep your code open (like GPL), maintain flexibility (like MIT or Apache), or avoid legal uncertainties around patents.",
      },
      {
        type: "paragraph",
        text: "Ultimately, open-source code is a powerful tool, but like any legal asset, it must be used wisely. Legal due diligence, clear attribution, and awareness of license compatibility will ensure that your software projects remain both innovative and compliant.",
      },
    ],
  },
  {
    title: "Regulatory and Legal Framework for Electric Vehicles in Kenya",
    slug: "electric-vehicles-legal-framework-kenya",
    date: "July 24, 2025",
    category: "Regulatory Compliance",
    practiceArea: "Energy, Natural Resources and Climate Change",
    practiceAreas: [
      "Energy, Natural Resources and Climate Change",
      "Policy and Legislative Drafting",
      "Corporate and Commercial Law",
    ],
    tags: ["Electric Vehicles", "Clean Transport", "Energy", "Kenya"],
    image: "/images/blogs/electric-vehicle-regulation.png",
    imageAlt: "Electric vehicle regulation and clean transport in Kenya",
    excerpt:
      "A review of Kenya's legal and regulatory framework for electric vehicles, clean transport, energy policy, and standards.",
    authorSlug: "oduor-khamati",
    datePublished: "2025-07-24",
    dateModified: "2025-07-24",
    readTime: "6 min read",
    seoTitle:
      "Regulatory and Legal Framework for Electric Vehicles in Kenya | Malika Okubasu & Company Advocates",
    seoDescription:
      "A review of Kenya's legal and regulatory framework for electric vehicles, clean transport, energy policy, and standards.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Energy Act 2019",
      },
      {
        type: "paragraph",
        text: "The Energy Act 2019 is the primary law governing the energy sector in Kenya. It consolidates laws on renewable energy, electricity, and energy efficiency and creates a framework for EV-related policies and infrastructure. This law empowers the Energy and Petroleum Regulatory Authority (EPRA) to regulate the energy sector, including electricity supply for EV charging, electric subsectors, and emerging technologies like EV infrastructure. EPRA can license EV charging stations and set technical and safety standards. Since the charging infrastructure is regarded as an electricity distribution activity, it must be licensed under the Act.",
      },
      {
        type: "paragraph",
        text: "Section 204 of the Act allows for regulations on energy efficiency and conservation, which includes EVs. The law promotes the adoption of clean energy in transport by integrating the electric grid with smart technologies. In addition, this legislation aligns with other laws such as the Climate Change Act 2016, in terms of low carbon emission and development; Kenya's international obligations under the Paris Agreement; and the National Energy Policy 2018, which champions clean transport.",
      },
      {
        type: "heading",
        level: 2,
        text: "Climate Change Act 2016",
      },
      {
        type: "paragraph",
        text: "This legislation provides a framework for low-carbon development and clean transport solutions. It guides ministries and government agencies to adopt development strategies that reduce greenhouse gas emissions in sectors like transport. As such, the climate and low-emission mandates under the Act favour the adoption of EVs, especially in urban centres.",
      },
      {
        type: "paragraph",
        text: "The law supports the promotion of clean transportation and EVs as part of Kenya’s climate change mitigation strategies. This has led to a policy shift whereby the transport system in Kenya has begun adopting EVs and hybrids. Thus, EVs are championed as alternative mobility options, with many taxis, Ubers, Bolts, buses, and personal vehicle owners opting for them.",
      },
      {
        type: "paragraph",
        text: "The Act aligns various regulatory frameworks, such as the Energy Act 2019, the National Energy Policy 2018, and the draft EV policy, with other laws, including County Climate and Environmental Regulations.",
      },
      {
        type: "paragraph",
        text: "Practical outcomes under the law include climate finance support for green transport, including EVs, and donor or public sector programs that promote EVs, such as charging stations in rural and low-income areas.",
      },
      {
        type: "paragraph",
        text: "While the law does not expressly regulate EVs, it creates an enabling framework for EV adoption. By mandating climate-friendly transport solutions and development, it catalyses investment in clean energy and transport infrastructure.",
      },
      {
        type: "paragraph",
        text: "Section 13 of the Act enables the development of Five-Year Climate Change Action Plans (NCCAPs), which focus on low-carbon energy and transport, of which EVs are a major part. These action plans aim to maximise EV adoption, support clean and efficient public transport, for example, electric buses, and promote EV charging infrastructure.",
      },
      {
        type: "heading",
        level: 2,
        text: "National Energy Policy 2018",
      },
      {
        type: "paragraph",
        text: "This policy encourages the diversification of transport energy sources. Its goal is to reduce overreliance on petroleum products, such as petrol and diesel used in internal combustion engine vehicles. EVs are promoted as clean, sustainable, and efficient transport modes.",
      },
      {
        type: "paragraph",
        text: "The policy promotes clean, efficient, and sustainable mobility, focusing on electricity and other alternatives to fossil fuels. Modernisation of public transport through the use of electric buses and rail is a top priority.",
      },
      {
        type: "paragraph",
        text: "It advocates for EVs and associated charging infrastructure throughout the country and encourages the development of grid-ready policies and regulations to support EV charging.",
      },
      {
        type: "paragraph",
        text: "Given the low manufacturing capacity in the country, the policy supports incentives for local manufacturing and importation of EVs. Tax incentives for cleaner modes of transport encourage a shift to EVs and investment in charging infrastructure.",
      },
      {
        type: "paragraph",
        text: "The policy also calls for multi-stakeholder involvement, including NTSA, KPLC, and EPRA, in regulating the EV sector. It laid the foundation for the Energy Act 2019 and regulatory developments such as EPRA's electric mobility regulations.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sustainable Waste Management Act 2022",
      },
      {
        type: "paragraph",
        text: "A significant regulatory challenge in EV adoption involves waste management, particularly the disposal of EV batteries containing hazardous elements like lithium. The Act regulates the disposal of batteries and electronic waste, which is critical to EV battery life cycles. It mandates that importers, dealers, and manufacturers take back end-of-life batteries and ensure their safe disposal and recycling.",
      },
      {
        type: "paragraph",
        text: "An Extended Producer Responsibility (EPR) framework is imposed under the Act. EV importers, assemblers, and manufacturers must comply with mechanisms that ensure safe waste handling.",
      },
      {
        type: "paragraph",
        text: "The Act encourages a circular economy. Components should be repaired, reused, and recycled. Batteries should be reused where possible. The law implies that EV players must establish logistics systems to take back and dispose of batteries responsibly. It also promotes partnerships between EV importers and electronic waste recyclers.",
      },
      {
        type: "heading",
        level: 2,
        text: "Traffic Act Cap 403",
      },
      {
        type: "paragraph",
        text: "This law governs vehicle registration, licensing, road safety, standards, insurance, and driver conduct. However, it was originally designed for internal combustion engine vehicles and does not comprehensively address EV-specific requirements. The Act does not properly categorise EV types such as Battery Electric Vehicles (BEVs), Plug-in Hybrid Electric Vehicles (PHEVs), Hybrid Electric Vehicles (HEVs), Fuel Cell Electric Vehicles (FCEVs), and Light Electric Vehicles (LEVs).",
      },
      {
        type: "paragraph",
        text: "It is under review to incorporate EV classifications, licensing, and insurance standards. Reforms are needed for roadworthiness assessments, emissions standards, and EV-specific safety features, including fire protection and battery health.",
      },
      {
        type: "paragraph",
        text: "Without a specific regulatory framework, EV inspection and licensing remain inconsistent. NTSA must align inspection procedures with EV safety and environmental standards. A clear licensing framework will boost investor and consumer confidence in the EV sector.",
      },
      {
        type: "heading",
        level: 2,
        text: "Energy and Petroleum Regulatory Authority",
      },
      {
        type: "paragraph",
        text: "EPRA is the primary regulator for EV charging infrastructure. It licenses electric vehicle charging service providers and sets technical and safety standards. Licenses may be revoked for non-compliance with standards issued by KEBS or EPRA or due to safety issues such as fire hazards. EPRA also enforces compliance with environmental approvals from NEMA, zoning regulations from counties, and technical standards.",
      },
      {
        type: "paragraph",
        text: "It develops and enforces tariff structures for charging services and ensures grid integration and energy efficiency.",
      },
      {
        type: "paragraph",
        text: "In 2023, EPRA published the Draft Electric Mobility Charging Infrastructure Guidelines, now under public review. This draft proposes technical standards for connectors, chargers, and power ratings, reflecting EPRA's proactive approach to EV policy development.",
      },
      {
        type: "heading",
        level: 2,
        text: "Kenya Bureau of Standards",
      },
      {
        type: "paragraph",
        text: "KEBS develops and enforces standards for goods and services in Kenya, including electric mobility components. KEBS plays a key role in ensuring safety and technical requirements. It is working on a standardised framework for EV batteries, connectors, charging stations, vehicle performance and safety.",
      },
      {
        type: "paragraph",
        text: "In 2022, KEBS published KS 2956 2022, a national standard for electric motorcycles, especially relevant for the rapidly growing boda boda sector.",
      },
      {
        type: "paragraph",
        text: "Ongoing efforts aim to create standards for a broader range of EVs, including electric buses, cars, and three-wheelers. This standardisation requires collaboration between KEBS, NTSA, EPRA, and KRA.",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Kenya's electric vehicle (EV) sector is progressing, supported by a growing legal and policy framework that includes the Energy Act, Climate Change Act, and Sustainable Waste Management Act. Regulatory agencies like EPRA and KEBS have taken important early steps by introducing licensing procedures and some standardisation, particularly for electric motorcycles. However, the sector still faces major regulatory and technical gaps that could undermine its growth.",
      },
      {
        type: "paragraph",
        text: "One of the most pressing issues is the lack of standardisation in EV charging infrastructure. There are no clear national standards for charging connectors, plug compatibility, or technical specifications across different EV models. This leads to safety concerns, inefficiencies, and market fragmentation. While EPRA has published draft charging guidelines, KEBS has yet to develop comprehensive standards for chargers and components beyond motorcycles. Additionally, the absence of binding safety regulations for EV charging stations, such as fire protection, grid safety, and installation procedures, poses risks to users and deters investors. Kenya urgently needs a unified and enforceable standardisation framework, led by KEBS and coordinated with EPRA and other stakeholders. This will support safe and efficient EV expansion across the country.",
      },
    ],
  },
  {
    title:
      "Buying a Second-Hand Car in Kenya? You Must Understand What “As Is” Means",
    slug: "buying-second-hand-car-as-is-kenya",
    date: "June 17, 2025",
    category: "Consumer Protection",
    practiceArea: "Dispute Resolution",
    practiceAreas: ["Dispute Resolution", "Corporate and Commercial Law"],
    tags: [
      "Consumer Protection",
      "Second-Hand Vehicles",
      "Commercial Law",
      "Contracts",
    ],
    image: "/images/blogs/second-hand-car.png",
    imageAlt: "Second-hand car purchase and as-is legal terms in Kenya",
    excerpt:
      "What Kenyan buyers should understand before accepting “as is” terms in second-hand vehicle purchases.",
    authorSlug: "oduor-khamati",
    datePublished: "2025-06-17",
    dateModified: "2025-06-17",
    readTime: "8 min read",
    seoTitle:
      "Buying a Second-Hand Car in Kenya? You Must Understand What “As Is” Means | Malika Okubasu & Company Advocates",
    seoDescription:
      "What Kenyan buyers should understand before accepting “as is” terms in second-hand vehicle purchases.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Read before you buy a second-hand car!",
      },
      {
        type: "paragraph",
        text: "Nairobi, Kenya.",
      },
      {
        type: "paragraph",
        text: "Purchasing a second-hand car may be a daunting experience. You may buy a car only to find out that the car odometer has been tampered with and it has a check engine light with multiple faults that were not there a few minutes before the purchase. While a second-hand car purchase is often cost-effective and affordable, a buyer must know various terms which are used in the motor vehicle purchase contract. One phrase buried, which is often hidden in the agreement, is “as is”. This clause can limit your ability to seek a refund or repairs for a faulty motor vehicle.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Does “as Is” Mean?",
      },
      {
        type: "paragraph",
        text: "The phrase “as is” means the buyer accepts the item in its present condition, with all defects which are hidden or visible. Therefore, once the buyer executes the sale agreement containing this clause, he or she agrees not to hold the seller responsible if problems arise later.",
      },
      {
        type: "heading",
        level: 2,
        text: "Where “as Is” Comes from – the Common Law Position",
      },
      {
        type: "paragraph",
        text: "The term “as is” has its roots in English common law. The term is a reflection of the famous rule of caveat emptor, which means 'buyer beware'. Whereby, under this doctrine, the buyer is expected to inspect and examine the goods before purchase and bears the risk if they turn out to be defective. The buyer is also obligated to conduct due diligence before a purchase.",
      },
      {
        type: "paragraph",
        text: "The rule has the following effect:",
      },
      {
        type: "list",
        items: [
          "Limiting the liability of the seller for problems and defects which the buyer discovered after the contract, unless the seller intentionally concealed known defects. For example, interference with the ECU to erase check engine warnings or interference with the odometer will not be protected under the “as is” principle.",
          "No warranty – the sellers will always disclaim any warranties, implied or express, about fitness for purposes or condition of the vehicle.",
          "Buyer beware – the principle warns the buyer and hence puts the buyer on notice to inspect the vehicle thoroughly and satisfy themselves as to the conditions of the vehicle before purchase. When the agreement has an “as is” clause, make an effort to engage a certified mechanic or technician if a mechanical problem is not visible.",
        ],
      },
      {
        type: "paragraph",
        text: "A physical inspection may not uncover certain issues.",
      },
      {
        type: "list",
        items: [
          "There could be electrical issues such as deletion of the EGR (Exhaust Gas Recirculation),",
          "There may be interference with aspects such as the safety airbag, belt lights and car safety warning systems.",
          "More commonly, there may be meddling with the odometer whereby the distance the car has covered is tampered with.",
          "The safety and warning systems may have been tampered with.",
          "Some cars may have an electrical safety bypass system whereby key components of the car may be wired directly to the battery and bypass the car's fuse box, leading to battery drains overnight.",
        ],
      },
      {
        type: "paragraph",
        text: "These modifications are very hard to discover by mere physical inspection. Other modifications, like aftermarket seats and ECU remaps, may create safety issues with the car when not done properly. For example, some aftermarket seats will not work with the factory safety warning systems, such as seat belt warnings. Changing the steering wheel to an aftermarket one may leave the car without the steering airbags.",
      },
      {
        type: "paragraph",
        text: "Some modifications like exhaust downpipes, muffler delete, and removing the catalytic converter for increased power may make the car unlawful to drive on the road because of noise and pollution, respectively.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Courts Have Dealt with “as Is” Clause in Kenya",
      },
      {
        type: "paragraph",
        text: "The Sale of Goods Act (Cap. 31) Section 16 of this Act reflects the caveat emptor principle, stating that “There is no implied warranty or condition as to the quality or fitness for any particular purpose of goods supplied under a contract of sale.” Hence, unless the buyer tells the seller the specific purpose for which the goods are required or unless an express warranty is given, the seller owes no duty to guarantee quality.",
      },
      {
        type: "paragraph",
        text: "The Consumer Protection Act, 2012",
      },
      {
        type: "paragraph",
        text: "When buying from a licensed dealer, however, the Consumer Protection Act gives more protection. Section 55 outlines that “The consumer has a right to expect that the goods are of merchantable quality, fit for the purpose, and durable, unless the goods are sold under the condition that they are used, defective, or not fit for use.” This means that while “as is” limits liability, it cannot be used to cover up dishonesty or breach of duty.",
      },
      {
        type: "paragraph",
        text: "Over time, courts have recognised that this rule is harsh and have limited its reliance and application. Thus, exceptions developed where sellers could be held liable for:",
      },
      {
        type: "list",
        items: [
          "Fraud and Misrepresentation – while these clauses are enforceable, the courts will not protect a seller if there is intentional misrepresentation or fraud which causes concealment of a material fact or a known defect.",
          "Breach of an express warranty – courts will interpret the “as is” clause based on the other contractual terms, as well as the specific circumstances of the agreement and purchase.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Case Law",
      },
      {
        type: "paragraph",
        text: "Best Cars Limited t/a Impact Motors v Omoke & another (Civil Appeal E409 of 2023) [1] KEHC 474 (KLR) (Civ) (23 January 2025) (Judgment), being an appeal from the judgment of D.S. Aswani (Adjudicator) (RM) Small Claims Court delivered on 25th May, 2023 in Nairobi Milimani SCCC No. E7883 of 2022",
      },
      {
        type: "paragraph",
        text: "The trial magistrate awarded the plaintiffs Kshs. 400,000 for the breach of contract, mental anguish, unnecessary inconvenience, emotional distress & loss of legitimate expectation; special damages to the tune of Kshs. 400,000; a declaration that the defendant's misrepresentation of the faulty vehicle to be in perfect working condition and/or merchantable quality constitutes a breach of the agreement of sale between the parties; costs of the claim; and interest rates until payment in full.",
      },
      {
        type: "paragraph",
        text: "This decision was arrived at even though the seller (car dealer) had an agreement which had an “as is” clause.",
      },
      {
        type: "paragraph",
        text: "The grounds for the judgment and award were that the defendants had intentionally and malevolently sold the suit motor vehicle, misrepresenting it to be in perfect working condition and/or merchantable quality despite knowing this to be false.",
      },
      {
        type: "paragraph",
        text: "On appeal by the sellers, the magistrates' decision was upheld. Because the buyer had not carried out a proper road test, it was hard to detect any mechanical defects on the car. The fact that the mechanic inspected the car and conducted a miniature test drive at the point of sale was not enough to absolve the car dealer.",
      },
      {
        type: "paragraph",
        text: "In the words of the judge:",
      },
      {
        type: "paragraph",
        text: "Thus, a proper road test would have been warranted in the circumstance on accord of an implied condition that the vehicle was of merchantable quality or sold as it is whereas the limited examination of the vehicle as argued by the Appellant did not waive the implied condition of defects which could not be reasonably revealed upon the limited examination and or test drive. Consequently, the trial Court cannot be faulted at arriving at the decision it did whereas it is evident that the learned Magistrate considered the entirety of the provisions of Section 16(b) of the Sale of Goods Act.",
      },
      {
        type: "paragraph",
        text: "Car dealers and sellers should know that:",
      },
      {
        type: "list",
        items: [
          "Without allowing a proper test drive, a car seller will find it hard to rely on the 'as is' clause.",
          "An opportunity to test drive the car is required; allowing the buyer only a miniature test drive will not absolve them from liability.",
          "If there are conditions which prevent the buyer from testing the car on the highway, such as the car lacking insurance, the seller cannot state that the buyer had the opportunity to test drive the car.",
          "The seller should avoid limiting the inspection of a motor vehicle by a buyer. This could lead to liability in case of defects which are discovered later on, especially if those defects are hidden defects.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Practical Implications for Car Buyers",
      },
      {
        type: "paragraph",
        text: "When buying a car sold “as is”:",
      },
      {
        type: "list",
        items: [
          "You accept the vehicle with all faults.",
          "You carry the risk of a mechanical or legal problem.",
          "You cannot rely on trust—get everything in writing.",
          "Your options may be limited if something goes wrong, unless the seller lied.",
        ],
      },
      {
        type: "paragraph",
        text: "How to protect yourself as a car buyer",
      },
      {
        type: "paragraph",
        text: "Don’t rely on verbal promises. Ask for everything in writing.",
      },
      {
        type: "paragraph",
        text: "In writing, enquire about key details such as odometer reading, catalytic converters, previous accidents, aftermarket modifications (mods), etc.",
      },
      {
        type: "paragraph",
        text: "Conduct a full inspection—ideally with a qualified mechanic. An inspection by a qualified mechanic may not be enough. You may need to have a car electrician or technician access the ECU and look at the history of the car and all fault codes which have been cleared recently. Many cars like BMW, Merc and Audi store fault code history. You may have a good idea of the condition of the car when you see that it has so many fault codes which had been cleared previously.",
      },
      {
        type: "paragraph",
        text: "For example, a car with fault codes showing timing chain codes may point to a problem with timing chains. Knowledge of such a fault code will allow you to enquire whether the timing was set or whether the timing gears were changed and set.",
      },
      {
        type: "paragraph",
        text: "A car with a history of fault codes showing airbags may point to a recent accident or underlying problems with airbag sensors.",
      },
      {
        type: "paragraph",
        text: "Check for logbook ownership, accident history, and service records.",
      },
      {
        type: "paragraph",
        text: "When buying overseas imported cars, search the VIN or chassis number to verify that the car was not reported stolen. If the car is imported from countries like the UK, you can use platforms like Car Vertical, etc., to check the history of the car, including service, accidents, inspections, etc. Check the country of origin for the car and undertake appropriate searches.",
      },
      {
        type: "paragraph",
        text: "Ask if the seller is a licensed dealer. Dealers are bound by stricter laws.",
      },
      {
        type: "paragraph",
        text: "Consult a lawyer before signing anything, especially if terms like “as is” appear.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key takeaway",
      },
      {
        type: "paragraph",
        text: "The phrase “as is” may seem like harmless legal jargon, but it can block your ability to seek redress when the car you buy is faulty or has a problem. When a seller refuses your efforts to inspect the car, it is advisable to avoid the purchase. This applies to any machinery or equipment purchased second-hand without any warranty or guarantee.",
      },
      {
        type: "paragraph",
        text: "Whether you’re buying from a car yard or a private individual, always read the contract and seek legal advice. In addition, make sure to inspect the vehicle and test drive the car extensively before purchase. Some fault codes (such as a faulty or missing catalytic converter), when cleared, can take even a day to reappear. Taking the car for a long drive for a day and pushing the car to the limits is recommended before purchasing.",
      },
    ],
  },
  {
    title: "Copyrighting Software in Kenya",
    slug: "copyrighting-software-kenya",
    date: "May 29, 2025",
    category: "Tech Law",
    practiceArea: "Media, Technology and Intellectual Property",
    practiceAreas: [
      "Media, Technology and Intellectual Property",
      "Corporate and Commercial Law",
    ],
    tags: ["Software", "Copyright", "Intellectual Property", "Kenya"],
    image: "/images/blogs/copyrighting-software-kenya.png",
    imageAlt: "Software copyright protection in Kenya",
    excerpt:
      "How copyright protects software in Kenya, including originality, fixation, registration, patentability, and disclosure risks.",
    authorSlug: "oduor-khamati",
    datePublished: "2025-05-29",
    dateModified: "2025-05-29",
    readTime: "2 min read",
    seoTitle:
      "Copyrighting Software in Kenya | Malika Okubasu & Company Advocates",
    seoDescription:
      "How copyright protects software in Kenya, including originality, fixation, registration, patentability, and disclosure risks.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "In Kenya, copyright law protects and categorizes software as a form of creative expression. It covers object code, source code, and related documentation as original works of authorship. The law grants creators exclusive rights and full control over how they use and distribute their work.",
      },
      {
        type: "paragraph",
        text: "Software enjoys copyright protection under the Copyright Act, 2001, without requiring formal registration. However, registering software with the Kenya Copyright Board (KECOBO) provides additional legal advantages and evidentiary support.",
      },
      {
        type: "heading",
        level: 2,
        text: "Definition of a Computer Program",
      },
      {
        type: "paragraph",
        text: "Section 2 of the Copyright Act defines a computer program as:",
      },
      {
        type: "paragraph",
        text: "“A set of instructions expressed in words, codes, schemes, or in any other form, which can cause a computer to perform or achieve a particular task or result when incorporated into a medium readable by a computer.”",
      },
      {
        type: "heading",
        level: 2,
        text: "Requirements for Protection",
      },
      {
        type: "paragraph",
        text: "Under Section 22(3) of the Copyright Act, software qualifies for copyright protection if it meets the following conditions:",
      },
      {
        type: "paragraph",
        text: "Originality: The creator must apply sufficient effort to give the work an original character.",
      },
      {
        type: "paragraph",
        text: "Fixation: The creator must write down, record, or otherwise reduce the work to material form.",
      },
      {
        type: "heading",
        level: 2,
        text: "Originality",
      },
      {
        type: "paragraph",
        text: "The law protects the expression of software, not the underlying idea or algorithm. To qualify as original, the creator must develop the software independently, without copying from another source.",
      },
      {
        type: "heading",
        level: 2,
        text: "Fixation in Tangible Form",
      },
      {
        type: "paragraph",
        text: "To qualify for copyright, the software must exist in a tangible form—such as written code or digitally recorded content. Software that lacks originality or has not been fixed in a material form does not qualify for registration.",
      },
      {
        type: "paragraph",
        text: "In jurisdictions that adhere to the Berne Convention, including Kenya, formal registration is not mandatory but may offer legal benefits.",
      },
      {
        type: "heading",
        level: 2,
        text: "Public Domain Considerations",
      },
      {
        type: "paragraph",
        text: "If the creator does not copyright the software under the Act, the law treats it as part of the public domain. As a result, anyone may freely use, modify, or distribute the software without legal restrictions.",
      },
      {
        type: "heading",
        level: 2,
        text: "Can Software Be Patented?",
      },
      {
        type: "paragraph",
        text: "In several countries—including the United States, European Union, China, and Japan—software may be patentable under specific conditions. These jurisdictions often allow patents for computer-implemented inventions that demonstrate:",
      },
      {
        type: "paragraph",
        text: "Technical effect or contribution",
      },
      {
        type: "paragraph",
        text: "Novelty",
      },
      {
        type: "paragraph",
        text: "Inventive step",
      },
      {
        type: "paragraph",
        text: "Industrial applicability",
      },
      {
        type: "paragraph",
        text: "However, they do not recognize software “per se” as patentable subject matter.",
      },
      {
        type: "heading",
        level: 2,
        text: "Patentability in Kenya",
      },
      {
        type: "paragraph",
        text: "In Kenya, patenting standalone software remains challenging. However, creators may apply for a patent if the software functions in combination with other technologies and meets the following criteria:",
      },
      {
        type: "paragraph",
        text: "Novelty",
      },
      {
        type: "paragraph",
        text: "Inventive step",
      },
      {
        type: "paragraph",
        text: "Industrial applicability",
      },
      {
        type: "paragraph",
        text: "The global trend toward patenting software reflects its increasing significance in technological innovation.",
      },
      {
        type: "heading",
        level: 2,
        text: "Public Disclosure and Risk of Infringement",
      },
      {
        type: "paragraph",
        text: "Because copyright protection requires creators to write and fix the software code in a tangible form, this often leads to public disclosure. Once publicly available, the source code becomes vulnerable to:",
      },
      {
        type: "paragraph",
        text: "Piracy",
      },
      {
        type: "paragraph",
        text: "Reverse engineering",
      },
      {
        type: "paragraph",
        text: "Unauthorized copying",
      },
      {
        type: "paragraph",
        text: "Exploitation of vulnerabilities by hackers",
      },
      {
        type: "paragraph",
        text: "Creators should weigh the benefits of copyright protection against these potential risks and consider additional protective measures, such as licensing terms, non-disclosure agreements (NDAs), or encryption.",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Kenyan law offers robust copyright protection for software, recognizing it as a creative work. While registration is optional, it remains a strategic step for legal reinforcement. Creators should also explore other forms of protection, including trade secrets (where applicable) and licensing models, to effectively safeguard their intellectual property in today’s digital and globally connected environment.",
      },
    ],
  },
  {
    title: "Regulatory Sandboxes: What Are They?",
    slug: "regulatory-sandboxes-kenya",
    date: "April 4, 2025",
    category: "Regulatory Compliance",
    practiceArea: "Policy and Legislative Drafting",
    practiceAreas: [
      "Policy and Legislative Drafting",
      "Corporate and Commercial Law",
      "Media, Technology and Intellectual Property",
    ],
    tags: ["Regulatory Sandboxes", "FinTech", "Innovation", "Compliance"],
    image: "/images/blogs/regulatory-sandboxes.png",
    imageAlt: "Regulatory sandboxes and technology innovation in Kenya",
    excerpt:
      "How regulatory sandboxes support innovation while allowing Kenyan regulators to manage compliance risks.",
    authorSlug: "oduor-khamati",
    datePublished: "2025-04-04",
    dateModified: "2025-04-04",
    readTime: "3 min read",
    seoTitle:
      "Regulatory Sandboxes: What Are They? | Malika Okubasu & Company Advocates",
    seoDescription:
      "How regulatory sandboxes support innovation while allowing Kenyan regulators to manage compliance risks.",
    content: [
      {
        type: "paragraph",
        text: "The financial crisis in 2008 led to the collapse of financial institutions worldwide. Consequently, the financial sector came under extreme regulatory pressure, leading to increased compliance requirements imposed by regulators. At the same time, there were emerging technologies coming to the market. These technologies were potentially beneficial but could pose unknown regulatory risks. Stakeholders and regulators had to internalize the risks. To nurture innovative services and products and at the same time ensure financial integrity and compliance, financial regulators employed different techniques to encourage new technologies to develop.",
      },
      {
        type: "paragraph",
        text: "A regulatory sandbox is a modern tool used by regulators to ensure the development of innovations in a controlled manner. It allows a regulator to integrate and properly regulate innovation before making permanent regulatory reforms or changes. Regulatory sandboxes act as incubators for authorized (and supervised) innovation. Stakeholders, firms, and regulators can come up with a better way to balance between the implementation of innovation vis-à-vis regulatory compliance. They can also be used as tools to gather data for making regulatory adjustments to meet emerging technological innovations.",
      },
      {
        type: "paragraph",
        text: "Innovation is cultivated using regulatory sandboxes. Hence, these sandboxes can be used alongside other methods like innovation hubs. Innovation hubs are points of contact that are open to participants who intend to market. These hubs offer ways of discussing issues that pertain to regulation and how regulation interacts with technological innovation.",
      },
      {
        type: "paragraph",
        text: "Sandboxes are more specialized as compared to innovative hubs. Sandboxes are special because they allow firms to test their innovative products and services with real consumers. They are used by businesses that intend to bring innovative services or products to the market. The terms of reference and conditions for the use of regulatory sandboxes are defined by a regulator.",
      },
      {
        type: "paragraph",
        text: "After there is approval for testing, the testing conditions are agreed upon between the regulator and the business. There is always a time set for testing, and such may be extended if need be. After the testing, the regulator can approve the technology, reject it, or recommend further improvements.",
      },
      {
        type: "paragraph",
        text: "Sandboxes are designed to support innovation, encourage market development, and enhance growth and completion in the financial sector. It is also seen as a method in which government and business can cooperate in ensuring that technologies are beneficial to the market and comply with regulations. There is a key advantage of regulatory certainty, which is achieved using sandboxes. Also, the stakeholders can learn the challenges of bringing to market any new product or innovation.",
      },
      {
        type: "paragraph",
        text: "The UK FCA was one of the top pioneers of regulatory sandboxes. According to the UK FCA statement, because of the use of sandboxes, the time to market any innovation and products will be shortened by more than 30 percent. FinTech access to finance was expected to increase by 15 percent using regulatory sandboxes by the FCA. In comparison to innovation hubs, sandboxes are an expensive option for many regulators. They require implementation, which is expensive because of the associated legislative changes. Even though innovation hubs are less expensive, sandboxes offer a more interactive approach, as the innovative solution can be tested within the market itself. The uptake of sandboxes increased after their introduction in the UK in 2015, with many other countries following the model.",
      },
      {
        type: "paragraph",
        text: "Because of the above advantages of regulatory sandboxes, they have been adopted by many countries. In Kenya, both the CMA and the Communication Authority ran regulatory sandbox frameworks.",
      },
      {
        type: "paragraph",
        text: "The CA’s Framework for Emerging Technologies Regulatory Sandbox 2023 is a policy that outlines the services and products that can be tested under the supervision of the CA. These include services like innovative telecommunication solutions, IoT devices, cybersecurity tools, e-health solutions, drone technologies, e-learning platforms, new broadcasting tech, AI-driven services, digital identity solutions, smart city solutions, etc.",
      },
      {
        type: "paragraph",
        text: "The CMA’s Regulatory Sandbox Policy Guide Note governs sandboxes within the capital markets. It provides for eligibility, safeguards, application, and testing requirements for businesses that seek to live test their solutions, services, and innovative products within the Authority’s sandbox.",
      },
      {
        type: "paragraph",
        text: "The policy by CMA is aimed at dealing with risks posed by the financial sector. The sandbox requires compliance with safeguards, customer protection, complaint procedures, and regulatory risk management.",
      },
      {
        type: "paragraph",
        text: "To read the CMA’s Regulatory Sandbox Policy Guide Note, click this link:",
      },
      {
        type: "paragraph",
        text: "https://cma.or.ke/wp-content/uploads/2023/03/Regulatory-Sandbox-Policy-Guidance-Note-March-2019-Final.pdf",
      },
      {
        type: "paragraph",
        text: "To read the CA’s Framework for Emerging Technologies Regulatory Sandbox 2023, click this link: https://repository.ca.go.ke/server/api/core/bitstreams/b4bc3151-ce12-49df-940d-5fb5ec0c0bce/content",
      },
    ],
  },
  {
    title: "Disinclination of Enforcement of International Arrest Warrants",
    slug: "international-arrest-warrants-enforcement",
    date: "October 1, 2024",
    category: "Dispute Resolution",
    practiceArea: "Regional Integration and Cross-Border Advisory",
    practiceAreas: [
      "Regional Integration and Cross-Border Advisory",
      "Dispute Resolution",
    ],
    tags: [
      "International Law",
      "ICC",
      "Arrest Warrants",
      "Public International Law",
    ],
    image: "/images/blogs/international-arrest-warrants.png",
    imageAlt: "International arrest warrants and cross-border enforcement",
    excerpt:
      "Why enforcement of international arrest warrants remains difficult and how state sovereignty affects ICC cooperation.",
    authorSlug: "oduor-khamati",
    datePublished: "2024-10-01",
    dateModified: "2024-10-01",
    readTime: "18 min read",
    seoTitle:
      "Disinclination of Enforcement of International Arrest Warrants | Malika Okubasu & Company Advocates",
    seoDescription:
      "Why enforcement of international arrest warrants remains difficult and how state sovereignty affects ICC cooperation.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "The enforcement and policing of international arrest warrants present enduring challenges for legal practitioners, constituting a complex element of public international law. The intricacies involved arise from allegations of severe criminal conduct, including genocide and crimes against humanity, as delineated in international instruments such as the Rome Statute. The International Criminal Court (ICC) has issued numerous international warrants of arrest, and analyzing their enforcement is critical for understanding the efficacy of such warrants and the reasons member states often fail to execute them fully.",
      },
      {
        type: "paragraph",
        text: "A comprehensive examination of the obstacles to the implementation of these warrants is essential for addressing the ICC's mandate to prosecute genocide and other grave offences. It is important to note that international warrants extend beyond the ICC, encompassing those issued by other international judicial bodies, including the European Union, as well as those arising from collaborative frameworks addressing narcotics, human rights violations, and other serious crimes.",
      },
      {
        type: "paragraph",
        text: "Since its inception in July 2002, the ICC has encountered significant challenges regarding warrant enforcement. Efforts to address these challenges have often proven inadequate, hindered by political complexities and a lack of robust mechanisms enabling states to enforce such warrants within the international legal framework. This has resulted in a noticeable enforcement gap, undermining the ICC’s objective to eradicate international crimes. This analysis will focus on the ineffectiveness of warrant enforcement by states, specifically examining the reluctance or inability of states to act upon these warrants, which may stem from various political or contextual factors.",
      },
      {
        type: "heading",
        level: 2,
        text: "Treaty problem",
      },
      {
        type: "paragraph",
        text: "International treaties are fundamentally based on the principle of state sovereignty. This principle, as enshrined in the United Nations Charter, prohibits any state from interfering with the sovereignty, political independence, or territorial integrity of another state through the use of force or threats. Consequently, it is solely within the purview of a sovereign state to consent to be bound by international treaties. Thus, a state that has not agreed to a treaty is not legally bound by its provisions. The Vienna Convention on the Law of Treaties delineates the complexities involved in treaty-making and the implications of treaty signature. In the context of the International Criminal Court (ICC), states that have not ratified the Rome Statute or any other relevant treaties are not subject to the obligations arising from those treaties. Accordingly, warrants issued by the ICC may be disregarded and remain unenforced by such non-ratifying states[1].",
      },
      {
        type: "paragraph",
        text: "Jurisdiction presents a significant challenge concerning international arrest warrants. For example, with respect to crimes of aggression, Article 15 of the Rome Statute confers jurisdiction upon the court over such offences. However, jurisdictional issues can complicate the enforcement of warrants. Article 15(4) stipulates that the court may exercise jurisdiction over crimes of aggression under Article 12, provided that the aggression in question is perpetrated by a state party unless that state has previously filed a declaration with the Registrar indicating its non-acceptance of such jurisdiction. This provision poses a potential obstacle, as a state may decline to comply with any arrest warrants related to acts it has declared to the Registrar. Consequently, the treaty itself introduces barriers that may lead states to be unwilling to enforce warrants issued by the ICC, despite their legal capacity to do so. [2]",
      },
      {
        type: "paragraph",
        text: "In such circumstances, a state party to the Rome Statute has the option to declare its non-acceptance of the court’s jurisdiction over the crime of aggression. This provision in the treaty may significantly limit the court's jurisdiction and pose challenges to the enforcement of warrants issued by the court. The difficulties arise primarily from the ambiguity surrounding the definition of aggression and the complexities inherent in interpreting such a term, particularly when the alleged crimes involve prominent political leaders indicated by the court. As a result, the likelihood of prosecution diminishes; should a warrant be issued, its enforceability may be compromised, creating a chilling effect that extends to other warrants within the court's jurisdiction. Specifically, jurisdiction will only be established in cases where crimes of aggression are committed between state parties. Furthermore, if one of the parties involved in a dispute submits a declaration regarding jurisdiction, the ICC may be precluded from exercising its jurisdiction, rendering any associated warrants unenforceable.[3] This situation contributes to a reluctance among states to execute arrest warrants, as there may be a perception of differential treatment, and no state wishes to have its leaders or citizens implicated in proceedings before the ICC[4].",
      },
      {
        type: "paragraph",
        text: "Additionally, given that not all nations are parties to the Rome Statute, the enforcement of warrants is limited to a smaller number of states, thereby hindering the court's ability to effectively pursue serious suspects, such as Omar al-Bashir. It is conclusive that many states can effect international arrest but they chose a path where they will not be required to by either not ratifying the treaty or ratifying a treaty with declarations which make enforcement and hence warrants ineffective[5].",
      },
      {
        type: "paragraph",
        text: "Lack of cooperation between state parties and courts",
      },
      {
        type: "paragraph",
        text: "The enforcement of international warrants is impeded by a lack of cooperation arising from the disinclination of nation-states. This issue is exemplified by comments made by ICTY Judge McDonald, who noted that arrest warrants issued by the courts are frequently disregarded[6]. International courts, including the ICC, rely heavily on the cooperation of states; without such cooperation and the enforcement of arrest warrants, these warrants are rendered ineffective. In this context, the ICTY issued over seventy-seven indictments, yet only ten suspects were ultimately arrested[7].",
      },
      {
        type: "paragraph",
        text: 'Despite the ICC\'s demonstrated successes and effectiveness over the past decades, its progress has often resembled a journey characterized by "two steps forward and three steps back." This phenomenon can largely be attributed to insufficient cooperation from states that are signatories to the Rome Statute[8]. While some states do cooperate with the ICC, this is not universally true across all cases. The lack of cooperation has proven to be a significant impediment to the ICC, particularly when warrants are issued but suspects have not been arrested. Although the treaty imposes an obligation for cooperation, many member states do not approach this obligation with the requisite seriousness[9]. The lack of cooperation frequently stems from various political interests rather than an inability or lack of capacity. While financial constraints are a concern, they often represent only a secondary issue that could be addressed through assistance from the United Nations in funding expensive investigations and prosecutions. This suggests that states requiring support in executing arrests and extraditing suspects can often receive help from international agencies, including the UN [10].',
      },
      {
        type: "paragraph",
        text: "Under the Rome Statute, the obligation to cooperate is explicitly articulated in Article 86, which states that parties shall, in accordance with the provisions of the Statute, fully cooperate with the court in its investigation and prosecution of crimes within its jurisdiction. However, the mandatory nature of this obligation has proven to be less effective in practice when international warrants are issued. The court's dependence on the cooperation of both state parties and non-state parties often yields limited results due to various factors, including political considerations, diplomatic relations, and geopolitical dynamics. For instance, non-state parties may be requested by the Security Council to execute warrants or assist in investigations; however, such requests may go unfulfilled in cases where states maintain political connections with the country or political leader subject to the issued arrest warrants[8].",
      },
      {
        type: "paragraph",
        text: "The lack of cooperation described above constitutes a deliberate effort by the state to avoid enforcing international warrants, rather than stemming from a lack of capacity. It can be argued that if a democratic state possesses a functioning judiciary, executive, legislature, and operational law enforcement agencies, then claims of the state’s inability to enforce international warrants are untenable. While inherent challenges exist in least developed and developing countries—such as corruption and insufficient funding for operations requiring cross-border cooperation and intelligence—these challenges do not excuse the inability to fulfil international obligations. ICC Prosecutor Mrs. Fatou Bensouda has acknowledged the necessity of establishing credible national judicial institutions, which significantly affect the effectiveness of warrants and the enforcement of ICC mandates. However, it is crucial to recognize that without the political will to enforce international obligations under the treaty, such efforts may ultimately prove futile[9].",
      },
      {
        type: "paragraph",
        text: "Geopolitical factors",
      },
      {
        type: "paragraph",
        text: "Geopolitical factors significantly influence the effectiveness of the enforcement of international warrants. Due to these factors, many states that are parties to the Rome Statute exhibit reluctance to enforce warrants issued by the ICC. The prosecution actions of the ICC have sparked contentious debates between the African Union (AU) and the United Nations (UN). Critics argue that the ICC functions as a tool of imperialism, alleging that it imposes its interpretation of justice at the expense of exacerbating conflict and neglecting the interests of victims. In response to these concerns, the AU has adopted a resolution prohibiting its member states from arresting Omar al-Bashir, thereby further complicating the enforcement of ICC warrants[10].",
      },
      {
        type: "paragraph",
        text: "This situation has resulted in a significant lack of cooperation, as member states are both unwilling and dissuaded from collaborating with the ICC and the AU in prosecuting international crimes or executing warrants perceived as targeting African nations by the Global North. Consequently, even when countries possess the capacity to effectuate an arrest, they are often less inclined to enforce such warrants due to geopolitical factors that are unrelated to the merits of the warrants or the crimes in question. International political dynamics have fostered the perception that Sudan is a victim of Western hypocrisy and hegemony, leading numerous countries, particularly in Africa, to oppose the issuance of warrants. These sentiments are echoed in Arab nations, many of which reject the proceedings concerning the Darfur situation. The Arab League has issued a statement opposing the warrants against Omar al-Bashir, signalling that these nations will refrain from arresting him if he is within their jurisdiction. Notably, al-Bashir has been permitted to make several visits to Arab countries without facing arrest, further undermining the authority of the ICC’s mandates[11].",
      },
      {
        type: "paragraph",
        text: "The African Union (AU) has publicly advised its member states to disregard and refuse cooperation with the ICC in matters concerning President Omar al-Bashir of Sudan. This stance has resulted in warrants remaining unenforced, thereby adversely affecting the operations of the ICC. Such sentiments are likely to extend to warrants issued for other offences in various jurisdictions, which may not necessarily pertain to international crimes against humanity. The consequence is a marked lack of cooperation between international agencies and member states regarding the arrest and extradition of suspects[12].",
      },
      {
        type: "paragraph",
        text: "This lack of cooperation also impacts warrants issued for serious offenders who may seek refuge in countries that have extradition treaties with the requesting nations. Arrests are primarily contingent upon diplomatic relations, as the requesting state must submit a formal diplomatic request to the country harbouring the suspect. The success of such requests often depends on the strength of diplomatic ties and longstanding international cooperation between the involved states. Consequently, allied nations such as the United States and the United Kingdom are more likely to execute arrest and extradition requests, whereas requests involving nations with strained relations, such as China or Russia, may be met with reluctance. As a result, such warrants may prove ineffective. These geopolitical considerations are indicative of a broader unwillingness among states to enforce international warrants, rather than a lack of capacity. This phenomenon has been extensively documented by various civil rights organizations, non-governmental organizations (NGOs), and media outlets[13].",
      },
      {
        type: "paragraph",
        text: "President Al Bashir",
      },
      {
        type: "paragraph",
        text: "The challenges associated with the enforcement of international warrants by the ICC are exemplified in the case of President Omar al-Bashir. This case illustrates that the difficulties in enforcing international warrants arise not from an inability to do so, but rather from internal factors within member states, including political and geopolitical considerations. These factors contribute to a disinclination to cooperate, creating a significant barrier to effective enforcement[14].",
      },
      {
        type: "paragraph",
        text: "In 2009 and 2012, the ICC issued warrants of arrest against President Bashir. Notwithstanding South Africa's status as a party to the Rome Statute, the country refused to execute the arrest warrant and permitted President Bashir to depart the country, in defiance of a High Court ruling which stated that:",
      },
      {
        type: "paragraph",
        text: "the [South African authorities] are forthwith compelled to take all reasonable steps to prepare to arrest President Bashir … and detain him, pending a formal request for his surrender from the International Criminal Court[15].",
      },
      {
        type: "paragraph",
        text: "The failure to arrest President Bashir is viewed as an action facilitated by the executive branch and authorities who were complicit and aware of the explicit order issued by the South African Court[16]. This situation reveals a clear disconnect between judicial bodies that issue arrest warrants for individuals accused of crimes against humanity and war crimes, and the lack of political will among South African authorities to fulfil these obligations. The authorities possessed the capacity and capability to arrest and detain Bashir but consciously chose not to do so[17].",
      },
      {
        type: "paragraph",
        text: "A similar situation occurred in Kenya, further illustrating that the ineffective enforcement of ICC warrants stems more from political will than from a lack of capability. In the case of Bashir, he was invited to attend the promulgation of the Kenyan Constitution on 27 August 2010, as well as to participate in a meeting of the Intergovernmental Authority on Development (IGAD) in October 2010. In response to outcry from Western nations, the meeting was subsequently relocated to Addis Ababa[18].",
      },
      {
        type: "paragraph",
        text: "Furthermore, Malawi hosted Bashir in October 2011 at the invitation of President Bingu wa Mutharika. However, upon assuming office, President Joyce Banda opted to disinvite Bashir to avoid potential conflicts with Western donors due to the outstanding ICC warrant. The decision drew criticism from the AU, resulting in the relocation of the meeting to Addis Ababa[19].",
      },
      {
        type: "paragraph",
        text: "Similarly, to South Africa, the Kenyan High Court issued a ruling regarding President Bashir, affirming the warrants for his arrest and stipulating that he should be apprehended should he visit the country. The court directed the Attorney General to ensure that the Internal Security Minister was responsible for enforcing this order and for surrendering Bashir if he were to be arrested[20]. In response, the Sudanese government threatened to expel the Kenyan ambassador to Sudan, prompting the Kenyan government to dispatch an envoy to assure the Sudanese authorities that the ruling would be appealed. Additionally, the Kenyan Foreign Minister expressed concerns that the High Court's ruling could jeopardize the amicable and fraternal relations between the two nations[21]. President Bashir has also travelled to other countries, including Palestine and Jakarta, Indonesia, to attend meetings of the Organisation of Islamic Cooperation, where he was not arrested. Notably, these countries, while not parties to the Rome Statute, are members of the United Nations.",
      },
      {
        type: "paragraph",
        text: "The aforementioned case exemplifies a scenario in which a country possesses the necessary institutional framework to enforce an international warrant, yet elects not to do so for various reasons. In the instances of South Africa, Malawi, and Kenya, these nations had the opportunity to enforce ICC warrants but failed to do so due to a lack of political will. Even in situations where the judiciary has mandated the enforcement of such warrants, enforcement may be impeded by a lack of inclination stemming from policy considerations, geopolitical factors, and foreign relations[22].",
      },
      {
        type: "paragraph",
        text: "Kenya, as a significant player in Eastern Africa, wields considerable influence in the region. The country has established deep political and economic ties with Sudan, evidenced by the presence of many Sudanese individuals, including politicians, residing in Kenya. Furthermore, Kenyan businesses, including banks and corporations, have made substantial investments in Sudan. The potential for strained relations following the arrest of a sitting president could explain Kenya's conscious decision to disregard the international warrants. This context elucidates the interplay between domestic interests and international obligations, ultimately resulting in the violation of the warrants issued by the ICC.",
      },
      {
        type: "paragraph",
        text: "Russia President Putin",
      },
      {
        type: "paragraph",
        text: "The ICC has issued warrants for the arrest of Vladimir Putin, President of Russia, alleging war crimes, unlawful deportation, and violations of human rights in the context of the Russo-Ukrainian War. According to Article 124 of the Rome Statute, member states are obligated to arrest, detain, and transfer individuals who enter their territory under such warrants. Notwithstanding this obligation, President Putin was able to visit Mongolia after the issuance of the warrants against him. In 2023, Putin’s planned visit to South Africa was cancelled following a ruling from the South African High Court. This cancellation suggested that the warrants had, in some capacity, constrained his ability to travel internationally. However, this assumption was called into question when he successfully travelled to Mongolia, an ICC signatory, after the warrants had been issued. The failure to arrest Putin can be attributed to Mongolia's historically close ties with Russia, as well as its reliance on Russia for affordable electricity and fossil fuels[23].",
      },
      {
        type: "paragraph",
        text: "Countries within the BRICS alliance, such as Brazil, are also unlikely to execute an arrest warrant against President Putin. This reluctance arises from the close diplomatic and economic relationships among BRICS members and the complexities of overlapping interests for those signatories of the Rome Statute. Similar to Mongolia, it is improbable that any BRICS nation would take action against the Russian President, as such a move could be unprecedented and risk straining relations with Russia. Furthermore, geopolitical considerations and economic interests shape the perspectives of various countries, with many viewing the conflict in Ukraine as a by-product of NATO's expansionist agenda and provocation of Russia. It has been argued by many scholars that the Ukraine conflict was largely engineered by NATO which sought to expand its read to Russian borders, making NATO missiles within striking distance from Moscow[24].",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "The enforcement of any international warrant, whether issued by the ICC or another body, is significantly contingent upon the political will of the state that receives the request or is bound by the relevant statute. This observation underscores the conclusion that the effectiveness of such enforcement is predominantly influenced by the policies of the governing administration and the identities of the individuals indicted.",
      },
      {
        type: "paragraph",
        text: "In this context, the inability to enforce warrants is not a primary obstacle; rather, the disinclination stems from political considerations, geopolitical factors, and foreign policy dynamics within the state expected to effectuate the arrest and extradition. Frequently, legal frameworks play a less significant role in the enforcement process; instead, the willingness of the executive branch to apprehend, for instance, a sitting president or a high-ranking politician accused of violating international statutes is paramount.",
      },
      {
        type: "paragraph",
        text: "In some instances, the reluctance to enforce warrants may not be politically motivated but rather result from hostility between nations and a lack of alignment in their interests. This disconnect often leads to disparate treatment of international arrest warrants. For example, countries that maintain aligned foreign policies on critical issues such as terrorism, drug trafficking, and human rights are more likely to collaborate effectively in the enforcement of international warrants.",
      },
      {
        type: "paragraph",
        text: "[1] Gwen P Barnes, ‘The International Criminal Court’s Ineffective Enforcement Mechanisms: The Indictment of President Omar Al Bashir’ (2011) 34 Fordham International Law Review 1584",
      },
      {
        type: "paragraph",
        text: "[2] Keven J. Heller, ‘Opinio Juris, The Sadly Neutered Crime of Aggression’ (Opinio Juris 13 June 2010) <http://www.opiniojuris.org/2010/06/13/the-sadly-neutered-crime-of-aggression/> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[3] Kreß Claus and Leonie Von Holtzendorff, ‘The Kampala compromise on the crime of aggression’ (2015) 8(5) Journal of International Criminal Justice 1179",
      },
      {
        type: "paragraph",
        text: "[4] Rome Statute – Part 9. International Cooperation and Judicial Assistance Act (Art. 86),",
      },
      {
        type: "paragraph",
        text: "[5] Ssenyonjo Manisuli, ‘II. The International Criminal Court arrest warrant decision for President Al Bashir of Sudan’ (2010) 59(1) International & Comparative Law Quarterly 205, 215.",
      },
      {
        type: "paragraph",
        text: "[6] Young Sok Kim, ‘The Cooperation of State to Establish an Effective Permanent International Criminal Court’ (1997) 6 J. INT’L. L. & PRAC. 157, 160.",
      },
      {
        type: "paragraph",
        text: "[7] Id, at 158",
      },
      {
        type: "paragraph",
        text: "[25] Judge Sang-Hyun Song (The 2nd President of the ICC), Past Achievements and Future Challenges of the ICC: keynote speech for the 20th Anniversary of the Rome Statute’ (International Criminal Court - The Hague, 17 July 2018) <https://www.icc-cpi.int/sites/default/files/itemsDocuments/20a-ceremony/20180717-sang-speech.pdf> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[26] Phooko Moses Retselisitsoe, ‘How effective the International Criminal Court has been: evaluating the work and progress of the International Criminal Court’ (2011) 1 Notre Dame J. Int'l Comp. & Hum. Rts. L. 182.",
      },
      {
        type: "paragraph",
        text: "[27] Judge Sang-Hyun Song, supra note 7",
      },
      {
        type: "paragraph",
        text: "[8] Dapo Akande, ‘The Effect of Security Council Resolutions and Domestic Proceedings on State Obligations to Cooperate with the ICC’ (2012) 10 Journal of International Criminal Justice 299, 301.",
      },
      {
        type: "paragraph",
        text: "[9] Mrs. Fatou Bensouda Prosecutor of the International Criminal, ‘Lecture: The International Criminal Court – Current Challenges and Future Prospects’ (International Criminal Court 16 December 2013) <https://www.dfa.ie/media/dfa/alldfawebsitemedia/ourrolesandpolicies/ourwork/iccprosecutorvisitsireland/Lecture-delivered-by-Prosecutor-of-ICC-at-RIA-in-Dublin-on-16-December-2013.pdf> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[10] Petrovic Jadranka, Dale Stephens and Vasko Nastevski. ‘To arrest or not to arrest the incumbent head of state: the Bashir case and the interplay between law and politics’ (2016) 42 Monash UL Rev. 740.",
      },
      {
        type: "paragraph",
        text: "[11] BBC News, ‘Arab leaders back 'wanted' Bashir’ (BBC 30 march 2009) <http://news.bbc.co.uk/2/hi/middle_east/7971624.stm> accessed 1 December 2023; see also France 24 News, ‘Omar al-Bashir disregards arrest warrant to attend Arab summit’ (France24 25 March 2012) <https://www.france24.com/en/20120325-omar-al-bashir-disregards-arrest-warrant-attend-arab-summit-iraq-icc> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[12] Decision on the Progress Report of The Commission on The Implementation of Decision Assembly/AU/DEC.270(XIV) On the Second Ministerial Meeting on The Rome Statute of The International Criminal Court (ICC) Doc. Assembly/AU/10(XV)",
      },
      {
        type: "paragraph",
        text: "[13] Maryam Jamshidi, ‘The enforcement gap: How the International Criminal Court failed in Darfur’ (Aljazeera 25 March 2013) <https://www.aljazeera.com/opinions/2013/3/25/the-enforcement-gap-how-the-international-criminal-court-failed-in-darfur> accessed 1 December 2023; see also The Guardian, ‘Kenya defends failure to arrest Sudan's president Omar al-Bashir in Nairobi’ (The Guardian 29 August 2010) <https://www.theguardian.com/world/2010/aug/29/kenya-omar-al-bashir-arrest-failure> accessed 1 December 2023; see also Amnesty International, ‘Kenya refuses to arrest Sudanese President Omar Al-Bashir’ (Amnesty International August 27 2010) <https://www.amnesty.org/en/latest/news/2010/08/kenia-se-niega-detener-presidente-sudanes/> accessed 1 December 2023",
      },
      {
        type: "paragraph",
        text: "[14] Maryam Jamshidi, supra note 18",
      },
      {
        type: "paragraph",
        text: "[15] Southern Africa Litigation Centre v Minister of Justice and Constitutional Development [28] 5 SA 1, 3 [2] (High Court) (‘Southern Africa Litigation Centre’).",
      },
      {
        type: "paragraph",
        text: "[16] The Minister of Justice and Constitutional Development v The Southern African Litigation Centre (867/15) [29] ZASCA 17 (15 March 2016)",
      },
      {
        type: "paragraph",
        text: "[17] David E Kiwuwa, ‘Al-Bashir: South Africa’s Moment of Glory and Shame’ (The Conversation 19 June 2015 <https://theconversation.com/al-bashir-south-africas-moment-of-glory-and-shame-43283> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[18] Bower Adam, ‘Contesting the International Criminal Court: Bashir, Kenyatta, and the status of the nonimpunity norm in world politics’ (2019) 4(1) Journal of Global Security Studies, 88.",
      },
      {
        type: "paragraph",
        text: "[19] Aljazeera 'Malawi cancels AU summit over Sudan's Bashir' (Aljazeera 9 June 2012) <http://www.aljazeera.com/news/africa/2012/06/20126974132905285.html> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[20] Republic of Kenya, In the High Court at Nairobi, Misc Criminal Application 685 (2010), 28 November 2011 (unreported)",
      },
      {
        type: "paragraph",
        text: "[21] Keppler Elise, ‘Managing setbacks for the international criminal court in Africa’ (2012) 56(1) Journal of African Law 1, 8.",
      },
      {
        type: "paragraph",
        text: "[22] Dyani-Mhango Ntombizozuko, ‘South Africa's dilemma: immunity laws, international obligations, and the visit by Sudan's president Omar Al Bashir’ (2017) 26 Wash. Int'l LJ 535.",
      },
      {
        type: "paragraph",
        text: "[23] Wanigasuriya B. A., ‘Putin Travels to Mongolia: What Prevents His Arrest?’ (2024) <https://opiniojuris.org/2024/09/04/putin-travels-to-mongolia-what-prevents-his-arrest/> accessed 23 September 2024",
      },
      {
        type: "paragraph",
        text: "[24] Walker Edward, ‘Between east and west: NATO enlargement and the geopolitics of the Ukraine crisis’ (2015) Ukraine and Russia: People, politics, propaganda and perspectives 134, 142; see also Donaldson Robert, ‘The Role of NATO enlargement in the Ukraine crisis’ (2017) 44(1) The soviet and post-soviet review 32..",
      },
    ],
  },
  {
    title: "Sham Contracts in Kenyan Employment Law",
    slug: "sham-contracts-kenyan-employment-law",
    date: "September 30, 2024",
    category: "Employment and Labour Law",
    practiceArea: "Employment and Labour Relations",
    practiceAreas: ["Employment and Labour Relations", "Dispute Resolution"],
    tags: ["Employment", "Labour Law", "Contracts", "Kenya"],
    image: "/images/blogs/sham-contracts.png",
    imageAlt: "Sham employment contracts and labour law in Kenya",
    excerpt:
      "How Kenyan employment law identifies sham contracts and protects workers against disguised employment arrangements.",
    authorSlug: "oduor-khamati",
    datePublished: "2024-09-30",
    dateModified: "2024-09-30",
    readTime: "4 min read",
    seoTitle:
      "Sham Contracts in Kenyan Employment Law | Malika Okubasu & Company Advocates",
    seoDescription:
      "How Kenyan employment law identifies sham contracts and protects workers against disguised employment arrangements.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "1. What are sham employment contracts?",
      },
      {
        type: "paragraph",
        text: "Sham employment contracts are a major issue in determining employment status. Sham contracts were defined by Lord Diplock (in Snook v London & West Riding Investment Ltd.[1]) as those contracts whose terms and conditions are very different from actual legal rights and obligations that the parties wish or intend to create. Because the employee primarily drafts employment contracts, this doctrine is normally associated with the determination of the status of employment.",
      },
      {
        type: "paragraph",
        text: "This is not the only definition of a sham employment contract. It also refers to a clause or the entire contract where the parties have jointly conspired to deceive a third party, like a tax authority or court, to make it appear as though there is an intention to create some biding legal relationship, such as a self-employed agreement, but where neither party intends such a relationship to exist. The joint intention is not a mandatory requirement for a sham contract to exist.",
      },
      {
        type: "paragraph",
        text: "A sham contract will exist when the written employment agreement is not an accurate reflection of the de facto agreement which is made between the parties. Hence, employment contracts are required to reflect the working conditions between the employer and the employee.",
      },
      {
        type: "paragraph",
        text: "While sham contracts often involve the parties harbouring a common intention of deceiving third parties of their arrangement, in cases of employment, it is often the employer that uses sham contracts to reduce liabilities such as employment benefits, insurance, and taxes. Because of unequal bargaining power, workers would often accept such a contract or risk being unemployed. The Employment Act 2007[2] voids any terms which limit the minimum protections protected under the Act.",
      },
      {
        type: "paragraph",
        text: "The doctrine of sham contracts is an exception to the parole evidence rule, signature rule and autonomy to contract. This exception is predicated on the fact that employer lawyers will often draft terms which are more favourable to their client, which terms will be imposed on an employee.",
      },
      {
        type: "paragraph",
        text: "One of the criticisms of the principle of sham contracts is that abandons the literal approach to interpretation, making the courts recast employment contracts. However, a compelling argument can be made because, by looking at the relationship itself, the courts can discover the true intention of the parties and determine the employment obligations. For example, while the contract may state that a person is a self-employed independent contractor, they may be liable to the same disciplinary procedure and internal performance review processes as an employee.",
      },
      {
        type: "list",
        items: ["The basis for sham contracts in employment law"],
      },
      {
        type: "paragraph",
        text: "Sham contracts operate based on public policy. Courts have to thread the thin line between the protection of employee rights and contractual principles. The employment courts have to consider protection of the vulnerable people, and the avoidance of legislation, and taxes.",
      },
      {
        type: "paragraph",
        text: "Examples of sham employment contracts may include a contract where a worker is classified as an independent contractor yet he or she is an employee. A sham employment clause may include a term which provides that when a worker is absent, he is under an obligation to provide a substitute to perform work. This provision is designed to create an illusion of independent contractors by removing an obligation for the worker to provide services “personally” and hence negating the existence of employment.",
      },
      {
        type: "paragraph",
        text: "Some employers often engage independent contractors, believing that they would:",
      },
      {
        type: "paragraph",
        text: "reduce the overall amount of tax they have to pay;",
      },
      {
        type: "paragraph",
        text: "avoid having to accrue for leave;",
      },
      {
        type: "paragraph",
        text: "avoid paying healthcare insurance and retirement benefits; and",
      },
      {
        type: "paragraph",
        text: "to circumvent the Employment Act 2007 and common law protections given to employees, such as for unfair dismissal, therefore creating a more 'flexible' workplace.",
      },
      {
        type: "paragraph",
        text: "The reasons why some employees prefer to be treated as independent contracts include:",
      },
      {
        type: "list",
        items: [
          "The employee wishes to structure their income affairs in a way that reduces the amount of taxes they pay, including using a trust to receive their income.",
          "Also, some employees think that they would be able to command a higher take-home pay rate as compared to what they could have received as an employee.",
          "Risks of relying on a contract which is deemed to be a sham",
        ],
      },
      {
        type: "paragraph",
        text: "When agency or contractor agreements are found to be sham, there is a risk that an employer may be found to have unfairly dismissed workers. This could attract compensation for unfair dismissal. Other consequences could be liability for taxes, statutory employment benefits, and statutory redundancy compensation.",
      },
      {
        type: "paragraph",
        text: "In Kenya, the sham contract can be set aside when a court finds that an independent contractor is an employee. In several cases, the Employment Courts have found independent contractors to be employees. For detailed analysis, see:",
      },
      {
        type: "list",
        items: [
          "Leonard Musitsa Endoli v Odds and Ends Limited[3] where a carpenter employed as an independent contractor was held to be an employee and thus unfairly terminated contrary to Section 45 of the Employment Act and entitled to compensation.",
          "Omusamia v Upperhill Springs Restaurant[4] where a cook employed as an independent contractor was found to be in an employer-employee relationship despite the testimony from the respondent employer. The claimant was awarded damages for unfair termination and awarded damages as per section 49(1)(c) of the Employment Act.",
        ],
      },
      {
        type: "paragraph",
        text: "The Kenyan Employment Courts have extended “sham’ to redundancy, restructuring and reorganization of an employer’s business. For instance, the Court in Agnes Ongadi v Kenya Electricity Transmission Company Limited[3] held that:",
      },
      {
        type: "paragraph",
        text: "“…A redundancy, a restructuring or reorganization commenced with the sole purpose of laying off specific employees is a sham. Such is not justified and cannot be sanctioned by the court...”",
      },
      {
        type: "list",
        items: ["Conclusion"],
      },
      {
        type: "paragraph",
        text: "In sum, employers should be very cautious before engaging anyone as an independent contractor. If the worker is found by a court to fall on the wrong side of the employee/independent contractor divide, the arrangement could do far more harm than good in the long run.",
      },
    ],
  },
  {
    title: "Cryptocurrencies: What Are They? Securities or Commodities?",
    slug: "cryptocurrencies-securities-or-commodities",
    date: "July 24, 2024",
    category: "Tech Law",
    practiceArea: "Media, Technology and Intellectual Property",
    practiceAreas: [
      "Media, Technology and Intellectual Property",
      "Policy and Legislative Drafting",
      "Corporate and Commercial Law",
    ],
    tags: ["Cryptocurrency", "Securities", "Commodities", "Digital Assets"],
    image: "/images/blogs/cryptocurrencies-regulations.png",
    imageAlt: "Cryptocurrency regulation as securities or commodities",
    excerpt:
      "How cryptocurrencies may be understood as securities or commodities and why classification matters for regulation.",
    authorSlug: "oduor-khamati",
    datePublished: "2024-07-24",
    dateModified: "2024-07-24",
    readTime: "5 min read",
    seoTitle:
      "Cryptocurrencies: What Are They? Securities or Commodities? | Malika Okubasu & Company Advocates",
    seoDescription:
      "How cryptocurrencies may be understood as securities or commodities and why classification matters for regulation.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Differentiation of cryptocurrencies as securities or commodities is a matter that is taken seriously in regulation. How they are defined, for instance, as securities, like stock, or commodities, like gold, has major financial implications on how they are regulated, who regulates them, and which laws are applicable.",
      },
      {
        type: "paragraph",
        text: "In finance, commodities and securities are different instruments. Any legal definition of cryptocurrency that determines cryptocurrencies to be either one of the above financial instruments creates far-reaching financial implications about how cryptocurrencies are treated. This definition can impact how to sell them, where they may be listed, and the party that might sue when the issuers are in violation.",
      },
      {
        type: "paragraph",
        text: "There is no definitive determination of whether cryptos are commodities or securities. The fact that the crypto market is very complex means that no single definition will fit all the cryptocurrencies. How cryptocurrencies are defied will likely depend on the token itself and how the same is used.",
      },
      {
        type: "heading",
        level: 2,
        text: "Commodities",
      },
      {
        type: "paragraph",
        text: "These are physical goods that are traded in exchanges mainly in wholesale quantity. Commodities include produce like wheat and precious metals in gold. Not many countries have commodity exchanges. In the US, the major commodities exchanges include the ICE Futures U.S., the Chicago Board of Trade, the New York Mercantile Exchange (NYMEX), and the Chicago Mercantile Exchange (CME). The UK has two major commodity exchanges, which are the London Metal Exchange (LME) and the London Commodity Exchange (LCE). In the US, commodity exchanges and wrongdoings are regulated by the Commodity Futures Trading Commission (CFTC). This agency has a limited mandate as compared with the SEC.",
      },
      {
        type: "heading",
        level: 2,
        text: "Securities",
      },
      {
        type: "paragraph",
        text: "Securities are financial instruments that denote a claim or interest on the issuer. They include bonds, derivatives, and stocks and are regulated in the US by the SEC. The US has very advanced laws on securities with highly developed terms of regulation, technology, and volume.",
      },
      {
        type: "paragraph",
        text: "The decision of Securities and Exchange Commission v. W. J. Howey Co. et al. 328 U.S. 293 defines securities law as “investment contracts,” implying that investing money in securities entitles a person to expect profits from the efforts of a promoter or third party. Investors can collect interest payments or dividends. This case created a Howey test, which has been relied on in different cases in the US by the SEC. This test consists of four criteria:",
      },
      {
        type: "paragraph",
        text: "A money investment;",
      },
      {
        type: "paragraph",
        text: "Expectation of profits;",
      },
      {
        type: "paragraph",
        text: "Common enterprise; and",
      },
      {
        type: "paragraph",
        text: "Reliance on the effects of others.",
      },
      {
        type: "paragraph",
        text: "Two cases settled by the SEC show the application of this test in SEC enforcement decisions: (a) the Dapper Labs case and (b) the DAO cases.",
      },
      {
        type: "paragraph",
        text: "Regulatory implications",
      },
      {
        type: "paragraph",
        text: "How cryptocurrencies are regulated depends on how they are classified or defined. When categorised as a security, the issuers and the exchanges must seek necessary licensing from the regulators. Because securities laws are often very complex and require extensive compliance characterised by huge efforts and amounts of investment, cryptocurrency development and sales are often implemented in a manner that avoids securities regulation.",
      },
      {
        type: "paragraph",
        text: "Decentralisation is a method that is used by issuers to bypass regulations. Hence, the development is often coordinated in a way that does not allow the securities regulator to pinpoint a singular coordinated group that is tasked with managing and driving up the value of the crypto. This way it makes it impossible for the token to be considered a security by a regulator.",
      },
      {
        type: "paragraph",
        text: "All decentralised finances (DeFi) have consistently applied this decentralisation in project development so that governance can be separated using decentralised autonomous organisations (DAOs). Also, in many cases, the developers employ measures like proof-of-stake as a consensus mechanism, which prevents the cryptocurrency from being considered a security. Specifically, if the investors are also participating in the growth of the project by becoming validators, voting in the decision-making of the DAOs, or taking a stake in the coin, they cannot be considered to solely rely on ‘third parties’ to create returns. This will make the token or coin not meet the requirements of the Howey Test.",
      },
      {
        type: "paragraph",
        text: "There is a high risk when crypto is defined as securities. SEC may pursue cryptocurrency founders for not listing the cryptocurrency. There is also a potential fine for unregulated cryptocurrencies, which are regarded as securities.",
      },
      {
        type: "paragraph",
        text: "If a developer misclassifies a coin, the implications under securities law are often costly. Ted, the CEO of Kik, mistakenly said that when people bought Kik tokens, they would be able to earn tonnes of money. This led to the SEC suing him with the allegation that he had led investors to purchase the tokens with the expectation of profits. This led to a serious legal problem for Kik, leading to a fine of $5 million.",
      },
      {
        type: "paragraph",
        text: "Many coins have been generally regarded as being without utility. Besides, many of the coins cannot be used as a payment form or to store value. This means that many of the coins lack essential elements to be classified as securities.",
      },
      {
        type: "paragraph",
        text: "The CFTC's position is that cryptocurrencies are a type of commodity, and their regulation lies under the Commodities Exchange Act. The justification for this argument comes from the fact that on exchanges, cryptocurrencies are interchangeable. For example, each ETH or BTC is of identical worth, such as one bag of wheat is identical to another bag of wealth of the same grade. The Bitflinex and Tether case about stablecoin illustrated the regulation of crypto as commodities. CFTC filing showed that it considered such coins as digital commodities.",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Because of the uncertainty and the existing lacuna in the regulation of cryptocurrencies, it is very hard to know how any coin will be classified. Regulatory discussions have favoured placing cryptocurrencies under the CFTC. This covers all non-securities token spot trading. However, this type of arrangement is not likely to work on all cryptos since the SEC would have a mandate when a coin qualifies to be a security. This is likely to complicate the governance of cryptocurrencies and make them subject to two different regulatory regimes.",
      },
      {
        type: "paragraph",
        text: "Many countries have taken a passive approach in their dealing with cryptocurrencies. While many countries agree that they are not legal tenders, there is a lack of consensus on whether they are commodities or securities.",
      },
      {
        type: "paragraph",
        text: "The other alternative would be to create a bespoke framework for crypto regulation. The EU has treated crypto as a different asset class under the Market in Crypto Assets Regulations (MiCA). These EU rules are novel and specifically target wallets, exchanges, and issuers of crypto to improve transparency and ensure compliance with AML rules. The EU approach has been regarded as the best as it prevents confusion created by determining whether cryptocurrencies fall within the category of commodity or securities.",
      },
    ],
  },
  {
    title:
      "Copyrighting AI-Generated Works: Determining the Originality of AI-Generated Work",
    slug: "copyrighting-ai-generated-works",
    date: "May 15, 2026",
    category: "Tech Law",
    practiceArea: "Media, Technology and Intellectual Property",
    practiceAreas: [
      "Media, Technology and Intellectual Property",
      "Policy and Legislative Drafting",
    ],
    tags: [
      "Artificial Intelligence",
      "Copyright",
      "Originality",
      "Digital Law",
    ],
    image: "/images/blogs/copyrighting-ai-generated-works.png",
    imageAlt: "Copyright protection for AI-generated works",
    excerpt:
      "How copyright law approaches AI-generated works, originality, human input, and the tool test.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
    readTime: "9 min read",
    seoTitle:
      "Copyrighting AI-Generated Works: Determining the Originality of AI-Generated Work | Malika Okubasu & Company Advocates",
    seoDescription:
      "How copyright law approaches AI-generated works, originality, human input, and the tool test.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Copyright",
      },
      {
        type: "paragraph",
        text: 'Copyright is the exclusive right granted to the creator or author of literary, musical, artistic, audio-visual, or other protected works, allowing them to control reproduction, distribution, adaptation, communication, or public performance of those works. Section 2 of the Copyright Act defines copyright as "the exclusive right to control the reproduction and exploitation of literary, musical, artistic works, audio-visual works, sound recordings and broadcasts in the manner prescribed by the Act.”',
      },
      {
        type: "paragraph",
        text: "For copyright to subsist, the work must be original. This statement correctly captures the general definition and nature of copyright under Kenyan law, particularly as provided under Section 2 of the Copyright Act. However, the requirement of originality becomes legally complex when applied to AI-generated works.",
      },
      {
        type: "paragraph",
        text: 'Under copyright law, originality is a foundational requirement for copyright protection. In Kenya, although the Copyright Act does not provide an exhaustive definition of "originality", the concept traditionally refers to a work that originates from an author and reflects a degree of human skill, labour, judgement, creativity, or intellectual effort.',
      },
      {
        type: "heading",
        level: 2,
        text: "Foundational Principle for Protection of Expression of Ideas",
      },
      {
        type: "paragraph",
        text: "Copyright protects the expression of ideas rather than the ideas themselves. And this brings in the foundational question, which remains unanswered when dealing with AI-generated work. In the context of artificial intelligence, there are complex legal and philosophical questions regarding authorship, originality, and ownership of expression.",
      },
      {
        type: "paragraph",
        text: "Traditionally, copyright law assumes that a human author conceives an idea and then personally expresses it through intellectual effort. AI disrupts this relationship because a user may generate the underlying idea through prompts, but the actual expression of the idea itself is often produced autonomously by the AI system.",
      },
      {
        type: "paragraph",
        text: 'The challenge with AI-generated works is determining whether a work produced wholly or substantially through artificial intelligence can meet the originality threshold required under copyright protection. Traditional copyright principles are premised on human authorship. All over the world, the language of the law repeatedly refers to an "author", "creator", or "owner", terms historically understood to contemplate a natural or legal person exercising intellectual creativity.',
      },
      {
        type: "paragraph",
        text: "Under prevailing international copyright doctrine, originality generally requires meaning and often sufficient human contribution. While purely machine-generated works will generally be excluded, AI-generated work with the prompts and inputs of humans creates a fundamental challenge. First of all, are prompts and inputs sufficient to make the work generated by AI original? Secondly, to what extent do these prompts and inputs make the generated work be classified as the original ideas of the user?",
      },
      {
        type: "paragraph",
        text: "There is a strong argument in cases where AI independently determines the manner of expression; the originality requirement becomes weakened from the perspective of the user keying in prompts and inputs. The user may have conceptualised the subject matter but did not personally create the expressive elements protected by copyright. Unlike a human author who directly selects words, composition, tone, or artistic arrangement of ideas and words, the AI system generates those expressive choices through learned models and algorithms.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Difficulty of Differentiating Between AI-Generated Work and Human Creation",
      },
      {
        type: "paragraph",
        text: "There is a persistent narrative that copyright should be granted for works that involve human input. This supposition creates some sort of reprieve in the registration, ownership, and protection of AI-generated work. If work is generated partly by AI and partly by a human, what has been generated by the human can be protected as long as it meets the criteria set under the law.",
      },
      {
        type: "paragraph",
        text: "This principle is best exemplified by Zarya of Dawn (2023), the US Copyright Office rule that the text and layout of a graphic novel were protected under copyright; however, individual AI-generated images were not. [1] This is a clear case where the images were fully AI-generated.",
      },
      {
        type: "paragraph",
        text: "In the US, human authorship is a mandatory requirement; this leaves AI-generated content unprotected [2]. Work that is generated by mere text prompts is not worth protection. This supposition shows that there is a need for sufficient input in order for the content to be protected. The same requirement for originality and human effort is mandated under the Kenyan copyright law. [3]",
      },
      {
        type: "paragraph",
        text: "This brings in the challenge of determining and ascertaining the level of human input which would make AI work worth protecting, i.e., sufficient human input. Is there a percentage, or should such input be based on the quality or quantity of the prompts and inputs? If that is the case, who should determine this sufficiency given various subject matters (artistic work; literary works; musical works; audio-visual works and film; dramatic and performing arts; and others like advertisements, broadcast, and adaptation)?",
      },
      {
        type: "paragraph",
        text: "Secondly, if AI work protection will be based on the sufficiency of human input and prompts, does that mean that all such work must be accompanied by a list of all the inputs and prompts to determine the quality or quantity of such inputs before protection? If so, there is a challenge of updating the registration of copyright to align with such criteria. This would most likely need a complete overhaul or reform of how copyright is recognised and protected. And practically, it will be a nightmare to implement such a system, given the ability of AI models to churn out millions of AI-generated works.",
      },
      {
        type: "heading",
        level: 2,
        text: "Originality Vs Human Input and Prompts",
      },
      {
        type: "paragraph",
        text: "If it is the sufficiency (level and extent) of input or prompts that determines copyrightability. Then it is also correct to suppose that inputs and prompts will be key indicators of the originality of the AI-generated work. If inputs or prompts are used to determine copyrightability, then such inputs or prompts must meet the originality criteria, too. Whether this will solve the problem remains unclear. Determining originality based on inputs and prompts is indeed complicated to conceive in principle, let alone practically.",
      },
      {
        type: "paragraph",
        text: "Arguments for complex prompting have been suggested. The argument states that a person who directs the AI and makes arrangements for the necessary creation may be eligible for copyright ownership. This supposition is also vague, as it does not define what complex prompting and simple prompting mean. Without delineation of complex and simple prompting, it will be difficult to determine copyrightability.",
      },
      {
        type: "paragraph",
        text: "Without a certain metric of measuring human inputs or prompts, it is very challenging to determine (a) to what extent, (b) what type of human input, and (c) what quality or quantity of inputs or prompts would make the AI-generated work worthy of protection under copyright.",
      },
      {
        type: "paragraph",
        text: "Where an AI system generates text, images, music, or audio-visual content without substantial human creative control, questions arise as to: (a) who the author is; (b) whether the work can truly be said to originate from human intellectual effort; and (c) whether originality subsists in the AI-generated output itself. Since AI works in principle through human input and prompts, the question becomes how such actions should be evaluated vis-à-vis the legal requirement of originality and human expression of ideas.",
      },
      {
        type: "heading",
        level: 2,
        text: "Protection under the Tool Test",
      },
      {
        type: "paragraph",
        text: "There is a good argument for protection under the Tool Test. Here, AI is treated like a brush or a camera, or any other tools used by humans for creation, such as Photoshop. This test would support the supposition that AI-generated work is worth protection only when AI is used as an assistive tool. However, applying the principle may be difficult in practice. An example is Suryast (2023), where an AI-generated work based on the work of Vincent Van Gogh's famous 'The Starry Night' was denied copyright in the US because the final composition lacked sufficient human creativity. The AI regenerated work blended a digital photo with Van Gogh's \"The Starry Night\". This work was rejected because it had no human authorship required for copyright protection.",
      },
      {
        type: "paragraph",
        text: "Also, the difficulty is that copyright law was developed in an era where tools merely assisted in human expression rather than in independently generating expressive content and ideas. A typewriter, camera, or word processor does not independently create expression. Generative AI systems, however, actively participate in producing the expressive form itself. This blurs the traditional distinction between idea and expression. And that is the crux of the matter: reconciling the traditional distinction of idea and expression with what is generated by AI.",
      },
      {
        type: "paragraph",
        text: "Others hold the position that when the user exercises substantial creative control over the process, then copyright should subsist. The argument is that if a user develops highly detailed prompts, iteratively edits the outputs, selects expressive elements, rearranges the content, and significantly modifies the final work, the human contribution may become sufficiently original to attract copyright protection. In such cases, AI functions more as an assistive tool rather than an autonomous creator. While this argument may make sense, implementing it creates practical challenges.",
      },
      {
        type: "paragraph",
        text: "The argument does not consider the whole idea of originality vis-à-vis the ability of AI to create expression. AI-generated work, even when created under extensive control, will retain expression and ideas purely generated by the model itself, despite the inputs and prompts. There is the conundrum of determining what sufficient human input, prompts or efforts are enough to trigger protection. If heavy editing is what is required for AI-generated work, the standard for copyright protection would be lowered across the board.",
      },
      {
        type: "paragraph",
        text: "In Théâtre D'opéra Spatial 2023 [4], an artwork which was generated by AI and then heavily modified by a human could not be registered because the AI-generated portions were not adequately disclaimed and disclosed. The Théâtre D'opéra Spatial speaks of a de minimis amount of AI-generated content. This is very difficult to achieve in most AI systems, which would merge AI elements and human modifications. In this case, the user had heavily used Gigapixel and Photoshop to modify an AI-generated image. One may say that the problem in this case arises from the fact that the original image was AI-generated and, hence, the core of the work was AI-generated. It is not that sample. A comparison of Théâtre D'opéra Spatial with the Suryast shows a different story. In Suryast, the original was a digital photo blended with Vincent van Gogh's famous 'The Starry Night' painting. If there were consistency, Suryast would have had a higher percentage of being recognised.",
      },
      {
        type: "paragraph",
        text: "This just shows the complexities of copyrighting AI-generated work.",
      },
      {
        type: "paragraph",
        text: "Questions arise as to what extent AI can be used as a tool and for the final output. Is there a percentage of final composition which would allow combining human creation with AI? Further, in the above cases, there is less clarity on the level and extent, or the percentage of input by humans. In any case, the quantity and quality of input must be properly addressed.",
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "There needs to be in-depth clarification as to the extent to which the user may use AI. Previous decisions have not clarified such a minimum threshold. This clarification would help establish sufficient input or prompts to meet the human authorship criteria. At the moment, no law seems to address these challenges.",
      },
      {
        type: "paragraph",
        text: "Therefore, while the principle that “copyright protects expression and not ideas” remains legally valid, AI-generated works expose a significant gap in traditional copyright theory because, in many cases, the user provides only the idea while the AI produces the protected expression.",
      },
      {
        type: "paragraph",
        text: "In Kenya (and in many jurisdictions like the US), the copyright law does not expressly address AI-generated works or define the extent of human involvement necessary for originality in AI-assisted creations. Copyright law still largely operates on assumptions of human authorship. As AI systems become more autonomous, courts and legislatures may eventually need to reconsider whether originality should continue to depend exclusively on human intellectual creation or whether new forms of authorship and ownership should emerge.",
      },
      {
        type: "paragraph",
        text: "[1] Zarya of the Dawn (Registration # VAu001480196)",
      },
      {
        type: "paragraph",
        text: "[2] Thaler v. Perlmutter, No. 23-5233 (D.C. Cir. 2025)",
      },
      {
        type: "paragraph",
        text: "[3] Section 22(3) of the Kenyan Copyright Act",
      },
      {
        type: "paragraph",
        text: "[4] Second Request for Reconsideration for Refusal to Register Théâtre D’opéra Spatial (SR #1-11743923581; Correspondence ID: 1-5T5320R)",
      },
    ],
  },
  {
    title:
      "Shareholder Protection and Rights: Preemption Rights of Shareholders",
    slug: "shareholder-preemption-rights-kenya",
    date: "April 23, 2026",
    category: "Corporate & Commercial Law",
    practiceArea: "Corporate and Commercial Law",
    practiceAreas: ["Corporate and Commercial Law", "Dispute Resolution"],
    tags: [
      "Shareholders",
      "Preemption Rights",
      "Companies Act",
      "Corporate Governance",
    ],
    image: "/images/blogs/shareholder-protection-and-rights.png",
    imageAlt: "Shareholder protection and preemption rights in Kenya",
    excerpt:
      "A guide to shareholder preemption rights, statutory protections, exceptions, and remedies for breach.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    readTime: "8 min read",
    seoTitle:
      "Shareholder Protection and Rights: Preemption Rights of Shareholders | Malika Okubasu & Company Advocates",
    seoDescription:
      "A guide to shareholder preemption rights, statutory protections, exceptions, and remedies for breach.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Shareholder protection and rights!",
      },
      {
        type: "paragraph",
        text: 'In a company\'s architecture, equity is power. But that power is often fragile. For a shareholder, the greatest risk isn’t just a bad fiscal year; it is dilution. Pre-emption rights serve as the primary legal shield against this risk, ensuring that existing owners have the right of first refusal before new shares are offered to the public. However, as many directors and investors discover too late, these rights are not mere suggestions. Under the Companies Act 2015, a failure to respect the 21-day notice period or a breach of the "proper purpose" rule can render an entire capital raise null and void.',
      },
      {
        type: "paragraph",
        text: "Whether you are a founder scaling up or an investor protecting your stake, understanding the boundary between a valid allotment and a legal ticking time bomb is non-negotiable.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. What Are Pre-Emption Rights?",
      },
      {
        type: "paragraph",
        text: "Preemption rights are a fundamental protection for existing shareholders, ensuring they have the first opportunity to purchase new shares before they are offered to third parties. This prevents the dilution of their voting power and economic interest.",
      },
      {
        type: "paragraph",
        text: "Existing shareholders typically have the first right to subscribe to newly issued shares to prevent their ownership percentage from being diluted. These rights are primarily governed by Division 3 (sections 337–353) of the Act.",
      },
      {
        type: "paragraph",
        text: 'Under section 338 of the Act, a company is prohibited from allotting "equity securities" to any person unless the company has done the following:',
      },
      {
        type: "list",
        items: [
          "It has first made an offer to each existing ordinary shareholder to allot a proportion of those securities that is as nearly as practicable equal to the proportion of the nominal value of the ordinary shares already held by that person.",
          "The offer is made on the same or more favourable terms as the offer to third parties.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "2. Communication and Offer Period",
      },
      {
        type: "paragraph",
        text: "This is governed by section 339 of the Act. To ensure the right is meaningful, the Act prescribes strict rules for how offers must be communicated.",
      },
      {
        type: "paragraph",
        text: "The offer should be made in hard copy or electronic form. The duration of the offer is set to be a minimum of 21 days. This means that the company must keep the offer to purchase shares for a minimum of 21 days, and if withdrawn before 21 days, the company may be liable for violating preemption rights.",
      },
      {
        type: "heading",
        level: 2,
        text: "3 Statutory Exceptions of Pre-Emption Rights",
      },
      {
        type: "paragraph",
        text: "The preemption rights requirement under Section 338 does not apply in some instances. The specific instances are set out under sections 341 – 343 of the Act:",
      },
      {
        type: "list",
        items: [
          "When it is a Non-Cash Consideration (as per section 341 of the Act): when the shares are being allotted for a consideration other than cash, such as in exchange for property, intellectual property, or as part of a merger, shareholders are not entitled to preemption rights.",
          "When Issuing Bonus Shares: when allotting bonus shares to existing members.",
          "Employees' Share Schemes (as per section 343 of the Act): Securities held or issued under an approved employee share ownership plan (ESOP).",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "4. Disapplication of Pre-Emption Rights by Passing a Specific Resolution or under the Articles of Association",
      },
      {
        type: "paragraph",
        text: "This is allowed by the Act through sections 346–348. The company, through the shareholder resolution, can disapply or rather opt out of this statutory requirement by passing a specific resolution or through its company constitution.",
      },
      {
        type: "paragraph",
        text: "For specific types of allotments, the shareholders can pass a special resolution to exclude preemption rights for specific types of allotment, such as when the company is raising capital or to allow a specific strategic investor. This is allowed under section 348.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Liability for Breach of Pre-Emption Rights",
      },
      {
        type: "paragraph",
        text: "The company and its director can be held liable when they violate preemption rights. Under section 340, directors and the company are jointly and severally liable to compensate the shareholder to whom an offer should have been made for any losses, costs, damages or expenses which the shareholder suffers.",
      },
      {
        type: "paragraph",
        text: "This cause of action for preemption rights contravention has a limitation period of three years from the date of allotment or when the shareholder learns of the allotment. This means that secretive allotments are not allowed, and if a shareholder learns of such an allotment, they can challenge it in court.",
      },
      {
        type: "heading",
        level: 2,
        text: "6. Grounds for Invalidity",
      },
      {
        type: "paragraph",
        text: "An allotment may be challenged and declared invalid based on several distinct legal failures:",
      },
      {
        type: "heading",
        level: 3,
        text: "6.1. Breach of Statutory Pre-emption Rights",
      },
      {
        type: "paragraph",
        text: "Under Section 338 of the Companies Act 2015, a company cannot allot equity securities unless they are first offered to existing shareholders. If the company issues shares to a third party or a favoured director without giving existing members the mandatory 21-day notice to exercise their rights, the allotment is a breach of statute. While Section 340 provides for damages, courts can also set aside the allotment if it was done in bad faith or to shift the balance of power.",
      },
      {
        type: "heading",
        level: 3,
        text: "6.2. Lack of Authority to Allot",
      },
      {
        type: "paragraph",
        text: "In a private company with more than one class of shares, or a public company, directors cannot allot shares unless authorised by: (a) the company’s Articles of Association; or (b) an Ordinary Resolution passed by the members. An allotment made by directors who lack this specific authority is ultra vires (beyond their powers) and technically void.",
      },
      {
        type: "heading",
        level: 3,
        text: "6.3. Breach of the Proper Purpose Rule",
      },
      {
        type: "paragraph",
        text: "Even if directors have the legal power to allot shares, they must exercise that power for a proper purpose. Issuing shares primarily to dilute a minority shareholder’s stake, to block a takeover bid, or to maintain control of the Board. The court looks at the primary motive. If the motive was not to raise capital for the company’s benefit but to interfere with shareholder rights, the allotment is invalid.",
      },
      {
        type: "heading",
        level: 2,
        text: "7.Procedural Irregularities and Quorum",
      },
      {
        type: "paragraph",
        text: "Apart from failure to comply with pre-emption rights, an allotment may be challenged and declared invalid based on several distinct legal failures. When these requirements are ignored, the allotment is often deemed invalid, leading to the ‘reversal’ of the transaction through the rectification of the register of members.",
      },
      {
        type: "paragraph",
        text: "For an allotment to be valid, the Board meeting that approved it must have been properly constituted. All directors must receive notice of the board meeting. If the Articles require a quorum of three directors and only two were present or one was an ‘interested party’ and failed to recuse themselves, the resolutions passed, including the allotment, are invalid. If the approval of the shareholders is required, but that approval is not obtained, then the allotment will be invalid.",
      },
      {
        type: "paragraph",
        text: "In Sanjiv v Ghelani Enterprises Limited, the court dealt with a situation where shares were allotted without a proper board meeting. The High Court held that such an allotment was null and void ab initio (from the beginning) because the mandatory procedures in the Articles and the Companies Act are not mere ‘suggestions’ but conditions precedent to a valid allotment.",
      },
      {
        type: "paragraph",
        text: "In the English case of Howard Smith Ltd v Ampol Petroleum Ltd [1] UKPC 3, the landmark case established that even if an allotment is within the directors' powers and is not a breach of the Articles, it will be set aside if the pith and substance of the decision was to dilute a majority shareholder rather than to raise necessary capital.",
      },
      {
        type: "paragraph",
        text: "In the decision of Singh Rai v Tarlochan Singh Rai [2] eKLR (The Rai Family Case), the court held that in private family-owned companies, the court often views the company as a ‘quasi-partnership.’ In such cases, pre-emption rights are strictly enforced because they represent the ‘mutual trust and confidence’ among the members. Breach of these rights can be used as evidence of oppressive or unfairly prejudicial conduct.",
      },
      {
        type: "paragraph",
        text: "In the decision of Mohamed Jelle Omar & another v Ali Salal & another [3] KEHC 6423 (KLR), the court discussed the right of a shareholder to exercise their pre-emptive rights when a fellow shareholder seeks to exit. It clarified that a shareholder cannot be coerced into abandoning their rights or forfeiting shares if the proper pre-emption and valuation mechanisms in the Articles are not followed.",
      },
      {
        type: "paragraph",
        text: 'In the decision of Warari v Suntap Kenya Limited [2024] KEHC 6284 (KLR), the court held that in instances of shareholder deadlock, the court favours a share buyout based on pre-emption principles rather than the "nuclear option" of winding up the company. The court emphasised that a well-drafted Shareholders\' Agreement should pre-emptively define these exit strategies.',
      },
      {
        type: "heading",
        level: 2,
        text: "8. Key Takeaway",
      },
      {
        type: "paragraph",
        text: "In the high-stakes world of corporate governance, pre-emption rights are the seatbelts of equity investment. They exist to ensure that the vision and control a shareholder buys into on day one aren't silently eroded by a boardroom stroke of a pen.",
      },
      {
        type: "paragraph",
        text: "As the Kenyan courts have made clear in landmark rulings, procedural shortcuts are not mere technicalities - they are fatal errors that can collapse a capital raise years after the fact. For directors, the message is clear: transparency and strict adherence to pre-emption rules is very crucial. For shareholders, vigilance is paramount. The shareholder's right to maintain his or her stake is a statutory guarantee.",
      },
      {
        type: "paragraph",
        text: "The 21-Day Rule",
      },
      {
        type: "paragraph",
        text: "The directors cannot truncate the offer period. A minimum of 21 days is a statutory mandate under Section 339. Anything less puts the entire allotment at risk of being declared void ab initio.",
      },
      {
        type: "paragraph",
        text: "Purpose Over Power",
      },
      {
        type: "paragraph",
        text: "Even if you have the authority to issue shares, doing so primarily to dilute a rival or shift board control is a breach of the proper purpose rule. The court looks at why you issued the shares, not just if you could.",
      },
      {
        type: "paragraph",
        text: "Mind the Exceptions",
      },
      {
        type: "paragraph",
        text: "Pre-emption rights aren't absolute. They typically don’t apply to non-cash considerations (property/IP swaps), bonus shares, or approved Employee Share Ownership Plans (ESOPs).",
      },
      {
        type: "paragraph",
        text: "The Quasi-Partnership Principle",
      },
      {
        type: "paragraph",
        text: "In private or family-owned companies, courts apply a higher standard of scrutiny. Mutual trust is the bedrock, and share issue and allotment to third parties must strictly comply with the Articles or Resolution. Directors cannot bring is new members to dilute shareholding.",
      },
      {
        type: "paragraph",
        text: "Three-Year Limitation of Action",
      },
      {
        type: "paragraph",
        text: "If a shareholder suspects an illegal allotment, they must act fast. They generally have three years from the date of the allotment (or from the date you discovered it) to challenge the breach in court.",
      },
      {
        type: "paragraph",
        text: "Audit Your Articles",
      },
      {
        type: "paragraph",
        text: "Shareholders should check the Articles of Association and Shareholders’ Agreements. While the Act provides a baseline, a well-drafted constitution can refine how these rights are exercised or applied, providing much-needed commercial flexibility.",
      },
    ],
  },
  {
    title:
      "Derivative Actions by Minority Members and Shareholders of a Company",
    slug: "derivative-actions-minority-shareholders-kenya",
    date: "April 15, 2026",
    category: "Corporate & Commercial Law",
    practiceArea: "Corporate and Commercial Law",
    practiceAreas: ["Corporate and Commercial Law", "Dispute Resolution"],
    tags: [
      "Derivative Actions",
      "Minority Shareholders",
      "Companies Act",
      "Corporate Governance",
    ],
    image: "/images/blogs/derivative-actions-kenyan-corporate-law.png",
    imageAlt:
      "Derivative actions by minority shareholders in Kenyan corporate law",
    excerpt:
      "How minority shareholders may use derivative actions to protect companies from director misconduct and insider abuse.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-04-15",
    dateModified: "2026-04-15",
    readTime: "15 min read",
    seoTitle:
      "Derivative Actions by Minority Members and Shareholders of a Company | Malika Okubasu & Company Advocates",
    seoDescription:
      "How minority shareholders may use derivative actions to protect companies from director misconduct and insider abuse.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "What is shareholder derivative action?",
      },
      {
        type: "paragraph",
        text: "Shareholders may institute a legal suit on behalf of the company against directors for breaches of duty, fraud, or negligence. Derivative actions are governed by Part XI (Sections 238–242) of the Companies Act, 2015. These sections codify the circumstances under which a member can step into the company's shoes to litigate a cause of action that belongs to the company.",
      },
      {
        type: "paragraph",
        text: "This allows a shareholder to bring a legal claim on behalf of the company for a cause of action vested in the company. It is typically used when a company has suffered a wrong, such as negligence or a breach of duty by directors, but the majority refuse to sue.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Derivative Action",
      },
      {
        type: "paragraph",
        text: "Before the court allows a derivative action, the shareholder is required to first seek leave of court. This means the derivative claim is a two-stage process, the leave stage and a main claim. Unlike the old common law regime, a member must now apply for the High Court’s permission to commence a derivative claim or take over a claim. Thus, a shareholder should have serious and compelling reasons before approaching the court to institute a derivative action.",
      },
      {
        type: "paragraph",
        text: "Application for Permission is governed by sections 239 and 241, which provide that:",
      },
      {
        type: "list",
        items: [
          "Section 239: The member must apply to the High Court for permission (leave) to continue the claim.",
          "Section 241: The Court must refuse permission if: (a) A person acting in accordance with the duty to promote the success of the company (Section 143) would not seek to continue the claim; and (b) the act or omission has been authorised or ratified by the company before or since it occurred.",
        ],
      },
      {
        type: "paragraph",
        text: "The statute allows a member to apply to be substituted under section 242. The court can also allow a member to take over a claim originally brought by the company if the following conditions are satisfied: the member making an application:",
      },
      {
        type: "list",
        items: [
          "The company's manner of pursuing the claim is an abuse of the process of the court.",
          "The company has failed to prosecute the claim diligently.",
          "It is appropriate for the member to continue the claim as a derivative action.",
        ],
      },
      {
        type: "paragraph",
        text: "The criteria are for the court to consider whether the applicant is acting in good faith and if the action is in the company’s best interests. The High Court of Kenya exercises significant discretion in granting leave (permission) to a shareholder to pursue a derivative action. The court’s primary objective is to filter out frivolous litigation while ensuring that genuine wrongs against the company are redressed.",
      },
      {
        type: "paragraph",
        text: "The court will typically approve or allow a derivative action to continue after the shareholder meets very specific criteria. The case of Joseph Munyoki Nzioka v Raindrops Limited & 3 others [1] eKLR outlines all the requirements and tests which must be met for a derivative action to be allowed by the Judge:",
      },
      {
        type: "list",
        items: [
          "Be a member or shareholder of the Company or a person who is not a member of the Company but to whom shares in the Company have been transferred or transmitted by operation of the law;",
          "The proceedings before the court must be in respect to a cause of action that is vested in the Company;",
          "The proceedings in question must be seeking relief on behalf of the Company;",
          "The proceedings must concern a claim arising from an actual or proposed act or omission which involves the negligence, default, breach of duty (such as fiducial duties), or breach of trust by a director of the company.",
        ],
      },
      {
        type: "paragraph",
        text: "While Section 238 (Derivative Action) and Section 780 (Unfair Prejudice) are often filed together, they are distinct. A derivative action seeks a remedy for the company, while an unfair prejudice claim seeks a remedy for the individual shareholder. While they are separate tracks, the court can order a derivative action to proceed as part of an unfair prejudice petition under Section 238(2)(b).",
      },
      {
        type: "heading",
        level: 3,
        text: "1.1. Proof of a Prima Facie Case",
      },
      {
        type: "paragraph",
        text: "The applicant is required to prove that he or she has a cause of action that has reasonable success prospects. This ratio can be found in the case of Isaiah Waweru Ngumi & 2 others v Muturi Ndungu [2] eKLR, where the judge held that for the High Court to grant leave and allow a derivative action, the shareholder must have precisely particularised the allegations. When the allegations disclose misconduct like corporate mismanagement or waste of assets, revealing a sufficient cause of action that will benefit the company if proven, then the court will most likely make an order granting leave to allow a derivative action.",
      },
      {
        type: "heading",
        level: 3,
        text: "1.2. Actions Involving Fraud on the Minority",
      },
      {
        type: "paragraph",
        text: "While the 2015 Act moved away from the more rigid common law exceptions approaches, the courts will more likely intervene and allow derivative claims when:",
      },
      {
        type: "list",
        items: [
          "The wrongdoers are in control of the company, for instance, as directors of the company or controlling shareholders: If the directors or majority shareholders (or both) who are liable for committing the wrong are the same people who are refusing to allow the company to sue, the courts will most definitely intervene. This situation brings a compelling rationale for the Judge to interfere and allow the derivative action on behalf of the company. For instance, when a director diverts company funds, but he controls the majority as a shareholder and hence uses the control to avoid any liability to restitution of company property.",
          "Breach of Fiduciary Duties under the Act or Common Law: This is a cause of action that arises out of the acts or intended proposed action of the directors. The main category of causes of action pertains to breach of duty, breach of trust, negligence or default by directors under Section 238(3).",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "1.3. Promoting the Success of the Company",
      },
      {
        type: "paragraph",
        text: "The Judge is required to apply a hypothetical director test (as per section 241). The court will reject the derivative claim when it is shown that a person acting in a manner that aligns with the duty of promoting the company's success (as per section 143) would not have continued with or brought the claim.",
      },
      {
        type: "paragraph",
        text: "If the Judge determines that a reasonable director of the company would consider the litigation as being beneficial to the long-term business interest of the company, the court will most definitely approve the derivative claim.",
      },
      {
        type: "heading",
        level: 3,
        text: "1.4. Failure of Internal Mechanisms",
      },
      {
        type: "paragraph",
        text: "Internal management mechanisms play a very important function in the running of the affairs of the company. It allows the shareholders and the directors to settle disputes and deal with deadlock. However, if the member of the company is able to prove that the company failed to address or pursue the case properly using the board or the internal mechanisms of dispute resolution, then the court is likely to approve the derivative claim.",
      },
      {
        type: "paragraph",
        text: "Some of the examples where this happens pertain to instances when profits of the company are not declared, or dividends are withheld without any appropriate justification, the finances of the company are not disclosed to the minority members, and when the company assets or equipment are being used for personal gains of the directors or third parties related to directors.",
      },
      {
        type: "heading",
        level: 3,
        text: "1.5. Good Faith of the Applicant",
      },
      {
        type: "paragraph",
        text: "The Judge must be satisfied that the shareholder has brought the claim without any bad faith. If the claim is not abused on good faith, and the claim is primarily out of personal animosity, personal vendettas or hidden agendas, such as seeking to get a higher price for the shares, that will be considered as an abuse of the court process, such a claim will be dismissed.",
      },
      {
        type: "paragraph",
        text: "The Court in David Langat v St Luke’s Orthopaedic & Trauma Hospital Limited & 2 Others [3] eKLR, the Judge held that derivative claims trace their origin under equitable maxims, such that the applicant shareholder must come with clean hands with conduct that is not tainted. If the applicant shareholder was also part of the problem leading to the said claim, the court cannot allow such a cause of action.",
      },
      {
        type: "heading",
        level: 3,
        text: "1.6. Procedural Flexibility (Substance over Form)",
      },
      {
        type: "paragraph",
        text: "The process of bringing a derivative claim is that the leave stage comes first, then the substantive stage of the claim. However, recent jurisprudence, including the Court of Appeal decision in Raindrops Limited & 3 others v Nzioka [4], clarifies that contemporaneous filing is allowed. This means that filing the main claim at the same time as the application for leave is not fatal. The Judge is permitted to grant leave post commencement to save the main derivative claim from being dismissed, as long as the claim is valid and meets the threshold under the law.",
      },
      {
        type: "paragraph",
        text: "In cases of misjoinder, the courts have discretion to allow a claim to continue even when the company is incorrectly joined to be a defendant, as long as substantive justice justifies that.",
      },
      {
        type: "paragraph",
        text: "Courts have become lenient in allowing leave to the members. Leave can be sought after filing the suit to prevent injustice and also to allow substantive justice to prevail instead of technicalities.",
      },
      {
        type: "paragraph",
        text: "The case of Mohamedin Mohamed & another v Ibrahim Ismail Isaak & another [5] KEHC 7313 (KLR) is a good example. In this case, the Plaintiffs (minority shareholders) sued the Defendants (directors and majority shareholders) of Hish Company Limited. The minority shareholders alleged that the majority had:",
      },
      {
        type: "list",
        items: [
          "Failed to declare profits or pay dividends despite completing several projects.",
          "Failed to hold Annual General Meetings (AGMs) since 2018.",
          "Withheld financial records and audited accounts since 2015.",
          "Fraudulently siphoned company funds and misused company equipment for personal gain.",
        ],
      },
      {
        type: "paragraph",
        text: "The court focused on the shift from the old common law rule in Foss v Harbottle (which generally prevented individuals from suing for wrongs done to a company) to the new statutory derivative action.",
      },
      {
        type: "paragraph",
        text: "The court held that the Companies Act, 2015, fundamentally changed the law. The requirement to fit into specific common law exceptions was replaced by broad judicial discretion. The court's primary role now is to decide whether to grant permission (leave) for the suit to continue based on whether it is in the company's best interest.",
      },
      {
        type: "paragraph",
        text: "The Defendants argued the suit should be struck out because the Plaintiffs did not seek the court's leave before filing the suit. However, the court took a substantive justice approach, ruling that:",
      },
      {
        type: "list",
        items: [
          "Leave can be sought after the suit has commenced.",
          "The court will not dismiss a genuine claim on a technicality if the company needs protection from delinquent directors.",
        ],
      },
      {
        type: "paragraph",
        text: "The court found that the Plaintiffs had particularised their allegations of mismanagement and breach of duty. Since these allegations were not effectively controverted by the Defendants, they raised a prima facie case warranting a full trial.",
      },
      {
        type: "paragraph",
        text: "This case is frequently cited for the principle that procedural technicalities (like the timing of a leave application) should not override the need to protect a company from insider abuse. It clarifies that a derivative action is a tool of accountability designed to ensure redress for the corporation, even when the wrongdoers are the ones in control of it.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Instances When the Courts Approve Derivative Claims",
      },
      {
        type: "heading",
        level: 3,
        text: "2.1. Scope of Section 238",
      },
      {
        type: "paragraph",
        text: "Some of the instances when the court can approve a derivative action on behalf of the company include:",
      },
      {
        type: "paragraph",
        text: "Section 238(3) of the Act limits derivative claims to key specific types of misconduct. A derivative cause of action can only be brought in respect of a cause of action which arises from default, negligence, breach of trust and breach of duty. Such a claim can be commenced against a director, or another person (a third party who assisted in the breach), or both. This claim can incorporate various remedies, like damages and equitable remedies like restitution, tracing, and accounting.",
      },
      {
        type: "heading",
        level: 3,
        text: "2.2. Specific Examples & Qualifying Instances",
      },
      {
        type: "paragraph",
        text: "According to section 238 of the Act and various Kenyan cases (e.g., Mohamedin Mohamed v Ibrahim Ismail Isak and Isaiah Waweru Njumi v Muturi Ndungu), the following specific examples qualify for a derivative action:",
      },
      {
        type: "list",
        items: [
          "The Misappropriation of the Company Assets by the Directors and their Associates - When company directors divert or misuse company funds, assets or property to themselves or associated companies or individuals, then this justifies the bringing of a derivative action. This can happen when the company director uses company money to buy personal vehicles or even transfers company property, like company land or vehicles, to his associates or family.",
          "The Failure to Declare Dividends or Profits due to Fraud - Under the law, dividend policy is often the prerogative of the management and hence directors can choose whether to pay dividends or not. However, if the directors are diverting company profits and money so as to avoid paying dividends, then it will become a derivative claim. The court will not allow any derivative claim simply based on failing to declare or pay a dividend. A good case example is when the company directors allege that there was no profit made by the company, and yet the directors pay themselves very high consultant fees, which are equivalent to the profits which were made by the company.",
          "Breach of Fiduciary Duties under the Statute - Under sections 140–147, the law outlines the duties of the directors of the company. The law allows that such specific duties, when violated and the company refuses to pursue appropriate remedies because it is controlled by the wrongdoer directors, then a derivative action lies. This can occur when:",
        ],
      },
      {
        type: "paragraph",
        text: "Conflict of Interest (Section 146): A director awards a lucrative supply contract to a firm they secretly own without disclosing the interest.",
      },
      {
        type: "paragraph",
        text: "Promoting Success of the Company (Section 143): A director intentionally sabotages a company contract to help a competitor in which they hold shares.",
      },
      {
        type: "paragraph",
        text: "d, Continued Failure to Sue a Third Party - If a third party breaches an agreement with the company, but the company directors reject or refuse to sue because they have a business or personal connection with that party, then a member is entitled to bring a derivative claim. An example here is when a contractor hired by the company fails to finish a company construction project, but the board of directors, being friends or related to the contractor, refuses to file or seek damages for breach of the contract. The minority shareholder can file for damages through a derivative cause of action on behalf of the company.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Case Law",
      },
      {
        type: "paragraph",
        text: "In the decision of Ghelani Metals Limited & 3 others v Elesh Ghelani Natwarlal & another [6] eKLR states that:",
      },
      {
        type: "paragraph",
        text: "“a mechanism which allows shareholder(s) to litigate on behalf of the corporation often against an insider (whether a director, majority shareholder or other officer) or a third party, whose action has allegedly injured the corporation.”",
      },
      {
        type: "paragraph",
        text: "Thus, shareholders use derivative actions to bring accountability when the corporate governance structure fails.",
      },
      {
        type: "paragraph",
        text: "In the case of Joseph Munyoki Nzioka v Raindrops Limited & 3 others [1] eKLR, the High Court has emphasised that a derivative action is a representative suit where the company is the true beneficiary of any relief granted. It held that. A derivative claim is one brought by a member of a company in respect of a cause of action vested in the company and seeking relief on behalf of the company. Minority shareholders have locus standi to sue where directors or majority shareholders engage in conduct involving negligence, default, breach of duty or breach of trust to the detriment of the company. The company will be made a party to the suit as the defendant.",
      },
      {
        type: "paragraph",
        text: "This is the position as enumerated by Lord A.L. Smith in Spokes vs the Grosvenor and West End Railway Terminus Hotel Company Limited and Others and endorsed in the case of Joseph Munyoki Nzioka v Raindrops Limited & 3 others [1] KEHC 9387 (KLR):",
      },
      {
        type: "paragraph",
        text: "“The proper plaintiff in such an action would obviously be the company; but in the circumstances existing, this is not possible for the impeached directors who have the controlling power in the company, do not assent to the company being made plaintiffs. To obviate this difficulty, it has for many years been the practice of the court of chancery in circumstances such as the present, to make the company parties to the action as defendants in which action the plaintiff shareholder asks for an order.",
      },
      {
        type: "paragraph",
        text: "In the case of Sultan Hasham Lalji and 2 Others vs Ahmed Hasham Lalji and 4 Others [7] eKLR, it was held as follows:-",
      },
      {
        type: "paragraph",
        text: "“It is the minority shareholders that are availed to the protection by the exceptions since generally majority shareholders exercise powers of the Company and control its affairs.”",
      },
      {
        type: "paragraph",
        text: "Further in Altaf Abdulrasul Dadani Vs. Amini Akberazi & 3 Others, Nairobi (Milimani) Hccc No. 913 of 2002 [8] 1 KLR 95, Mwera, J (as he then was) stated as follows:-",
      },
      {
        type: "paragraph",
        text: "“By derivative suits, the minority shareholders (s) feeling that wrongs have been done to the company which cannot be rectified by the internal company mechanisms like meetings and resolutions, because the majority shareholders are in control of the company, come to court as agents of the ‘wronged’ company to seek reliefs or relief for the company itself, all the shareholders including the wrong doers, and not for the personal benefit of the suing minority shareholders (s)….. it is a cardinal principle in company law that it is for the company and not the individual shareholder to enforce rights and actions vested in the company to sue for the wrongs done to it and in the absence of illegality a shareholder cannot bring these proceedings in respect of irregularities in the conduct of the company’s internal affairs in circumstances where the majority are entitled to prevent the bringing of an action in relation to such matters…. However if due to an illegality a shareholder perceives that the company is put to loss and damage but cannot bring an action for relief in its own name, such shareholder can bring an action by way of derivative action… mere irregularity in internal running of a company cannot be a basis for one to bring a derivative suit for such can be rectified by a vote/resolution at the company’s meetings and if a shareholder contemplates using a personal claim of infringement of his rights then a derivative suit will not avail as the relief must be for the benefit of the company…’’ (emphasis added).",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Takeaway",
      },
      {
        type: "heading",
        level: 3,
        text: "4.1. the use of derivative action by shareholders",
      },
      {
        type: "paragraph",
        text: "The derivative action stands as a critical tool for maintaining corporate integrity when those at the helm lose their way. It ensures that a company’s right to seek justice is not held hostage by the very individuals responsible for the harm. By prioritising the health of the business over rigid filing procedures, the law now provides a clear and accessible pathway for minority shareholders to step in as guardians of the corporation. Ultimately, this legal mechanism reinforces the idea that directors are accountable not just to their own interests but to the long-term survival and success of the entity they serve.",
      },
      {
        type: "paragraph",
        text: "The court now functions as a balanced referee, filtering out personal vendettas while opening the door for genuine claims that serve the best interests of the business. This modern approach favours substance over form, meaning that a valid cry for help from a minority member will not be silenced by simple filing errors or procedural technicalities. At its heart, the law now treats accountability as a non-negotiable part of doing business.",
      },
      {
        type: "heading",
        level: 3,
        text: "4.2. Key Takeaway",
      },
      {
        type: "list",
        items: [
          "The company is the primary beneficiary. Even though a shareholder starts the legal process, any compensation or assets recovered belong to the business rather than the individual who filed the suit.",
          "Court permission acts as a gatekeeper. Shareholders must prove their claim is genuine and likely to succeed before the case can move into a full trial.",
          "Substance outweighs technicalities. Recent rulings confirm that minor procedural errors will not stop a valid claim from being heard if it protects the company from internal abuse.",
          "The focus is on business success. Judges use a specific test to determine if a responsible director would find the legal action helpful for the long-term future of the company.",
          "Good faith is non-negotiable. The court will quickly dismiss any case driven by personal grudges or hidden agendas rather than a sincere desire to help the corporation.",
          "All wrongdoers are reachable. A derivative suit can target directors and even outside parties who participated in the negligence or breach of trust.",
        ],
      },
    ],
  },
  {
    title:
      "Shareholder Rights: Minority Shareholder Protection Under Unfair Prejudice Claims",
    slug: "minority-shareholder-protection-unfair-prejudice-claims",
    date: "April 7, 2026",
    category: "Corporate & Commercial Law",
    practiceArea: "Corporate and Commercial Law",
    practiceAreas: ["Corporate and Commercial Law", "Dispute Resolution"],
    tags: [
      "Minority Shareholders",
      "Unfair Prejudice",
      "Corporate Governance",
      "Companies Act",
    ],
    image: "/images/blogs/shareholder-rights.png",
    imageAlt: "Minority shareholder protection and unfair prejudice claims",
    excerpt:
      "How minority shareholders can use unfair prejudice claims under Kenyan company law.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    readTime: "6 min read",
    seoTitle:
      "Shareholder Rights: Minority Shareholder Protection Under Unfair Prejudice Claims | Malika Okubasu & Company Advocates",
    seoDescription:
      "How minority shareholders can use unfair prejudice claims under Kenyan company law.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Unfair and prejudice claim!",
      },
      {
        type: "paragraph",
        text: "Minority shareholder disputes are often where corporate law stops being theoretical and becomes deeply personal. Behind the legal principles are real tensions, breakdowns in trust, and struggles over control, value, and fairness. While the rule of majority control remains central to company law, it is not absolute. The Companies Act, 2015, steps in to ensure that this power is not abused.",
      },
      {
        type: "paragraph",
        text: 'Minority shareholder protections are primarily anchored in the Companies Act, 2015 (“Act”), which modernised the legal landscape by codifying several common law principles established by the courts under English and Kenyan jurisprudence. These protections are aimed at balancing the "majority rule" principle with the need to prevent the abuse of power by directors who are sometimes the controlling shareholders or majority shareholders.',
      },
      {
        type: "paragraph",
        text: "This article examines how the law protects minority shareholders through unfair prejudice claims, focusing on the balance between strict legal rights and the broader concept of legitimate expectations. It highlights how courts in Kenya have moved beyond rigid interpretations of company documents to uphold fairness in commercial relationships.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Protection from Oppression",
      },
      {
        type: "paragraph",
        text: 'Section 780 of the Act allows shareholders to seek court relief if company affairs are conducted in an "unfairly prejudicial" or "oppressive" manner. A member is allowed to petition the High Court if the company’s affairs are being conducted in a manner that is oppressive or unfairly prejudicial to the interests of some or all members.',
      },
      {
        type: "paragraph",
        text: "According to the case of JM Mativo Justice in Velani & 6 others v Naran & 2 others (Petition E002 of 2020) [1] KEHC 75 (KLR) (Commercial and Tax) (21 September 2021) (Judgment):",
      },
      {
        type: "paragraph",
        text: "The categories of conduct which may amount to unfairly prejudicial conduct are not closed. However, common examples of what may constitute unfairly prejudicial conduct are:",
      },
      {
        type: "paragraph",
        text: "a)exclusion from management in circumstances where there is a (legitimate) expectation of participation;",
      },
      {
        type: "paragraph",
        text: "b)the diversion of business to another company in which the majority shareholder holds an interest;",
      },
      {
        type: "paragraph",
        text: "c)the awarding by the majority shareholder to himself of excessive financial benefits; and",
      },
      {
        type: "paragraph",
        text: "d)abuses of power and breaches of the Articles of Association. For example, the passing of a special resolution to alter the Company's Articles may be unfairly prejudicial conduct if such alterations would affect the Petitioner's legitimate expectation that he would participate in the management of the Company. Also, repeated failures to hold AGMs; delaying accounts, and depriving the members of their right to know the state of the Company's affairs may all be unfairly prejudicial to a member's interests.",
      },
      {
        type: "paragraph",
        text: "(Paragraph 16)",
      },
      {
        type: "paragraph",
        text: "Petitions for unfair prejudice often arise from internal corporate conflicts, such as disputes concerning shareholder representation on the board, the scope of management participation, executive compensation structures, and the contentious declaration or withholding of dividends. Furthermore, litigation frequently stems from complex inter-company dealings between subsidiaries and parent entities, as well as actions resulting in the dilution of a minority shareholder's equity, as seen in Ruo v Muthaiga Travel Limited & 4 others [2] KEHC 14558 (KLR). When grievances involve the conduct of directors, practitioners must exercise precise drafting to navigate the legal reality that directors’ duties are primarily owed to the company itself, requiring the petitioner to clearly articulate how those breaches have specifically resulted in unfair prejudice to their individual interests.",
      },
      {
        type: "paragraph",
        text: "The Act allows a broad set of remedies under section 782. The court has discretion to issue remedies and orders such as:",
      },
      {
        type: "list",
        items: ["An order to regulate the company’s future conduct."],
      },
      {
        type: "paragraph",
        text: "b)An order stopping the company from doing something or ordering the company to do something which the shareholders allege not to have been done.",
      },
      {
        type: "list",
        items: [
          "An order preventing the company from altering the articles without the leave of the court.",
          "An order of the majority (or the company) to buy out the minority’s shares at a fair value.",
          "An order issuing authorisation of civil proceedings in the name of the company.",
          "An order to restrain the company from performing certain acts.",
        ],
      },
      {
        type: "paragraph",
        text: 'Courts have held that "fairness" must be judged in the context of a commercial relationship, typically governed by the Articles of Association and any Shareholders\' Agreements. However, the courts recognise that a shareholder\'s interest extends beyond strict legal rights to "legitimate expectations." In the case of Velani & 6 others v Naran & 2 others [2021] KEHC 75 (KLR), the court provided clarity on the standards of conduct:',
      },
      {
        type: "paragraph",
        text: "\"The words 'oppressive' or 'unfairly' enable the court to consider wider equitable considerations and recognise that the member has rights and expectations which are not necessarily included in the Articles of Association.\"",
      },
      {
        type: "paragraph",
        text: "The same court further characterised oppressive conduct:",
      },
      {
        type: "paragraph",
        text: '"Courts have characterised oppressive conduct as that which is burdensome, harsh and wrongful, or which lacks probity and fair dealing."',
      },
      {
        type: "heading",
        level: 2,
        text: "2. Form of Application",
      },
      {
        type: "paragraph",
        text: "In John Muturi Nyaga v Graham Alexander Walsh & 3 Others [3] eKLR, Tuiyott J held that an application under Section 780 should be by way of a petition (rather than a motion) to allow for the substantive interrogation of the applicant’s grievances.",
      },
      {
        type: "paragraph",
        text: "The form of the petition is provided under section 994(1) of the \\English Companies Act 2006. A filing by way of plaintiff is also allowed, but a party cannot file a miscellaneous application. This is because such a filing does not allow the court to address and interrogate the grievances in full.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Role of the Court",
      },
      {
        type: "paragraph",
        text: 'Section 780 allows for intervention even where the rule in Foss v Harbottle would typically discourage courts from interfering in the internal management of a company. The court confirmed that it has the power to intervene when affairs are conducted in a manner that is harsh or "prejudicial.',
      },
      {
        type: "paragraph",
        text: "The court is expected to uphold the equitable expectation of the shareholders. These expectations can be found in the articles and shareholder agreements. According to the decision of Velani & 6 others v Naran & 2 others (Petition E002 of 2020) [1] KEHC 75 (KLR) (Commercial and Tax) (21 September 2021) (Judgment), the courts are allowed to find that members have expectations and rights beyond the articles. This is because the words unfair and oppressive give wider equitable considerations.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Arbitration",
      },
      {
        type: "paragraph",
        text: "The courts have shown that they will respect arbitration clauses found in a company’s Articles of Association. In Lettau vs Paradiso Toys Limited & another (Commercial Petition E002 of 2023) [2] KEHC 3793 (KLR), the court stayed proceedings and referred the matter to arbitration because the Articles contained a mandatory arbitration clause.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Exhaustion of Internal Remedies",
      },
      {
        type: "paragraph",
        text: "While Section 780 is a powerful tool, courts generally expect that shareholders have attempted to resolve the dispute through internal mechanisms (like board meetings or AGMs) unless such attempts would be futile.",
      },
      {
        type: "paragraph",
        text: 'The evolution of minority shareholder protection in Kenya reflects a shift from rigid adherence to internal management rules to a more nuanced, equitable approach. While the landmark rule in Foss v Harbottle originally limited judicial interference in company affairs, the Companies Act, 2015, and recent High Court jurisprudence, such as Velani v Naran, make it clear that "fairness" is the ultimate benchmark. By balancing legal rights with equitable expectations, the law ensures that minority shareholders are not merely silent partners but protected stakeholders in the corporate enterprise. For practitioners and shareholders alike, the key to success lies in precisely articulating how majority actions result in individual prejudice while navigating the procedural preferences for petitions and arbitration.',
      },
      {
        type: "heading",
        level: 2,
        text: "6. Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Legal Foundation: Minority protection is primarily anchored in Section 780 of the Companies Act, 2015, which allows shareholders to petition the court for relief against oppressive or unfairly prejudicial conduct.",
          "Broad Interpretation of Misconduct: Conduct warranting court intervention is not strictly defined but includes exclusion from management, diversion of business, excessive financial benefits for the majority, and failure to hold AGMs.",
          "Legitimate Expectations: Courts look beyond the formal Articles of Association to consider \"equitable considerations,\" protecting a shareholder’s reasonable expectations even if they aren't explicitly written in the company's bylaws.",
          'Range of Remedies: Under Section 782, the court has wide discretion to order remedies, ranging from regulating future conduct and restraining specific acts to the "nuclear option" of forcing a buyout of the minority’s shares at fair value.',
          "Procedural Specifics: Grievances must be filed as a petition rather than a motion to allow for a substantive interrogation of the facts. However, courts will generally respect arbitration clauses if they are included in the company's Articles.",
          "Internal Resolution First: While the court has the power to intervene, shareholders are typically expected to exhaust internal remedies (like AGMs or board meetings) unless doing so would be clearly futile.",
        ],
      },
    ],
  },
  {
    title:
      "An Auctioneer's Commission Is Calculated Based on Actual Goods Attached and Not the Debt Amount",
    slug: "auctioneer-commission-actual-goods-attached",
    date: "April 1, 2026",
    category: "Dispute Resolution",
    practiceArea: "Dispute Resolution",
    practiceAreas: ["Dispute Resolution", "Real Estate, Banking and Finance"],
    tags: ["Auctioneers", "Debt Recovery", "Taxation", "Civil Procedure"],
    image: "/images/blogs/auctioneer-commission.png",
    imageAlt: "Auctioneer commission based on attached goods and debt recovery",
    excerpt:
      "How Kenyan courts calculate auctioneer commissions based on actual attachment rather than the full decretal sum.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-04-01",
    dateModified: "2026-04-01",
    readTime: "6 min read",
    seoTitle:
      "An Auctioneer's Commission Is Calculated Based on Actual Goods Attached and Not the Debt Amount | Malika Okubasu & Company Advocates",
    seoDescription:
      "How Kenyan courts calculate auctioneer commissions based on actual attachment rather than the full decretal sum.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "How are the auctioneer fees calculated?",
      },
      {
        type: "paragraph",
        text: "If an auctioneer receives a letter of instruction or a court warrant but does not carry out an attachment or a sale, their entitlement to fees is significantly limited. Under the Auctioneers Rules, 1997, fees are generally tied to the work actually performed and are based on goods which are proclaimed and attached.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. No Proclamation or Attachment No Commission",
      },
      {
        type: "paragraph",
        text: "If the auctioneer has not reached the attachment stage and the debt is cleared, they cannot bill for commission. However, they can typically only bill for:",
      },
      {
        type: "paragraph",
        text: "Instruction Fees: A flat fee for accepting the instructions and opening the file (usually a few thousand shillings).",
      },
      {
        type: "paragraph",
        text: "Service Fees: If they physically served the warrant on the debtor, they can charge for that service and the related transport.",
      },
      {
        type: "paragraph",
        text: "Disbursements: Any actual costs incurred, such as filing fees paid to the court or search fees at the land/motor vehicle registry.",
      },
      {
        type: "paragraph",
        text: "For example, when the auctioneer only sends warrants, which is essentially receiving the instruction and perhaps opening a file or serving a notice, and the debtor pays the decretal sum, the auctioneer is not entitled to a commission.",
      },
      {
        type: "paragraph",
        text: "It is the case that commission varies depending on whether the property is sold or whether the attachment or repossession is stayed, postponed, or money is tendered after the attachment or repossession but before the sale. It is crucial to look at the calculation and ensure that the correct percentage and formula have been used in the calculation of the auctioneer fees.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. the No Proclamation or Attachment, No Commission Rule",
      },
      {
        type: "paragraph",
        text: "As a general principle, an auctioneer is not entitled to a percentage-based commission (like the 10% or 5% mentioned earlier) unless they have at least proclaimed the goods.",
      },
      {
        type: "paragraph",
        text: "Judicial Principle is that the fees and commissions by an auctioneer are based on the value of goods proclaimed or attached. In National Industrial Credit Bank Limited v S.K. Ndegwa Auctioneer [1] eKLR, the Court of Appeal held that an auctioneer’s charges should be based on the value of the goods attached, not the total debt (decretal sum). If no goods were attached, there is no value upon which to base a commission.",
      },
      {
        type: "paragraph",
        text: "If an auctioneer seeks to charge commission based on the total decretal sum (say Kshs. 2,000,000), yet they have only proclaimed or attached goods worth Kshs. 500,000.00, the auctioneer fees will be unlawful.",
      },
      {
        type: "paragraph",
        text: "The auctioneer's billing must be pegged to the work done. If the auctioneer has not proclaimed property, they are only entitled to nominal administrative fees (instruction fees) and out-of-pocket expenses.",
      },
      {
        type: "paragraph",
        text: "For example, when an auctioneer sends a proclamation but does not attach the goods, they cannot bill for transport, security, storage, or associated costs. This is because that is work which has not been done.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Proclamation Equal Attachment",
      },
      {
        type: "paragraph",
        text: "The courts will allow an auctioneer to earn commission as long as they have proclaimed the goods. Once an auctioneer follows the procedure under Rule 12(b) of the Auctioneers Rules and serves a proclamation notice, the goods are considered legally attached and seized by the law, even if the auctioneer does not physically remove them from the premises.",
      },
      {
        type: "paragraph",
        text: "The basis for the commission must be calculated based on the actual value of the goods attached and should not be based on the total decretal sum.",
      },
      {
        type: "paragraph",
        text: "The court rejected the practice of charging commission on the total debt, noting that an auctioneer should only be paid for the specific assets they have successfully brought under the custody of the law.",
      },
      {
        type: "paragraph",
        text: "In the case of National Industrial Credit Bank Limited v S. K. Ndegwa Auctioneer, the court held that:",
      },
      {
        type: "paragraph",
        text: "“I hold that under our laws today once goods or property have been proclaimed under rule 12 (b) and the prescribed procedure followed, the process of attachment takes effect and it does not subsequently matter at what stage it is terminated once goods are proclaimed they become attached and seized by the law.",
      },
      {
        type: "paragraph",
        text: "The auctioneer from this stage is entitled to charge his commission under Rule 11 paragraph 4”.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Protection Against Phantom Fees",
      },
      {
        type: "paragraph",
        text: "If an auctioneer sends you a high bill for a warrant they never executed, you have the right to make a request for a Taxed Bill of Costs. The auctioneer is required to present their bill to the Court Registrar (Taxing Master) to prove the work was done. If the auctioneer taxes based on an amount that is higher than the value of the goods attached, you can challenge their bill and have it reviewed by the Taxing Master. This can happen if they levy fees based on a decretal sum, yet the value of the goods attached is significantly less.",
      },
      {
        type: "paragraph",
        text: "In Oscar Otieno Odongo t/a Odongo Investment Auctioneers v Diamond Trust Bank Kenya Limited (Civil Appeal 127 of 2021) [2] KEHC 15050 (KLR) (31 October 2022) (Judgment), the court reaffirmed that fees are confined to the Fourth Schedule and must be based on the actual value of goods attached. It explicitly stated that the auctioneer is remunerated for the work actually performed, and not hypothetical scenarios based on the debt amount.",
      },
      {
        type: "paragraph",
        text: "Further in Kindest Auctioneers v Orbit Chemicals Industries Limited (Miscellaneous Appeal E038 of 2023) [3] KEELC 21782 (KLR) (13 November 2023) (Ruling), the Taxing Master has assessed the Bill based on the value of the goods attached, about (Kshs. 1,966,846.52. The court dismissed an appeal against a Taxing Master’s assessment, upholding the principle that the commission of an Auctioneer is to be based upon the value of goods attached and not on the decretal sum.",
      },
      {
        type: "paragraph",
        text: "Opportunity Kenya v Wanjalal t/a Mako Auctioneers (Civil Appeal 67 of 2020) [4] KEHC 3296 (KLR) (19 March 2024) (Judgment), the court remitted a bill of costs for reassessment, reiterating that a Taxing Master must provide clear reasons and ensure that fees are tied to the actual value of goods attached rather than an arbitrary percentage of the decretal sum.",
      },
      {
        type: "heading",
        level: 2,
        text: "6. Key Takeaway",
      },
      {
        type: "paragraph",
        text: "The law on auctioneer’s fees is neither abstract nor discretionary. It is structured, evidence-based, and firmly anchored in the work actually performed. The jurisprudence emerging from Kenyan courts consistently affirms a single, controlling principle: commission is earned on attachment, and calculated strictly on the value of the goods attached, not the decretal sum.",
      },
      {
        type: "paragraph",
        text: "An auctioneer cannot convert a mere instruction, service of process, or unexecuted warrant into a revenue-generating exercise through inflated or speculative billing. Without proclamation, there is no attachment; and without attachment, there is no legal basis for commission. Even where attachment is effected through proclamation, the valuation of the attached goods remains the ceiling upon which any commission must be computed.",
      },
      {
        type: "paragraph",
        text: "The courts have also drawn a clear line against phantom fees, reinforcing the role of the Taxing Master as a gatekeeper to ensure that auctioneers are compensated fairly, but only for verifiable work done within the framework of the Auctioneers Rules, 1997.",
      },
      {
        type: "heading",
        level: 2,
        text: "Summary",
      },
      {
        type: "list",
        items: [
          "No Attachment, No Commission: An auctioneer’s entitlement to commission only arises upon proclamation or attachment.",
          "Value-Based Billing: Commission must be calculated based on the actual value of goods attached, not the decretal sum.",
          "Work Done Principle: Fees are strictly tied to demonstrable actions such as instruction, service, or attachment, not assumptions or anticipated outcomes.",
          "Proclamation is Sufficient: Legal attachment occurs upon proper proclamation under Rule 12(b), even without physical seizure.",
          "Right to Challenge Fees: Parties retain the right to demand taxation of a bill of costs and challenge any fees that are excessive, unsubstantiated, or improperly calculated.",
        ],
      },
    ],
  },
  {
    title: "What the Courts Consider Before Ordering a Paternity DNA Test",
    slug: "paternity-dna-test-court-considerations-kenya",
    date: "March 21, 2026",
    category: "Family Law",
    practiceArea: "Family Law and Succession Planning",
    practiceAreas: ["Family Law and Succession Planning", "Dispute Resolution"],
    tags: ["Paternity", "DNA Testing", "Children Law", "Family Law"],
    image: "/images/blogs/paternity-dna-test.png",
    imageAlt:
      "Court considerations before ordering paternity DNA tests in Kenya",
    excerpt:
      "What Kenyan courts consider before ordering paternity DNA tests, including child welfare, evidence, good faith, and privacy.",
    authorSlug: "oduor-khamati",
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
    readTime: "13 min read",
    seoTitle:
      "What the Courts Consider Before Ordering a Paternity DNA Test | Malika Okubasu & Company Advocates",
    seoDescription:
      "What Kenyan courts consider before ordering paternity DNA tests, including child welfare, evidence, good faith, and privacy.",
    content: [
      {
        type: "paragraph",
        text: "Paternity testing in Kenya.",
      },
      {
        type: "paragraph",
        text: "Paternity testing is often assumed to be an absolute right for any man seeking to confirm or deny his biological link to a child. There is no better way to confirm that a child is one's than determining if it shares the same genetic material as oneself.",
      },
      {
        type: "paragraph",
        text: "However, in the Kenyan legal landscape, biology does not always trump the law. While courts will generally not force a man to be responsible for a child not his, the same courts can make an order preventing DNA testing. While Article 53(1)(e) of the Constitution grants a child the right to parental care and protection, which includes knowing one's parents, the courts also have the responsibility of shielding families from paternity fishing expeditions that may cause more harm than good.",
      },
      {
        type: "paragraph",
        text: "Kenyan courts exercise significant discretion in granting DNA orders. An applicant does not have an automatic right to such an order; rather, they must meet a specific evidentiary and legal threshold while overcoming high constitutional hurdles. The courts also consider several factors before granting an order for DNA testing.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. the Best Interest of the Child and Refusal by the Respondent Violates the Rights of the Child to Know the Father",
      },
      {
        type: "paragraph",
        text: "In MW v KC (Miscellaneous Application 105 of 2004) [2005] KEHC 3172 (KLR) (29 September 2005) (Ruling) MW v KC [2005] eKLR, the court established four key conditions that must be met for a court to compel DNA.",
      },
      {
        type: "paragraph",
        text: "To succeed, the applicant must meet the following:",
      },
      {
        type: "list",
        items: [
          "There is sufficient cause for seeking the order by showing that, in the circumstances of the case, there was a likelihood that the respondent could be the father of the child;",
          "that the respondent’s refusal to submit to a DNA test had violated the child’s right to know his father;",
          "that the respondent’s refusal to take the DNA test was unreasonable because it had deprived the child of the possible enjoyment of the rights and benefits enshrined in sections 4 and 19 of Part II of the Children Act, 2001;",
          "that the court had jurisdiction under the Act to compel the respondent to take the DNA test",
        ],
      },
      {
        type: "paragraph",
        text: "These have been discussed in detail below:",
      },
      {
        type: "paragraph",
        text: "Under Article 53(2) of the Constitution and Section 4 of the Children Act, the best interest of the child is the core consideration in any matter involving a minor. Courts have the power to deny a DNA test if the process or the potential result is deemed detrimental to the child’s well-being.",
      },
      {
        type: "paragraph",
        text: "Preserving stability for the child is a very crucial factor that the court focuses on. If a child has known one father figure since birth and a sudden DNA test threatens to destabilise their emotional and social identity, the court may rule that maintaining the status quo is in the child's best interest.",
      },
      {
        type: "paragraph",
        text: "Conversely, in many cases, the court will order the DNA test because it is in the best interest of a child to know their parents. This is beneficial, as the courts are able to protect the interests of the child and their welfare better, hence upholding the principle of the best interest of the child.",
      },
      {
        type: "paragraph",
        text: "In the case of MW v KC [2005] eKLR, Justice GBM Kariuki held that:",
      },
      {
        type: "paragraph",
        text: "In the present case, the respondent was in “a come we stay relationship” during which the applicant allegedly made her pregnant. In the circumstances, there is a likelihood that the respondent could be the father of the child. Having had a relationship with the applicant, albeit for a short span of time during which the child was conceived, it is unreasonable for the respondent to turn his back on the child and escew his parental responsibility merely because he was born out of wedlock and there is no DNA test to prove that he is the father. The child is entitled to know if the respondent is the father and his refusal to take a DNA test is not only unreasonable but has also denied the child the possible enjoyment of the rights under the Act. It would not be unreasonable in the circumstances to infer that perhaps the refusal by the respondent to submit to DNA test is borne out of fear on his part that he could be the father of the child. It is my view that sufficient cause has been shown why the respondent should be compelled to undergo a DNA test so as to determine the paternity of the child. (paragraph 14)",
      },
      {
        type: "paragraph",
        text: "In the decision of C.M.S V I.A.K CONSTITUTIONAL APPLICATION NO. 526 OF 2008 that:",
      },
      {
        type: "paragraph",
        text: "In determining a matter such as this, the court must of necessity weigh the competing right of the child and the Petitioner who is alleged to be the biological father. The right of the child to parental care takes precedence, in my view, particularly in light of the cardinal principle set out in Article 53(2) that in matters such as this, the paramount consideration is the best interests of the child. [Cited in MW v KC [2005] eKLR [G K M v A N (Miscellaneous Civil Application 59 of 2016) [2016] KEHC 1202 (KLR) (22 November 2016) (Ruling)]",
      },
      {
        type: "paragraph",
        text: 'In GKM v AN [2016] eKLR, the court noted that while DNA is vital for conclusive determination, it must be balanced against the child’s welfare. If a DNA test is sought for "vindictive motives" or to escape parental responsibility that has already been voluntarily assumed, the court may decline the application. Thus, if the respondent\'s refusal to take a DNA test violates the child’s right to know the father, the courts will be inclined to order the test.',
      },
      {
        type: "heading",
        level: 2,
        text: "2. Sufficient Cause for DNA Testing Order",
      },
      {
        type: "paragraph",
        text: 'Courts will not grant DNA orders based on mere suspicion. An alleged man or woman must provide "threshold evidence" that suggests the test is necessary. There may be different factors that courts consider when determining whether a prima facie case for DNA testing exists. For instance, a man may have grounds such as infidelity or the existence of another man with evidence.',
      },
      {
        type: "paragraph",
        text: "A prima facie basis for DNA testing has to be established by a party seeking DNA testing because such a test affects the right to privacy and security of the body. This requirement ensures that courts order a DNA test only when necessary.",
      },
      {
        type: "paragraph",
        text: "A prima facie case for a DNA order is established by the applicant proving a likelihood that the respondent could be the child's father. This may be shown by cohabitation, even if for a short stint, when the child was conceived.",
      },
      {
        type: "paragraph",
        text: "In cases where the father is seeking a DNA testing order to deny paternity, they may be required to show evidence that there is a likelihood that they are not the father. This could be due to evidence of infidelity. The High Court in MW v KC [2005 eKLR held that:",
      },
      {
        type: "paragraph",
        text: "To my mind, so as to succeed in securing the order sought, the applicant must show firstly that there is sufficient cause for seeking the order by showing that in the circumstances of the case there is a likelihood that the respondent could be the father of the child and secondly that the respondent’s refusal to submit to DNA test has violated the child’s right to know his father and thirdly that the respondent’s refusal to take the DNA test is unreasonable because it has deprived the child of the possible enjoyment of the rights and benefits enshrined in sections 4 to 19 of part II of the Act and fourthly that the court has jurisdiction under the Act to compel the respondent to take the DNA test. (paragraph 9).",
      },
      {
        type: "paragraph",
        text: "If there is no basis laid down for a DNA test, the court must reject it. It is also the case that if the best interest of a child favours ordering a DNA test, then the court will make such an order. In GKM v AN [2016] KEHC 1202 (KLR), the court held that:",
      },
      {
        type: "paragraph",
        text: "Accordingly, upon meticulous consideration of all factors, if court is satisfied that the scale tilts towards upholding the best interest of the child, so be it; and this should not be seen as an act of discrimination or a contemptuous treatment of the right of privacy and security of body of the Applicant as the lesser or lighter; but judicial decision aimed at meeting the ends of justice. It is also true that the DNA Testing could also be refused because no basis has been laid for it especially where there is no sufficient nexus that is shown to exist or to have existed between the Applicant and Respondent as to justify a conclusion on prima facie basis that biological relationship between the Applicant and the child is a real possibility. On the novel balancing act of two competing rights of the parties, see a perfect analogy in the case of ABSALOM DOVA vs. TARBO TRANSPORTERS [2013] eKLR that;",
      },
      {
        type: "paragraph",
        text: "‘’The discretionary relief of stay of execution pending appeal is designed on the basis that no one would be worse off by virtue of an order of the court; as such order does not introduce any disadvantage, but administers the justice that the case deserves. This is in recognition that both parties have rights; the Appellant to his appeal which includes the prospects that the appeal will not be rendered nugatory; and the decree holder to the decree which includes full benefits under the decree. The court in balancing the two competing rights focuses on their reconciliation which is not a question of discrimination’’. (Paragraph 10)",
      },
      {
        type: "paragraph",
        text: 'Further in the decision of ANM v FPA [2021] eKLR, the court emphasised that DNA test orders are akin to interim injunctions. The applicant must show a prima facie case with a high probability of success. If the applicant fails to provide evidence of a relationship or reasons for doubt beyond "curiosity," the order may be denied. In MKK v LGI [2021] KEHC 13126 (KLR), the court held that:',
      },
      {
        type: "paragraph",
        text: "Having laid the above basis, I now come to the question whether the applicant has made out a prima facie case, which deserves the court’s order against the respondent for a DNA test. The duty to convince the court on the need to order the test remained with the applicant and the standard was that on a balance of probabilities. It was never the duty to prove paternity at this stage. Here what needs proof to the satisfaction of the court is whether there is eminent need to establish paternity so that the claim on behalf of the child can be pursued. (paragraph 11)",
      },
      {
        type: "paragraph",
        text: "Some of the instances when the courts may order DNA testing are when there are allegations of the child being born out of wedlock and the putative father has denied paternity. This affects the rights of a child to enjoy proper parental upbringing, health care, and good education. See the case of MW v KC [2005] eKLR, where it was held that:",
      },
      {
        type: "paragraph",
        text: "Protection of the law in my view includes the right of the child to realize the benefits conferred by the Act which are specifically set out in Part II (of the Act). If the child cannot enjoy proper parental upbringing, health care, and good education because the child was born out of wedlock, and because the putative father has denied paternity (even where the parties have lived in a “come we stay relationship” and is therefore not legally bound to meet his parental responsibility) then the provisions of the Act affording the child protection become a dead letter unless the courts are prepared to compel putative fathers to undergo a DNA test to determine paternity. (paragraph 12).",
      },
      {
        type: "heading",
        level: 2,
        text: "3. the Application Must Be in Good Faith",
      },
      {
        type: "paragraph",
        text: "Because of the likelihood of abuse by parties who may likely bring their marital and love relationship troubles to the affairs of the child, the courts are vigilant when granting an order for compulsory DNA. The court, in exercising its discretionary power to grant or not to grant that relief, ought to ensure sine quo non;",
      },
      {
        type: "list",
        items: [
          "that the application under section 22 of the Children Act, 2001, was made in good faith;",
          "that there were good grounds for making it, that is to say, sufficient cause shown; and",
          "that the application was not actuated by malice or designed to economically exploit or embarrass, or was otherwise an abuse of the process of the court.",
        ],
      },
      {
        type: "paragraph",
        text: "In paragraph 15 of the decision MW v KC [2005] eKLR, Justice GMB Kariuki rules that:",
      },
      {
        type: "paragraph",
        text: "But this interpretation can be open to abuse. Therefore, in exercising its discretionary power to grant or not to grant this relief, the court will not lose sight of the fact that there is a real likelihood of abuse and must therefore guard against it, but always ensuring that the imperative need to see that the best interest of the child is secured is not relegated. (Paragraph 15)",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Balancing Rights to the Right to Privacy and Human Dignity and the Best Interests of a Child",
      },
      {
        type: "paragraph",
        text: 'A DNA test is not a minor procedural step; it is a physical intrusion. It thus affects Article 31 (Right to Privacy) and Article 28 (Human Dignity) of the Constitution, which protects individuals from being forced to undergo medical procedures without a compelling legal basis. Bodily integrity is protected under the Constitution under the rights to privacy and protection of human dignity. Compelling a person to provide a buccal swab or blood sample is a limitation of their constitutional rights. For a court to order this, the applicant must show that the limitation is "reasonable and justifiable in an open and democratic society" under Article 24.',
      },
      {
        type: "paragraph",
        text: "In SWM v GMK [2012] eKLR, Justice Majanja held that ordering a respondent to undertake a DNA test is an intrusion of their right to bodily security, integrity, and privacy. Without a strong prima facie case, the court will protect the individual’s right to refuse.",
      },
      {
        type: "paragraph",
        text: "The courts are likely to limit an adult's right to bodily integrity and privacy if the courts considers that it is in the best interest of the child. In the case of PKM V Senior Principal Magistrate Children's Court At Nairobi & Another [2014] eKLR, the court refused to protect the Petitioners rights, and ordered a DNA test. The court held that:",
      },
      {
        type: "paragraph",
        text: "I agree and while I would be averse to classifying rights in order of priority, there is no doubt in my mind that between the Petitioner's inconvenience at being subjected to DNA testing and the need to conclusively determine the paternity of the child, in the child's interest and certainly in the Petitioner's interest, the child's interest must prevail. For the Petitioner, it would be a minor inconvenience if he attends to DNA testing once but for a child not to know its parents and benefit from their protection and care, the damage may linger for years to come. I choose to protect the baby as opposed to the Petitioner in such circumstances. It would have been very different if the person seeking DNA testing is another adult for the sake of knowing his parentage but the Constitution specifically protects a child and I am upholding that principle.",
      },
      {
        type: "paragraph",
        text: "The courts do not treat DNA casually. The courts have the obligation of balancing the interests and rights of the parties when deciding. There must be an eminent need which justifies the DNA order. Thus, the courts may consider whether or not it is possible for it to reach the truth without invoking such a test.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Conclusion and Takeaway",
      },
      {
        type: "paragraph",
        text: "Paternity disputes sit at the intersection of science, law, and human relationships, and Kenyan courts have made it clear that DNA evidence, while powerful, is not determinative on its own. The decision to compel a DNA test is ultimately a judicial balancing exercise grounded in constitutionalism, evidentiary thresholds, and, above all, the best interests of the child. Courts will not permit DNA testing to be weaponised as a tool for harassment, avoidance of responsibility, or speculative inquiry. Instead, they insist on a disciplined legal approach that safeguards both the dignity of individuals and the welfare of the child.",
      },
      {
        type: "paragraph",
        text: "From the jurisprudence, several practical takeaways emerge for litigants and practitioners:",
      },
      {
        type: "paragraph",
        text: "There is no automatic right to DNA testing. An applicant must establish sufficient cause and a credible factual foundation before the court will intervene. Mere suspicion or curiosity is legally insufficient.",
      },
      {
        type: "paragraph",
        text: "The best interests of the child remain paramount. Where a conflict arises between competing rights, courts will consistently prioritise the child’s welfare, including their right to identity, parental care, and social stability.",
      },
      {
        type: "paragraph",
        text: "Refusal to undergo DNA testing is not neutral. In appropriate cases, it may be construed as unreasonable and may support an inference in favour of ordering the test, particularly where it undermines the child’s rights.",
      },
      {
        type: "paragraph",
        text: "Good faith is critical. Applications perceived as vindictive, opportunistic, or abusive of court process are likely to fail, regardless of the underlying dispute.",
      },
      {
        type: "paragraph",
        text: "Constitutional rights are carefully balanced, not ignored. The right to privacy and bodily integrity will only be limited where there is a clear, justifiable, and proportionate basis for doing so.",
      },
      {
        type: "paragraph",
        text: "Judicial discretion is decisive. Each case turns on its own facts, and courts retain wide latitude to determine whether a DNA test advances justice or undermines it.",
      },
      {
        type: "paragraph",
        text: "In essence, the Kenyan legal position rejects a purely biological determinism in favour of a rights-based, child-centred framework. For practitioners, the implication is clear: success in DNA-related applications lies not in asserting entitlement, but in demonstrating necessity, legitimacy, and alignment with the broader interests of justice.",
      },
    ],
  },
];

export const getPublishedBlogPosts = () =>
  [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getBlogAuthor = (post: BlogPost) => blogAuthors[post.authorSlug];

export const getDisplayPracticeArea = (post: BlogPost) =>
  post.primaryPracticeArea || post.practiceArea || post.practiceAreas?.[0];

export const getRelatedBlogPosts = (practiceAreaTitle: string, limit = 3) => {
  const related = getPublishedBlogPosts().filter((post) =>
    post.practiceAreas.includes(practiceAreaTitle)
  );

  return related.slice(0, limit);
};
