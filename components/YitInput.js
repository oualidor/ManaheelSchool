import React, {forwardRef} from "react";
import {Box, Input, Text} from "theme-ui";

const YitInput = forwardRef(({Component,   Icon, errorMsg,  ...props }, ref) => {
    const { ref1, ref2 } = ref;
    return(
        <Box sx={{position: "relative"}} >
            <Box

                sx={
                    {
                        p: 2,
                        display: "flex", flexDirection: 'column', justifyContent: 'center',
                        color: 'white',
                        position: "absolute", top: '0', right: '0%', backgroundColor: 'primary', height: '100%',
                        borderTopRightRadius: 15, borderBottomRightRadius: 15,}}
            >
                <Icon size={30}></Icon>

            </Box>
            <Box

                sx={
                    {

                        p: 2,
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        color: 'red',
                        position: "absolute", top: '80%', right: '0%',  height: '100%',
                        borderTopRightRadius: 15, borderBottomRightRadius: 15,}}
            >

                <Text  ref={ref1} sx={{display: "none",}}>{errorMsg}</Text>
            </Box>

            { Component == undefined ? <Input ref={ref2} {...props}></Input>: <Component ref={ref2} {...props}></Component>}
        </Box>
    )
})


export default YitInput
