import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<OnOff />*/}

            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledAccordion title={'Users'}/>*/}

            {/*<UncontrolledRating />*/}

            <Accordion title={'Users'} onClick={setAccordionCollapsed} collapsed={accordionCollapsed}/>
            {/*<Accordion title={'Menu'} onClick={setAccordionCollapsed} collapsed={accordionCollapsed}/>*/}

            {/*<AppTitle/>*/}



            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

function AppTitle() {
    return <h1>This is APP component</h1>
}


export default App;
