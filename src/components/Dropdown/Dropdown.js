import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({type}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let listItem = [];

  switch(type)
  {
    case "questionType":
        listItem = [
            "Quiz",
            "True or False",
            "Type Answer",
            "Slider",
            "Puzzle"
        ]
        break;
    default:
        listItem = []
  }

  return (
    <FormControl sx={{ m: 1, width: 256, height: 36, margin: 0, marginTop:1}} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
      >
        {listItem.map(item => (
            <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}