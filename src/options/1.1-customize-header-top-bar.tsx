import React from 'react';
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from '@frontegg/react';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        login: {
            pageHeader: () => <div style={{
                height: '64px',
                width: '100%',
                position: 'fixed',
                top: '0',
                background: 'linear-gradient(45deg, #6F7DFF, #6EC2C8)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h6 style={{
                    marginLeft: '32px',
                    marginRight: '32px',
                    color: 'white',
                    lineHeight: '22px',
                    fontSize: '16px',
                    fontFamily: 'Manrope',
                    letterSpacing: '0.01em'
                }}>Love our new
                    login? Join the beta to get all these new login methods in your login box</h6>
                <button style={{
                    cursor: 'pointer',
                    border: 'none',
                    height: '40px',
                    minWidth: '135px',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    padding: '8px 16px 8px 16px',
                    color: '#6F7DFF',
                    fontFamily: 'Manrope',
                    lineHeight: '22px',
                    letterSpacing: '0.01em',
                    marginRight: '32px'
                }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLInputElement).style.color = "white";
                            (e.target as HTMLInputElement).style.backgroundColor = '#6F7DFF';
                        }}
                        onMouseLeave={(e ) => {
                            (e.target as HTMLInputElement).style.color = "#6F7DFF";
                            (e.target as HTMLInputElement).style.backgroundColor = 'white';
                        }}
                        onClick={() => window.open('https://google.com')}>Join
                    the beta
                </button>
            </div>
        }
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;
