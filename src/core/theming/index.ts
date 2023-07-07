import 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import dark from './dark';
import light from './light';
import GlobalStyle from './GlobalStyle';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;

        palette: {
            common: {
                black: ColorSet;
                grey: ColorSet;
                green: ColorSet;
                yellow: ColorSet;
                white: ColorSet;
            },

            background: Color;
            textColor: Color;
        },

        typography: {

            paragraph: {
                fontFamily: string;
                fontStyle: string;
                fontWeight: string | number;
            }

            common: {
                fontFamily: string;
                fontStyle: string;
                fontWeight: string | number;
            }
        }
    }
}

type ColorSet = {
    [key: string | number]: Color;
}
type Color = string;

export { dark, light, GlobalStyle }