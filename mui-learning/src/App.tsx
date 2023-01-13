import { useState } from "react";
import MyTypography from "./components/MyTypography";
import MUIButton from "./components/MUIButton";
import MUITextField from "./components/MUITextField";
import MUISelect from "./components/MUISelect";
import MUIRadioButton from "./components/MUIRadioButton";
import MUICheckBox from "./components/MUICheckBox";
import MUISwitch from "./components/MUISwitch";
import MUIRating from "./components/MUIRating";
import MUIAutocomplete from "./components/MUIAutocomplete";
import MUIBox from "./components/MUIBox";
import MUIGrid from "./components/MUIGrid";
import MUIPaper from "./components/MUIPaper";
import MUICard from "./components/MUICard";
import MUIAcordion from "./components/MUIAcordion";

function App() {
  return (
    <div className="App">
      {/* <MyTypography />
      <MUIButton/>
      <MUITextField/> 
      <MUISelect/> 
      <MUIRadioButton/> 
      <MUICheckBox/>
      <MUISwitch/>
      <MUIRating/>
      <MUIAutocomplete/>
      <MUIBox />
       <MUIGrid/>

      <MUIPaper />
            
      <MUICard />
          */}
      <MUIAcordion />
    </div>
  );
}

export default App;
