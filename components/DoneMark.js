import React from "react";
import {Box} from "theme-ui";

const DoneMark = ({})=>{
    const style = {

        '.success-animation':{

        },
        '.checkmark':{
            width: ['60px', '60px', '80px', '80px', '100px', '100px', '120px'], height: ['60px', '60px', '80px', '80px', '100px', '100px', '120px'],
        }
    }
    return (
    <Box className="success-animation" sx={style}>
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    </Box>
    )
}

export default DoneMark
