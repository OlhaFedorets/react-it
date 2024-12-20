import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    // const changeCollapsed = () => {
    //     setCollapsed(!collapsed)
    // }

    return (
        <div>
            <AccordionTitle titleValue={props.title} setCollapsed={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    titleValue: string
    setCollapsed: () => void
    // changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    // const onClickHandler = () => {
    //     props.changeCollapsed()
    // }

    return (
        <h3 onClick={props.setCollapsed}>---{props.titleValue}---</h3>
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
