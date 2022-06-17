import React from 'react';
import './Home.scss';
import Header from '../component/Header';
import SearchItem from '../component/SearchItem';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <SearchItem />
        </div >
    )
}

export default Home
