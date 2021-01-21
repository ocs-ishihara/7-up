import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { log } from '../../slices/history';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    fontSize: 18,
    [theme.breakpoints.up('md')]: {
      marginLeft: 180,
    },
  },
  
  Rbutton1: {
    width: 200,
    height: 50,
    fontWeig3ht: 'bold',
    color: '#FFF',
    background: '#e4007f',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#c6006f',
    },
  },
  RHbutton1 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#e4007f',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#c6006f',
    },
  },

  Rbutton2: {
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#f9a455',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#f57c00',
    },
  },
  RHbutton2 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#f9a455',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#f57c00',
    },
  },

  Rbutton3:{
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#a1d522',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#689f38',
    },
  },
  RHbutton3 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#a1d522',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#689f38',
    },
  },

  Rbutton4:{
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#46b564',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#2e7d32',
    },
  },
  RHbutton4 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#46b564',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#2e7d32',
    },
  },

  Rbutton5:{
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#187fc4',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#005aa0',
    },
  },
  RHbutton5 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#187fc4',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#005aa0',
    },
  },

  Rbutton6:{
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#4d4398',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#283593',
    },
  },
  RHbutton6 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#4d4398',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#283593',
    },
  },

  Rbutton7:{
    width: 200,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#A64A97',
    margin: 25,
    marginRight: 15,
    '&:hover' :{
      background: '#800073',
    },
  },
  RHbutton7 :{
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: '#FFF',
    background: '#A64A97',
    margin: 25,
    marginLeft: 15,
    '&:hover' :{
      background: '#800073',
    },
  },
}));

const ReportComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.userId);

  const handleOnClickHistory = async (prop) => {
    await dispatch(log(userId, prop));
    history.push('/home/select/report/rHistory?page=' +prop);
  };

  return (
    <div className={classes.root}>
      <div className="centerTable">
        <div>
          <Button
              className={classes.Rbutton1}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=1')}>
                インターンシップ
          </Button>
          <IconButton 
            className={classes.RHbutton1}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(1)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>
        <div>
          <Button
              className={classes.Rbutton2}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=2')}>
                各書類申請書
          </Button>
          <IconButton 
            className={classes.RHbutton2}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(2)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>
        <div>
          <Button
              className={classes.Rbutton3}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=3')}>
                参加報告書
          </Button>
          <IconButton 
            className={classes.RHbutton3}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(3)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>
        <div>
          <Button
              className={classes.Rbutton4}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=4')}>
                受験報告書
          </Button>
          <IconButton 
            className={classes.RHbutton4}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(4)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>
        <div>
          <Button
              className={classes.Rbutton5}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=5')}>
                自己評価シート
          </Button>
          <IconButton 
            className={classes.RHbutton5}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(5)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>

        <div>
          <Button
              className={classes.Rbutton6}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=6')}>
              内定報告書
          </Button>
          <IconButton 
            className={classes.RHbutton6}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(6)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>
        <div>
          <Button
              className={classes.Rbutton7}
              variant="contained"
              onClick={() => history.push('/home/select/report/rSetDocument?page=7')}>
              内定者研修参加報告書
          </Button>
          <IconButton 
            className={classes.RHbutton7}
            aria-label="brightness"
            onClick={() => handleOnClickHistory(7)}
          >
            <HistoryIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
