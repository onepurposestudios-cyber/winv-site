// Central place to update WIV contact details and links.
export const siteConfig = {
  name: "Wisdom Innovation Village",
  shortName: "WIV",
  tagline: "Learn. Apply. Grow.",
  whatsappNumber: "0886656361",
  // International format used for wa.me links (Liberia +231)
  whatsappIntl: "231886656361",
  whatsappMessage:
    "Hello WIV, we connected recently and I would like to continue the conversation.",
  phones: ["0886656361", "0770780885"],
  email: "wisdominnovationvillage@gmail.com",
  facebook: {
    label: "Wisdom Innovation Village",
    url: "https://www.facebook.com/profile.php?id=61585228580742",
  },
  location: "Monrovia, Liberia",
  brochureUrl: `${import.meta.env.BASE_URL}WIV-Official-Brochure.pdf`,
};

export const whatsappLink = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappIntl}?text=${encodeURIComponent(message)}`;
