import {
    ChoosingTheme,
    AddTermsAndConditions,
    ChangeBackground,
    ChangeFont,
    FlatLoginBox,
    HeaderImage,
    ChangeSocialLoginsDividerText,
    ChangeSocialLoginsDividerStyle,
    ImplementYourOwnSocialLoginsDivider,
    ChangeSocialLoginsLayout,
    ChangeSocialLoginsColors,
    ChangeSocialLoginsIconsOnly,
    SplitLayout,
    CustomizeInputs,
    CustomizeLinks,
    CustomizeSubmitButton,
    CustomizeLoader, CustomizeInputErrors
} from "./options/customization-option";

import ChoosingThemeProvider from "./options/1-choosing-a-theme";
import HeaderImageProvider from './options/1-customize-header-image';
import ChangeBackgroundProvider from './options/2-change-background';
import ChangeFontProvider from './options/2.1-change-fonts';
import FlatLoginBoxProvider from './options/3-flat-login-box';
import SplitLayoutProvider from './options/4-split-layout';
import SocialLoginLayoutProvider from './options/5.1-social-logins-layout';
import SocialLoginButtonColorsProvider from './options/5.2-social-logins-button-colors';
import SocialLoginButtonsIconsOnlyProvider from './options/5.3-social-logins-icons-only';

import SocialLoginsDividerTextProvider from './options/6.1-change-social-logins-divider-text';
import SocialLoginsDividerStyleProvider from './options/6.2-change-social-logins-divider-styles';
import SocialLoginsDividerNewProvider from './options/6.3-implement-your-own-social-logins-divider';


import TermsAndConditionsProvider from './options/7-add-terms-and-conditions-footer';

import CustomizeInputsProvider from './options/8.1-customize-inputs';
import CustomizeLinksProvider from './options/8.2-customize-links';
import CustomizeSubmitButtonProvider from './options/8.3-customize-submit-buttons';
import CustomizeInputErrorsProvider from './options/8.4-customize-input-errors';


import CustomizeLoaderProvider from './options/9-customize-loader';

const customizationOptions = [
    {
        key: ChoosingTheme,
        text: 'Choosing a theme',
        Provider: <ChoosingThemeProvider/>,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        themeName: 'dark',
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
    key: HeaderImage,
    text: 'Change header image',
    Provider: <HeaderImageProvider />,
    snippet: `import React from 'react';
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

export default Provider;`
},
    {
        key: ChangeBackground,
        text: 'Change background image',
        Provider: <ChangeBackgroundProvider />,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from '@frontegg/react'a;
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

export default Provider;`
},
    {
        key: ChangeFont,
        text: 'Change font for your login box',
        Provider: <ChangeFontProvider />,
        snippet: `import React from "react";
import contextOptions from './context-options';
import { FronteggProvider, FronteggThemeOptions } from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        typography: {
            fontFamily: '"Open Sans", sans-serif',
        }
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`,
    },
    {
        key: FlatLoginBox,
        text: 'Flatten your login box',
        Provider: <FlatLoginBoxProvider />,
        snippet: `import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        boxStyle: {
            boxShadow: 'none',
            background: 'transparent'
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
},
    {
        key: SplitLayout,
        text: 'Split layout mode',
        Provider: <SplitLayoutProvider />,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        layout: {
            type: 'float-left',
            sideElement: () => {
                return <div style={{width: '50%'}}>
                    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
                         alt="Hackers"/>
                </div>
            },
            sideElementStyle: {
                width: '50%'
            }
        }
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
},
    {
        key: ChangeSocialLoginsLayout,
        text: 'Stack social login buttons',
        Provider: <SocialLoginLayoutProvider />,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            containerStyle: {
                display: 'flex',
                flexDirection: 'column',
            },
            buttonStyle: {
                base: {
                    marginTop: '10px'
                }
            }
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: ChangeSocialLoginsIconsOnly,
        text: 'Display icons only on social logins',
        Provider: <SocialLoginButtonsIconsOnlyProvider />,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            iconsOnly: true,
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: ChangeSocialLoginsColors,
        text: 'Change the social logins buttons style',
        Provider: <SocialLoginButtonColorsProvider/>,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';


const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            buttonStyle: {
                base: {
                    borderRadius: '0.5rem',
                    color: '#000',
                    background: '#fff',
                    border: '0.5px solid black'
                }
            },
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: ChangeSocialLoginsDividerText,
        text: 'Customize social logins divider text',
        Provider: <SocialLoginsDividerTextProvider/>,
        snippet: `import React from 'react';
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

export default Provider;`
    },
    {
        key: ChangeSocialLoginsDividerStyle,
        text: "Change social logins divider style",
        Provider: <SocialLoginsDividerStyleProvider />,
        snippet: `import React from "react";
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

export default Provider;`
    },
    {
        key: ImplementYourOwnSocialLoginsDivider,
        text: "Implement your own social logins divider",
        Provider: <SocialLoginsDividerNewProvider />,
        snippet: `import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        socialLogins: {
            divider: () => {
                return <div>My super duper divider</div>
            },
        },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: AddTermsAndConditions,
        text: "Add terms and conditions footer",
        Provider: <TermsAndConditionsProvider />,
        snippet: `import React from "react";
import contextOptions from './context-options';
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        boxFooter: () => {
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
        },
    }
}

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: CustomizeInputs,
        text: 'Customize the styles of the inputs',
        Provider: <CustomizeInputsProvider />,
        snippet: `import React from "react";
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

export default Provider;`,
    },
    {
        key: CustomizeLinks,
        text: 'Customize the links',
        Provider: <CustomizeLinksProvider />,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        linkButtonTheme: {
            base: {
                color: 'pink',
            }
        },
    }
}
const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: CustomizeSubmitButton,
        text: 'Customize the submit button',
        Provider: <CustomizeSubmitButtonProvider />,
        snippet: `import React from "react";
import {FronteggProvider, FronteggThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

const themeOptions: FronteggThemeOptions = {
    loginBox: {
        submitButtonTheme: {
            base: {
                backgroundColor: '#00bcd4',
                color: '#fff',
                borderColor: 'transparent'
            }
        }
    }
}
const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} themeOptions={themeOptions}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: CustomizeInputErrors,
        text: 'Customize the input errors',
        Provider: <CustomizeInputErrorsProvider />,
        snippet: `import React from "react";
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

export default Provider;`
    },
    {
        key: CustomizeLoader,
        text: 'Customize the login loader',
        Provider: <CustomizeLoaderProvider />,
        snippet: `import React, {useState} from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";

import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const MyCustomLoaderComponent = () => {
    return (
        <div>I am custom loader and i'm awesome!</div>
    )
}
const Provider = () => {
    const [loading, setLoading] = useState(false);

    return (
        <FronteggProvider customLoader={setLoading} contextOptions={contextOptions} headerImage={headerImage}>
            {loading && <MyCustomLoaderComponent />}
        </FronteggProvider>
    )
};

export default Provider;`
    }
]

export default customizationOptions;
