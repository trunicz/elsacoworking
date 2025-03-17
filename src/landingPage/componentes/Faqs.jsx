import { useState } from "react";
import FAQsComp from "../../core/components/FaqsComponent";

const cards = [
  {
    question: "¿Cuál es la duración del contrato?",
    answer: `Nuestros contratos pueden tener duración de 6 meses a 1 año.`,
  },
  {
    question:
      "¿Qué diferencia hay entre un paquete básico y uno personalizado?",
    answer: `La única diferencia es que en el paquete personalizado puedes hacer la instalación del wifi o telefónica y la recepción de llamadas es a nombre de tu empresa.`,
  },
  {
    question: "¿Cuál es el paquete más económico que manejan?",
    answer: `El paquete básico, que incluye el domicilio fiscal, recepción de llamadas y correspondencia, dirección y teléfonos establecidos, acceso a la sala de juntas hasta 5 horas a la semana, internet inalámbrico y estación de café.`,
  },
  {
    question: "¿Qué capacidad de personas tiene la sala de juntas?",
    answer: `Espacio ideal para 8 o 9 personas.`,
  },
  {
    question: "¿Qué requisitos solicitan para iniciar el contrato?",
    answer: `Nuestra prioridad es tu seguridad. Contamos con cámaras de vigilancia, acceso controlado por tarjetas o códigos, personal de recepción durante el horario laboral y protocolos de limpieza regulares para mantener un entorno seguro y cómodo.`,
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-titles font-black mb-6 sm:mb-8">
          Preguntas Frecuentes
        </h1>
        <div className="w-full sm:w-11/12 md:w-3/4 mx-auto space-y-3 sm:space-y-4">
          {cards.map((card, index) => (
            <FAQsComp
              key={index}
              question={card.question}
              answer={card.answer}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(prevIndex =>
                  prevIndex === index ? null : index
                )
              }
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Faqs;
