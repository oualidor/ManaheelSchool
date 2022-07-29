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
            borderTopRightRadius: 40, borderTopLeftRadius: 40,
            bottom: 0, left: 0, top: '15vh',
            position: ['fixed', 'fixed', 'static', 'static', 'static', 'static', 'static'],
            height: ['85vh', '85vh', '85vh', '85vh', '75vh', '75vh', '75vh'],
            width: "100%",
            backgroundColor: 'white',
        },

        TopBox: {
            mr: '47%',
            height: '5%',
            display: ['block', 'none'], backgroundColor: ''
        },
        Content: {
            position: 'relative',
            gridTemplateColumns: [
                '100%', '100%', '100%', '100%',
                '40% 60%', '50% 50%', '50% 50%'
            ],

            display: "grid",
            background: '', height: ['90%', '90%', '90%', '100%', '100%', '100%', '100%'],
            width: "100%", overflow: 'auto',
        },

        imageConn : {
            display: ['none', 'none', 'none', 'none', 'flex', 'flex', 'flex'],
            position: 'relative',
            height: '100%', width: '100%',
        },
        textConn : {
            position: 'relative',
            display: "flex", flexDirection: 'column', justifyContent: 'space-between',
            backgroundColor: '',
            height: '100%', width: '100%',  p:[4, 2, 2, 2, 6, 20, '8%'],
            '.line': {
                gap: '40px 10px', gridTemplateColumns: ['100%', '100%', '50% 50%'],
                mb: '40px'
            },
            '.line1': {
                gridTemplateColumns: ['100%'],
            },
            '.line3-7': {
                gridTemplateColumns: ['100%', '100%', '70% 30%'],
            },
            '.line3-3-6': {
                gridTemplateColumns: ['100%', '100%', '45% 25% 30%'],
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
