export type TitleProps = {
    level: 1 | 2;
}

export type StyledTitleProps = {
    [T in keyof TitleProps as `$${T}`]: TitleProps[T]
}