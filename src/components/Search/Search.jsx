import React, {useEffect, useState} from 'react';
import {useDebounce} from "use-debounce";

import {useResultContext} from "../context/ResultContextProvider";
import iconClose from '../../icon-close.svg';
import './Search.styles.css';

const Search = () => {
    const [text, setText] = useState('');
    const {setSearchTerm} = useResultContext();
    const [debounceValue] = useDebounce(text, 300);

    useEffect(() => {
        if (debounceValue) setSearchTerm(debounceValue);
    }, [debounceValue]);

    return (
        <div className='search'>
            <input
                className='search__input'
                type="text"
                value={text}
                placeholder='Search here...'
                onChange={e => setText(e.target.value)}
            />
            {text && (
                <button className='search__button' type='button' onClick={() => setText('')}>
                    <img src={iconClose} alt="close-icon"/>
                </button>
            )}
        </div>
    )
}

export default Search;