import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        boxStyle: {
            boxShadow: 'none',
            background: 'transparent'
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;
