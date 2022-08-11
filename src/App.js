
import './App.css';
import { GlobalStyles, Stack } from '@mui/material';
import { CenteredBox, IntroPaper, IntroHeadingTypography, IntroBodyTypography, IntroOutlinedButton } from './styles/app.styles.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MyToolbar from './components/toolbar/toolbar.js';
//import resume from './resume.pdf';
import Projects from './components/projects/projects.js';
import Contact from './components/contact/contact.js';
import { useRef } from 'react';

//https://www.reddit.com/r/reactjs/comments/q3cy21/how_can_i_get_an_image_to_open_in_a_new_tab/

function App() {
  const backgroundColor = '#E6EFFE';
  const buttonColor = '#3979DB';
  const ref = useRef(null);

  const handleClick = () => {
    console.log("HELLO")
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // const onDownload = () => {
  //   event => window.open('https://github.com/karynayen', "_blank")
  //   const link = document.createElement("a");
  //   link.download = 'download.pdf';
  //   link.href = "resume.pdf";
  //   link.click();
  // };

  const onDownload = (event) => {
    window.open('https://s3.amazonaws.com/symp.csm.usprod/northeastern/files/163/1635ca449d067f13e93333d9d6ea0af6.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAID3RBESXBCESHUGA%2F20220811%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220811T004131Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=c5858561bc7497663560c60eb31cdab3c494499f892038e8a45d527a8d3a2afc',
      "_blank")
  };




  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: backgroundColor }
        }}
      />

      <MyToolbar backgroundColor={backgroundColor} buttonColor={buttonColor}> </MyToolbar>
      <CenteredBox>
        <IntroPaper elevation={3}>
          {/* now edit the spacing! */}
          <IntroHeadingTypography variant="h1">
            hi, i'm <strong>karyna</strong>!
            <br></br>
          </IntroHeadingTypography>
          <Stack spacing={2} direction="row">
            {/* MAKE THIS BUTTON SCROLL TO AN ELEMENT*/}
            <IntroOutlinedButton variant="outlined" onClick={handleClick}>Projects</IntroOutlinedButton>
            <IntroOutlinedButton onClick={onDownload} variant="outlined">
              Resume
            </IntroOutlinedButton>
            {/* <IntroOutlinedButton variant="outlined">Extra!</IntroOutlinedButton> */}
          </Stack>

          <IntroBodyTypography variant="body1">
            I am a second-year computer science major at Northeastern University,
            interested in pursuing software development.
            <br></br>
            <br></br>
            My expertise is in utilizing object-oriented design to create
            various Java applications.
            I'm also experienced in using Javascript, Typescript, HTML/CSS, and Python,
            along with working with the React.js and Bootstrap librarys, and using Git for version control.
            <br></br>
            <br></br>
            Outside of software development, I am a competitive swimmer and a triathlete.
            I also enjoy hiking, skiing, and snowboarding!
            <br></br>
            <br></br>
            In this portfolio, I will display my projects,
            along with some of my hobbies and interests.
            Without further ado, welcome to my portfolio!
            <br></br>
            <br></br>
          </IntroBodyTypography>
          {/* make the icons clickable, CENTER THEM */}

          <Stack spacing={2} direction="row" >
            {/* obstract into a styles class!! */}
            <LinkedInIcon
              sx={{
                '&:hover': {
                  color: backgroundColor,
                },
              }}
              onClick={event => window.open('https://www.linkedin.com/in/karynayen/', "_blank")} />
            <GitHubIcon
              sx={{
                '&:hover': {
                  color: backgroundColor,
                },
              }}
              onClick={event => window.open('https://github.com/karynayen', "_blank")} />
            <EmailIcon
              sx={{
                '&:hover': {
                  color: backgroundColor,
                },
              }}
              onClick={event => window.location.href = 'mailto:yen.k@northeastern.edu'} />
          </Stack>
        </IntroPaper>
      </CenteredBox>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div ref={ref}>
        <Projects ></Projects>
      </div>

      <br></br>

      {/* <br></br>
      <br></br>
      <br></br>
      <Contact></Contact> */}


    </>
  );
}

export default App;