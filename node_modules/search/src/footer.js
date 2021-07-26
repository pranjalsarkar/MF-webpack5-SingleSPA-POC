import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import store from "store/store";

const Footer = () => {
  const [count, setCount] = useState(store.count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
    });
  }, []);

  return (
    <div className="mui-appbar mui--appbar-line-height">
      <table width="100%">
        <tbody>
          <tr style={{ verticalAlign: "middle" }}>
            <td
              className="mui--appbar-height mui--text-display1"
              style={{ paddingLeft: "1em" }}
            >
              Disclaimer!
            </td>
            <td
              className="mui--appbar-height mui--text-display1"
              align="right"
              style={{ paddingRight: "1em" }}
            >
              Item Added : {count}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const footerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;
