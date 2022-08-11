
import { React, useState, useEffect } from "react";
import { Stack, Divider, AppBar, Toolbar, Box, Typography } from '@mui/material';
import { ToolbarMainButton, ToolbarSmallButton } from './toolbar.styles.js';
import Confetti from 'react-confetti'

export default function MyToolbar({ backgroundColor, buttonColor }) {
    const colorHex = backgroundColor;
    const size = useWindowSize();
    const [confettiOpacity, setConfettiOpacity] = useState(0);

    const toggleConfetti = () => {
        setConfettiOpacity(current => 
            {if (current === 0) { 
                current = 1;
            } else {
                current = 0;
            }
            return current;
        });
    };
    return (
        <>
            <Confetti
                width={size.width}
                height={size.height}
                opacity={confettiOpacity}
            />
            <Box>
                <AppBar elevation={0} position="static">
                    <Toolbar sx={{ padding: 1, backgroundColor: colorHex }}>
                        <ToolbarMainButton buttonColor={buttonColor}>
                            KARYNA YEN
                        </ToolbarMainButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <Stack spacing={3} direction="row">
                            {/* figure out how to make this the default selection */}
                            {/* <ToolbarSmallButton buttonColor={buttonColor}>About Me</ ToolbarSmallButton>
                            <ToolbarSmallButton buttonColor={buttonColor}>Projects</ ToolbarSmallButton>
                            <ToolbarSmallButton buttonColor={buttonColor}>Skills</ ToolbarSmallButton>
                            <ToolbarSmallButton buttonColor={buttonColor}>Interests</ ToolbarSmallButton>
                            <ToolbarSmallButton buttonColor={buttonColor}>Resume</ ToolbarSmallButton> */}
                            <ToolbarSmallButton buttonColor={buttonColor} onClick={toggleConfetti} >EXTRA!</ ToolbarSmallButton>
                            {/* TODO: abstract button functionality and enable copying https://sophiali.dev/copy-email-address-on-click-react */}
                            <ToolbarSmallButton buttonColor={buttonColor} onClick={event => window.location.href = 'mailto:yen.k@northeastern.edu'} >
                                Contact Me
                            </ ToolbarSmallButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Divider variant="fullWidth" sx={{ background: 'black', }} />
            </Box>


        </>
    );
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
