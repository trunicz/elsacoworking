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
    <section class="w-full mx-auto py-28 px-4 sm:px-6 lg:px-8 h-screen">
      <main class="text-center max-w-7xl mx-auto">
        <h1 class="text-4xl font-titles font-black mb-6">Planes a tu medida</h1>
        <p class="font-euphemia text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Nuestros planes están diseñados para ofrecerte todo lo necesario para
          que tu negocio crezca con flexibilidad y profesionalismo. Podrás
          proyectar una imagen sólida y confiable mientras disfrutas de un
          espacio de trabajo adaptado a tus necesidades.
        </p>

        <motion.div layout class="grid grid-cols-3 grid-rows-6  gap-4 gap-x-32">
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
        className={`bg-neutral-100 relative rounded-xl col-span-1 row-span-1 p-4 flex flex-col overflow-hidden ${
          isActive
            ? "col-start-2 col-span-2 row-start-1 row-span-full"
            : "cursor-pointer text-white"
        }`}
      >
        <motion.img
          layout
          className={`${
            isActive ? "block h-20" : "absolute top-0 left-0 h-full"
          } w-full rounded-md object-cover`}
          src="https://picsum.photos/1080/720?grayscale"
        />
        <div className="pt-4 z-10">
          <motion.h2 layout className="text-2xl font-titles font-black">
            {titleCard}
          </motion.h2>

          <motion.p
            layout
            className={`text-start pt-5 ${isActive ? "block" : "hidden"}`}
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
