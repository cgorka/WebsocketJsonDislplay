import './index.css'
import React from 'react';
import Box from "./Box";
import Navbar from "./Navbar";
import {useState, useEffect , useCallback, useMemo, useRef} from "react";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import WebSocketDemo from './WebSocketDemo'
import fakeData from './fakeData'
function App() {

    const [jsonData, setjsonData] = useState(fakeData);
    const getMassage = (message) => {
        // console.log('message1: ', message);
        if (message != null )
        setjsonData(message)
    };

    return (
        <>
            <Navbar></Navbar>
            <WebSocketDemo setData={getMassage}></WebSocketDemo>
            {
                jsonData.map(item=>(
                    <Box item={item[0]}></Box>
                ))
            }
            d
        </>
        // <WebSocketDemo></WebSocketDemo>

    );
}

export default App;
