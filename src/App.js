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
  // const getMassage = (message) => {
  //   // console.log('message1: ', message);
  //   if (message != null) setjsonData(message);
  // };
  //   const [socketUrl, setSocketUrl] = useState('wss://fake-websocket-data-generator.herokuapp.com');
  //   const {
  //       sendMessage,
  //       lastMessage,
  //       readyState,
  //       lastJsonMessage,
  //   } = useWebSocket(socketUrl, {
  //       // onOpen: () => console.log('opened'),
  //       onMessage:()=> {
  //           // console.log('lastJsonMessage: ', lastJsonMessage);
  //           // props.setData(lastJsonMessage);
  //           console.log('lastJsonMessage: ', lastJsonMessage);
  //           if (lastJsonMessage != null)  setjsonData(lastJsonMessage);
  //       },
  //       //Will attempt to reconnect on all close events, such as server shutting down
  //       shouldReconnect: (closeEvent) => true,
  //   });
    useEffect(() => {
        let ws = new WebSocket('wss://fake-websocket-data-generator.herokuapp.com');
        ws.onopen = () => console.log('ws opened');
        ws.onclose = () => console.log('ws closed');

        ws.onmessage = e => {
            const message = JSON.parse(e.data);
            // console.log('e', message);
            if (message != null) setjsonData(message);
        };

        return () => {
            ws.close();
        }
    }, []);

  return (
    <>
      <Navbar ></Navbar>
      {/*<WebSocketDemo setData={getMassage}></WebSocketDemo>*/}
      <div className="container">
        {jsonData.map((item) => (
          <Box item={item[0]} ></Box>
        ))}
      </div>
    </>
    // <WebSocketDemo></WebSocketDemo>
  );
}

export default App;
