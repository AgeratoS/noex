import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
    component: Button
}
export default meta;


export const ButtonPrimary: StoryObj<typeof Button> = {
    render: () => <Button>Наши проекты</Button>
}

export const ButtonSecondary: StoryObj<typeof Button> = {
    render: () => <Button $appearance="secondary">Показать услуги</Button>
}

export const ButtonWithUnknownContent: StoryObj<typeof Button> = {
    render: () => <Button>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolores commodi totam facere doloremque sapiente laudantium porro numquam sit accusantium suscipit ullam quibusdam in adipisci molestiae hic corrupti non dicta quaerat neque et magni explicabo mollitia. Et dicta quod quia adipisci, corrupti sint numquam est repellat nostrum asperiores error molestiae eius repudiandae sequi aperiam modi. Beatae dignissimos hic quas cum ad nam, adipisci fuga dolore placeat atque quaerat quod officia dolorum, ex et natus sapiente. Ullam ea, fuga accusamus suscipit consequuntur similique perspiciatis dolores consectetur, porro modi aliquam quia expedita voluptatum laboriosam explicabo iure dignissimos! Harum at, nam in dolore beatae laboriosam architecto laborum quam fuga! Ipsam ex maiores voluptate laborum consectetur deleniti nulla hic iure perferendis libero rem corrupti ratione ad, blanditiis nesciunt aperiam modi quia eaque temporibus aliquid nostrum. Consequuntur modi esse inventore repellendus quod eius neque alias deserunt id voluptas, fugiat, nam necessitatibus hic? Illo deleniti aperiam maiores, sit quo omnis! Quo, quam!</Button>
}

export const ButtonsWithAsLinkAndAsButton: StoryObj<typeof Button> = {
    render: () => <>
        <Button $as='link'>I'm link button</Button>
        <Button $as='button'>I'm button</Button>
    </>
}