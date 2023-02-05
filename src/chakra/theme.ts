import { extendTheme } from "@chakra-ui/react"
import Button from "./button";
import Icon from "./icon";
import MenuButton from "./menuItem";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  // NB: Chakra gives you access to `colorMode` and `theme` in `props`, this can be just defined with an object
  // Theme switching
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button, Icon, MenuButton
  }, 
});

export default theme