import { ChakraProps, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import components from "./components/index";
const theme: ThemeConfig = extendTheme(
    {
        components,
    },
    {
        config: {
            initialColorMode: "dark",
            useSystemColorMode: false,
        },
        colors: {
            bg: {
                dark: "#000000",
                light: "#F2F2F2",
            },
            full: {
                dark: "#000000",
                light: "#ffffff",
            },
            brand: {
                purple: "#4343E5",
            },
        },
        fonts: {
            body: "Poppins, sans-serif",
            heading: "Poppins, sans-serif",
        },
        styles: {
            global: (props: ChakraProps) => ({
                "html, body": {
                    height: "100%",
                    maxHeight: "100vh",
                    bg: mode("bg.light", "bg.dark")(props),
                },
            }),
        },
    }
);

export default theme;
