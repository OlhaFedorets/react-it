import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string
}




export function UncontrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(true)

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    // const changeCollapsed = () => {
    //     setCollapsed(!collapsed)
    // }

    return (
        <div>
            {/*<AccordionTitle titleValue={props.title} onClick={()=>setCollapsed(!collapsed)}/>*/}
            <AccordionTitle titleValue={props.title} onClick={()=>dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    titleValue: string
    onClick: () => void
    // changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    // const onClickHandler = () => {
    //     props.changeCollapsed()
    // }

    return (
        <h3 onClick={props.onClick}>---{props.titleValue}---</h3>
        // <h3 onClick={props.changeCollapsed}>---{props.titleValue}---</h3>
        // <h3 onClick={props.changeCollapsed}>---{props.titleValue}---</h3>
    )
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
