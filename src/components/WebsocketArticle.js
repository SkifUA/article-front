import React, {useEffect} from "react";
import {useDataStore} from "../context";


const WebsocketArticle = () => {

  const { addArticle }= useDataStore();
  useEffect(() => {
    const subscribe = {
      data: {
        channel: 'ArticleCable'
      }
    };
    const ws = new WebSocket('ws://localhost:3000/cable');

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response)
      // addArticle(response.data);
    };
    ws.onclose = () => {
      ws.close();
    };
  }, [addArticle]);

  return (
    <div />
  );
}

export default WebsocketArticle