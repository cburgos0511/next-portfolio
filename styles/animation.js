import { gsap, Expo } from "gsap";

const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 1,
    height: 0,
    transformOrigin: "left bottom",
    skewY: 4,
    ease: Expo.easeOut,
    stagger: {
      amount: 1,
    },
  });
};

const fadeInHeader = (node1, node2, node3, node4) => {
  gsap.to([node1, node2, node3, node4], {
    delay: 1.2,
    duration: 1.2,
    opacity: 1,
    ease: Expo.easeInOut,
    stagger: {
      amount: 0.4,
    },
  });
};

module.exports = { staggerReveal, fadeInHeader };
