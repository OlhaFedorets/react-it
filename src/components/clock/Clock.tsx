import {useEffect, useState} from "react";


const getTwoDigitString = (number: number) => { return  number < 10 ? '0' + number : number }

export const Clock: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])



    return <div>
        <span>{getTwoDigitString( date.getHours())}</span>
        :
        <span>{getTwoDigitString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitString(date.getSeconds())}</span>
    </div>
}