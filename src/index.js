    import { StrictMode } from "react";
    import ReactDOM from "react-dom";
    import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
    
    import WebFont from "webfontloader";
    import App from "./App";

    WebFont.load({
        google: {
            families: ['Poppins', "Ubuntu:700,400,500,300,","Roboto:700"]
        }
      });

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <StrictMode>
        <App />
      </StrictMode>,
      rootElement
    );
    