import React, { useState, useCallback, useMemo, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WebSocketDemo = (props) => {
    const [socketUrl, setSocketUrl] = useState('ws://fake-websocket-data-generator.herokuapp.com');
    const messageHistory = useRef([]);

    const {
        sendMessage,
        lastMessage,
        readyState,
        lastJsonMessage,
    } = useWebSocket(socketUrl, {
        // onOpen: () => console.log('opened'),
        onMessage:()=> {
            // console.log('lastJsonMessage: ', lastJsonMessage);
            props.setData(lastJsonMessage);
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });

    messageHistory.current = useMemo(() =>
        messageHistory.current.concat(lastMessage),[lastMessage]);


    const handleClickSendMessage = useCallback(() =>
        sendMessage('Hello'), []);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <>
            {/*<span>The WebSocket is currently {connectionStatus}</span>*/}
            {/*<span>The WebSocket is currently {lastJsonMessage}</span>*/}
            {/*{lastMessage ? <span>Last message: {lastMessage.data}</span> : null}*/}

        </>
    );
};
export default WebSocketDemo;
