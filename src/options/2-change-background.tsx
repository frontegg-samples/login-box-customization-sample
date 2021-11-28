import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import backgroundImage from '../assets/gradient';
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        rootStyle: {
            backgroundImage: backgroundImage
        },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


