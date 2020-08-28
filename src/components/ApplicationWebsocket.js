import React, { useEffect } from "react";
import { useDataStore } from "../context";
import {WEBSOCKET_URL} from "../constants";


const ApplicationWebsocket = () => {
  const { addArticle }= useDataStore();

  useEffect(() => {
    const ws = new WebSocket(WEBSOCKET_URL);

    ws.onopen = () => {
      ws.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"ArticlesChannel\"}"}))
      // console.log('openArticlesChannel');
    };
    ws.onmessage = (event) => {

      const response = JSON.parse(event.data);
      const message = response.message

      if (message && typeof message.data == 'object') {
        addArticle(message.data);
      }

    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
      // console.log('closeArticlesChannel');
    };
  }, [addArticle]);

  return (<div/>)
}

export default ApplicationWebsocket;