import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const SlideToCancel = ({ onCancel = () => {} }) => {
    const navigate = useNavigate()
  const [isDragging, setIsDragging] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isCompleted) {
        navigate("/cancelorder");
    }
  }, [isCompleted]);

  const handleDrag = (_, info) => {

    const containerWidth = containerRef.current?.offsetWidth || 0;
    if (info.point.x >= containerWidth -1 && typeof onCancel === "function") {
      setIsCompleted(true);
      onCancel();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-64 h-12 bg-white rounded-full flex items-center px-2 shadow-lg overflow-hidden"
    >
      <motion.div
        ref={buttonRef}
        className={`w-10 h-10 ${isCompleted ? "bg-red-500" : "bg-green-500"} rounded-full flex items-center justify-center cursor-pointer`}
        drag="x"
        dragConstraints={{ left: 0, right: 180 }}
        dragElastic={0.1}
        onDrag={handleDrag}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <X size={20} color="white" />
      </motion.div>
      {!isCompleted && (
        <span
          className={`ml-4 text-gray-600 transition-opacity ${isDragging ? "opacity-50" : "opacity-100"}`}
        >
          &gt;&gt; Slide to Cancel
        </span>
      )}
    </div>
  );
};

export default SlideToCancel;
