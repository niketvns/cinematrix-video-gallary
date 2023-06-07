import React from 'react';
import {Oval} from 'react-loader-spinner'

const SpinnerLoader = () => {
    return (
        <Oval
            height={80}
            width={80}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            strokeWidth={2}
            strokeWidthSecondary={2}
            color="#0EA5E9FF"
            secondaryColor="#fff"
        />
    );
};

export default SpinnerLoader;