import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import Results from "./Results/Results";

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate to='/search'/>}/>
            <Route exact path='/search' element={<Results/>}/>
            <Route exact path='/image' element={<Results/>}/>
            <Route exact path='/news' element={<Results/>}/>
            <Route exact path='/video' element={<Results/>}/>
        </Routes>
    )
}

export default Routing;