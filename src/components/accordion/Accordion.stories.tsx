import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'


import {useState} from "react";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion collapsed={true} onClick={callback} title={'Menu'}/>
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} onClick={callback} title={'Users'}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value} onClick={()=>setValue(!value)} title={'Users'}/>
}

