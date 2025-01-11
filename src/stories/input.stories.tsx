import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ChangeEvent, useRef, useState} from "react";
import {Button} from "./Button";


export default {
    title: 'input',
    // component: input,
}


export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return (
        <>
            <input onChange={onChangeHandler}/> - {value}
        </>
    )
}

export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value: {value}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>;
