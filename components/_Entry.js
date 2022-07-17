import {Fragment, useEffect} from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../themes';
import {Provider as ReduxProvider} from "react-redux";
import reduxStore from "../src/Apis/Redux/reduxStore";
import Layout from './layout';
import { ThemeProvider  as MuiProvider} from '@mui/material/styles';
import {createTheme} from "@mui/material";
import {MuiTheme} from "../themes/MuiTheme";

function _Entry({ Component, pageProps }) {


    useEffect(()=>{

    })

    return (<Fragment>
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme('ar')}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ReduxProvider>
    </Fragment>);
}
export default _Entry
