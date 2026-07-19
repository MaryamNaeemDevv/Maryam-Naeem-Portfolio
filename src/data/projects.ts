export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  images: string[];
};

export type GitHubProject = {
  name: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Synthex",
    description:
      "AI-integrated educational workflow platform with a polished interface and intelligent task generation.",
    tags: ["Next.js", "TypeScript", "AI"],
    href: "https://github.com/MaryamNaeemDevv/Synthex",
    images: [
      "/projects/synthex/game.png",
      "/projects/synthex/game2.png",
      "/projects/synthex/menu page.png",
    ],
  },
  {
    title: "CityMind",
    description:
      "A modern urban intelligence concept for civic data exploration and decision support.",
    tags: ["AI", "Data", "UX"],
    href: "https://github.com/MaryamNaeemDevv",
    images: [
      "/projects/city_mind/citymind.png",
      "/projects/city_mind/citymind2.png",
      "/projects/city_mind/citymind3.png",
    ],
  },
  {
    title: "Super Sonic",
    description:
      "A premium gaming experience with responsive controls and immersive audiovisual design.",
    tags: ["C++", "SFML", "Game Dev"],
    href: "https://github.com/MaryamNaeemDevv/Super-Sonic",
    images: [
      "/projects/super-sonic/super_sonic.png",
      "/projects/super-sonic/super_sonic2.png",
      "/projects/super-sonic/super_sonic3.png",
    ],
  },
  {
    title: "Graphic Design",
    description:
      "A curated collection of premium visual design work for branding, packaging, and product layouts.",
    tags: ["Branding", "Illustration", "Layout"],
    href: "https://github.com/MaryamNaeemDevv",
    images: [
      "/projects/graphic/Frieden.png",
      "/projects/graphic/product (1).png",
      "/projects/graphic/Supplements.png",
    ],
  },
];

export const githubProjects: GitHubProject[] = [
  {
    name: "Chrono-Rift",
    description:
      "A multiplayer/single player game built with C++, SFML, and OS concepts.",
    href: "https://github.com/MaryamNaeemDevv/Chrono-Rift",
  },
  {
    name: "City-Plan",
    description:
      "City planning executed through AI techniques such as GA, logistic regression, and CSP.",
    href: "https://github.com/MaryamNaeemDevv/City-Plan",
  },
  {
    name: "Ivor-Memorial-Hospital-Website",
    description: "A hospital management website built with frontend HTML/CSS and PHP/SQL backend.",
    href: "https://github.com/MaryamNaeemDevv/Ivor-Memorial-Hospital-Website",
  },
  {
    name: "MaryamNaeemDevv",
    description: "My personal portfolio and profile showcase website.",
    href: "https://github.com/MaryamNaeemDevv/MaryamNaeemDevv",
  },
  {
    name: "Pastel-Pages",
    description: "A journaling app created with Kotlin and Android Studio.",
    href: "https://github.com/MaryamNaeemDevv/Pastel-Pages",
  },
  {
    name: "Queit-Place",
    description: "An app for marking quiet spots in the city, still evolving.",
    href: "https://github.com/MaryamNaeemDevv/Queit-Place",
  },
  {
    name: "Super-Mario",
    description: "An assembly language game project built with COAL and low-level systems design.",
    href: "https://github.com/MaryamNaeemDevv/Super-Mario",
  },
];
