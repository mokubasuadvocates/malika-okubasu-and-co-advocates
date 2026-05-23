export const blogAuthors = {
  "oduor-khamati": {
    slug: "oduor-khamati",
    name: "Oduor Khamati",
    role: "Managing Partner",
    profileUrl: "/our-team/oduor-khamati",
    image: "/images/team-members/oduor-khamati.jpeg",
    bio: "Oduor Khamati is an Advocate of the High Court of Kenya. He holds a Bachelor of Laws degree from the University of Nairobi, where he graduated with Second Class Upper Division honours. His legal training provides him with a strong foundation in legal research, advisory work, drafting, and professional legal practice.",
  },
} as const;

export type BlogAuthorSlug = keyof typeof blogAuthors;
