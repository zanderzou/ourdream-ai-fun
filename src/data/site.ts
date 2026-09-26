export const site = {
  name: "OurDream AI",
  domain: "ourdream-ai.fun",
  url: "https://ourdream-ai.fun",
  description: "An independent OurDream AI guide to character creation, AI companion chat, story roleplay, privacy, pricing questions, and leading alternatives.",
  author: "OurDream AI editorial team",
  officialUrl: "https://ourdream.ai/",
};

export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(date);
export const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);
