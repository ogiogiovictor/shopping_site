import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {

    let navigate = useNavigate();
    let { pathname } = useLocation();
    let params = useParams();
    
    console.log(pathname)

    return (
        //history.push(`${match.url}${linkUrl}`) 
        // navigate(`${pathname}${linkUrl}`)
        // navigate(`${linkUrl}`)
    <div className={`${size} menu-item`} onClick={ () => navigate(`${pathname}${linkUrl}`) }>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 class='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
       
    </div>
    )
};

export default MenuItem;