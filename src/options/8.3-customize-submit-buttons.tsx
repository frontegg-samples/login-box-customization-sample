import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        submitButtonTheme: {
            base: {
                backgroundColor: '#00bcd4',
                color: '#fff',
                borderColor: 'transparent'
            }
        }
    }
}
const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


