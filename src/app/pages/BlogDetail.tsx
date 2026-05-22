import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Divider } from "../components/Divider";

const blogPosts: Record<
  string,
  {
    id: number;
    tags: string[];
    title: string;
    excerpt: string;
    author: {
      name: string;
      avatar: string;
      title: string;
    };
    date: string;
    image: string;
    readTime: string;
    content: {
      introduction: string;
      sections: {
        heading: string;
        paragraphs: string[];
      }[];
      conclusion: string;
    };
  }
> = {
  "1": {
    id: 1,
    tags: ["Corporate", "M&A"],
    title: "Navigating Cross-Border M&A in East Africa",
    excerpt:
      "An in-depth analysis of the regulatory landscape and practical considerations for cross-border mergers and acquisitions in the East African Community.",
    author: {
      name: "Brenton Okubasu",
      avatar: "/images/team-members/brenton-okubasu.jpeg",
      title: "Founder and Consulting Partner",
    },
    date: "January 15, 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    readTime: "8 min read",
    content: {
      introduction:
        "The East African Community (EAC) presents unique opportunities and challenges for cross-border mergers and acquisitions. As regional economic integration deepens, understanding the regulatory framework across member states becomes increasingly critical for successful transactions.",
      sections: [
        {
          heading: "Understanding the EAC Regulatory Framework",
          paragraphs: [
            "The EAC operates under a common market protocol that aims to harmonize competition and investment laws across member states. However, each country maintains its own merger control regime, requiring careful navigation of multiple regulatory authorities.",
            "Kenya, Tanzania, Uganda, Rwanda, and Burundi each have distinct competition authorities with varying notification thresholds, timelines, and substantive tests. Companies must assess whether their transaction triggers mandatory notification in one or more jurisdictions.",
            "The EAC Competition Act provides an overarching framework, but enforcement remains primarily at the national level. This dual-layer approach requires sophisticated legal strategy to ensure compliance across all relevant jurisdictions.",
          ],
        },
        {
          heading: "Key Due Diligence Considerations",
          paragraphs: [
            "Conducting thorough due diligence in cross-border transactions requires understanding local corporate structures, land ownership restrictions, and sector-specific regulations. Foreign ownership limitations in certain industries can significantly impact deal structure.",
            "Environmental and social governance (ESG) considerations have become increasingly important. Regulatory authorities now examine the broader impact of transactions on local communities, employment, and environmental sustainability.",
            "Data protection and privacy laws vary significantly across the region. With the implementation of GDPR-inspired legislation in several EAC states, companies must carefully assess data transfer and processing obligations in merger transactions.",
          ],
        },
        {
          heading: "Structuring the Transaction",
          paragraphs: [
            "Transaction structure must balance tax efficiency, regulatory approval requirements, and operational considerations. The choice between share purchases and asset acquisitions can have significant implications for regulatory approval timelines.",
            "Financing structures for cross-border deals often involve multiple currencies and jurisdictions. Understanding foreign exchange controls and repatriation rules is essential for structuring effective payment mechanisms.",
            "Earn-out provisions and deferred consideration arrangements require careful drafting to address currency fluctuations, regulatory changes, and operational integration challenges common in emerging markets.",
          ],
        },
        {
          heading: "Managing Regulatory Approvals",
          paragraphs: [
            "Filing strategies should account for varying timelines across jurisdictions. While some authorities offer expedited review for straightforward cases, complex transactions may require extensive engagement and negotiation.",
            "Coordination with regulatory authorities requires local expertise and relationship management. Early engagement can help identify potential concerns and structure remedies that satisfy competition law requirements.",
            "Sector-specific approvals from telecommunications, banking, or energy regulators may be required in addition to general competition clearance. These parallel approval processes must be carefully managed to avoid transaction delays.",
          ],
        },
        {
          heading: "Post-Merger Integration",
          paragraphs: [
            "Successful integration requires understanding local employment laws, labor union requirements, and employee consultation obligations. Change of control provisions in key contracts must be identified and addressed early in the process.",
            "Integration of corporate governance structures must respect local company law requirements and beneficial ownership disclosure obligations. Board composition and shareholder arrangements should comply with all applicable regulations.",
            "Ongoing compliance monitoring is essential, particularly where competition authorities have imposed conditions on merger approval. Regular reporting and coordination with local legal counsel helps ensure continued compliance.",
          ],
        },
      ],
      conclusion:
        "Cross-border M&A in East Africa offers significant opportunities for companies seeking regional expansion and market consolidation. Success requires sophisticated legal expertise, early regulatory engagement, and careful attention to the unique characteristics of each jurisdiction. As the EAC integration process continues, we expect further harmonization of regulatory requirements, but local knowledge remains essential for navigating the current landscape.",
    },
  },

  "2": {
    id: 2,
    tags: ["IP", "Technology"],
    title: "Protecting Intellectual Property in the Digital Age",
    excerpt:
      "Strategic approaches to safeguarding intellectual property rights in an increasingly digital and connected business environment.",
    author: {
      name: "Brenton Okubasu",
      avatar: "/images/team-members/brenton-okubasu.jpeg",
      title: "Founder and Consulting Partner",
    },
    date: "December 22, 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    readTime: "7 min read",
    content: {
      introduction:
        "The digital transformation of business has fundamentally changed how companies create, use, and protect intellectual property. Traditional IP frameworks must now address challenges including digital piracy, cross-border infringement, and the protection of data-driven innovations that blur conventional IP categories.",
      sections: [
        {
          heading: "Digital Assets as Intellectual Property",
          paragraphs: [
            "Software, algorithms, and databases represent valuable intellectual property that requires multi-layered protection strategies. Copyright protects the expression of code, while patents may cover novel computational methods and business processes.",
            "Trade secret protection remains crucial for proprietary algorithms and business logic. Implement robust confidentiality agreements, access controls, and employee training to maintain secrecy while enabling collaborative development.",
            "Open source licensing strategies require careful consideration. While leveraging open source components accelerates development, incompatible licenses can compromise your ability to enforce proprietary rights in derivative works.",
          ],
        },
        {
          heading: "Trademark Protection in Digital Channels",
          paragraphs: [
            "Trademark enforcement has become more complex as digital channels proliferate. Monitor domain name registrations, social media handles, and app store listings to prevent brand dilution and customer confusion.",
            "Marketplace platforms and search engines require proactive brand protection programs. Implement notice-and-takedown procedures for counterfeit goods and trademark infringement in digital marketplaces.",
            "International trademark protection becomes essential as digital businesses reach global audiences from day one. Develop a phased registration strategy prioritizing key markets while monitoring emerging opportunities.",
          ],
        },
        {
          heading: "Copyright in the Content Economy",
          paragraphs: [
            "User-generated content platforms must carefully structure terms of service to clarify IP ownership and license rights. Balance protecting the platform's commercial interests with respecting creator rights.",
            "Digital rights management (DRM) and technological protection measures provide technical enforcement mechanisms, but must be complemented by legal frameworks and licensing strategies.",
            "Fair use and exceptions to copyright vary significantly across jurisdictions. Companies operating globally must understand how different legal systems balance copyright protection with public interest considerations.",
          ],
        },
        {
          heading: "Cross-Border IP Enforcement",
          paragraphs: [
            "Digital infringement often involves actors in multiple jurisdictions, complicating enforcement. Develop relationships with local counsel in key markets and understand available remedies in different legal systems.",
            "Customs recordation programs enable border authorities to intercept counterfeit goods. While primarily relevant for physical products, these programs increasingly address digital piracy through coordinated enforcement.",
            "Alternative dispute resolution mechanisms, including WIPO arbitration and domain name dispute resolution, offer faster and more cost-effective remedies than traditional litigation for certain types of IP disputes.",
          ],
        },
        {
          heading: "Emerging Technologies and IP",
          paragraphs: [
            "Artificial intelligence challenges traditional IP frameworks. Questions of inventorship, authorship, and ownership of AI-generated works require careful contractual arrangements pending legislative clarity.",
            "Blockchain and NFTs create new mechanisms for establishing provenance and transferring digital rights. While promising, these technologies raise novel questions about the nature of ownership and enforcement in decentralized systems.",
            "The Internet of Things generates massive volumes of data that may constitute valuable trade secrets or inputs for patentable innovations. Implement data governance frameworks that preserve IP rights while enabling innovation.",
          ],
        },
      ],
      conclusion:
        "Protecting intellectual property in the digital age requires combining traditional legal tools with technological solutions and strategic business practices. Companies must move beyond reactive enforcement toward proactive IP strategies that align with digital business models. As technology continues to evolve, staying informed about legal developments and maintaining flexibility in IP strategies will be essential for preserving competitive advantage.",
    },
  },
  "3": {
    id: 3,
    tags: ["Employment", "Labour Law"],
    title: "Remote Work: Legal Considerations for Employers",
    excerpt:
      "A comprehensive guide to employment law compliance and best practices for managing remote and hybrid workforces.",
    author: {
      name: "Susan Anyango",
      avatar: "/images/team-members/susan-anyango.jpeg",
      title: "Associate",
    },
    date: "December 15, 2025",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80",
    readTime: "7 min read",
    content: {
      introduction:
        "The widespread adoption of remote work has created new legal challenges for employers. From tax obligations and labor law compliance to data security and workplace safety, managing distributed teams requires understanding complex and evolving legal frameworks across multiple jurisdictions.",
      sections: [
        {
          heading: "Employment Contracts for Remote Workers",
          paragraphs: [
            "Remote work arrangements must be clearly documented in employment contracts or policy addendums. Specify the employee's designated work location, equipment provisions, expense reimbursement, and expectations for availability and communication.",
            "Cross-border remote work raises questions of governing law and jurisdiction. Determine which country's employment laws apply based on factors including the employee's location, the employer's place of business, and where work is performed.",
            "Termination provisions should address unique aspects of remote work including return of company property, data deletion obligations, and any restrictive covenants that apply post-employment.",
          ],
        },
        {
          heading: "Tax and Social Security Implications",
          paragraphs: [
            "Employers hiring remote workers in new jurisdictions may trigger tax registration and withholding obligations. Consult local tax advisors to understand payroll tax, social security contributions, and permanent establishment risks.",
            "Employee tax residency determines personal income tax obligations and may shift if remote work involves extended periods in different countries. Provide guidance to employees on their reporting obligations and consider tax equalization for international remote arrangements.",
            "Benefits administration becomes more complex with distributed teams. Ensure compliance with mandatory benefits in each jurisdiction while designing equitable compensation packages across different locations.",
          ],
        },
        {
          heading: "Data Protection and Cybersecurity",
          paragraphs: [
            "Remote work increases data security risks. Implement policies requiring encrypted devices, secure network connections, and proper handling of confidential information in home office environments.",
            "Cross-border data transfers may trigger additional compliance obligations under data protection laws. Assess whether remote work arrangements involve transferring personal data to new jurisdictions and implement appropriate safeguards.",
            "Monitoring and surveillance of remote workers must comply with privacy laws and employment regulations. Clearly communicate any monitoring practices and ensure they are proportionate and legally compliant.",
          ],
        },
        {
          heading: "Health, Safety, and Wellness",
          paragraphs: [
            "Occupational health and safety laws may extend to home offices. While employers cannot control the entire home environment, they should provide guidance on ergonomic workstation setup and address identified hazards.",
            "Workers' compensation coverage typically applies to remote work, but proving work-related injuries can be challenging. Document work hours, job duties, and accident reporting procedures to facilitate claims processing.",
            "Mental health and work-life balance require particular attention in remote settings. Implement policies that respect working hours, encourage breaks, and provide access to employee assistance programs.",
          ],
        },
        {
          heading: "Managing Performance and Discipline",
          paragraphs: [
            "Performance management systems must be adapted for remote work. Establish clear, measurable objectives and regular check-ins to ensure accountability without excessive micromanagement.",
            "Disciplinary procedures should be documented and consistently applied to remote workers. Ensure any performance improvement plans or disciplinary actions are properly communicated and documented.",
            "Discrimination and harassment policies extend fully to remote work environments. Train managers on recognizing and addressing misconduct in virtual settings and establish clear reporting mechanisms.",
          ],
        },
      ],
      conclusion:
        "Remote work offers significant benefits for both employers and employees, but requires careful legal planning and ongoing compliance monitoring. As legal frameworks continue to evolve in response to changing work patterns, employers should regularly review their remote work policies with legal counsel. Proactive compliance and clear communication help mitigate legal risks while enabling the flexibility that makes remote work attractive.",
    },
  },
  "4": {
    id: 4,
    tags: ["Real Estate", "Finance"],
    title: "Real Estate Investment Trusts: Opportunities in East Africa",
    excerpt:
      "Exploring the regulatory framework and investment opportunities for real estate investment trusts in the region.",
    author: {
      name: "Susan Anyango",
      avatar: "/images/team-members/susan-anyango.jpeg",
      title: "Associate",
    },
    date: "December 8, 2025",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    readTime: "8 min read",
    content: {
      introduction:
        "Real Estate Investment Trusts (REITs) are emerging as an important vehicle for democratizing access to real estate investment in East Africa. Despite a slow start compared to more developed markets, recent regulatory developments and growing institutional interest suggest REITs will play an increasingly significant role in the region's real estate sector.",
      sections: [
        {
          heading: "The REIT Regulatory Framework",
          paragraphs: [
            "Kenya led the region in establishing a REIT framework with regulations introduced in 2013. The Capital Markets Authority provides oversight, setting requirements for structure, governance, investment restrictions, and distribution obligations.",
            "Uganda and Tanzania have since introduced their own REIT regulations, though market development remains nascent. Rwanda is actively developing its framework as part of broader capital markets development initiatives.",
            "Regulatory requirements typically mandate that REITs invest at least 75% of assets in income-generating real estate, distribute at least 80% of taxable income to investors, and maintain minimum paid-up capital thresholds.",
          ],
        },
        {
          heading: "Tax Advantages and Incentives",
          paragraphs: [
            "REITs benefit from favorable tax treatment designed to eliminate double taxation. While specific regimes vary by jurisdiction, REITs typically enjoy tax exemption at the trust level provided they meet distribution requirements.",
            "Investors receive tax treatment similar to direct real estate ownership, with distributions generally taxed as ordinary income. Withholding tax rates on distributions to foreign investors remain an important consideration for cross-border investment.",
            "Some jurisdictions offer additional incentives for REITs focused on specific sectors such as affordable housing or commercial development in designated economic zones.",
          ],
        },
        {
          heading: "Investment Opportunities and Strategies",
          paragraphs: [
            "Commercial office space in major cities represents the primary focus of existing REITs, capitalizing on growing demand from multinational corporations and regional businesses expanding across East Africa.",
            "Retail and mixed-use developments offer attractive opportunities as consumer spending grows and modern retail formats proliferate. Shopping centers and entertainment complexes provide stable, long-term cash flows suitable for REIT structures.",
            "The affordable housing deficit across the region presents both an opportunity and a challenge. While demand is enormous, questions about rental yields, tenant creditworthiness, and property management capabilities require careful analysis.",
          ],
        },
        {
          heading: "Challenges and Risks",
          paragraphs: [
            "Limited liquidity in secondary markets constrains investor appetite. Stock exchange listing requirements and active market-making mechanisms are essential for developing liquid trading in REIT securities.",
            "Property valuation standards and practices vary significantly, creating uncertainty about asset values and net asset value calculations. Professional valuation capacity needs strengthening across the region.",
            "Currency risk affects cross-border REIT investments and foreign investor returns. While rental income is typically denominated in local currency or USD, currency fluctuations can significantly impact returns.",
          ],
        },
        {
          heading: "Structuring and Governance Considerations",
          paragraphs: [
            "REIT structures must balance regulatory requirements with operational efficiency and investor protection. Trustee selection, REIT manager capabilities, and property manager oversight are critical success factors.",
            "Corporate governance standards for REITs should exceed minimum regulatory requirements. Independent directors, transparent reporting, and robust conflict of interest policies build investor confidence.",
            "Acquisition and development strategies require careful planning within regulatory constraints. Understanding restrictions on development activities, related party transactions, and borrowing limits is essential for strategic planning.",
          ],
        },
      ],
      conclusion:
        "REITs represent an important innovation for East African real estate markets, offering liquidity, diversification, and professional management to investors while providing developers with alternative capital sources. Despite current challenges, the long-term outlook remains positive as regulatory frameworks mature, institutional capacity develops, and investor awareness grows. Success will require patience, strong governance, and realistic expectations about market development timelines.",
    },
  },
  "5": {
    id: 5,
    tags: ["Dispute Resolution", "Arbitration"],
    title: "Arbitration vs. Litigation: Choosing the Right Path",
    excerpt:
      "A practical comparison of arbitration and litigation for resolving commercial disputes in East African jurisdictions.",
    author: {
      name: "Oduor Khamati",
      avatar: "/images/team-members/oduor-khamati.jpeg",
      title: "Managing Partner",
    },
    date: "November 30, 2025",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
    readTime: "7 min read",
    content: {
      introduction:
        "When commercial disputes arise, parties face a critical choice between arbitration and litigation. While arbitration has gained popularity for cross-border disputes, litigation remains relevant in many contexts. Understanding the practical advantages and disadvantages of each forum is essential for making informed decisions about dispute resolution strategy.",
      sections: [
        {
          heading: "Speed and Efficiency Considerations",
          paragraphs: [
            "Arbitration is often perceived as faster than litigation, but this depends heavily on case complexity and party cooperation. Simple disputes may be resolved quickly, while complex multi-party arbitrations can extend for years.",
            "Court systems in East African jurisdictions have improved case management and introduced commercial courts with specialized procedures. Dedicated commercial divisions in Kenya, Tanzania, and Uganda now offer more predictable timelines than general civil courts.",
            "The availability of interim relief differs between forums. Courts have inherent powers to grant interim measures, while arbitral tribunals' authority depends on institutional rules and applicable arbitration laws.",
          ],
        },
        {
          heading: "Cost Analysis",
          paragraphs: [
            "Arbitration costs include institutional fees, arbitrator fees, and venue costs in addition to legal fees. While institutional arbitration provides structure and support, these services come at a premium compared to court filing fees.",
            "Litigation costs are generally more predictable at the outset, though appeals can significantly extend total costs. Consider the likelihood and cost of appellate proceedings when comparing overall dispute resolution expenses.",
            "Cost allocation and fee-shifting rules differ between arbitration and litigation. Understand the applicable rules on cost awards and their impact on overall risk assessment for your dispute.",
          ],
        },
        {
          heading: "Confidentiality and Privacy",
          paragraphs: [
            "Arbitration proceedings are generally confidential, protecting sensitive commercial information and avoiding public disclosure of dispute details. This privacy is particularly valuable for disputes involving trade secrets or business strategies.",
            "Court proceedings are presumptively public, though confidentiality orders may be available in limited circumstances. The public nature of litigation can impact business relationships and reputation.",
            "Consider whether confidentiality is essential for your dispute. In some cases, public precedent from litigation may serve broader business interests or industry objectives.",
          ],
        },
        {
          heading: "Enforceability of Awards and Judgments",
          paragraphs: [
            "Arbitral awards benefit from the New York Convention, facilitating enforcement in over 160 countries. This makes arbitration particularly attractive for cross-border disputes where assets may be located in multiple jurisdictions.",
            "Court judgments require recognition and enforcement procedures that vary significantly by jurisdiction. Reciprocal enforcement treaties exist between some countries, but coverage is less comprehensive than the New York Convention.",
            "Grounds for challenging arbitral awards are limited, providing finality but reducing opportunities for correcting errors. Litigation offers appellate review, which can be viewed as either a benefit or a drawback depending on case circumstances.",
          ],
        },
        {
          heading: "Choice of Decision-Maker",
          paragraphs: [
            "Arbitration allows parties to select arbitrators with specific expertise relevant to their dispute. Technical or industry-specific disputes may benefit from decision-makers with specialized knowledge.",
            "Litigation assigns cases to judges within the court system, providing less control over decision-maker selection. However, commercial court judges develop expertise in business disputes through repeated exposure.",
            "Three-member arbitral tribunals can provide balanced perspectives but increase costs. Consider whether the complexity of your dispute justifies the expense of multiple arbitrators.",
          ],
        },
      ],
      conclusion:
        "Neither arbitration nor litigation is universally superior—the right choice depends on your specific circumstances, priorities, and the nature of the dispute. Consider factors including the need for confidentiality, enforcement requirements, cost constraints, and the importance of precedent when designing dispute resolution strategies. Well-drafted dispute resolution clauses that reflect your business priorities and risk tolerance are essential for protecting your interests should disputes arise.",
    },
  },
};

export function BlogDetail({ id }: { id?: string }) {
  const post = id ? blogPosts[id] : null;

  if (!post) {
    notFound();
  }

  return (
    <div className="lg:pt-[88px] pt-[72px]">
      {/* Back Button */}
      <section className="bg-white py-6 border-b border-brand-border">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-body hover:text-link transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Insights</span>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] lg:h-[500px] object-cover grayscale"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-12 lg:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          {/* Tags */}
          <div className="flex gap-3 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider text-body font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-bold text-heading mb-6 leading-tight font-serif-editorial">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-border">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full grayscale"
              />
              <div>
                <div className="text-sm font-bold text-heading">
                  {post.author.name}
                </div>
                <div className="text-sm text-body">{post.author.title}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-divider" />
            <div className="text-sm text-body">{post.date}</div>
            <div className="h-8 w-px bg-divider" />
            <div className="text-sm text-body">{post.readTime}</div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl leading-relaxed text-heading font-serif-editorial">
              {post.content.introduction}
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <div key={index}>
                {index > 0 && <Divider className="mb-12" />}
                <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-6 font-serif-editorial">
                  {section.heading}
                </h2>
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-lg leading-relaxed text-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 pt-12 border-t border-brand-border">
            <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-6 font-serif-editorial">
              Conclusion
            </h2>
            <p className="text-lg leading-relaxed text-body">
              {post.content.conclusion}
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-soft-blue border-l-4 border-brand-blue">
            <div className="flex items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full grayscale flex-shrink-0"
              />
              <div>
                <div className="text-lg font-bold text-heading mb-1">
                  {post.author.name}
                </div>
                <div className="text-sm text-body mb-3">
                  {post.author.title}
                </div>
                <p className="text-sm text-body leading-relaxed">
                  {post.author.name} serves as {post.author.title} at Malika
                  Okubasu & Company Advocates, specializing in{" "}
                  {post.tags.join(", ").toLowerCase()}. With extensive
                  experience advising clients across East Africa,{" "}
                  {post.author.name.split(" ")[0]} brings practical insights to
                  complex legal challenges.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-body mb-6">
              Need expert legal guidance on this topic?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-light-blue text-white px-8 py-4 hover:bg-light-blue transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
