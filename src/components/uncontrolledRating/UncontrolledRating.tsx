import React, {useState} from "react";

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState<number>(0)

    const changeValue = (newValue: number) => {
        setValue(newValue)
    }

    return (
        <div>
            <Star selected={value > 0} changeValue={changeValue} value={1}/>
            <Star selected={value > 1} changeValue={changeValue} value={2}/>
            <Star selected={value > 2} changeValue={changeValue} value={3}/>
            <Star selected={value > 3} changeValue={changeValue} value={4}/>
            <Star selected={value > 4} changeValue={changeValue} value={5}/>
            {/*<Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>*/}
            {/*<Star selected={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>*/}
            {/*<Star selected={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>*/}
            {/*<Star selected={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>*/}
            {/*<Star selected={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>*/}
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    changeValue: (newValue: number) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {

    // const onClickHandler = () => {
    //     props.changeValue(props.value)
    // }
    //
    //     return props.selected ? <span onClick={onClickHandler}><b>star</b> </span> :
    //     <span onClick={onClickHandler}>star </span>

    return props.selected
        ? <span onClick={() => props.changeValue(props.value)}><b>star</b> </span>
        : <span onClick={() => props.changeValue(props.value)}>star </span>
}