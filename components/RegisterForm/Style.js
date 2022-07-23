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
            bottom: [0, '8vh'], left: 0,
            position: 'absolute',
            height: '85vh',
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
            gridTemplateColumns: ['100%', '50% 50%'],
            p: 0,
            display: "grid",
            background: '', height: '95%',
            width: "100%",
        },

        imageConn : {
            display: ['none', 'none', 'none', 'flex'],
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
                gap: '10px 10px', gridTemplateColumns: ['100%', '50% 50%'],
                mb: '20px'
            },
            selected: {

            },
            '#formsBox':{
                backgroundColor: '',
                overflow: 'auto', height: '88%', mb: '2%'
            },
            '#actionsBox': {
                height: '10%',
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
