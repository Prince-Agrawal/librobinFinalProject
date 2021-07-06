import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginLeft:theme.spacing(80),
    },
  },
}));

  function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table/>
      
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
}

export default PaginationRounded;