import React from 'react';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


function Content(props) {
  const getAboutMe = () => [
        <Grid item xs={12}>
            <Typography>
      <h1>About Me</h1>
            <p>I'm a 4rd year undergraduate student at UC San Diego majoring in Computer Science and minoring in Mathematics.</p>
            
            <p>I've been passionate about tech ever since I got my first Android phone in 2012, frequenting forums in my free time to experiment with the custom roms and kernels that other Android enthusiasts had created. My developing passion for Operating Systems lead me to pursue a degree in Computer Science.</p>
            
            My courses have inspired personal interest in the study of Computer Architecture, Systems Programming, and Computability Theory. However, a fulfulling internship at Aganitha Cognitive Solutions last summer has sparked my passion for Data Science and I am currently pursuing the opportunity to participate in A.I./Machine Learning research.
            </Typography>
        </Grid>,
      <Grid item xs={6} >
      <Typography variant='headline'/>
      </Grid>,
      // <Avatar src={image} style={{width:'7em',height:'7em'}}/>,
  ];
  const getWork = () => [
      <Typography>
      <h1>Work</h1>
      </Typography>,
      <Divider/>,
      <Grid item >
      <Typography variant='body1'>
          <h3>Integrity Applications Incorporated | July 2018 - October 2018</h3>
          <ul>
            <li>Tutoring for CSE 30: Computer Organization and Systems Programming in the CSE Department at UCSD Jacobs School of Engineering</li>
            <li>Hold lab hours where I assist students with C and SPARC assembly programming, debugging with GDB, utilizing command-line tools, etc.</li>
            <li>Grade programming assignments, quizzes, and tests</li>
            <li>Held Discussion Sections where I will discuss future assignments and cover fundamentals of Computer Architecture</li>
          </ul>
      </Typography>,
      <Divider/>,
      <Typography variant='body1'>
          <h3>UCSD CSE Tutor | January 2017 - Present</h3>
          <ul>
            <li>Tutoring for CSE 30: Computer Organization and Systems Programming in the CSE Department at UCSD Jacobs School of Engineering</li>
            <li>Hold lab hours where I assist students with C and SPARC assembly programming, debugging with GDB, utilizing command-line tools, etc.</li>
            <li>Grade programming assignments, quizzes, and tests</li>
            <li>Held Discussion Sections where I will discuss future assignments and cover fundamentals of Computer Architecture</li>
          </ul>
      </Typography>,
      <Divider/>,
      <Typography variant='body1'>
      <h3>Aganitha Cognitive Solutions | June 2016 - September 2016</h3>
          <ul>
            <li>Research Internship</li>
            <li>Explored using Neural Networks on computer vision and speech recognition problems along with mentors</li>
            <li>Helped prototype Machine Learning workshops for future employees</li>
            <li>Attempted State Farm Distracted Driver Competition on Kaggle with a pretrained Caffe GoogLeNet model trained with augmented driver images</li>
            <li>Worked with Caffe and TensorFlow using Python and IPython Notebooks on AWS EC2 instances</li>
          </ul>
      </Typography>,
      </Grid>
  ]
  const getPortfolio = () => [
            <Typography>
            <h1>Portfolio</h1>
            <p> Coming Soon! </p>
            </Typography>
  ];
  const getBlog = () => [
            <Typography>
            <h1>Blog</h1>
            <p> Coming Soon! </p>
            </Typography>
  ];
  return (
      <div>
      <Card justify='center' style={{margin:'2em',padding:'2em'}}>
        <Grid container justify='center' style={{flexGrow:1,marginTop:20,direction:'column'}}>
        {getAboutMe()}
        </Grid>
      </Card>
      <Card style={{margin:'2em',padding:'2em'}}>
        {getWork()}
      </Card>
      <Card style={{margin:'2em',padding:'2em'}}>
        {getPortfolio()}
      </Card>
      <Card style={{margin:'2em',padding:'2em'}}>
        {getBlog()}
      </Card>
      </div>
  )
}

export default Content;