import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./index.css";
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import fakeData from "./fakeData";
import Error from "./Error";
import Demo from "./demo";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Boxes} from "./boxes";
import BoxFullScrean from "./BoxFullScrean";

function App() {
    const ThemeContext = React.createContext('light');
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
        <Router>
            <ToastContainer position="bottom-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}/>
            <Navbar theme={theme} setTheme={setThemeFun}></Navbar>
            <Switch>
                <Route path="/demo">
                    <Demo/>
                </Route>
                <Route path="/BoxFull:id" children={<BoxFullScrean />} />
                <Route path="/BoxFull">
                    <BoxFullScrean></BoxFullScrean>
                </Route>
                <Route exact path="/">
                    {Boxes(jsonData, theme)}
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
