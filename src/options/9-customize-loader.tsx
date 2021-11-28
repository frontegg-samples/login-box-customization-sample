import React, {useState} from "react";
import {FronteggProvider} from "@frontegg/react";
import {Dimmer, Loader} from "semantic-ui-react";

import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const MyCustomLoaderComponent = () => {
    return (
        <Dimmer active>
            <Loader>Loading using custom loader!</Loader>
        </Dimmer>
    )
}
const Provider = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <FronteggProvider customLoader={setLoading} contextOptions={contextOptions} headerImage={headerImage}>
                <div />
            </FronteggProvider>
            {loading && <MyCustomLoaderComponent />}
        </div>
    )
};

export default Provider;


