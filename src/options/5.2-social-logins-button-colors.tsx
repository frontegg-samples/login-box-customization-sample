import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';


const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            buttonStyle: {
                base: {
                    borderRadius: '0.5rem',
                    color: '#000',
                    background: '#fff',
                    border: '0.5px solid black'
                }
            },
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


