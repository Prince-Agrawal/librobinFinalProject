import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LinearWithValueLabel from "../Progress/ProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginLeft: theme.spacing(40), 
      // marginTop:theme.spacing(100),
      // marginBottom:theme.spacing(50)
      // paddingTop:theme.spacing(10),
    },
  },
  input: {
    display: "none",
    // marginLeft: theme.spacing(2)
    // marginTop:theme.spacing(50),
  },
  main: {
    height: 500,
    width: 800,
    marginLeft: theme.spacing(43),
    marginTop: theme.spacing(5),
    backgroundColor: "#E5E5E5",
    marginBottom: theme.spacing(5),
    // alignContent:"center",
  },
  butt: {
    marginTop: theme.spacing(35), //for upload button top margin
  },
}));

const renderProgress = (isUploading) => {
//   console.log("hello");
  if (isUploading) {
    return <LinearWithValueLabel />;
  } else {
    return <div></div>;
  }
};

export default function UploadButtons() {
  const classes = useStyles();

  const [isUploading, setIsUploading] = useState(false); 

  return (
    <Card className={classes.main} variant="outlined">
      <CardContent>
        <div className={classes.root}>
          <input
            accept="file/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              className={classes.butt}
              variant="contained"
              color="primary"
              component="span"
              onClick={() => setIsUploading(true)}
            >
              <CloudUploadIcon />
              Upload
            </Button>
            <div>{renderProgress(isUploading)}</div>
          </label>
        </div>
      </CardContent>
    </Card>
  );
}
