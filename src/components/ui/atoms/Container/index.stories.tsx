import { Meta, StoryObj } from "@storybook/react";
import Container from ".";
import { ContainerMode } from "./type";

const meta: Meta<typeof Container> = {
  component: Container,
};
export default meta;
export const ContainerBase: StoryObj<typeof Container> = {
  render: () => (
    <Container mode={ContainerMode.CONTAINER}>
      <p>Здесь какое-то содержание</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        debitis corporis rem in architecto soluta exercitationem veniam ullam
        maxime et eveniet quisquam dolorum laboriosam quam assumenda neque,
        dolor aliquam molestias? Ea maxime nesciunt saepe debitis perspiciatis
        recusandae qui nemo possimus quaerat rem, praesentium aperiam ratione!
        Nulla, natus accusantium. Magnam perspiciatis modi debitis, quisquam
        culpa deserunt eligendi quos commodi doloremque, aspernatur distinctio
        exercitationem rem impedit. Possimus ea quaerat non ducimus neque
        corrupti, delectus, doloremque, molestiae laboriosam labore ipsum?
        Soluta hic quasi eaque, rerum maiores praesentium fuga eveniet
        blanditiis? Nihil tempore facere quidem. Sunt fugiat illum inventore
        consequatur, aliquam expedita?
      </p>
    </Container>
  ),
};

export const ContainerFluid: StoryObj<typeof Container> = {
  render: () => (
    <Container mode={ContainerMode.FLUID}>
      <p>Здесь какое-то содержание</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        debitis corporis rem in architecto soluta exercitationem veniam ullam
        maxime et eveniet quisquam dolorum laboriosam quam assumenda neque,
        dolor aliquam molestias? Ea maxime nesciunt saepe debitis perspiciatis
        recusandae qui nemo possimus quaerat rem, praesentium aperiam ratione!
        Nulla, natus accusantium. Magnam perspiciatis modi debitis, quisquam
        culpa deserunt eligendi quos commodi doloremque, aspernatur distinctio
        exercitationem rem impedit. Possimus ea quaerat non ducimus neque
        corrupti, delectus, doloremque, molestiae laboriosam labore ipsum?
        Soluta hic quasi eaque, rerum maiores praesentium fuga eveniet
        blanditiis? Nihil tempore facere quidem. Sunt fugiat illum inventore
        consequatur, aliquam expedita?
      </p>
    </Container>
  ),
};
