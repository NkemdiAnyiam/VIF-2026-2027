export type Socials = {
  linkedin: string;
  youtube: string;
  twitter: string;
  github: string;
  facebook: string;
  instagram: string;
  website: string;
};

export type CommitteeMember = {
  fullName: string;
  role: string;
  rank: 1 | 2 | 3 | 4;
  imageName: string;
  specialImageName?: string;
  specialImgAlt?: string;
  description: string;
  socials: Partial<Socials>;
};

export const committeeMembersData: CommitteeMember[] = [
  {
    fullName: `Kayla McHaney`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Kayla-McHaney-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/kaylamchaney`,
      website: `https://km4artz.myportfolio.com/demo-reel-1`,
    },
    description: `Kayla McHaney is a senior pursuing a B.S. in Visualization with a minor in Virtual Production. While she is a generalist, her main interests lie in lighting and animation, and she is committed to building a career in the entertainment industry. She is currently a student worker at the Mays Business School, assisting with the development of the Teaching & Learning Innovation virtual production stage. Outside of class, she enjoys video games, creating fanart, and keeping up with the latest animated films.`,
  },

  {
    fullName: `Taylor Null`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Taylor-Null-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/taylornull-ms`,
      website: `https://nullt2003.myportfolio.com`,
    },
    description: `Taylor Null is a second year graduate student pursuing a M.S. in Visualization at Texas A&M University, where she also completed her undergraduate degree with a minor in game design and development. She enjoys working in Unreal Engine and is interested in lighting and layout for animation and games.  In her free time, she enjoys going to the movies and finding inspiration in film.`,
  },

  {
    fullName: `Nkemdi Anyiam`,
    role: `Website Designer / Developer`,
    rank: 2,
    imageName: `Nkemdi-Anyiam-min`,
    specialImageName: `Nkemdi-Anyiam-Vector-min`,
    specialImgAlt: `Nkemdi Anyiam vectorized`,
    socials: {
      linkedin: `https://www.linkedin.com/in/nkemdi-anyiam/`,
      github: `https://github.com/NkemdiAnyiam`,
    },
    description: `Nkemdi Anyiam is a graduate student pursuing a PhD in Computer Science at Texas A&M University. He also graduated with his Master's and Bachelor's in Computer Science and double-minored in Art (New Media) and Game Design & Development at A&M as well. He is currently working as a graduate research assistant, focusing primarily on web visualizations, computer science education, and instructional design. His hobbies include Latin dance, rock climbing, gaming, watching anime, and Jiu-Jitsu.`,
  },

  {
    fullName: `KamiRae Terry`,
    role: `Event Management Lead`,
    rank: 2,
    imageName: `KamiRae-Terry-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/kamirae-terry-4b78723b2/`,
    },
    description: `KamiRae Terry is a current sophomore pursuing a B.S. in Architecture at Texas A&M University. She has also graduated with her undergraduate degree in Computer Programming from TCC as well. She is currently working as a student assistant for faculty research inside the Department of Architecture and is developing her first student-created animated short film. She enjoys working in Blender as a background and viz-dev artist. Outside of the classroom, she is an avid dancer, and enjoys sipping matcha with her cats.`,
  },

  {
    fullName: `Jay Gutierrez`,
    role: `Outreach Lead`,
    rank: 2,
    imageName: `Jay-Gutierrez-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/jacqueline-gutierrez-5291a4250/`,
      website: `https://jlizethgutierrez.myportfolio.com/`
    },
    description: `Jay Gutierrez is currently an undergraduate senior in Visualization at Texas A&M University while also attempting to get her second degree for Criminal Justice at Sam Houston. She is a generalist but has an interest in rigging and surfacing. She loves working in Unreal engine and Surface Painter. Outside of class she often likes to write, create concept art, and watch hockey.`,
  },

  {
    fullName: `Manuel Toledo`,
    role: `Marketing Lead`,
    rank: 2,
    imageName: `Manuel-Toledo-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/manueltoledo0730/`,
    },
    description: `Manuel Toledo is a graduate student pursuing a M.S. in Visualization at Texas A&M University, where he also earned his bachelor's degree in Visualization. He currently works as a Graduate Research Assistant at the Soft Interaction Lab, focusing on real-time spatial visualization and interactive system development. His expertise lies at the intersection of 3D environment creation and spatial computing. At school, he also serves as Vice President of the Visualization Graduate Student Association. In his free time, he enjoys doing graphic design as a hobby and is excited to continue creating immersive XR experiences.`,
  },

  {
    fullName: `Mayet Andreassen`,
    role: `Faculty Lead Liaison`,
    rank: 3,
    imageName: `Mayet-Andreassen-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/mayet-andreassen/`,
    },
    description: `Mayet Andreassen is currently working as a full-time Instructional Assistant Professor and Internship Coordinator in the Visualization Department at Texas A&M University. She is also a member of the TXMPA (Texas Motion Picture Assoc.) Board as the Education Representative. She has over 10 years of teaching experience with a focus in games and animation. She previously worked as a game and front-end artist, as well as a freelance illustrator and graphics artist, prior to becoming an educator.`,
  },
];
