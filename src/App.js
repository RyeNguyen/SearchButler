import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import Links from "./components/Links/Links";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'body body--dark' : 'body'}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Links/>
            <div className='divider'/>
            <Routing/>
            <Footer/>
        </div>
    )
}

export default App;