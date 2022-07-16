
import {Container, Flex, Button, Box, Text, Image} from 'theme-ui';
import SectionHeader from "../../components/section-header";
import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import Im from "../../src/assets/Images/2.jpg";
import Style from './Style'
import {motion} from 'framer-motion'
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import ComponentSlider from "../../components/ComponentSlider";
const data = [
    {
        name: 'مولاي خديجة',
        title: 'استادة التعيلم العالي',
        text: 'شكرا لكم ،على كل ماقدمتموه لابنائكم يوسف وفاطمة الزهراء، رغم صعوبة التجربة\n',

        image: Im
    },
    {
        title: 'استادة التعيلم العالي',
        name: 'أيهاب طيبي',
        text: 'شكرا لكم ،على كل ماقدمتموه لابنائكم يوسف وفاطمة الزهراء، رغم صعوبة التجربة\n',

        image: Im
    }
]
export default function Testimonial() {

    const Entry= ({name, text, image, title}) =>{
        return(
            <Box sx={Style.Entry.container}>
                <Box sx={Style.Entry.textCon}>

                    <Text sx={Style.Entry.TextTag}>{text}</Text>
                    <Box>
                        <Text sx={{}} className={'nameTag'}>{name}</Text>
                        <Text sx={Style.Entry.nameTag} className={'nameTag'}> - {title}</Text>
                    </Box>

                </Box>
                <Box sx={Style.Entry.imgCon}>
                    <motion.div
                        style={Style.Entry.frame}
                        initial={{right: '40%'}}
                        whileInView={{right: "10%"}}
                        transition={{ duration: 1, type: "tween" }}
                    >

                    </motion.div>

                    <motion.div
                        style={Style.Entry.frame}
                        initial={{right: '40%', }}
                        whileInView={{right: "10%", }}
                        transition={{ duration: 1, type: "tween" }}
                    >

                    </motion.div>
                    <motion.div
                        style={Style.Entry.backImage}
                        initial={{left: '40%', }}
                        whileInView={{left: '10%',}}
                        transition={{ duration: 1, type: "tween" }}
                    >

                    </motion.div>
                    <motion.div
                        initial={{opacity: '0%'}}
                        whileInView={{opacity: "100%"}}
                        transition={{ duration: 1, type: "tween" }}>
                        <Image src={image} sx={Style.Entry.img}></Image>
                    </motion.div>

                </Box>
            </Box>
        )
    }
    const style  = Style.Main
    return (
        <Box sx={style.Container}>
            <Container>
                <Box sx={{position: 'absolute'}}>
                    <SectionHeader
                        slogan="قصص نجاح"
                        title="شهادات من زبائن نعتز بهم"
                    />
                </Box>

                <ComponentSlider autoPlay={true}>

                    {
                        data.map((entry, i)=>{
                            return (
                                <Entry
                                    name={entry.name}
                                    title={entry.title}
                                    text={entry.text}
                                    image={entry.image}>
                                </Entry>
                                )

                        })
                    }

                </ComponentSlider>


            </Container>
        </Box>
    )
}
