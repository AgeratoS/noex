import styled from "styled-components";
import Title from "../../atoms/Title";
import Grid from "../../atoms/Grid";
import { FAQProps } from "./type";

const FAQWrapper = styled.div`

`;

const FAQTitle = styled(Title)`
    margin-bottom: 5.62rem;
`

const FAQQuestionText = styled(Title).attrs<{}>((props) => ({
    as: "span",
}))`
    color: ${(props) => props.theme.palette.primaryColor};

    font-family: Courier New;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`

const FAQQuestion = styled.div`
    grid-column: span 1;
`

const FAQAnswer = styled.div`
    grid-column: span 2;
`

const FAQ = (props: FAQProps) => {
    return (
        <FAQWrapper>
            <FAQTitle level={2}>{props.title}</FAQTitle>
            <Grid>
                {props.items.map((item) => (
                    <>
                        <FAQQuestion>
                            <FAQQuestionText level={2}>{item.question}</FAQQuestionText>
                        </FAQQuestion>

                        <FAQAnswer>
                            {item.answer()}
                        </FAQAnswer>
                    </>
                ))}
            </Grid>
        </FAQWrapper>
    )
}

export default FAQ;