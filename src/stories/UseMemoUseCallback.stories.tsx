import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemo demo',
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a]);


 for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => {setA(+e.currentTarget.value)}}/>
        <input value={b} onChange={(e) => {setB(Number(e.currentTarget.value))}}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}







const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return (
        <div>{
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }</div>
    )
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Bob', 'Ann', 'Den', 'Alice']);
    console.log("HelpsToReactMemo")

    const newArray = useMemo(()=>{
        return users.filter(u=> u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, 'Kate'])}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}





export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['HTML', 'CSS', 'JS', 'React']);
    console.log("LikeUseCallback")

    const newArray = useMemo(()=>{
        return books.filter(u=> u.toLowerCase().indexOf('a') > -1)
    }, [books])

    // const addBook = () => { setBooks([...books, 'Angular']) }

    // const memoizedAddBook = useMemo(()=>{
    //     return () => { setBooks([...books, 'Angular']) }
    // }, [books])

    const memoizedAddBook2 = useCallback(()=>{
        setBooks([...books, 'Angular'])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('BOOK SECRET')
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
            { props.books.map((b, i) => <div key={i}>{b}</div>) }
        </div>
    )
}

const Book = React.memo(BooksSecret);