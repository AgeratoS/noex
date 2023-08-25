import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const Fade = (props: PropsWithChildren<unknown>) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.718 }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

export default Fade;
