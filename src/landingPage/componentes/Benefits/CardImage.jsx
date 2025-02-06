import { motion } from "motion/react";

export const CardImage = ({ src, alt }) => {
  return (
    <div className="w-[1080px] relative h-[70vh] overflow-hidden rounded-xl">
      <div className="absolute bg-black/45 w-screen h-screen flex flex-col items-start p-24">
        <h3 className="text-white font-titles text-6xl">Contenido</h3>
        <p className="text-white/75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          laboriosam molestiae! Sed dignissimos illo dolorum ut obcaecati
          excepturi voluptas est?
        </p>
      </div>
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

export default CardImage;
