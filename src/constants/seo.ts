export const SITE_URL = "https://www.mokubasuadvocates.com";
export const SITE_NAME = "Malika Okubasu & Company Advocates";
export const HOMEPAGE_TITLE = `${SITE_NAME} | Law Firm in Nairobi, Kenya`;
export const HOMEPAGE_DESCRIPTION =
  "Malika Okubasu & Company Advocates is a Kenyan law firm serving local and international clients across corporate law, dispute resolution, conveyancing, employment law, family law, and legal consultancy.";

export const SITE_EMAIL = "legal@mokubasuadvocates.com";
export const SITE_TELEPHONE = "+254141397048";
export const ORGANIZATION_ID = `${SITE_URL}/#legalservice`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/icon-192x192.png`;
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
