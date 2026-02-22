export const myProjects = [
  {
    id: 1,
    title: "Rocket Booster",
    description:
      "A 2D space game where players dodge obstacles to reach the finish pad.",
    subDescription: [
      "Developed in Unity using C# scripting for player movement and obstacle logic.",
      "Implemented collision detection and smooth physics-based controls.",
      "Designed background, obstacles, and animations for an engaging gameplay experience.",
      "Optimized performance for mobile and desktop builds.",
    ],
    href: "", // add if available
    logo: "",
    image: "/models/rocketbooster.png",
    video: "/models/rocket-booster-1.mp4", // replace with your image path
    tags: [
      { id: 1, 
        name: "Unity", 
        path: "/logos/unity.svg" },
      { id: 2, 
        name: "C#", 
        path: "/logos/csharp.svg" },
    ],
  },
  {
    id: 2,
    title: "The Alchemist: Dream of Dimes",
    description:
      "An open-world adventure game developed in Unity with custom-built 3D environments.",
    subDescription: [
      "Worked as the environment artist, creating landscapes, props, and lighting setups.",
      "Modeled and textured detailed assets using Blender.",
      "Implemented interactive gameplay mechanics and optimized lighting for performance.",
      "Collaborated with teammates to design the world layout and ambience.",
    ],
    href: "https://github.com/vanditagrawal/AlchemistDreamOfDimes", // update if available
    logo: "/assets/logos/unity.svg",
    image: "/assets/projects/alchemist.jpg", // replace with your image
    tags: [
      { id: 1, name: "Unity", path: "/logos/unity.svg" },
      { id: 2, name: "Blender", path: "/logos/blender.svg" },
      { id: 3, name: "C#", path: "/logos/csharp.svg" },
    ],
  },
  {
    id: 3,
    title: "Isometric Room",
    description:
      "A cozy and detailed isometric 3D scene built in Blender to showcase interior design and lighting.",
    subDescription: [
      "Modeled furniture, props, and architectural elements from scratch.",
      "Used proper topology, materials, and texturing for realistic details.",
      "Experimented with lighting, depth, and camera angles for visual appeal.",
      "Rendered high-quality outputs for portfolio presentation.",
    ],
    href: "",
    logo: "/logos/blender.svg",
    image: "/models/room1.png",
    tags: [
      { id: 1, name: "Blender", path: "/logos/blender.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vandit-agrawal-a56b972a8",
    icon: "/models/linkedin.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/vanditagrawal",
    icon: "/models/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/models/instagram.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919425666411?text=Hello%20Vandit!",
    icon: "/models/whatsApp.svg",
  }
];

export const experiences = [
  {
    title: "3D Artist Intern",
    job: "BBB Studios",
    date: "Oct 2025 – Present",
    contents: [
      "Assist in the design and execution of 3D assets for ongoing projects.",
      "Create and optimize 3D models, textures, materials, and lighting setups.",
      "Support the development team by preparing art assets for use in Unreal Engine and other relevant software.",
      "Contribute creative ideas and methodologies to improve project outcomes.",
      "Collaborate with the team to maintain consistency in visual style across all assigned work.",
      "Learn and upgrade your 3D art, game development, and programming skills while contributing as required.",
      "Stay updated with emerging tools, techniques, and industry best practices.",
    ],
  },
];
