import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

import sliceCounter from "../../slices/counter";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const CounterComponent = (props) => {
  const { counter, dispatch } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleOnClickToReport = () => {
    history.push('/home/select/report');
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <h2>
          count={counter.value}
        </h2>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => dispatch(sliceCounter.actions.increment())}
        >
          増加
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          startIcon={<RemoveIcon />}
          onClick={() => dispatch(sliceCounter.actions.decrement())}
        >
          減少
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ExitToApp />}
          onClick={handleOnClickToReport}
        >
          レポートページへ戻る
        </Button>
      </div>
    </div>
  );
};

CounterComponent.propTypes = {
  counter: PropTypes.shape({
    value: PropTypes.number,
  }).isRequired,
  counterActions: PropTypes.shape({
    increment: PropTypes.func,
    decrement: PropTypes.func,
  }).isRequired,
};

export default CounterComponent;
