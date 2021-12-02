import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            dividerTextStyle: {
                color: 'red'
            },
            dividerStyle: {
                backgroundColor: '#f5f5f5',
                borderColor: '#f5f5f5',
                borderWidth: '1px',
                borderStyle: 'solid',
                marginTop: '10px',
                marginBottom: '10px',
            }
        },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


