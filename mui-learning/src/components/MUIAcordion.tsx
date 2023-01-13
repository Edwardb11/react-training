import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const MUIAcordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChanage = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChanage(isExpanded, "panel1")}>
        <AccordionSummary
          id="penel1-header"
          expandIcon={<ExpandMore />}
          aria-controls="penel1-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laborum iure, necessitatibus esse deleniti dolorem sequi eum quidem,
            fugit voluptate quos quis, cupiditate ullam quibusdam hic sapiente
            officia! Consequuntur, nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChanage(isExpanded, "panel2")}>
        <AccordionSummary
          id="penel-header"
          expandIcon={<ExpandMore />}
          aria-controls="penel2-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laborum iure, necessitatibus esse deleniti dolorem sequi eum quidem,
            fugit voluptate quos quis, cupiditate ullam quibusdam hic sapiente
            officia! Consequuntur, nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChanage(isExpanded, "panel3")}>
        <AccordionSummary
          id="penel3-header"
          expandIcon={<ExpandMore />}
          aria-controls="penel3-header">
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laborum iure, necessitatibus esse deleniti dolorem sequi eum quidem,
            fugit voluptate quos quis, cupiditate ullam quibusdam hic sapiente
            officia! Consequuntur, nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MUIAcordion;
