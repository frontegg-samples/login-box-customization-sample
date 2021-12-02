import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        inputTheme: {
            base: {
                backgroundColor: '#f5f5f5',
                borderColor: '#e5e5e5',
                color: '#333',
                borderRadius: '4px',
                borderWidth: '1px',
                borderStyle: 'solid',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                fontSize: '14px',
                fontWeight: '400',
                height: '40px',
                padding: '0 15px',
                transition: 'border-color .2s ease-in-out, box-shadow .2s ease-in-out',
            },
            label: {
                color: 'red',
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


