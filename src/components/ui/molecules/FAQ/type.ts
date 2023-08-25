import { ReactElement } from "react";

type FAQItem = {
    question: string;
    answer: () => ReactElement;
}

export type FAQProps = {
    items: FAQItem[];
    title: string;
}