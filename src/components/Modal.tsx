import { motion } from "framer-motion";
import { ReactNode } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <XCircleIcon className="w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}