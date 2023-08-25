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

import resume from "../Resume.pdf";
import { works } from '../constants';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
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
      transition: "all .5s ease-in-out"
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
          {works.map((work, idx) => {
            const { icon, alt, title, subTitle, date, content } = work;
            const props ={
              className: "vertical-timeline-element--work",
              contentStyle: idx === 0 ? { background: "rgb(33, 150, 243)", color: "#fff" } : null,
              contentArrowStyle: idx === 0 ? { borderRight: "7px solid  rgb(33, 150, 243)" } : null,
              icon: <Avatar className={classes.avatar} src={icon} alt={alt} />,
              date,
              iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
              key: `work-experience-${idx}`,
            }
            return (
              <VerticalTimelineElement {...props}>
                <h3 className="vertical-timeline-element-title">
                  {title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
                <p>{content}</p>
              </VerticalTimelineElement>    
            )
          })}
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
