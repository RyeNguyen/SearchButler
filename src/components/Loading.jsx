import React from 'react';
import {TailSpin} from 'react-loader-spinner';

const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "22vh"
}

const Loading = (props) => {
    return (
        <div className='loader' style={loaderStyle}>
            <TailSpin type='Puff' color={props.darkTheme ? "white" : "#3C3C3C"} height={550} width={80}/>
        </div>
    )
}

export default Loading;