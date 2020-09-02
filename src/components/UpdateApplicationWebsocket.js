import React, { useEffect } from "react";
import { useDataStore } from "../context";
import {WEBSOCKET_URL} from "../constants";


const UpdateApplicationWebsocket = () => {
  const { updateArticles }= useDataStore();

  useEffect(() => {
    const ws = new WebSocket(WEBSOCKET_URL);

    ws.onopen = () => {
      ws.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"UpdateArticleChannel\"}"}))
    };
    ws.onmessage = (event) => {

      const response = JSON.parse(event.data);
      const message = response.message

      if (message && typeof message.data == 'object') {
        updateArticles(message.data);
      }

    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [updateArticles]);

  return (<div/>)
}

export default UpdateApplicationWebsocket;