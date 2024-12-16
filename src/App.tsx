import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating value={3}/>
            <Accordion title={'Меню'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function AppTitle() {
    return <h1>This is APP component</h1>
}


export default App;
