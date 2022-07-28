import { Card, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { CenteredBox } from '../../styles/app.styles.js';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    return (
        <>
            <CenteredBox>
                <Box sx={{
                    width: '80%'
                }}>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>
                        Contact Me
                    </Typography>
                </Box>
            </CenteredBox>
        </>
    );
}

// CONTACT FORMS
// ABSTRACT THIS LOL