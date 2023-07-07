import { Meta, StoryObj } from "@storybook/react";
import Paragraph from ".";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;

export const BaseParagraph: StoryObj<typeof Paragraph> = {
  render: () => (
    <Paragraph>
      Проведение инженерных работ позволяет получить объем необходимых данных
      для аргументирования технической возможности и экономической
      целесообразности проектирования и застройки на конкретной территории.
      Информировать о возможных рисках и изменениях геологической ситуации и
      окружающей среды, связанных со строительством и эксплуатацией объекта,
      разработать мероприятия по охране и защите природы и населения от влияния
      техногенных факторов.
    </Paragraph>
  ),
};
