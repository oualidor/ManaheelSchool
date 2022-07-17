import React from "react";
import {MuiTheme} from "../themes/MuiTheme";

import { ThemeProvider  as MuiProvider} from '@mui/material/styles';
const MuiComponent = ({Component, ...props}) =>{

    return (
        <MuiProvider theme={MuiTheme}>
            <Component {...props} ></Component>
        </MuiProvider>
    )
}
export default  MuiComponent
