import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    components: {
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    "&.Mui-error": {
                        color: "pink",
                        fontFamily: "monospace",
                    },
                },
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


