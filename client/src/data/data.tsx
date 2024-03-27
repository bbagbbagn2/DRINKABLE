import github from "../assets/images/about-me/aboutme github.png";
import portfolio from "../assets/images/about-me/aboutme pjh-portfolio.png";

export const HeaderProjectsItems = [
  { url: "/projects/jihun", text: "JIHUN Project" },
  { url: "/projects/pjh-portfolio", text: "PJH-Portfolio Project" },
  { url: "/projects/beats", text: "beats Project" },
  { url: "/projects/icondb", text: "ICONDB Project" },
];

export const AboutmeLinksData = [
  {
    title: "GitHub",
    src: github,
    showActionLink: true,
    href: "https://github.com/bbagbbagn2",
    description:
      "대학시절부터 현재까지 진행한 프로젝트와 TIL 등 다양한 소스코드 저장소입니다.",
  },
  {
    title: "PJH-Portfolio",
    src: portfolio,
    showActionLink: true,
    href: "https://pjh-portfolio.netlify.app/",
    description: "프론트엔드를 학습한 초창기 때 만든 웹 포트폴리오입니다.",
  },
];
