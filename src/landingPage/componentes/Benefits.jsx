import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/src/core/components/button";

const benefits = [
  {
    src: "/landingPage/IMG_6957.jpg",
    alt: "Profesionales colaborando en un espacio de trabajo",
    title: "Networking y Comunidad",
    description:
      "Conecta con emprendedores, profesionales y estudiantes de diversas áreas, creando redes de contactos sólidas y colaboraciones de alto valor. Participa en eventos y talleres donde podrás aprender, compartir ideas y descubrir oportunidades para impulsar tu crecimiento profesional.",
  },
  {
    src: "/landingPage/IMG_6966.jpg",
    alt: "Zona común con varias estaciones de trabajo",
    title: "Flexibilidad de Espacios y Servicios Integrales",
    description:
      "Accede a oficinas privadas, escritorios compartidos o salas de capacitación, pagando solo por lo que necesitas. Incluimos internet de alta velocidad, limpieza, recepción de correspondencia y, si lo deseas, atención telefónica. Todo ello para que te concentres en lo que realmente importa: tu negocio.",
  },
  {
    src: "/landingPage/IMG_6962.jpg",
    alt: "Área de descanso y networking en un entorno moderno",
    title: "Ambiente Inspirador y Credibilidad",
    description:
      "Disfruta de un diseño ergonómico y moderno que fomenta la productividad y la creatividad. Proyecta una imagen profesional ante clientes o socios, respaldada por la reputación de un coworking consolidado y en constante crecimiento. ¡Haz de ElsaCoworking tu mejor carta de presentación!",
  },
];

const Benefits = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <div className="w-full mx-auto flex justify-center p-10">
      <div className="text-center w-full">
        <section ref={targetRef} className="relative min-h-[400vh]  mt-6">
          <div className="sticky top-0 h-screen w-8/12 mx-auto flex items-center overflow-hidden flex-wrap">
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
            <motion.div
              layout
              style={{ x }}
              className="flex  items-center gap-6"
            >
              {benefits.map((benefit, index) => (
                <CardImage
                  src={benefit.src}
                  alt={benefit.alt}
                  title={benefit.title}
                  description={benefit.description}
                  key={index}
                />
              ))}
            </motion.div>
            <div className="flex-1 mx-auto">
              <Button>Ver mas</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;

const CardImage = ({ src, alt, title, description }) => {
  return (
    <div className="w-[1080px] relative h-[70vh]  overflow-hidden rounded-xl">
      <div className="absolute bg-black/45 w-full h-full flex flex-col justify-center gap-4 p-24">
        <h3 className="text-white font-titles text-6xl">{title}</h3>
        <p className="text-white/75 text-start">{description}</p>
      </div>
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};
