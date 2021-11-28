import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        linkButtonTheme: {
            base: {
                color: 'red',
                textDecoration: 'underline',
                fontWeight: 'bold',
            }
        },
    }
}
const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


