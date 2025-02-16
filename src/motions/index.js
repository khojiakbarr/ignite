export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Galma-gal chiqishi
  },
};

export const itemVariants = {
  hidden: { x: -100, opacity: 0 }, // Boshlang‘ich holat: Chapda va ko‘rinmas
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 100, opacity: 0, transition: { duration: 0.3 } },
};

export const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 1.3 } }, // Delay qo‘shdik
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};

export const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const modalContentVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
};
