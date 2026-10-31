# Website audit — 7 October 2026

Site: https://www.mokubasuadvocates.com/  
Scope: current repository, production build, representative deployed HTML/metadata/headers, and deployed homepage browser inspection.

**Overall assessment: the site has a conventional Next.js structure and useful SEO foundations, but it does not currently support an unqualified accessibility or privacy-compliance claim. Answer-engine readiness is partial.**

| Area | Assessment |
| --- | --- |
| Next.js architecture | App Router, static generation, metadata APIs, next/image and next/font are in use. Framework/runtime maintenance and some component patterns need correction. |
| WCAG 2.2 AA | Confirmed source defects in contrast, hidden focusable content and accessible names; deployed viewport caps zoom. Full conformance testing remains outstanding. |
| Privacy | Policies and opt-out controls exist, but third-party loading and policy wording are inconsistent. Legal and operational compliance is not established by this code audit. |
| Security | Several useful headers exist. Unsupported dependencies and a non-enforcing CSP require attention. |
| SEO | Crawlable text, canonicals, metadata, authors and sitemap exist. Schema consistency, social images, dates and references need repair. |
| Answer engines | The site is technically readable and permits crawlers. Reliable citation performance and actual indexing have not been demonstrated. |

Validation: `npm run lint` passed. `npm run build` passed and generated 68 static pages. The public homepage returned HTTP 200. Its browser-rendered DOM confirmed `maximum-scale=1`, six buttons nested in anchors, and GA/Clarity script elements while the first-visit consent banner was awaiting a choice. Production headers included HSTS, nosniff, SAMEORIGIN framing and CSP Report-Only. No site implementation files were changed.

Priorities: **P1** = address first; **P2** = important corrective work; **P3** = quality improvement. These are remediation priorities, not a legal determination or a vulnerability exploitability score.

**1. P1 — Unsupported Next.js release and affected dependency range.**

[package.json:59](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/package.json:59) declares Next 14.2.35, also resolved in the lockfile. Next 14 is outside the current [support policy](https://nextjs.org/support-policy). The installed version falls within the affected range of the official [CVE-2026-23869 advisory](https://github.com/vercel/next.js/security/advisories/GHSA-q4gf-8mx6-v5v3), concerning denial of service at App Router Server Function endpoints.

Upgrade to a currently supported, patched Next release and matching tooling. The audited build's Server Function manifest has no registered actions, and no `use server` declarations were found; exploitability of this specific deployed site was not demonstrated. The unsupported dependency still warrants priority maintenance.

**2. P1 — Privacy statements do not match third-party script loading.**

[layout.tsx:116](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/layout.tsx:116) initializes denied consent defaults, which is a useful safeguard, but [line 136](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/layout.tsx:136) loads Tag Manager unconditionally. The deployed homepage subsequently contained GA and Microsoft Clarity scripts before any consent choice. [The privacy policy:291](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/privacy-policy/page.tsx:291) says Google Analytics/Tag Manager is only active after analytical consent.

This confirms loading before consent; it does not independently establish which cookies or measurement requests were transmitted. [Google's consent documentation](https://developers.google.com/tag-platform/security/concepts/consent-mode) distinguishes basic blocking from advanced mode, which can send measurements without cookies when consent is denied. A denied default alone does not prove that every GTM tag is blocked.

Choose the firm's intended policy, align the implementation and wording, and inspect GTM tag-level consent settings. If the promise is no analytics before opt-in, block analytics/session-replay loading until consent and verify first visit, rejection, acceptance, withdrawal and subsequent visits. Verify Clarity's integration and withdrawal behavior using its [consent documentation](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2).

**3. P1 — Collapsed content exposes invisible keyboard targets.**

[FAQSection.tsx:513](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/FAQSection.tsx:513) uses zero grid rows and opacity to hide answers, while retaining links inside them. [MobileHeader.tsx:335](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/MobileHeader.tsx:335) similarly clips collapsed practice-area links. The deployed accessibility representation also exposed closed FAQ answers and their links.

Use `hidden`, `inert`, or an appropriate disclosure component so closed descendants cannot receive focus. Verify opening/closing and Tab order. This concerns [WCAG 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html); focus-obscuration behavior should also be tested.

**4. P1 — Several contrast states fall below AA requirements.**

[theme.css:8](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/styles/theme.css:8) defines decorative gold `#bc9b62`. It provides approximately 2.62:1 against white and 2.46:1 against the soft background. It is used for focus rings in [Button.tsx:33](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/Button.tsx:33) and [CookieConsent.tsx:171](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/CookieConsent.tsx:171), below the 3:1 non-text requirement. Mobile active navigation uses gold text at [MobileHeader.tsx:302](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/MobileHeader.tsx:302), below even the 3:1 large-text threshold. Cookie Accept All hover styles at [CookieConsent.tsx:183](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/CookieConsent.tsx:183) put white small text on gold, below 4.5:1.

Use darker text gold or navy for text/focus on light backgrounds, and test all hover, checked and focus states. The existing darker `#826a3d` token has approximately 5.15:1 against white. See [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Cookie switch tracks and translucent focus indicators need the same computed-style review.

**5. P2 — Mobile zoom is capped.**

[layout.tsx:107](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/layout.tsx:107) sets `maximumScale: 1`; production emits the corresponding viewport value. Remove this cap. It fails the [W3C viewport ACT rule](https://www.w3.org/WAI/standards-guidelines/act/rules/b4f0c3/), mapped to Resize Text, on browsers that honor the restriction. Some modern mobile browsers override it; that does not make the restrictive configuration appropriate.

**6. P2 — Accessible names omit the visible link labels.**

Phone/email links in [PracticeAreaDetail.tsx:178](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/PracticeAreaDetail.tsx:178) and line 186 have `aria-label` values that replace the visible phone/email. Some map links similarly substitute a generic location label for the displayed address, for example [MobileHeader.tsx:196](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/MobileHeader.tsx:196).

Remove unnecessary labels or include the visible text in the accessible name, preferably first. This affects voice interaction under [WCAG 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

**7. P2 — Invalid interactive nesting and duplicated main landmarks.**

[Home.tsx:136](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Home.tsx:136), [About.tsx:61](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/About.tsx:61) and [NotFound.tsx:15](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/NotFound.tsx:15) wrap the custom Button in Link. Button without `href` produces a button inside an anchor; six examples were confirmed on the live homepage. Render one styled link or use Button's `href` interface.

The [privacy page:30](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/privacy-policy/page.tsx:30) and [cookie page:30](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/cookie-policy/page.tsx:30) also add `main#main-content` inside the same main/id supplied by [Layout.tsx:42](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/Layout.tsx:42). Replace the inner main elements with ordinary wrappers. These are definite HTML/semantic problems; this audit does not assign every instance an automatic WCAG failure without assistive-technology testing. WCAG 2.2 removed Parsing criterion 4.1.1.

**8. P2 — Functional preferences do not control third-party embeds.**

Google Maps embeds in [Home.tsx:438](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Home.tsx:438) and [Contact.tsx:115](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Contact.tsx:115), and Microsoft Bookings in [Bookings.tsx:59](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Bookings.tsx:59), have third-party `src` values independent of the consent state. Maps is lazy-loaded, but lazy loading is not a consent gate.

Use a local placeholder and explicit load action where the chosen privacy model requires it, or accurately explain the services and the legal basis for loading them. The functional rejection control currently does not affect these embeds. Microsoft Bookings and Google Maps should also appear in the relevant service/data disclosures.

**9. P2 — Cookie categories are coupled and preference records are weak.**

Functional and Performance switches both read/write `choices.functional` at [CookieConsent.tsx:267](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/CookieConsent.tsx:267) and [line 311](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/CookieConsent.tsx:311); the emitted performance value also uses that flag at line 91. Users cannot choose them independently despite separate switches. Merge the presentation or implement genuinely separate categories.

[Consent persistence:98](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/CookieConsent.tsx:98) stores bare booleans without a policy version or timestamp and trusts parsed values. Add schema validation, storage error handling, versioning and an intentional renewal policy. Those are governance/reliability improvements; this report does not assert that a particular renewal interval is universally mandated.

**10. P2 — Privacy notice needs an accurate operational data inventory.**

The policy identifies rights, lawful bases, contact details and a general retention principle. However, [its third-party section:279](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/privacy-policy/page.tsx:279) omits the embedded Bookings/Maps flows, retention language remains generic at line 269, and no specific cross-border safeguards are described. The blanket browsing-as-agreement wording at [line 53](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/privacy-policy/page.tsx:53) should not substitute for explicit consent when consent is the chosen basis. Anonymous-data assurances also require validation against actual vendor configuration.

Map the real vendors, data fields, purposes, retention criteria, transfers and safeguards; then revise the notice and collection-point explanations. Confirm the named DPO/contact process, processor agreements, access controls, rights handling and incident procedures operationally. [ODPC's published principles](https://www.odpc.go.ke/rights-of-a-data-subject/) cover transparent processing, limited retention and safeguards for transfers outside Kenya. These gaps justify review; code alone cannot establish a legal violation or certify compliance.

**11. P2 — Content Security Policy does not enforce restrictions.**

[next.config.mjs:75](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/next.config.mjs:75) sends CSP Report-Only with `unsafe-inline` and `unsafe-eval`; production confirms it. This monitors violations but does not block scripts. There is also no reporting destination in that policy.

Develop and validate an enforced production policy, including necessary script/frame/connect domains and appropriate nonce/hash handling. Simply changing the header name could break inline scripts and the Maps/Bookings integrations. See [Next.js CSP guidance](https://nextjs.org/docs/app/guides/content-security-policy).

**12. P2 — Advertised article embedding is blocked by the site's headers.**

[ArticleShareAction.tsx:726](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/ArticleShareAction.tsx:726) offers cross-site iframe embed code, but [next.config.mjs:58](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/next.config.mjs:58) applies `X-Frame-Options: SAMEORIGIN` globally. Browsers will block embedding on another origin. Scope framing restrictions intentionally for `/embed/...` routes or remove the advertised capability; preserve protection on ordinary pages.

**13. P2 — Homepage media and publication bundles need slimming.**

[Home.tsx:70](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Home.tsx:70) loads an unoptimized background/video poster of 4,803,862 bytes and a 4,748,461-byte autoplay MP4. Together the assets represent about 9.55 MB; actual transferred bytes depend on caching/playback/browser behavior. Compress and resize the poster, serve responsive variants and defer optional video. Reduced-motion hiding does not reliably avoid downloads.

[Publications.tsx:7](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Publications.tsx:7) imports the entire approximately 285 KB article-data module into a Client Component. Its build first-load JS was 229 KB. Send lightweight summaries from a server component instead of full bodies. No field Core Web Vitals or Lighthouse score was measured, so this is an evidenced payload problem rather than a claimed performance score.

**14. P2 — Pagination resets publication filters.**

Category/query/sort use local state at [Publications.tsx:31](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Publications.tsx:31). [Pagination URLs:115](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/Publications.tsx:115) do not preserve it; a filter change on a later page routes to `/publications` at line 104. The template remounts page components. Store filters in URL search parameters and preserve them in pagination. This defect is established from navigation/state logic; the full interaction was not reproduced in the browser.

**15. P2 — Structured data duplicates articles and fragments firm identity.**

Article schema appears in both [the route:75](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/publications/[slug]/page.tsx:75) and [BlogDetail.tsx:28](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/BlogDetail.tsx:28). One publisher points to `#legalservice`, whereas the global [Organization:19](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/layout.tsx:19) defines `#organization`; another publisher is anonymous. Team pages similarly emit duplicate Person objects.

Use one well-connected graph per page with stable article/person/firm IDs, linked authors and a defined publisher. Different IDs are not inherently invalid, and duplicate JSON-LD is not automatically a ranking penalty; the present objects should be consolidated to avoid ambiguity. Also standardize LinkedIn: [layout.tsx:31](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/layout.tsx:31) and [llms.txt](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/public/llms.txt) differ from [the official constant](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/constants/social.ts).

**16. P2 — Many child pages lose their social preview image.**

Child `openGraph`/`twitter` objects replace the parent nested objects. Representative deployed publications, team and practice pages lacked image tags. Examples: [publications metadata:17](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/publications/page.tsx:17), [profile metadata:52](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/our-team/[id]/page.tsx:52), [practice metadata:43](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/practice-areas/[slug]/page.tsx:43).

Explicitly include shared default images in child overrides. This primarily affects share previews. See [Next.js metadata merging](https://nextjs.org/docs/14/app/building-your-application/optimizing/metadata#merging).

**17. P2 — FAQ answers and legacy citations are less accessible to crawlers.**

[FAQSection.tsx:370](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/FAQSection.tsx:370) filters to the active category; [line 478](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/FAQSection.tsx:478) renders only those answers. Initial deployed HTML contained four General answers, while [homepage schema:101](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/page.tsx:101) lists 27 questions. Render all useful answer text server-side and progressively enhance the category controls. Keep schema grounded in the same content source.

Legacy reference extraction at [BlogDetail.tsx:200](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/components/views/BlogDetail.tsx:200) stores URLs inside title text without a `url` field. The renderer at line 371 consequently produces plain text for those sources. Normalize references to explicit title/URL objects and use primary case/law links. Newer articles already provide useful primary links.

**18. P2/P3 — Publication and sitemap timestamps need correction.**

[blogs.ts:37](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/data/blogs.ts:37) declared the DTB article published at `2026-10-07T10:22:00Z`, although it was already public around 08:21 UTC (11:21 Nairobi) during this audit. Verify whether local time was mistakenly marked UTC. [The published-post helper:3870](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/data/blogs.ts:3870) sorts every post without a publication-time filter. If scheduling is intended, enforce it in page generation, lookups, lists and sitemap, with a deployment/cache strategy.

[sitemap.ts:13](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/src/app/sitemap.ts:13) assigns generation time to all non-article update dates. Use actual significant changes or omit unknown dates. [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) explains that lastmod should be accurate; priority and changefreq do not compensate for inaccurate dates.

**19. P2/P3 — Runtime and typing maintenance.**

[.nvmrc](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/.nvmrc) requests Node 20, now [end of life](https://nodejs.org/en/about/eol). The audit commands ran on Node 22.22.2; the actual production runtime was not verified. Align the repository and deployment with a supported LTS version. [tsconfig.json:7](/Users/obi96mike/Desktop/malika-okubasu-and-co-advocates/tsconfig.json:7) disables strict typing; progressively enable it. Strict typing is a quality recommendation, not a prerequisite for valid Next.js architecture.

**Answer-engine assessment and remaining checks.**

The site already provides server-rendered article text, service pages, author biographies, breadcrumbs, canonicals and a public robots/sitemap setup. Its wildcard robots rule permits search and AI crawlers. `llms.txt` is present, but it does not demonstrate that any engine will cite the firm. [Google's AI guidance](https://developers.google.com/search/docs/appearance/ai-features) emphasizes crawlability, text, helpful content and matching structured data; no special AI schema or AI text file is required. [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes Search access from training access.

Improve answer usefulness with short jurisdiction-specific summaries, linked authorities, named expert authors, accurate update dates and consistent firm identity. Validate indexing in Search Console and verified crawler access through hosting logs; then measure citations/referrals for real target questions. No actual ranking, indexing or answer-engine citation performance was certified here.

Before making a WCAG AA claim, complete keyboard tests, mobile screen-reader checks, 200% text resize, 400% zoom/320px reflow, text-spacing overrides and focus-obscuration checks with the sticky header/cookie banner. Audit every Microsoft Bookings form step, error and authentication flow separately. Autoplay video and rotating header content honor reduced motion; visible pause controls remain worthwhile, but this report does not infer an unconditional Pause/Stop/Hide failure solely from missing buttons.

Recommended remediation sequence: framework/runtime maintenance; consent implementation and accurate notices; keyboard/contrast/zoom corrections; security policy and embed behavior; schema/content/citation fixes; media/bundle optimization; complete manual accessibility and operational privacy verification. No exploit attempts, booking submissions, authenticated analytics inspection, axe scan or Lighthouse run were performed.
