import React, {useState} from 'react';
import './App.css';
import {Fab} from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import {FaCode} from 'react-icons/fa';
import {Accordion, Button, Header} from 'semantic-ui-react';
import customizationOptions from './options';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
    ChoosingTheme,
    None,
} from "./options/customization-option";
import { Segment, Portal } from 'semantic-ui-react';

function loadProvider(option: string) {
    const customizationOption = customizationOptions.find(o => o.key === option);
    return customizationOption?.Provider;
}

function App() {
    const [showPortal, setShowPortal] = useState(true);

    const savedIndex = sessionStorage.getItem('activeIndex') || '0';
    const [activeIndex, setActiveIndex] = useState(parseInt(savedIndex));

    const customizationOption = sessionStorage.getItem('customizationOption') || None;
    const codeString = customizationOptions[activeIndex].snippet;

    const setCustomizationOption = (option: string) => {
        sessionStorage.setItem('customizationOption', option);
        window.location.href = `${window.location.origin}/account/login`;
    }

    if (customizationOption === None) {
        setCustomizationOption(ChoosingTheme);
    }

    return (
    <div className="App">
        {!showPortal  && <Fab text={"Help"} style={{left: 0, bottom: 0}} icon={<FaCode />} onClick={() => setShowPortal(true)} /> }
        { loadProvider(customizationOption) }
        <Portal
            open={showPortal}
            onClose={() => setShowPortal(false)}
        >
            <Segment style={{
                overflow: 'auto',
                left: '0',
                position: 'fixed',
                top: '0',
                width: '25%',
                height: '100vh',
                zIndex: 1000,
            }}>
                <Header>Go over the samples.<br /> Click on the demo button to see how it looks like</Header>
                <Accordion fluid styled>
                    {customizationOptions.map((o, index) => {
                        return <div>
                            <Accordion.Title index={index} onClick={() => {
                                sessionStorage.setItem('activeIndex', index.toString());
                                setActiveIndex(index);
                            }}>
                                <div style={{display: 'flex'}}>
                                <div>
                                    {o.text}
                                </div>
                                <div style={{marginLeft: 'auto'}}>
                                    <Button size={"tiny"} onClick={() => setCustomizationOption(o.key)}>demo</Button>
                                </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === index}>
                                <SyntaxHighlighter language="javascript" style={docco}>
                                    {codeString}
                                </SyntaxHighlighter>
                            </Accordion.Content>
                        </div>
                    })}
                </Accordion>
            </Segment>
        </Portal>
    </div>
  );
}

export default App;
