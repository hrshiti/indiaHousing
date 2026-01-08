import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 10 }} // Slide in slightly from right
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }} // Slide out slightly to left
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
