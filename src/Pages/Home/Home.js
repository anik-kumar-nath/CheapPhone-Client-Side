import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Brands from './Brands/Brands';
import Carousel from './Carousel/Carousel';
import Categories from './Categories/Categories';

const Home = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Brands></Brands>
        </div>
    );
};

export default Home;