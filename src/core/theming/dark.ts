import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
    name: "dark",
    palette: {

        logoColor: "#F2F2F2",
        background: "#0A090D",
        textColor: "#E5E5E5",

        primaryColor: "#DFD1A7",
        secondaryColor: "#DFD1A7",

        navColor: "#0A090D",

        common: {
            black: {
                900: "#0A090D",
                700: "#1F1F1F",
            },
            grey: {
                800: "#393939",
                500: "#E5E5E5",
                400: "#BBBCBC",
                300: "#F2F2F2",
            },
            green: {
                400: "#A7C186",
            },

            yellow: {
                400: "#DFD1A7",
            },

            orange: {
                400: "#CDA177"
            },

            white: {
                "400_20": "#FFFFFF33",
                "400_50": "#FFFFFF80",
            }
        }
    },

    typography: {
        common: {
            fontFamily: "Courier New",
            fontStyle: "normal",
            fontWeight: 400
        },
        paragraph: {
            fontFamily: "Courier New",
            fontStyle: "normal",
            fontWeight: 400
        }
    }
};


export default dark;