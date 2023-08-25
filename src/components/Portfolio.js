import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinkIcon from '@material-ui/icons/Link';
import Modal from '@material-ui/core/Modal';
import CloseRounded from '@material-ui/icons/CloseRounded';
import IconButton from "@material-ui/core/IconButton";

import { projects } from '../constants'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    padding: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
    }
  },
  heading: {
    color: "#e0e0e0",
    paddingBottom: theme.spacing(2)
  },
  gridItem: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
    }
  },
  cardContainer: {
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all .5s ease-in-out"
    },
  },
  link: {
    color: 'cyan',
    "&:hover": {
      color: 'teal'
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 4,
    maxWidth: 500,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'teal',
    backgroundColor: 'white'
  },
  modalTxt: {
    whiteSpace: 'pre-line',
    padding: theme.spacing(3)
  }
}));

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false)
  const [activeId, setActiveId] = useState(-1);
  const classes = useStyles();

  const handleOpenModal = (i) => {
    setActiveId(i)
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setActiveId(-1);
    setOpenModal(false);
  }

  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Portfolio
      </Typography>
      <Grid container>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} className={classes.gridItem}>
            {/* <Zoom duration={i * 300}> */}
            <Card className={classes.cardContainer} onClick={() => handleOpenModal(i)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="description">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className={classes.link} />
                </a>
              </CardActions>
            </Card>
            {/* </Zoom> */}
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {activeId > -1 && 
          <Box component="div" className={classes.paper}>
            <IconButton onClick={handleCloseModal} className={classes.closeButton}>
              <CloseRounded />
            </IconButton>
            <CardMedia
              component="img"
              alt={projects[activeId].name}
              height="140"
              image={projects[activeId].image}
              style={{borderTopLeftRadius: 4, borderTopRightRadius: 4}}
            />
            <Typography variant="body2" color="textSecondary" className={classes.modalTxt}>
              {projects[activeId].description}
            </Typography>
          </Box>
        }
      </Modal>
    </Box>
  );
};

export default Portfolio;
