import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Routing from "./components/Routing";
import Links from "./components/Links/Links";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'body body--dark' : 'body'}>
            <div className='header'>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Links/>
            </div>
            <Routing darkTheme={darkTheme}/>
            <Footer/>
        </div>
    )
}

export default App;