
export interface Date {
  month: number | null;
  year: number;
}

export interface LinkedinProfileData {
  fullName: string;
  subtitle: string;
  location: string;
  links: [{ name: string; url: string }];
  profilePic: {
    src: string;
    width: number;
    height: number;
  };
  summary: string;
  topSkills: string[];
  experience: {
    companyName: string;
    description: string;
    duration: string;
    endDate: Date;
    isRemote: boolean;
    location: string;
    role: string;
    skills: string[];
    startDate: Date;
    type: string;
  }[];
  education: {
    activities: string;
    degree: string;
    description: string;
    endDate: Date;
    fieldOfStudy: string;
    school: string;
    startDate: Date;
  }[];
}

export const MOCK_LINKEDIN_PROFILE_DATA: LinkedinProfileData = {
  fullName: "Giovanni Vocale",
  subtitle: "Unicorn UI Designer + Front-End Engineer",
  location: "Brooklyn, New York, United States",
  links: [
    {
      name: "Design Portfolio",
      url: "https://giovanni.is/",
    },
  ],
  profilePic: {
    src: "https://giovanni.is/images/about/profilePhoto.jpg",
    width: 1000,
    height: 1000,
  },
  summary:
    "My ideal role is helping design and build a web application in an early stage startup. I prefer being an individual contributor and I'm happy to mentor young design engineers. I prefer to work remote, based mostly in Brooklyn, and join in person team gatherings from time to time.",
  topSkills: [
    "UI Design",
    "Front-End Development",
    "Next.js",
    "React.js",
    "Storybook",
  ],
  experience: [
    {
      role: "Senior Design Engineer",
      companyName: "Counter Health",
      type: "Full-time",
      startDate: { month: 8, year: 2022 },
      endDate: { month: 1, year: 2024 },
      duration: "1 yr 6 mos",
      location: "New York, United States",
      isRemote: true,
      description:
        "Seed stage startup in healthcare / prescription medications. Designed and developed a web application with user dashboard and few internal pages. Iterated design on a pre-existent onboarding flow. Pushed code to production. Created a component library in Storybook.",
      skills: [
        "Web Design",
        "Front-End Development",
        "Front-End Design",
        "Next.js",
        "React.js",
        "TypeScript",
        "Storybook",
        "Tailwind",
        "Playwrite",
        "Vitest",
        "Figma",
      ],
    },
  ],
  education: [
    {
      school: "Università per Stranieri di Perugia",
      degree: "Facolta' di Comunicazione",
      fieldOfStudy: "Tecnica Pubblicitaria (Advertising + Communication)",
      startDate: { month: null, year: 2002 },
      endDate: { month: null, year: 2002 },
      activities:
        "ActivitiesI did work with my teacher on a research for IARD about young people habits in Italy, interviewing subjects and collecting data.Activities and societies: I did work with my teacher on a research for IARD about young people habits in Italy, interviewing subjects and collecting data.",
      description:
        "In three years I took 28 classes, 4 more then I was supposed to. Average score was 28 out of 30. I won 4 scholarships that made me be an exchange student in Japan, Malta and twice in Sweden.",
    },
  ],
};
