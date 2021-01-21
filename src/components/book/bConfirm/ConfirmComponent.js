import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ConfirmComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClickToHome = () => {
    history.push('/home2/book');
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <h2>
          コンフィルムページ
        </h2>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ExitToApp />}
          onClick={handleOnClickToHome}
        >
          ブックページへ戻る
        </Button>
      </div>
    </div>
  );
};

export default ConfirmComponent;
