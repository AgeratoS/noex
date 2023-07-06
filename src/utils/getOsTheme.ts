import { dark, light } from "../core/theming";

const getOsTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return dark;
    } else if (window.matchMedia('(prefers-color-scheme: light').matches) {
        return light;
    }
    else return dark;
}

export default getOsTheme;