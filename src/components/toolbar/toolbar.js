import { Stack, Divider, AppBar, Toolbar, Box, Typography } from '@mui/material';
import { ToolbarMainButton, ToolbarSmallButton } from './toolbar.styles.js';

export default function MyToolbar({ backgroundColor, buttonColor }) {
    const colorHex = backgroundColor;
    return (
        <>
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
                        < ToolbarSmallButton buttonColor={buttonColor}>About Me</ ToolbarSmallButton>
                        < ToolbarSmallButton buttonColor={buttonColor}>Projects</ ToolbarSmallButton>
                        < ToolbarSmallButton buttonColor={buttonColor}>Skills</ ToolbarSmallButton>
                        < ToolbarSmallButton buttonColor={buttonColor}>Interests</ ToolbarSmallButton>
                        <ToolbarSmallButton buttonColor={buttonColor}>Resume</ ToolbarSmallButton>
                        < ToolbarSmallButton buttonColor={buttonColor}>Contact</ ToolbarSmallButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Divider variant="fullWidth" sx={{ background: 'black', }} />
            </Box>


        </>
    );
}
