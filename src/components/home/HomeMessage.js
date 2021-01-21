import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  TL:{
    wordBreak: 'break-all',
  },
  tl:{
    width: '100%',
  },
}));

const HomeMessage = (props) => {
  const classes = useStyles();

  const formatText = () => {
    return props.teachers.map((m, i) => {
      if(props.home.id === m.key) {
        return (
          <div key={i}>
            <ListItem alignItems="flex-start">
              <Accordion className={classes.tl}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemAvatar>
                    <Avatar className="" src={m.profileImage} />
                  </ListItemAvatar>
                  <ListItemText className={classes.TL}
                    primary={
                      <React.Fragment>
                        {m.userName}「{props.home.title}」
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        {props.home.day}
                      </React.Fragment>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <ListItemText className={classes.TL}
                    primary={
                      <React.Fragment>
                        {(props.home.less).split("\n").map((t, i) => {
                          return <div key={i}>{t}</div>
                        })}
                      </React.Fragment>
                    }
                  />
                </AccordionDetails>
              </Accordion>
            </ListItem>
          </div>
        );
      }
      else {
        return 0;
      };
    });
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <List>
          {formatText()}
        </List>
      </div>
    </div>
  );
};

export default HomeMessage;
