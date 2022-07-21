import { ProjectsDetailsType } from "types";

// HOME PAGE CONSTANTS (HOME PAGE) ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const heroContent = {
  title: ["Rochdi Belhirch", "creative frontend", "developer & designer"],
  comp: `Design minded web & mobile apps developer based in Morocco`,
};
const introContent = {
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
};
const outroContent = {
  text: "Let's work together!",
  github: "#",
  linkedin: "#",
  email: "#",
};

// HOME PAGE ANIMATIONS (HOME PAGE) ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const animationBase = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 1.4, type: "spring", stiffness: 35 },
  },
};
const animationVariants = [
  { ...animationBase },
  {
    ...animationBase,
    visible: {
      ...animationBase.visible,
      transition: { ...animationBase.visible.transition, delay: 0.95 },
    },
  },
  {
    ...animationBase,
    visible: {
      ...animationBase.visible,
      transition: { ...animationBase.visible.transition, delay: 1 },
    },
  },
];

// PROJECTS LIST DATA /////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const projects: ProjectsDetailsType[] = [
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
    repoURL: `#`,
    demoURL: `#`,
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
    designURL: `#`,
    repoURL: `#`,
    demoURL: `#`,
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
    repoURL: `#`,
    demoURL: `#`,
  },
  {
    year: "2021",
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
    designURL: `#`,
    demoURL: `#`,
  },
  {
    year: "2021",
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
    designURL: `#`,
    repoURL: `#`,
    demoURL: `#`,
  },
];

export { heroContent, introContent, projects, animationVariants, outroContent };
