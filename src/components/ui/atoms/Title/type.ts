import { HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
    level: 1 | 2,
}