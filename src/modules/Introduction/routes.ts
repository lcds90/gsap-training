import * as modules from "./index";

export default {
  path: "/introduction",
  component: modules.IntroductionModule,
  children: [
    {
      name: "Introdução",
      path: "/introduction",
      component: modules.IndexIntroduction,
    },
    {
      name: "Get Started",
      path: "/introduction/get-started",
      component: modules.GetStarted,
    },
    {
      name: "Get Started",
      path: "/introduction/get-started",
      component: modules.GetStarted,
    },
    {
      name: "GSAP 3 Express",
      path: "/introduction/express-gsap",
      component: modules.ExpressGsap,
    },
    {
      name: "Scroll Trigger Express",
      path: "/introduction/express-scroll-trigger",
      component: modules.ExpressScrollTrigger,
    },
    {
      name: "Quick Tutorial",
      path: "/introduction/quick-tutorial",
      component: modules.QuickTutorial,
    },
  ],
};
