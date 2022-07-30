import { Card, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { CenteredBox } from '../../styles/app.styles.js';
import { ProjectCard } from './projects.css.js';

import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';



//MAKE DATA A TEXT FIME
// EDIT THE CARD
//MAKE ALL CARDS THE SAME SIZE?
// FUTURE IDEA- BE ABLE TO SORT PROJECTS BY SKILL
// ABSTRACT COLORS
function Projects() {
    const projects = [
        {
            codeAvaliable: false,
            name: 'Image Processor',
            image: '',
            github: 'https://github.com/Tvcz/ImageProcessing/tree/Hw5Retry',
            description:
                'Utilizes Java Swing to develop a GUI based Image Processor with the capacity to load and save new images, ' +
                'apply various filters and transformations, and downscale an image.' +
                'Implements Model-View-Controller paradigm and the Command design pattern.',
            technologies: ['Java', 'Swing', 'IntelliJ'],
            buttonLink: '',  // REDIRECT TO A CONTACT ME PAGE
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Oh Duck!',
            image: '',
            github: 'https://github.com/v-bow/ohDuck',
            description:
                'The Internet is a scary place, so why not bring along some ducks to help you feel safe! ' +
                'Worked in a team of 4 to develop a Chrome extension that replaces profane words with an adorable duck emoji.',
            technologies: ['JS', 'HTML', 'CSS', 'Python'],
            buttonLink: 'https://github.com/v-bow/ohDuck',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Email Sender Tool (HBP)',
            image: '',
            github: 'https://github.com/HackBeanpot/internal-tools',
            description:
                'Bulk email sender which allows the customized flexibility of pre made email templates ' +
                'Integrates Mailgun API for email sending, and NextAuth for website authentication',
            technologies: ['React.js', 'TypeScript', 'MongoDB', ' Node.js'],
            buttonLink: 'https://github.com/HackBeanpot/internal-tools',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Elevator Simulation',
            image: '',
            github: 'https://github.com/karynayen/ElevatorSimulation',
            description:
                'GUI based application that models elevator functionality using a finite state machine to ' +
                'determine the more efficient configuration ' +
                'The elevator has capacity, vertical speed, door speed, and passenger flow configurations.',
            technologies: ['Java', 'JavaFX', 'Eclipse',],
            buttonLink: '', // REDIRECT TO A CONTACT ME PAGE,
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Confetti Quotes Site',
            image: '',
            github: 'https://github.com/karynayen/Senior-Quote',
            description:
                'Responsive web page that generates a random senior quote. Featuring common app confetti and a surprise :)',
            technologies: ['JS', 'CSS', 'HTML'],
            buttonLink: 'https://github.com/karynayen/Senior-Quote',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: false,
            name: 'Escape from White Hall',
            image: '',
            github: '',
            description:
                'Learn about fire safety and how to navigate White hall with this handy zombie shooting game!',
            technologies: ['Roblox', 'Lua'],
            buttonLink: '',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        }, 
        {
            codeAvaliable: true,
            name: 'Personal Website',
            image: '',
            github: '',
            description:
                'Built a Website from scratch using React.js and MUI. Hosted by react.',
            technologies: ['React.js', 'MUI'],
            buttonLink: '',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        }
    ]

    return (
        <>
            {/* FIX THE GRID IS KIND OF OFF CENTER STILL  */}
            {/* FIX THE SPACIGN + PADDING */}
            <CenteredBox>
                <Box sx={{
                    width: '80%'
                }}>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold'}}>
                        Projects
                    </Typography>
                    <br></br>
                    <br></br>
                    <Grid container spacing={2}>
                        {projects.map((project) =>
                            <Grid item xs={12} sm={6} md={4}>
                                <ProjectCard>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <strong>{project.name}</strong>
                                        </Typography>
                                        <TechStack project={project}></TechStack>
                                        <br></br>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{paddingBottom:"20px"}}>
                                        <GitHubButton project={project}>{project.buttonMessage}</GitHubButton>
                                        {/* TODO: ABSTRACT COLORS */}
                                        <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#3979DB' }}>
                                            <Typography variant="body2">
                                                View
                                            </Typography>
                                        </Button>
                                    </CardActions>
                                </ProjectCard >
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </CenteredBox>
        </>
    );
}
// WHY DO WE NEED CURLY BRACE?
//ADD STYLING LATER
function GitHubButton({ project }) {
    if (project.codeAvaliable === true) {
        return (
            <>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none', borderColor: '#3979DB', color: '#3979DB' }}
                    onClick={() => window.open(project.github, "_blank")}>
                    <Stack spacing={1} direction="row" >
                        <Typography variant="body2">
                            GitHub
                        </Typography>
                    </Stack>
                </Button>
            </>);
    } else {
        return (
            <>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none', borderColor: '#3979DB', color: '#3979DB' }}>
                    {/* onClick={() => window.open(project.buttonLink, "_blank")} */}
                    <Typography variant="body2">
                        Code Avaliable on Request
                    </Typography>
                </Button>
            </>
        );
    }
}

// CHANGE COLOR
//FIX OVERFLOW

function TechStack({ project }) {
    return (<>
        <Stack spacing={2} direction="row" >
            {project.technologies.map((tool) =>
                <Box sx={{ borderRadius: '5px', padding: '2px 5px 2px 5px', backgroundColor: '#757ce8' }}>
                    <Typography sx={{ color: 'white' }} variant="caption" display="block">
                        {tool}
                    </Typography>
                </Box>
            )}
        </Stack>
    </>);
}

export default Projects;