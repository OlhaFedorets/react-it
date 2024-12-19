import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <OnOff />

            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'Users'}/>

            <UncontrolledRating />

            {/*<Accordion title={'Users'} collapsed={true}/>*/}
            {/*<Accordion title={'Menu'} collapsed={false}/>*/}

            {/*<AppTitle/>*/}


            {/*<Rating value={0}/>*/}
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
