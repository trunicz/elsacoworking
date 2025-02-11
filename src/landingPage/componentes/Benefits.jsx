import CardImage from "./Benefits/CardImage";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  {
    src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    alt: "Interior moderno de oficina",
  },
  {
    src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    alt: "Interior moderno de oficina",
  },
  {
    src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    alt: "Interior moderno de oficina",
  },
];

const Benefits = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-53%"]);

  return (
    <div className="w-full mx-auto flex justify-center p-10">
      <div className="text-center w-full">
        <section ref={targetRef} className={`relative h-[200vh]  mt-6`}>
          <div className="sticky top-0 h-screen w-8/12 mx-auto flex items-center flex-wrap">
            <div className="flex-1 flex flex-col ">
              <h1 className="text-4xl font-titles font-black">Beneficios</h1>
              <p className="font-euphemia mx-auto text-gray-600">
                Aquí puedes proyectar una imagen profesional sin rentar una
                oficina completa. Te ofrecen soporte administrativo, espacio
                para juntas y atención para tus clientes. Ahorras tiempo y
                dinero, y te enfocas en hacer crecer tu negocio sin preocuparte
                por los detalles.
              </p>
            </div>
            <motion.div style={{ x }} className="flex items-center gap-6">
              {images.map((image, index) => (
                <CardImage src={image.src} alt={image.alt} key={index} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
