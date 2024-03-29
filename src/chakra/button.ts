import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: "10px",
        fontSize: "10pt",
        color: "brand.100",
    },
    sizes: {
        sm: {
            fontSize: "6pt"
        },
        md: {
            fontSize: "10pt"
        }
    },
    variants: {
        solid:{
            color: "white",
            bg: "blue.500",
            _hover: {
                bg: "blue.400"
            },
           _active: {
            bg: "orange.300"
           } 
        },
        outline: {
            color: "blue.500",
            border: "1px solid",
            borderColor: "blue.500",
            bg: "white",
            _hover: {
                bg: "orange.100"
            }
        },
        oauth: {
            height: "34px",
            border: "1px solid",
            borderColor: "gray.300",
            _hover: {
                bg: "gray.50"
            }
        }
    },
}

export default Button