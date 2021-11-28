import React from "react";
import {FronteggProvider} from "@frontegg/react";
import contextOptions from './context-options';

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


