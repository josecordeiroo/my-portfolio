export const pageAnimation = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildred: 0.25,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: {
    x: 500,
  },

  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 1.75,
      ease: "easeOut",
    },
  },
};

export const photoAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};