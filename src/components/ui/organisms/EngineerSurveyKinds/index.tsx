import styled from "styled-components";
import { motion } from "framer-motion";
import FAQ from "../../molecules/FAQ"
import Title from "../../atoms/Title";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";

import tree from "../../../../../public/images/tree.svg";
import stone from "../../../../../public/images/stone.svg";
import level from "../../../../../public/images/level.svg";
import Subtitle from "../../atoms/Subtitle";

const KindsList = styled(motion.ul)`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const KindsListItem = styled(motion.li)`
    padding-top: 1.88rem;
    padding-bottom: 1.88rem;

    border-bottom: 1px solid ${(props) => props.theme.palette.common.white["400_20"]};

    &:first-child {
        padding-top: 0;
    }
`

const KindWrapper = styled.div<{ icon: string }>`
    padding-left: 7.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    background: url('${(props) => props.icon}') no-repeat left center;
    background-size: 3.8rem;
`

const EngineerSurveyKinds = () => {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.6
            }
        },
        hidden: {
            opacity: 0
        }
    }

    const item = {
        visible: {
            opacity: 1, x: 0
        },
        hidden: {
            opacity: 0.1, x: 300
        }
    }

    return (
        <FAQ
            title="Виды инженерных изысканий для строительства"
            items={[
                {
                    question: "Главные направления деятельности",
                    answer: () => <KindsList initial="hidden" animate="visible" variants={list}>
                        <KindsListItem variants={item}>
                            <KindWrapper icon={stone}>
                                <Subtitle>Геологические</Subtitle>
                                <Paragraph>Получение востребованных материалов исследований для обоснования возможностей проектирования и стройки в существующей геологической ситуации</Paragraph>
                                <Link to="/">Подробнее</Link>
                            </KindWrapper>
                        </KindsListItem>

                        <KindsListItem variants={item}>
                            <KindWrapper icon={level}>
                                <Subtitle>Геодезические</Subtitle>
                                <Paragraph>Комплексные мероприятия по изучению и анализу ситуационных данных о рельефе земельного участка, его гидросети, растительности, текущем использовании, наличии и расположении зданий и сооружений, линейных объектов, наземных и подземных коммуникаций</Paragraph>
                                <Link to="/">Подробнее</Link>
                            </KindWrapper>
                        </KindsListItem>

                        <KindsListItem variants={item}>
                            <KindWrapper icon={tree}>
                                <Subtitle>Экологические</Subtitle>
                                <Paragraph>Мероприятия по изучению и мониторингу текущего состояния окружающей среды, прогнозирование вероятных негативных изменений экосистемы от социально-экономических факторов и техногенной нагрузки</Paragraph>
                                <Link to="/">Подробнее</Link>
                            </KindWrapper>
                        </KindsListItem>
                    </KindsList>
                }
            ]}
        />
    )
};

export default EngineerSurveyKinds;