import 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import dark from './dark';
import light from './light';

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

export { dark, light }