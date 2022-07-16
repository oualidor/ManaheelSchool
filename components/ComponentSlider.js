import {Box, Button, Image, Text} from "theme-ui";
import React, {useEffect, useState} from "react";
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import {useBreakpointIndex} from "@theme-ui/match-media";
const Style = {
    SliderCon: {
        px: [0, 0, 0, 0, 50, 50, 50, 50],
        pb: [50, 50, 50, 50, 0, 0, 0, 0],
        position: 'relative',
        display: 'flex',
        button: {
            position: 'absolute',
            top: ['99%', '95%','95%', '95%', "45%","45%", "45%", "45%"],
            bg: 'transparent',
            border: '0px solid',
            fontSize: 40,
            cursor: 'pointer',
            px: '2px',
            color: '#BBC7D7',
            transition: 'all 0.25s',
            '&:hover': {
                color: 'text',
            },
            '&:focus': {
                outline: 0,
            },
        },
        '.right':{
            right: ['35%', '35%','35%', '35%', 0, 0, 0, 0],

        },
        '.left':{
            left: ['35%', '35%','35%', '35%', 0, 0, 0, 0],

        }
    }
}
const ComponentSlider= ({autoPlay, style, children}) =>{
    const index = useBreakpointIndex({ defaultIndex: 0 })
    const [selected, setSelected] = useState(0)

    function next(){
        if(selected < children.length-1){

            setSelected(selected+1)
        }
    }
    function previous(){
        if(selected > 0){
            setSelected(selected-1)
        }
    }
    useEffect(()=>{

        if(autoPlay){
            setTimeout(()=>{
                next()
            }, 2000)
        }

    },[selected])
    return(
        <Box sx={Style.SliderCon}>
            <button
                className={'left'}
                style={{
                    display: selected > 0 ? 'block': 'none'
                }}
                onClick={previous}
                aria-label="Next">
                <IoIosArrowRoundBack />
            </button>
            {children[selected]}
            <button
                className={'right'}
                style={{
                    // display: selected < children.length-1  ? 'block': 'none'
                }}
                onClick={next}
                aria-label="Previous">
                <IoIosArrowRoundForward />

            </button>
        </Box>
    )
}
export default ComponentSlider

