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
            overflow: 'auto',
            p: 0,
            width: "100%",
            background: 'white',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: "space-between"
        },
        Content: {
            overflow: 'auto',
            gridTemplateColumns: ['100%', '50% 50%'],
            p: 0,
            display: "grid",
            background: '', height: '100%',
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

            height: '100%', width: '100%',  p:[4, 2, 2, 2, 6, 20, '8%'],
            '.line': {
                gap: '10px 10px', gridTemplateColumns: ['100%', '50% 50%'],
                mb: '20px'
            },
            selected: {

            }
        }

    },
}


export default Style
