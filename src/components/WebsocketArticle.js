import React, { useEffect } from "react";
import { useDataStore } from "../context";
import { websocketUrl } from "../constants";


const WebsocketArticle = () => {

  const { addArticle }= useDataStore();
  useEffect(() => {
    const subscribe = {
      data: {
        channel: 'ArticleCable'
      }
    };
    const ws = new WebSocket(websocketUrl);

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