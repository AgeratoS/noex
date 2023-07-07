import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const Fade = (props: PropsWithChildren<unknown>) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, position: "absolute" }}
      animate={{ opacity: 1, x: 0, position: "static" }}
      transition={{ duration: 0.718 }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

export default Fade;
