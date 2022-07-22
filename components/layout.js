import {Alert, Close, Box, Container } from 'theme-ui';
import React, {useEffect, useState} from 'react';
import Sticky from 'react-stickynode';


import {useDispatch, useSelector} from "react-redux";

import {HideBackDrop, MountBackDrop, RemoveNotification} from "../src/Apis/Redux/Actions/Types";

import {rgba} from "polished";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";



const NotificationsContent = ({notificationsList})=>{
    const dispatch = useDispatch()
    return (

            notificationsList.map(notification =>{
                setTimeout(()=>{
                    dispatch({type: RemoveNotification, id: notification.id})
                }, notification.duration)
                return (
                    <Alert sx={{width: "100%", variant: "alerts."+notification.variant, mb: 2}}>
                        {notification.text}
                        <Close ml="auto" mr={-2} />
                    </Alert>
                )
            })
    )
}

const BackDropContent = ({Component, props})=>{
    try{
        return (React.cloneElement(Component, props))

    }catch (e){
        return (<div></div>)
    }

}

function Layout({ children }) {
    const [isSticky, setIsSticky] = useState(false);
    const notifications = useSelector((state) => state.NotificationsReducer)
    const BackDrop = useSelector((state) => state.BackDropReducer)
    const dispatch = useDispatch()

    // const selectedLang = lang => {
    //     return router.locale === lang ? <CheckSquareOutlined /> : <BorderOutlined />
    // }

    const style={
        Backdrop : {
            width: "100vw", height: "100vh", position: "absolute", zIndex: 999999,
            backgroundColor: rgba(0, 0, 0, 0.8),
            display: BackDrop.mount ? "flex":"none",
        },
        NotificationsContainer: {
            backgroundColor: "yellow",
            position: "absolute",
            right: "5%",
            width: ["85vw", "85vw", "60vw", "60vw", "40vw", "40vw"],
            marginTop: "10vh",
            float: "right",
            zIndex: 999999999999999999999
        }
    }



    useEffect(()=>{
            BackDrop
    }, [])
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <Box>
        <Sticky innerZ={1002} top={0} >
            <Box
                id={'BackDrop'}
                sx={style.Backdrop}
                onClick={(e)=>{
                    if(e.target.id == "BackDrop"){
                        dispatch({type: HideBackDrop})}
                    }
                }
            >
                <BackDropContent Component={ BackDrop.Component} props={ BackDrop.props}></BackDropContent>
            </Box>
        </Sticky>
        <Sticky innerZ={1002} top={1} >
            <Container id={"NotificationsContainer"} sx={style.NotificationsContainer}>
                <NotificationsContent notificationsList={notifications.list}></NotificationsContent>
            </Container>
        </Sticky>
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
            <Header className={`${isSticky ? 'sticky' : 'unSticky'}`}  />
        </Sticky>
        <Box
            sx={{
              variant: 'layout.main',

            }}
        >
            {children}
        </Box>
        <Footer></Footer>
    </Box>
  );
}


export default Layout
