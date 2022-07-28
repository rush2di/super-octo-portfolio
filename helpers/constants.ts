import { ProjectsDetailsType } from "types";

const pageContent = {
  heroContent: {
    title: ["Rochdi Belhirch", "creative frontend", "developer & designer"],
    comp: `Design minded web & mobile apps developer based in Morocco`,
  },
  introContent: {
    about: {
      title: `About me`,
      text: `At the crossroads between UX/UI design and frontend development, I aim to create adaptable and responsive websites where motion, interaction and design are perfectly integrated to form a unique experience.
          
          I aim for simplicity, clarity and originality in my work through designs where the role of every pixel is well thought and respected in development.
          `,
    },
    technicalSkills: {
      title: `Technical Skills`,
      text: `For development I work with technologies like ReactJs, React Native, NextJs, NodeJs, Sass, Gulp, Graphql, GatsbyJs, Tailwindcss, Bootstrap, TypeScript, Redux, Firebase, WordPress, Php, Git, and Github.
  
      For design I use Figma, Adobe XD, and Adobe Photoshop.`,
    },
  },
  outroContent: {
    text: "Let's work together!",
    github: "https://github.com/rush2di",
    linkedin: "https://www.linkedin.com/in/rochdi-belhirch-b6390a1a2",
    email: "roch2di@gmail.com",
  },
  projects: [
    {
      year: "2021",
      id: `gradient-canvas-1`,
      initializer: (gradient) => (gradient.conf.wireframe = true),
      cover: require("public/images/jrdesign_cover.png"),
      logo: require("public/images/logo_jrdesign_colored.png"),
      altLogo: require("public/images/logo_jrdesign_alt.png"),
      title: `JR DESIGN AS`,
      compTitle: `Web Development Agency`,
      missionTags: [`UI Design`, `Web development`],
      techTags: [`NextJs`, `Sass`, `Gsap`, `JamStack`],
      primaryColors: [`#cc2e2e`, `#ffffff`],
      secondaryColors: [`#2d2d2d`, `#ffffff`],
      repoURL: `https://gitfront.io/r/user-5823705/Fn434xnvHYnL/JrdesignV2/`,
      demoURL: `https://www.jrdesign.no/`,
    },
    {
      year: "2022",
      makeDark: true,
      id: `gradient-canvas-2`,
      initializer: (gradient) => {
        gradient.amp = 160;
      },
      cover: require("public/images/fysiohub_cover.png"),
      altLogo: require("public/images/logo_fysiohub_alt.png"),
      title: `FYSIOHUB`,
      compTitle: `Fitness & Physiotherapy Clinic`,
      missionTags: [`UI Design`, `Frontend`, `Wordpress`],
      techTags: [`Php`, `Sass`, `Wordpress`, `Javascript`, `Gulp`],
      primaryColors: [`#519872`, `#ffffff`],
      secondaryColors: [`#08404C`, `#ffffff`],
      designURL: `https://www.figma.com/file/hU48k3hyztx0udp1T980k7/PHYSIOHUB-%2F-STYLE-TILES`,
      demoURL: `https://fysiohub.no/`,
    },
    {
      year: "2021",
      id: `gradient-canvas-3`,
      initializer: (gradient) => {
        gradient.updateFrequency(0.0000125);
        gradient.amp = 100;
      },
      cover: require("public/images/echo_cover.png"),
      altLogo: require("public/images/logo_echo_alt.png"),
      title: `ECHOBOARD`,
      compTitle: `Music player - Personal project`,
      missionTags: [`UI Design`, `Frontend`, `Backend`],
      techTags: [
        `NextJs`,
        `Sass`,
        `Redux`,
        `TypeScript`,
        `NodeJs`,
        `Express`,
        `Firebase`,
      ],
      primaryColors: [`#1CADB7`, `#0e151a`],
      secondaryColors: [`#0D253D`, `#ffffff`],
      designURL: `https://www.figma.com/file/OjvlCrSr7PCuBXvxKcIAL6/Echo-v2`,
      repoURL: `https://github.com/rush2di/echov2`,
      demoURL: `https://echoboard.netlify.app/`,
    },
    {
      year: "2020",
      makeDark: true,
      id: `gradient-canvas-4`,
      initializer: (gradient) => {
        gradient.amp = 260;
      },
      cover: require("public/images/amy_cover.png"),
      altLogo: require("public/images/logo_amy_alt.png"),
      title: `EKSPEDISJONS JENTA`,
      compTitle: `Amy Mir - Influencer Blog`,
      missionTags: [`UI Design`, `Frontend`, `Wordpress`],
      techTags: [`Php`, `Sass`, `Wordpress`, `Javascript`, `Gulp`],
      primaryColors: [`#3A9CE0`, `#ffffff`],
      secondaryColors: [`#40526F`, `#ffffff`],
      designURL: `https://www.figma.com/file/LV0G1Xz4yrlaA2MIOp8qr5/AMY-MIR`,
      repoURL: `https://gitfront.io/r/user-5823705/mu2bWeReY6d9/Amy-Mir/`,
      demoURL: `https://www.ekspedisjonsjenta.no/`,
    },
    {
      year: "2020",
      id: `gradient-canvas-5`,
      initializer: (gradient) => {
        gradient.amp = 220;
      },
      cover: require("public/images/bato_cover.png"),
      altLogo: require("public/images/logo_bato_alt.png"),
      title: `BATO UIS`,
      compTitle: `University of Stavanger - Students association `,
      missionTags: [`UI Design`, `Frontend`, `Wordpress`],
      techTags: [`Php`, `Sass`, `Wordpress`, `Javascript`, `Gulp`],
      primaryColors: [`#FFF100`, `#000000`],
      secondaryColors: [`#151515`, `#ffffff`],
      designURL: `https://www.figma.com/file/xs6eB5ubb1UCMGm7SbXSTj/Bato`,
      demoURL: `https://bato-uis.no/`,
    },
  ] as ProjectsDetailsType[],
};

const containerAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring", stiffness: 35 },
  },
};

export { pageContent, containerAnimation, itemAnimation };
