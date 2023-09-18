import { useEffect } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

function useGsap(context, callback) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      callback();
    }, context);

    return () => ctx.revert(); // cleanup
  }, [context]);
  return gsap;
}

export const appear = (gradientBox) => () => {
  const elementsToAnimate = gradientBox.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, img"
  );

  // Set initial opacity to 0 for all text elements
  gsap.set(elementsToAnimate, { opacity: 0 });

  // Create the animation timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  // Animation for the gradient box
  tl.fromTo(
    gradientBox,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  );

  // Animation for the text elements with stagger
  tl.fromTo(
    elementsToAnimate,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
  );
};

export const animateOnScroll = (trigger, target) => {
  const timeline = gsap.timeline({
    ease: "expo.out",
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
  });
  timeline.fromTo(
    trigger,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "expo.out",
    }
  );

  timeline.fromTo(
    target,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      ease: "expo.out",
    },
    "<+0.2"
  );
};

export default useGsap;
