import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>;
