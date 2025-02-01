import { BlogConfig } from "./types/config";

const blogConfig: BlogConfig = {
  use: "mdx", // mdx or notion
  siteLogo: {
    url: "/deep-space-observatory-5/images/logo-black.svg",
    width: 133,
    height: 150,
  },
  siteName: "DEEP SPACE OBSERVATORY",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  title: "DEEP SPACE OBSERVATORY",
  description: "Tumpa and Ankon\'s personal deep space observatory.",
  googleAnalyticsCode: "", // G-**********
  googleAdsenseCode: "", // ca-pub-****************
  notFoundPage: {
    title: "404",
    subtitle: "The page you were looking for was not found.",
    image: "/deep-space-observatory-5/images/not-found.jpeg",
    description: `The page you were looking for was not found due to reasons such as
    "already deleted" or "URL is different".`,
  },
  topPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  categoryPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  articlePage: {
    afterContentAd: "",
  },
  widgets: {
    categoryList: {
      title: "CATEGORY",
    },
    tagList: {
      title: "TAG",
    },
    share: {
      title: "Share",
      socials: ["twitter", "facebook", "linkedin"],
    },
    fixedSidebar: {
      ad: "",
    },
  },
  styles: {
    containerMaxWidth: "1280px",
    colors: {
      primary: "#50C0A1",
      primaryLighter: "#EFF7F3",
      primaryGradient: "linear-gradient(to right, #06A9B7, #B0DE87)",
      base: "#F2F4F3",
      border: "",
      bg: "#F7F7F7",
      text: "#2C2C2C",
      grayLighter: "#A0A0A0",
    },
    breakPoints: {
      huge: "1440px",
      large: "1170px",
      medium: "768px",
      small: "450px",
    },
  },
  hero: {
    title: "Tumpa and Ankon's",
    image: "/deep-space-observatory-5/images/cover.JPG",
    description: "Personal Deep Space Observatory",
  },
  footer: {
    title: "Deep Space Observatory",
  },
  article: {
    defaultThumbnail: "/deep-space-observatory-5/images/default-thumbnail.png",
    articlesPerPage: 6,
  },
  navigation: [
    {
      name: "nebula",
      url: `/nebula`,
    },
    {
      name: "star",
      url: `/star`,
    },
    {
      name: "solar system",
      url: `/solar-system`,
    },
    {
      name: "galaxy",
      url: `/galaxy`,
    },
  ],
  subNavigation: [
    // {
    //   name: "terms",
    //   url: "/about/terms",
    // },
    {
      name: "Flickr",
      url: "https://www.flickr.com/photos/198516315@N03/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tasnim-manzur-ankon/",
    },
  ],
  account: {
    name: "Tasnim M Ankon",
    description: "Software Engineer, freelance photographer and cosmology enthusiast. Photos from smart telescope (Vaonis Vespera II), description prepared with help from ChatGPT-4o. Cover photos, if edited, using GIMP, Siril and GraXpert.",
    image: "/deep-space-observatory-5/images/me.png",
    social: {
      github: "https://github.com/ankon8050",
    },
  },
  writers: [
    {
      id: "ankon",
      name: "Tasnim M Ankon",
      description: "Software engineer, freelance photographer and cosmology enthusiast. Photos from smart telescope (Vaonis Vespera II), description prepared with help from ChatGPT-4o. Cover photos, if edited, using GIMP, Siril and GraXpert.",
      image: "/deep-space-observatory-5/images/me.png",
    },
    {
      id: "tumpa",
      name: "S Tumpa",
      description: "Software engineer, painter and cosmology enthusiast.",
      image: "/deep-space-observatory-5/images/pcu.png",
    },
  ],
  categories: [
    {
      id: "nebula",
      title: "Nebula",
      imagePath: "/deep-space-observatory-5/images/nebula.JPG",
      description: "The darkest wonders of the cosmos",
    },
    {
      id: "star",
      title: "Star",
      imagePath: "/deep-space-observatory-5/images/star.jpg",
      description: "Brightest beams of the universe",
    },
    {
      id: "solar-system",
      title: "Solar System",
      imagePath: "/deep-space-observatory-5/images/sun-01.jpg",
      description: "Mysteries of the Solar System",
    },
    {
      id: "galaxy",
      title: "Galaxy",
      imagePath: "/deep-space-observatory-5/images/galaxy.jpg",
      description: "Specks in the night sky harbouring millions and billions of stars",
    },
  ],
  tags: [
    {
      id: "sun",
      title: "Sun",
    },
    {
      id: "star",
      title: "Star",
    },
    {
      id: "planet",
      title: "Planet",
    },
    {
      id: "nebula",
      title: "Nebula",
    },
    {
      id: "galaxy",
      title: "Galaxy",
    },
    {
      id: "cluster",
      title: "Cluster",
    },
    {
      id: "asterism",
      title: "Asterism",
    },
    {
      id: "orion-constellation",
      title: "Orion Constellation",
    },
    {
      id: "ursa-major-constellation",
      title: "Ursa Major Constellation",
    },
    {
      id: "ursae-minoris-constellation",
      title: "Ursae Minoris Constellation",
    },
    {
      id: "cetus-constellation",
      title: "Cetus Constellation",
    },
    {
      id: "cassiopeia-constellation",
      title: "Cassiopeia Constellation",
    },
    {
      id: "cygnus-constellation",
      title: "Cygnus Constellation",
    },
    {
      id: "andromeda-constellation",
      title: "Andromeda Constellation",
    },
    {
      id: "perseus-constellation",
      title: "Perseus Constellation",
    },
    {
      id: "pisces-constellation",
      title: "Pisces Constellation",
    },
    {
      id: "moon",
      title: "Moon",
    },
    {
      id: "gemini-constellation",
      title: "Gemini Constellation",
    },
    {
      id: "cepheus-constellation",
      title: "Cepheus Constellation",
    },
    {
      id: "camelopardalis-constellation",
      title: "Camelopardalis Constellation",
    },
    {
      id: "monoceros-constellation",
      title: "Monoceros Constellation",
    },
    {
      id: "coma-berenices-constellation",
      title: "Coma Berenices Constellation",
    },
    {
      id: "canes-venatici-constellation",
      title: "Canes Venatici Constellation",
    },
  ],
};

export default blogConfig;
