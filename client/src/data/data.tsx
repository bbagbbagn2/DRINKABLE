import github from "../assets/images/about-me/aboutme github.png";
import portfolio from "../assets/images/about-me/aboutme pjh-portfolio.png";

export const HeaderProjectsItems = [
  { url: "/projects/jihun", text: "JIHUN Project" },
  { url: "/projects/pjh-portfolio", text: "PJH-Portfolio Project" },
  { url: "/projects/beats", text: "beats Project" },
  { url: "/projects/icondb", text: "ICONDB Project" },
];

export const AboutmeProfileData = {
  name: "박지훈",
  birth: "1999.01.13",
  address: "부산광역시 연제구"
};

export const AboutmeContactData = {
  email: "pyoungh137@gamil.com",
  phone: "010-9207-8758",
};

export const AboutmeSkillsData = [
  {
    title: "Front-End",
    description: "다양한 프로젝트에서 프론트엔드 개발 시에 자주 사용했던 기술입니다.",
    skills: ["HTML5, CSS3", "JavaScript", "TypeScript", "React", "styled-components", "Axios"]
  },
  {
    title: "Back-End",
    description: "팀 프로젝트 개발 시 사용한 백엔드 기술입니다.",
    skills: ["Node.js", "Express", "MySQL"]
  },
  {
    title: "Tools",
    description: "개발 중 코드 관리 및 팀원 일정 관리에 사용한 도구입니다.",
    skills: ["Git", "GitHub", "Notion"]
  }
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