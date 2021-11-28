import React from 'react';
import contextOptions from './context-options';
import {FronteggProvider} from '@frontegg/react';
import {LocalizationsOverrides} from '@frontegg/types/Localizations';

const localizationsOverrides: LocalizationsOverrides = {
    en: {
        loginBox: {
            login: {
                signInWithSocialLogin: 'OR'
            }
        }
    }
}

const Provider = () => (
    <FronteggProvider localizations={localizationsOverrides} contextOptions={contextOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;


