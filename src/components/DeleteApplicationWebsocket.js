import React, { useEffect } from "react";
import { useDataStore } from "../context";
import {WEBSOCKET_URL} from "../constants";

const DeleteApplicationWebsocket = () => {
  const { dropArticle }= useDataStore();

  useEffect(() => {
    const ws = new WebSocket(WEBSOCKET_URL);

    ws.onopen = () => {
      ws.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"DeleteArticleChannel\"}"}))
      // console.log('openDeleteArticleChannel');
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      const message = response.message
      if (message && typeof message == 'object') {
        dropArticle(message.id);
      }
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
      // console.log('closeDeleteArticleChannel');
    };
  }, [dropArticle]);

  return (<div/>)
}

export default DeleteApplicationWebsocket;