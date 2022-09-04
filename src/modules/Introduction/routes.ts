import * as modules from "./index";

export default {
  path: "/introduction",
  component: modules.IntroductionModule,
  children: [
    {
      text: "Get Started",
      path: "/introduction/get-started",
      component: modules.GetStarted,
    },
    {
      text: "GSAP 3 Express",
      path: "/introduction/express-gsap",
      component: modules.ExpressGsap,
    },
    {
      text: "Scroll Trigger Express",
      path: "/introduction/express-scroll-trigger",
      component: modules.ExpressScrollTrigger,
    },
    {
      text: "Quick Tutorial",
      path: "/introduction/quick-tutorial",
      component: modules.QuickTutorial,
    },
  ],
};
