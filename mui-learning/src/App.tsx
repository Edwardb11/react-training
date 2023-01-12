import { useState } from "react";
import MyTypography from "./components/MyTypography";
import MUIButton from "./components/MUIButton";
import MUITextField from "./components/MUITextField";
import MUISelect from './components/MUISelect';
import MUIRadioButton from "./components/MUIRadioButton";

function App() {
  return (
    <div className="App">
      {/* <MyTypography />
      <MUIButton/>
      <MUITextField/> 
      <MUISelect/> */}
      <MUIRadioButton/>
    </div>
  );
}

export default App;
