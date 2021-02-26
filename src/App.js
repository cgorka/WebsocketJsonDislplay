import "./index.css";
import React from "react";
import Box from "./Box";
import Navbar from "./Navbar";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import WebSocketDemo from "./WebSocketDemo";
import fakeData from "./fakeData";
import settingsData from "./settings";
function App() {
  const [jsonData, setjsonData] = useState(fakeData);
  const getMassage = (message) => {
    // console.log('message1: ', message);
    if (message != null) setjsonData(message);
  };
  const [size, setSize] = useState("normal");
  const setSizeFunction = (message) => {
    // console.log('message1: ', message);
    if (message != null) setSize(message);
  };
  return (
    <>
      <Navbar setSizeProp={setSizeFunction}></Navbar>
      <WebSocketDemo setData={getMassage}></WebSocketDemo>
      <div className="container">
        {jsonData.map((item) => (
          <Box item={item[0]} size={size}></Box>
        ))}
      </div>
    </>
    // <WebSocketDemo></WebSocketDemo>
  );
}

export default App;
