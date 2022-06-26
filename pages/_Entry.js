import {Fragment, useEffect} from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../themes';
import {Provider as ReduxProvider} from "react-redux";
import reduxStore from "../src/Apis/Redux/reduxStore";
import Layout from '../components/layout';
import {useTranslation, } from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
export async function getStaticProps({locale}){

    return{
        props : {
            ...(await serverSideTranslations(locale, ['Home', 'NavBar']))
        }
    }
}

function _Entry({ Component, pageProps, locale }) {
    const {i18n } = useTranslation()

    useEffect(()=>{

    })

    return (<Fragment>
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme(i18n.language)}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ReduxProvider>
    </Fragment>);
}
export default _Entry
