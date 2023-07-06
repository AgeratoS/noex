import { DefaultTheme } from "styled-components";
import { useEffect, useState } from "react";
import { getOsTheme } from "../../utils";

const useTheme = (): DefaultTheme => {
    const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(getOsTheme());

    useEffect(() => {
        const changeThemeHandler: EventListenerOrEventListenerObject = () => {
            setCurrentTheme(getOsTheme())
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", changeThemeHandler)
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener("change", changeThemeHandler)
        }
    }, []);

    return currentTheme;
}

export default useTheme;