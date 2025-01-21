import React, {useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    return (
        <div className={styles.select}>
            {/*<div className={styles.select + ' ' + (active && styles.active)}> вариант отобразить active с помощью css*/}
            <span className={styles.main}
                  onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i =>
                        <div key={i.value}
                             className={styles.item + ' ' + (selectedItem === i ? styles.selected : '')}
                             onClick={() => onItemClick(i.value)}>
                            {i.title}
                        </div>)}
                </div>
            }
        </div>
    )
}