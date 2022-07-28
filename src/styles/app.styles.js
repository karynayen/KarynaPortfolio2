import { styled } from '@mui/material/styles'
import { Box, Paper, Typography, Button } from '@mui/material';


// how to fit phones
const CenteredBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const IntroPaper = styled(Paper)(({ elevation }) => ({
    color: 'white',
    width: '55%',
    height: '100%',
    backgroundColor: '#3979DB', 
    padding: 30,
    margin: '4% 0 0 2%',
}))

const IntroHeadingTypography = styled(Typography)(({ variant }) => ({
    m: 1,
    fontWeight: 10,
    fontSize: '4.5em',
    marginBottom: 20,
}))

const IntroBodyTypography = styled(Typography)(({ variant }) => ({
    marginTop: 20,
    marginBottom: 20,
    m: 1,
    fontWeight: 10,
    fontSize: '1em',
}))


const IntroContainedButton = styled(Button) ({
    color: 'white',
    backgroundColor: '#3979DB',
    borderColor: 'white',
    '&:hover': {
        backgroundColor: '#819ca9',
        borderColor: '#819ca9',
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: '#819ca9',
        borderColor: '#819ca9',
        boxShadow: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
})

const IntroOutlinedButton = styled(Button)(({ variant }) => ({
    color: 'white',
    backgroundColor: '#3979DB', 
    borderColor: 'white',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#757ce8',
        borderColor: 'white',
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: '#757ce8',
        borderColor: 'white',
        boxShadow: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}))

export { CenteredBox, IntroPaper, IntroHeadingTypography, IntroBodyTypography, IntroContainedButton,  IntroOutlinedButton }