import React from 'react';
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from '@frontegg/react';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        logo: {
            image: 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg'
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;
