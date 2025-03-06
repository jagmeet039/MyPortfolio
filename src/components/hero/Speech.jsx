import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hey, I’m Jagmeet Singh, a Front-End Developer.",
            1000,
            "With 5+ years of building Web Applications.",
            1000,
            "I turn ideas into interactive experiences.",
            1000,
            "I’ve built scalable apps using ReactJs",
            1000,
            "Let’s build something amazing together!",
            1000
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
