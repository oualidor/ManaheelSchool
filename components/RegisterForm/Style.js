import {keyframes} from "@emotion/react";

const positionAnim = keyframes`
  from {
    height: 0vh,
  }
  to {
    height: 85vh;
    
  }
`;

const Style = {
    Main: {

        Container: {
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            bottom: 0, left: 0, top: '15vh',
            position: ['fixed', 'fixed', 'fixed', 'fixed', 'static', 'static', 'static'],
            height: ['85vh', '85vh', '85vh', '85vh', '75vh', '75vh', '75vh'],
            p: 0,
            width: "100%",
            background: 'white',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: "space-between"
        },
        TopBox: {
            height: '5%',
            display: ['block', 'none'], backgroundColor: ''
        },
        Content: {
            position: 'relative',
            gridTemplateColumns: [
                '100%', '100%', '100%', '100%',
                '40% 60%', '50% 50%', '50% 50%'],
            p: [5, 5, 5, 5, 0, 0, 0],
            display: "grid",
            background: '', height: ['90%', '90%', '90%', '100%', '100%', '100%', '100%'],
            width: "100%",
        },

        imageConn : {
            display: ['none', 'none', 'none', 'none', 'flex', 'flex', 'flex'],
            position: 'relative',
            height: '100%', width: '100%',
        },
        textConn : {
            position: 'relative',
            display: "flex", flexDirection: 'column', justifyContent: 'space-between',
            overflow: 'auto',
            backgroundColor: '',
            height: '100%', width: '100%',  p:[4, 2, 2, 2, 6, 20, '8%'],
            '.line': {
                gap: '10px 10px', gridTemplateColumns: ['100%', '100%', '50% 50%'],
                mb: '20px'
            },
            selected: {

            },
            '#formsBox':{
                backgroundColor: '',
                  mb: '2%'
            },
            '#actionsBox': {

                backgroundColor: '',
                display: "flex", alignItems: "center",
                fontSize: 6,
                button: {
                    ml: 5,
                    width: ['33%', '20%'], justifyContent: "space-around",
                    display: "flex", alignItems: "center",
                    fontSize: [6, 6, 6, 6, 6]
                }
            }
        },


    },
}


export default Style
