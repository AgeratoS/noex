import 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            common: {
                black: ColorSet;
                grey: ColorSet;
                green: ColorSet;
                yellow: ColorSet;
                white: ColorSet;
            }
        },

        typography: {
            common: {
                abc: string;
            }
        }
    }
}

type ColorSet = {
    [key: string | number]: Color;
}
type Color = string;

const theme: DefaultTheme = {
    palette: {
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

            white: {
                400_20: "#FFFFFF33",
                400_50: "#FFFFFF80",
            }
        }
    },

    typography: {
        common: {
            abc: "abc"
        }
    }
};


export default theme;