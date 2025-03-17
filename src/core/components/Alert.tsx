import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AlertProps {
  isVisible?: boolean;
  onClose?: () => void;
  type?: "success" | "error";
}

export const Alert = ({
  isVisible: propIsVisible = true,
  onClose,
  type = "success",
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(propIsVisible);

  useEffect(() => {
    setIsVisible(propIsVisible);
  }, [propIsVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClick = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 1,
          }}
          onClick={handleClick}
          className={`fixed lg:max-w-sm mx-auto top-0 left-0 right-0 overflow-hidden py-3 px-4 shadow-lg border cursor-pointer rounded-lg ${
            type === "success"
              ? "bg-neutral-950 text-neutral-200"
              : "bg-red-950 text-red-200 border-red-800"
          }`}
        >
          <p className="text-center">
            {type === "success" ? (
              <>
                <span className="block font-medium mb-0.5">
                  ¡Gracias por contactarnos!
                </span>
                <span
                  className={`block ${
                    type === "success" ? "text-neutral-400" : "text-red-400"
                  }`}
                >
                  Nos pondremos en contacto contigo pronto.
                </span>
              </>
            ) : (
              <>
                <span className="block font-medium mb-0.5">¡Lo sentimos!</span>
                <span className="block text-red-400">
                  Hubo un error al enviar el formulario. Por favor, inténtalo de
                  nuevo.
                </span>
              </>
            )}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
