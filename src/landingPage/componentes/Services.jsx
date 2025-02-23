import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "motion/react";
const cards = [
  {
    titleCard: "Plan Básico",
    descriptionCard:
      "Para quienes buscan un espacio de trabajo cómodo y funcional.",
    cta_text: "Ver más",
  },
  {
    titleCard: "Plan Premium",
    descriptionCard:
      "Para quienes buscan un espacio de trabajo cómodo y funcional.",
    cta_text: "Ver más",
  },
  {
    titleCard: "Plan Empresarial",
    descriptionCard:
      "Para quienes buscan un espacio de trabajo cómodo y funcional.",
    cta_text: "Ver más",
  },
];

const Services = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section className="w-full mx-auto py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 ">
      <main className="text-center max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-titles font-black mb-4 md:mb-6">
          Planes a tu medida
        </h1>
        <p className="font-euphemia text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12">
          Nuestros planes están diseñados para ofrecerte todo lo necesario para
          que tu negocio crezca con flexibilidad y profesionalismo. Podrás
          proyectar una imagen sólida y confiable mientras disfrutas de un
          espacio de trabajo adaptado a tus necesidades.
        </p>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto md:grid-rows-3 gap-4 md:gap-6 lg:gap-x-32"
        >
          <LayoutGroup>
            {cards.map((card, index) => (
              <ServicePlansCards
                descriptionCard={card.descriptionCard}
                isActive={selectedItem === index}
                titleCard={card.titleCard}
                cta_text={card.cta_text}
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
            : "cursor-pointer text-white"
        }`}
      >
        <motion.img
          layout
          className={`${
            isActive
              ? "block h-20 md:h-32 absolute left-0 top-0"
              : "absolute top-0 left-0 h-full"
          } w-full object-cover rounded-t-xl`}
          src="https://picsum.photos/1080/720?grayscale"
        />
        <div className={`${isActive ? "pt-20 lg:pt-32" : "pt-4"} md:pt-6 z-10`}>
          <motion.h2
            layout
            className="text-xl md:text-2xl font-titles font-black"
          >
            {titleCard}
          </motion.h2>

          <motion.p
            layout
            className={`text-start pt-3 md:pt-5 text-sm md:text-base ${
              isActive ? "block" : "hidden"
            }`}
          >
            {descriptionCard}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            modi. Quis tempore, assumenda ducimus error alias soluta repudiandae
            saepe non.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Services;
