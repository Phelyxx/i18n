import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const messages = {
    'es': localeEsMessages,
    'en': localeEnMessages
};


ReactDOM.render(
    <IntlProvider
        locale={navigator.language}
        messages={messages[navigator.language.slice(0, 2)]}
    >
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);