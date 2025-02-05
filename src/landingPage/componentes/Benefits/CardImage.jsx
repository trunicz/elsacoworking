import { motion } from "motion/react";

export const CardImage = ({ src, alt, isActive, onClick, imageIndex }) => {
  return (
    <motion.div
      style={{ backgroundImage: `url(${src})` }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      animate={{ translateX: `${imageIndex * 100}%` }}
      className="shrink-0 aspect-video object-cover w-screen"
    />
  );
};

export default CardImage;
