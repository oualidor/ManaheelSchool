import {keyframes} from "@emotion/react";

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const Style = {
    Main: {
        Container: {
            color: 'white',
            fontWeight: 'normal',
            py: 5,
            width: '100%',
            backgroundColor: 'primary',
            transition: 'all 0.5s ease',
            animation: `${positionAnim} 0.4s ease`,
        },
        FirstLine: {
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'column-reverse', 'row', 'row', 'row'],
        },
        LogoContainer: {display: 'flex', flexDirection: "column", textAlign: ["center", 'right']}

    }
}

export default Style
