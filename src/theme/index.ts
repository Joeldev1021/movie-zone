import { ChakraProps, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme: ThemeConfig = extendTheme(
    /* {
      components,
    }, */
    {
        config: {
            initialColorMode: "dark",
            useSystemColorMode: false,
        },
        colors: {
            bg: {
                light: "#F2F2F2",
                dark: "#1F2023",
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
            body: "Inter-Regular, sans-serif",
            heading: "Inter-Semibold, sans-serif",
        },
        styles: {
            global: (props: ChakraProps) => ({
                "html, body": {
                    height: "100%",
                    maxHeight: "100vh",
                    bg: mode("bg.dark", "bg.light")(props),
                    fontSize: "14px",
                },
            }),
        },
    }
);

export default theme;
