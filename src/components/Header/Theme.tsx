import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Theme = () => {
  const { toggleColorMode } = useColorMode();
  const key = useColorModeValue("dark", "light");
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={key}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.19 }}
      >
        <IconButton
          aria-label="theme"
          title="Toggle theme"
          icon={icon}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Theme;
