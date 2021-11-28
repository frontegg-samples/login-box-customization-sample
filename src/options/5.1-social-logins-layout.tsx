import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';


const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            containerStyle: {
                display: 'flex',
                flexDirection: 'column',
            },
            buttonStyle: {
                base: {
                    marginTop: '10px'
                }
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


