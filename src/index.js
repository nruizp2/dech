import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import App from "./App.js";

import "./index.css"

import localeEsMessages from "./lang/es";
import localeEnMessages from "./lang/en";

import { createRoot } from 'react-dom/client';

const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

// const leng = navigator.language.split("-")[0]
const leng = 'es'

function Root() {
  const [locale, setLocale] = useState((leng === "en" || leng === "es")? leng: "en");

  return (
    <div className='index-div'>
      <IntlProvider locale={locale} messages={messages[locale]} >
      <App setLocale={setLocale}/>
    </IntlProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Root />);