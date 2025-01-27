import React, {memo} from "react";
import {string} from "prop-types";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle titleValue={props.title} onChange={props.onChange} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    titleValue: string
    onChange: (accordionCollapsed: boolean) => void
    collapsed: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle')
    return (
        <h3 onClick={() => props.onChange(!props.collapsed)}>--{props.titleValue}--</h3>
    )
}


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) => {
                return <li key={index} onClick={() => {
                    props.onClick(el.value)
                }}>{el.title}</li>
            })}
        </ul>
    )
}
