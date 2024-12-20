import React from "react";

type AccordionPropsType = {
    title: string
    onClick: (accordionCollapsed: boolean)=>void
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle titleValue={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    titleValue: string
    onClick: (accordionCollapsed: boolean)=>void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick(!props.collapsed)}>--{props.titleValue}--</h3>
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
