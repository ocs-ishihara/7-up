import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setOneData } from "../../../slices/history";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

const HistoryComponent = (prop) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(state => state.history.data);

  const handleOnClickList = (props) => {
    dispatch(setOneData(props));
    history.push('/home/select/report/rSetDocument?page=' +prop.targetPage);
  };

  const msgs = () => {
    try {
      return data.map((m, i) => {
        return (
          <div key={i}>
            <List className={classes.root}>
              <ListItem button onClick={() => handleOnClickList(m)}>
                <ListItemIcon>
                  <DescriptionIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      企業名：{m.company}
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      提出日時：{m.day}
                    </React.Fragment>
                  }
                />
                <Button variant="contained" color="primary" children="変更" />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </div>
        );
      });
    } catch(e) {
      console.log(e);
    };
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <div>
          <h2>提出履歴</h2>
          {msgs()}
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
