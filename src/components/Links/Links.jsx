import React from 'react';
import {NavLink} from 'react-router-dom';
import './Links.styles.css';

import iconSearch from '../../icon-search.svg';
import iconImage from '../../icon-image.svg';
import iconNews from '../../icon-news.svg';
import iconVideo from '../../icon-video.svg';

const links = [
    {url: '/search', text: 'All', icon: iconSearch},
    {url: '/image', text: 'Images', icon: iconImage},
    {url: '/news', text: 'News', icon: iconNews},
    {url: '/video', text: 'Videos', icon: iconVideo},
]

const Links = () => {
    return (
        <div className='link__container'>
            {links.map(({url, text, icon}, index) => (
                <NavLink key={index} to={url} className={({isActive}) => (isActive ? 'link link--active' : 'link')}>
                    <img src={icon} alt="link-icon"/>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links;