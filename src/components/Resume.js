import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Avatar from "@material-ui/core/Avatar";
import CloudDownload from "@material-ui/icons/CloudDownload";
import PlayArrow from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";

import reactIcon from "../images/react.png";
import webflowIcon from "../images/webflow.png";
import angularToReact from "../images/xangular_react_icon.png";
import vue from "../images/vue.jpeg";
import web from "../images/web.png"
import resume from "../Resume.pdf";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#424242",
    padding: theme.spacing(4),
    paddingTop: theme.spacing(16)
  },
  download: {
    position: 'absolute',
    top: 100,
    right: 30,
    color: "#e0e0e0",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "scale 1s"
    },
  },
  heading: {
    color: "#e0e0e0",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <a download="Resume" href={resume} className={classes.download}>
        RESUME
        <IconButton>
          <CloudDownload fontSize={"large"} />
        </IconButton>
      </a>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={reactIcon} alt="react" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Senior Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">CivImpact Labs</h4>
            <p>
              React, Redux, TypeScript, Frontend Development, Pixel-Perfect & Responsive UI, 
              API Integration, Video/Audio Conference, Redux-Thunk, Axios, OpenTok
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={webflowIcon} alt="webflow" />
            }
          >
            <h3 className="vertical-timeline-element-title">Webflow Expert</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Assured Insurance Technologies, Inc
            </h4>
            <p>
              Webflow, CMS, Greenhouse, Portfolio, Pixel-Perfect & Responsive UI, Animation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={reactIcon} alt="react" />
            }
          >
            <h3 className="vertical-timeline-element-title">Senior Frontend React Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Modzy, Inc
            </h4>
            <p>React.js, GraphQL, Apollo, D3.js, Frontend Development, Data visualization, PropTypes</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={reactIcon} alt="react" />
            }
          >
            <h3 className="vertical-timeline-element-title">Senior React Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Etison, LLC
            </h4>
            <p>React.js, React Context, REST API, Ruby on Rails</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={reactIcon} alt="react" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Front-end Developer for a SaaS Real Estate Product (React/React Native)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ArcheTape, Inc
            </h4>
            <p>React, React Native, Web Application, Marketing Website, Mobile Application, Styled-Components,
              Mapbox, Stripe, Messaging, Firebase, Redux, Redux-Thunk, Axios</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "#3949ab", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={angularToReact} alt="angular_to_react" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Senior Front-end Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              LoungeBuddy, Inc
            </h4>
            <p>React, Angular, Redux, Redux-Saga, Axios, ZenDesk, Marketo Form, React Native, Frontend Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={vue} alt="vue" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pleroma Social
            </h4>
            <p>Vue.js, Vuex, Vuetify, Analytics, Node.js, MongoDB, AWS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "#3949ab", color: "#fff" }}
            icon={
              <Avatar className={classes.avatar} src={web} alt="web" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelancer
            </h4>
            <p>React, Vue, Angular, Node, React Native, HTML5, CSS3, Bootstrap, Material-UI, Frontend Development, Backend Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<PlayArrow fontSize="large" />}
          />
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Resume;
