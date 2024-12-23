// import { action } from '@storybook/addon-actions'
// import {useState} from "react";
// import {Accordion} from "./Accordion";
//
// export default {
//     title: 'Accordion',
//     component: Accordion,
// }
//
// const callback = action('accordion mode change event fired')
//
// export const MenuCollapsedMode = () => <Accordion collapsed={true} onClick={callback} title={'Menu'}/>
// export const UsersUnCollapsedMode = () => <Accordion collapsed={false} onClick={callback} title={'Users'}/>
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//     return <Accordion collapsed={value} onClick={()=>setValue(!value)} title={'Users'}/>
// }



import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";
import {useState} from "react";

export default {
    component: Accordion
}

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// }
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         title: 'FirstStory',
//         collapsed: true,
//         onClick: ()=> {}
//     },
// }

const onClickHandler = action('onClick');

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'}
                      collapsed={true}
                      onClick={onClickHandler}
                      />
}

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'}
                      collapsed={false}
                      onClick={onClickHandler}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion title={'Accordion'}
                      collapsed={collapsed}
                      onClick={()=>{setCollapsed(!collapsed)}}
    />
}