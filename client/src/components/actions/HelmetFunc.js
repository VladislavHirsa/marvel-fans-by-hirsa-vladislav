import React from 'react';
import { Helmet } from "react-helmet";


const HelmetFunc = ({ content, title }) => {

    return  <Helmet>
            <title> {`Marvel Fans / ${title}`} </title>
            <meta name='description' content={`Marvel Fans / ${content}`} />
            </Helmet>
}

export default HelmetFunc;

