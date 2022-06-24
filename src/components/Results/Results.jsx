import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ReactPlayer from 'react-player';
import Masonry from 'react-masonry-css'

import {useResultContext} from "../context/ResultContextProvider";
import Loading from "../Loading";
import './Results.styles.css';

const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm) {
            // if (location.pathname === '/videos') {
            //     getResults(`/search/q=${searchTerm} videos`)
            // } else {
            //     getResults(`${location.pathname}/q=${searchTerm}&num=40`)
            // }
            getResults(`${location.pathname}/q=${searchTerm}&num=100`)
        }
    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading/>;

    const breakpointColumnsObj = {
        default: 5,
        1366: 4,
        1024: 3,
        768: 2,
        450: 1
    };

    switch (location.pathname) {
        case '/search':
            return (
                <div className='results'>
                    {results?.map(({link, title, description, cite}, index) => (
                        <a className='results__link' key={index} href={link} target='_blank' rel='noreferrer'>
                            <p className='results__link-text--small'>
                                {/*{link.length > 30 ? link.substring(0, 30) : link}*/}
                                {cite?.domain}
                            </p>
                            <p className='results__link-title'>{title}</p>
                            <p>{description}</p>
                        </a>
                    ))}
                </div>
            );

        case '/image':
            return (
                <Masonry breakpointCols={breakpointColumnsObj} className="results__grid">
                    {results?.map(({image, link: {href, title}}, index) => (
                        <a className='results__image-container' href={href} key={index} target='_blank'
                           rel='noreferrer'>
                            <img className='results__image' src={image?.src} alt={title} loading='lazy'/>
                            <p>{title}</p>
                        </a>
                    ))}
                </Masonry>
            );

        case '/news':
            return (
                <div className='results'>
                    {results?.map(({links, source, title, published}, index) => (
                        <a className='results__link' key={index} href={links?.[0].href} target='_blank' rel='noreferrer'>
                            <p className='results__link-text--small-underline'>
                                {source?.href}
                            </p>
                            <p className='results__link-title'>{title}</p>
                            <p className='results__link-text--small'>{published}</p>
                        </a>
                    ))}
                </div>
            );

        case '/video':
            return (
                <div className='results'>
                    {results?.map(({link, title, description, cite}, index) => link.includes('youtube') &&
                        <div key={index} className='results__video'>
                            <ReactPlayer url={link} controls width='800px'/>
                            <div className='results__video-text'>
                                <p className='results__link-text--small-underline'>{cite?.domain}</p>
                                <a href={link} target='_blank' rel='noreferrer' className='results__link-title'>{title}</a>
                                <p>{description}</p>
                            </div>
                        </div>
                    )}
                </div>
            );

        default:
            return 'ERROR!!!';
    }
}

export default Results;