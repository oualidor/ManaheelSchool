import {Box, Text} from "theme-ui";
import React from "react";

const SelectButton = ({Icon, text, id,  selectedValue, ...props }) => {

    return(

        <Box {...props} sx={{display: 'flex', justifyContent: "center", alignItems: "center",
            cursor: "pointer",
            fontSize: [20, 30], width: "30%", borderRadius: 20,
            flexDirection: "column", p: 3,
            color: id == selectedValue ? 'white': 'primary',
            backgroundColor: id == selectedValue ? 'primary': 'white',
            border: '1px solid', borderColor: 'primary'}}>
            <Icon size={35}></Icon>
            <Text>{text}</Text>
        </Box>


    )
}

export default SelectButton
