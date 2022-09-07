import {Box, Text} from "theme-ui";
import React from "react";

const ModuleTag = ({Icon, text, id,  selected, ...props }) => {
    return(
        <Box {...props} sx={{display: 'flex', justifyContent: "space-around", alignItems: "center",
            cursor: "pointer",
            fontSize: [20, 20], width: "45%", borderRadius: 20, maxWidth: '160px',
            flexDirection: "row", p: 2, mb: 4, ml: '10px',
            color: selected ? 'white': 'primary',
            backgroundColor: selected ? 'primary': 'white',
            border: '1px solid', borderColor: 'primary'}}>
            <Icon size={20} style={{marginLeft: '5px'}}></Icon>
            <Text>{text}</Text>
        </Box>
    )
}


export default ModuleTag
