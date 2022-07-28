// UPDATE THE STYLES FOR THE TOOL BAR
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material';


const ToolbarMainButton = styled(Button)(({ variant, buttonColor }) =>({
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    mr: 1,
    borderColor: 'white',
    textTransform:'none',
    '&:hover': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:active': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:focus': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    }))

const ToolbarSmallButton = styled(Button)(({ variant, buttonColor }) =>({
    color: 'black', 
    fontWeight: 'bold', 
    fontSize: 18,

    '&:hover': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:active': {
        color: buttonColor,
        backgroundColor: buttonColor,
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:focus': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
}))

export { ToolbarMainButton, ToolbarSmallButton }