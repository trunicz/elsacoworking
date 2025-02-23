import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "motion/react";
const cards = [
  {
    titleCard: "Oficinas Virtuales",
    descriptionCard:
      "Opta por nuestros planes virtuales, con tarifas que van desde $1,350.00 MXN hasta $1,750.00 MXN, y disfruta de los beneficios de una dirección comercial en La Paz, recepción de correspondencia y la posibilidad de contar con atención telefónica profesional. Además, tendrás acceso bajo reserva a nuestras salas de reunión cuando necesites recibir a clientes o llevar a cabo presentaciones. Esta es la opción ideal para emprendedores que buscan presencia corporativa sin asumir los costos de una oficina física tradicional.",
    imageURL: "/landingPage/IMG_6966.jpg",
  },
  {
    titleCard: "Day Pass",
    descriptionCard:
      "Disfruta de un acceso completo por un día a nuestras instalaciones con tarifas entre $239.00 y $349.00 MXN, ya sea como estudiante o como profesional independiente. Encuentra escritorios compartidos, oficinas privadas, salas de reunión y conexión a Internet de alta velocidad, todo en un ambiente diseñado para impulsar la productividad. Es la solución perfecta para quienes necesitan un lugar cómodo y profesional de forma puntual, así como para quienes desean una experiencia de coworking sin compromisos a largo plazo.",
    imageURL: "/landingPage/IMG_6962.jpg",
  },
  {
    titleCard: "MyRoom (Oficinas Privadas)",
    descriptionCard:
      "Nuestros MyRoom ofrecen espacios privados de 12 m² o 20 m², con costos desde $7,200.00 hasta $12,000.00 MXN al mes. Cada oficina está completamente amueblada con mobiliario ergonómico y cuenta con internet de alta velocidad. Además, tendrás acceso a áreas comunes, cocina y zonas de networking dentro de ElsaCoworking. Estas oficinas son ideales para equipos que buscan concentración, privacidad y un entorno de trabajo que favorezca su crecimiento.",
    imageURL: "/landingPage/IMG_6953.jpg",
  },
  {
    titleCard: "SmartRoom (Salas de Capacitación)",
    descriptionCard:
      "Encuentra el espacio ideal para talleres, cursos y reuniones de diversa magnitud, con precios que van desde $590.00 hasta $7,810.00 MXN. Contamos con salas para 8 a 10 personas y otras que pueden acomodar hasta 30 participantes, todas equipadas con proyectores, pantallas y acceso a internet de alta velocidad. Disfruta de un entorno moderno y profesional que fomenta la colaboración y la productividad en cada sesión.",
    imageURL: "/landingPage/IMG_6956.jpg",
  },
];

const Services = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section className="w-full mx-auto py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 ">
      <main className="text-center max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-titles font-black mb-4 md:mb-6">
          Planes a tu medida
        </h1>
        <p className="font-euphemia text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12">
          Nuestros planes están diseñados para ofrecerte todo lo necesario para
          que tu negocio crezca con flexibilidad y profesionalismo. Podrás
          proyectar una imagen sólida y confiable mientras disfrutas de un
          espacio de trabajo adaptado a tus necesidades.
        </p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto md:grid-rows-3 gap-4 md:gap-6 lg:gap-x-6">
          <LayoutGroup>
            {cards.map((card, index) => (
              <ServicePlansCards
                descriptionCard={card.descriptionCard}
                isActive={selectedItem === index}
                titleCard={card.titleCard}
                imageURL={card.imageURL}
                key={index}
                onClick={() => setSelectedItem(index)}
              />
            ))}
          </LayoutGroup>
        </motion.div>
      </main>
    </section>
  );
};

const ServicePlansCards = ({
  titleCard,
  descriptionCard,
  isActive,
  onClick,
  imageURL,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, stiffness: 75, visualDuration: 0.1 }}
        onClick={onClick}
        className={`bg-neutral-100 relative rounded-xl p-4 md:p-6 flex flex-col overflow-hidden ${
          isActive
            ? "md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-full relative"
            : "cursor-pointer text-white "
        }`}
      >
        <motion.img
          layout
          className={`${
            isActive
              ? "block h-20 md:h-32 absolute left-0 top-0 "
              : "absolute top-0 left-0 h-full brightness-50"
          } w-full object-cover rounded-t-xl`}
          src={imageURL}
        />
        <div
          className={`${
            isActive ? "pt-20 lg:pt-32" : "pt-4  w-full flex flex-col  p-6"
          }  z-10`}
        >
          <motion.h2
            layout="preserve-aspect"
            className="text-xl md:text-xl font-titles font-black"
          >
            {titleCard}
          </motion.h2>

          <motion.p
            layout
            animate={{ opacity: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.9 }}
            className={`text-start  overflow-hidden pt-3 md:pt-5 text-sm md:text-base ${
              isActive ? "block" : "hidden"
            }`}
          >
            {descriptionCard}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Services;
