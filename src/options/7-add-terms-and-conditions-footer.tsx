import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        signup: {
            pageFooter: () => {
                return (
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: '30px',
                            fontSize: '12px',
                            lineHeight: '16px',
                            color: '#36373C',
                        }}>
                        By continuing up I agree to Acme's{' '}
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{color: '#36373C'}}
                            href={'https://acme.com/terms'}>
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{color: '#36373C'}}
                            href={'https://acme.com/policy'}>
                            Privacy Policy.
                        </a>
                    </div>
                )
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


