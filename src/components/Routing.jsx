import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import Results from "./Results/Results";

const Routing = (props) => {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate to='/search'/>}/>
            <Route exact path='/search' element={<Results darkTheme={props.darkTheme}/>}/>
            <Route exact path='/image' element={<Results darkTheme={props.darkTheme}/>}/>
            <Route exact path='/news' element={<Results darkTheme={props.darkTheme}/>}/>
            <Route exact path='/video' element={<Results darkTheme={props.darkTheme}/>}/>
        </Routes>
    )
}

export default Routing;