export const EMAIL = "siddhantjainmvm@gmail.com";

export const socials = [
  { name: "GitHub", url: "https://github.com/CoolSidOfficial", icon: "/github-mark-white.svg" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/siddhant-jain-coolsidofficial/", icon: "/linkedin-white.png" },
  { name: "LeetCode", url: "https://leetcode.com/u/Sid_Jain_2003/", icon: "/leetcode.png" },
  { name: "Instagram", url: "https://www.instagram.com/coolsid_30/", icon: "/instagram.png" },
  { name: "X", url: "https://twitter.com/officialcoolsid/", icon: "/x.png" },
  { name: "Medium", url: "https://medium.com/@coolsj", icon: "/medium.png" },
];

// Section ids and numbers used by both the navbar and the section headings.
export const sections = [
  { id: "about", number: "01", label: "About" },
  { id: "certificates", number: "02", label: "Certificates" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "projects", number: "04", label: "Projects" },
  { id: "writing", number: "05", label: "Writing" },
  { id: "contact", number: "06", label: "Contact" },
];

export const sectionNumber = (id) => sections.find((s) => s.id === id)?.number;

// Kept short on purpose; the full list lives on the résumé.
export const skills = [
  "Python (FastAPI, Django, Flask)",
  "Node.js / Express",
  "JavaScript / TypeScript",
  "React / Next.js",
  "PostgreSQL / MongoDB / Redis",
  "WebSockets / Socket.IO",
  "Docker / Nginx / Linux",
  "GitHub Actions CI/CD / GCP",
  "Java / C++",
  "Scikit-learn / Pandas / LangChain",
];

export const books = [
  { title: "Rework", image: "/books_images/rework.webp" },
  { title: "Elon Musk", image: "/books_images/elonmusk.webp" },
  { title: "The Psychology of Money", image: "/books_images/psychology.webp" },
  { title: "The Personal MBA", image: "/books_images/thepersonalmba.webp" },
  { title: "Zero to One", image: "/books_images/zerotoone.webp" },
  { title: "The 48 Laws of Power", image: "/books_images/lawsofpower.webp" },
  { title: "Rich Dad Poor Dad", image: "/books_images/richdad.webp" },
  { title: "The E-Myth Revisited", image: "/books_images/emythrevised.webp" },
  { title: "Who Moved My Cheese?", image: "/books_images/whomoved.webp" },
];
