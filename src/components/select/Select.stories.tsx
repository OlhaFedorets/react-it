import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Select stories',
    component: Select,
}


export const WithValue = () => {
    const [value, setValue] = useState('2')

    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Kiev'},
                    {value: '2', title: 'Minsk'},
                    {value: '3', title: 'Moscow'},
                ]}/>
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Kiev'},
                    {value: '2', title: 'Minsk'},
                    {value: '3', title: 'Moscow'},
                ]}/>
    )
}


