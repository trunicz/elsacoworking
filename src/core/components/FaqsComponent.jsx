import { motion } from "motion/react";

const FaqsComponent = ({ question, answer, isActive, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="group border-s-4 border-primary bg-gray-50 p-6"
    >
      <div
        className="flex cursor-pointer items-center justify-between gap-1.5"
        aria-labelledby="question-summary"
      >
        <h2 id="question-summary" className="text-lg font-medium text-gray-900">
          {question}
        </h2>
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-5 shrink-0 transition-transform duration-300 ${
              isActive ? "-rotate-45" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <motion.p
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
        }}
        className="mt-4 text-gray-700 overflow-hidden"
      >
        {answer}
      </motion.p>
    </motion.div>
  );
};

export default FaqsComponent;
