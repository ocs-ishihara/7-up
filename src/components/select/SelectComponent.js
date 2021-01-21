import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: 90,
    },
  },
  
  Sbutton1: {
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#3a6ad3',
    margin:30 ,
      '&:hover' :{
        background: '#2951a8',
      },
    },
    Sbutton2: {
      width: 200,
      height: 50,
      fontWeight: 'bold',
      color: '#FFF',
      background: '#f09936',
      margin:30 ,
        '&:hover' :{
          background: '#f57c00',
      },
    },
}));

const SelectComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <div>
          <Button
              className={classes.Sbutton1}
              variant="contained"
              onClick={() => history.push('/home/select/sAbsence')}
          >
            欠課届
          </Button>
        </div>
        <div>
          <Button
            className={classes.Sbutton2}
            variant="contained"
            onClick={() => history.push('/home/select/report')}
          >
            報告書
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
