import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            divider: () => {
                return <div>My super duper divider</div>
            },
        },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


