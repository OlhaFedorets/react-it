import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    //difficult counting
    console.log('generateData')
    return 2566000547
}


export const Example1 = () => {
    console.log('EXAMPLE')

    // const initialValue = useMemo(generateData, [])
    // const [counter, setCounter] = useState(initialValue);

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}