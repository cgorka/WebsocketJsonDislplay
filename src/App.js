import "./index.css";
import React from "react";
import Box from "./Box";
import Navbar from "./Navbar";
import {useState, useEffect} from "react";
import fakeData from "./fakeData";

function App() {
    const [jsonData, setjsonData] = useState(fakeData);
    useEffect(() => {
        let ws = new WebSocket('wss://fake-websocket-data-generator.herokuapp.com');
        ws.onopen = () => console.log('ws opened');
        ws.onclose = () => console.log('ws closed');
        ws.onmessage = e => {
            const message = JSON.parse(e.data);
            if (message != null) setjsonData(message);
        };
        // return () => {
        //     ws.close();
        // }
    }, []);
    const [theme, setTheme] = useState(localStorage.getItem('_theme'))
    function setThemeFun(_theme){
        console.log('_theme: ', _theme);
        localStorage.setItem('_theme', _theme);
        setTheme(_theme)
    }
    return (
        <>
            <Navbar theme={theme} setTheme={setThemeFun} ></Navbar>
            <div className="container">
                {jsonData.map((item) => (
                    <Box key={item[0].id} item={item[0]} theme={theme}></Box>
                ))}
            </div>
        </>
    );
}

export default App;
