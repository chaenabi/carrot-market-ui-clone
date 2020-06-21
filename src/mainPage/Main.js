import React from 'react';
import MainHeader from "./MainHeader";
import MainTitle from "./MainTitle";
import MainHotArticle from "./MainHotArticle";
import './reset.css';
import './main.css';


function Main () {
    return (
        <>
         <MainHeader/>
         <MainTitle/>
         <MainHotArticle/>
        </>
    );
};

export default Main;