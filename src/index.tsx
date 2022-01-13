import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import pt_br from "./i18n/pt-br.json";
import en_us from "./i18n/en-us.json";
import es_mx from "./i18n/es-mx.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pt_BR",
  resources: {
    pt_BR: {
      global: pt_br,
    },
    en_US: {
      global: en_us,
    },
    es_MX: {
      global: es_mx,
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
