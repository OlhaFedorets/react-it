import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'


import {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
}


export const OnMode = () => <OnOff on={true} onClick={action('on or off clicked')}/>
export const OffMode = () => <OnOff on={false} onClick={action('on or off clicked')}/>

export const ModeChanging = () => {
    const [value, seValue] = useState<boolean>(true);
    return <OnOff on={value} onClick={seValue}/>
}

