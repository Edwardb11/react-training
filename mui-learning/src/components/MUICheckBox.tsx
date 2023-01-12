import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MarkAsUnread from "@mui/icons-material/MarkAsUnread";

const MUICheckBox = () => {
  const [accep, setAccep] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccep(e.target.checked);
  };
  const handleSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  console.log(accep);
  console.log({skills});
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and  conditions"
          control={<Checkbox checked={accep} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<MarkAsUnread />}
          checkedIcon={<MarkAsUnread />}
          checked={accep}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkill}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkill}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkill}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MUICheckBox;
