import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SIMPLE EXAMPLE')

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
        // api.getUsers().then
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidmount)');
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render ane every counter change');
        document.title = counter.toString()
    }, [counter])


    return <>
        Counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        Fake: {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SetTimeOutExample')

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('set timeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])


    // useEffect(() => {
    //
    //     setInterval(() => {
    //         console.log('tick: ' + counter)
    //         setCounter((state) => state + 1)
    //     }, 1000)
    //
    // }, [])


    return <>
        {/*Counter: {counter}*/}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        {/*Fake: {fake}*/}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}

        Hello, counter: {counter} - fake: {fake}
    </>
}