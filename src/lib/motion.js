// Shared Framer Motion transitions and easing configurations
export const EASING = [0.25, 0.1, 0.25, 1]; // standard ease-in-out

export const fadeUp = {
  hidden: {
    y: 40,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: EASING
    }
  }
};

export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASING
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
};

export const tapScale = {
  scale: 0.98,
  transition: {
    duration: 0.1,
    ease: "easeInOut"
  }
};
