import { ComponentStyleConfig } from "@chakra-ui/react";

const MenuButton: ComponentStyleConfig = {
    baseStyle: {
        width: "100%",
        fontSize: "10pt",
        _hover: {bg: "gray.100"}
    },
    sizes: {
    },
    variants: {
        userDropdown:{
            _hover : {
                bg: "blue.400",
                color: "white",
            }
        },
    },
}

export default MenuButton