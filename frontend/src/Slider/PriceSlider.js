import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './priceSlider.css'

const useStyles = makeStyles({
  root: {
    // width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handelFilterPrice(value);
  };

  return (
    <div className={classes.root} id="sliderFilter">
      <Typography id="range-slider" gutterBottom>
      <h4><strong>Filter By Price</strong></h4>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        step={10}
      />
    </div>
  );
}
