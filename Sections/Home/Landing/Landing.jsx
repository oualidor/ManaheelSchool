import {Box, Button, Container, Grid, Heading, Image, Text} from "theme-ui";
import ShapeLeft from '../../../src/assets/Images/shape-left.png';
import ShapeRight from '../../../src/assets/Images/shape-right.png';
import Shape from '../../../src/assets/Images/image.png';
import Yl from '../../../src/assets/Images/yl.png';
import BannerImg from '../../../src/assets/Images/banner-thumb.png';
import React, {useEffect} from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ServiceThumb from "../../../src/assets/Images/logo.png";
import {IoIosPlay} from "react-icons/io";
import shapePattern from "../../../src/assets/Images/shape-pattern1.png";
import {keyframes} from "@emotion/core";
import Smart from "../../../src/assets/Images/feature/chat.svg";
import Secure from "../../../src/assets/Images/feature/chat.svg";
import Feature from "../../Feutures/Feature";
import SectionHeader from "../../../components/section-header";
import I1 from './Assets/Imgs/2.png'
import I2 from './Assets/Imgs/3.png'
import I3 from './Assets/Imgs/4.png'


const Landing = ()=>{

    const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;
    const styles = {
        coreFeature: {
            py: [0, null, null, 2, null, 7],
            position: 'relative',
        },
        containerBox: {
            display: 'flex',
            alignItems: ['flex-start', null, null, 'center'],
            justifyContent: ['flex-start', null, null, 'space-between'],
            flexDirection: ['column', null, null, 'row'],
            pb: [0, null, null, null, null, 7],
        },
        thumbnail: {

            boxShadow: '5px 5px 30px black',
            backgroundColor: 'red',
            width: '45%',
            mr: ['auto', null, null, 6, 60, 85],
            order: [2, null, null, 0],
            ml: ['auto', null, null, 0],
            display: [
                'none', 'none', 'none', 'none',
                'inline-flex',
            ],
            position: 'relative',
            '> img': {
                position: 'relative',
                zIndex: 1,
                height: [310, 'auto'],
            },
        },
        shapeBox: {
            position: 'absolute',
            bottom: -68,
            left: -160,
            zIndex: -1,
            display: ['inline-block', null, null, null, null, 'inline-block'],
        },
        videoBtn: {
            zIndex: 2,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: ['60px', null, '80px', null, '100px'],
            height: ['60px', null, '80px', null, '100px'],
            p: '0px !important',
            backgroundColor: 'transparent',
            '&::before': {
                position: 'absolute',
                content: '""',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                display: 'block',
                width: ['60px', null, '80px', null, '100px'],
                height: ['60px', null, '80px', null, '100px'],
                backgroundColor: 'primary',
                borderRadius: '50%',
                animation: `${playPluse} 1.5s ease-out infinite`,
                opacity: 0.5,
            },
            '> span': {
                backgroundColor: 'rgba(16,33,55,0.1)',
                width: 'inherit',
                height: 'inherit',
                textAlign: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.5s',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
            },
            svg: {
                fontSize: [40, null, 48, null, 62],
            },
        },

        grid: {
            pr: [2, 0, null, null, 6, '70px'],
            pl: [2, 0],
            pt: [2, null, null, null, 3],
            mx: 'auto',
            width: ['100%', 370, 420, '100%'],
            gridGap: ['35px 0', null, null, null, '50px 0'],
            gridTemplateColumns: ['repeat(1,1fr)'],
        },
        card: {
            display: 'flex',
            alignItems: 'flex-start',
            transition: 'all 0.3s',
        },

        icon: {
            width: ['45px', null, null, null, '55px'],
            height: 'auto',
            flexShrink: 0,
            mr: [3, null, null, null, 4],
        },
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            mt: '-5px',
            title: {
                fontSize: 3,
                color: 'heading_secondary',
                lineHeight: 1.4,
                fontWeight: 700,
                mb: [2, null, 3, 2, 3],
            },

            subTitle: {
                fontSize: [1, null, null, '14px', 1],
                fontWeight: 400,
                lineHeight: 1.9,
            },
        },
        videoWrapper: {
            maxWidth: '100%',
            position: 'relative',
            width: '900px',
            '&:before': {
                content: '""',
                display: 'block',
                paddingTop: '56.25%',
            },
            iframe: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
            },
        },
    };
    const style = {
        wrapper: {
            display: 'flex', alignItems: 'center', backgroundColor: '', justifyContent: "space-between",
            flexDirection: ['column', 'column', 'column', 'column', 'row', 'row', 'row']
        },
        banner: {
            borderBottomLeftRadius: 100,

            height: ['auto', 'auto', 'auto', 'auto', '90vh', '90vh', '90vh',],
            backgroundColor: ['#0898E7',  '#0898E7', '#0898E7', '#0898E7', 'transparent', "transparent", 'transparent'],
            display: "flex",
            justifyContent: "center",
            backgroundImage: [null,  null, null, null, `url(${Yl})`, `url(${Yl})`, `url(${Yl})`],
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom left',
            backgroundSize: '100%',
            pt: ['140px', '145px', '155px', '170px', null, '180px', '215px'],
            pb: [8, 8, 8, null, 2, 0, null, 5],
            position: 'relative',
            zIndex: 2,
            '&::after': {
                position: 'absolute',
                content: '""',
                bottom: '50px',
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: -10,
                backgroundImage: [null,  null, null, null, `url(${Shape})`, `url(${Shape})`, `url(${Shape})`],
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'bottom right',
                backgroundSize: '100%',
            },
        },
        container: {
            width: ['100%', '100%', '100%', '100%', '60%', '60%', '60%'],
            minHeight: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    }
    const images = [
        { url: ServiceThumb        },
        { url: I1        },
        { url: I2        },
        { url: I3        },

    ];
    useEffect(()=>{

    }, [])
    return(
        <Box sx={style.banner}>
            <Container>
                <Box sx={style.wrapper}>
                    <Box sx={style.container}>

                        <Text
                            as="h1"
                            sx={{
                                fontSize: ["46px", "40px", "30px", "34px", '34px', "38px", "45px"],

                                color: 'whitesmoke',
                                opacity:  1,
                                fontFamily: "'Aref Ruqaa', serif;"
                            }}
                        >
                             تربية علمية
                        </Text>
                        <Text
                            as="h1"
                            sx={{
                                textIndent: 60,
                                fontSize: ["35px", "40px", "30px", "34px", '34px', "38px", "45px"],
                                color: 'whitesmoke',
                                opacity:  1,
                                fontFamily: "'Aref Ruqaa', serif;"

                            }}
                        >
                            بطرق و تكنولوجيا عصرية
                        </Text>
                        <br/>
                        <Text
                            as="h1"
                            sx={{
                                display: ["none", "none",  "none", "flex", "block", "block", "block", ],
                                textIndent: 20,
                                color: 'white',
                                opacity:  1,
                                fontSize: 8

                            }}
                        >
                            مدرسة المناهل هي محاولة لنخبة من الدكاترة و الأساتدة لتقديم تربية علمية بطرق و تكنولوجيا عصرية لطلبتنا الأعزاء، نقدم دروس دعم أسبوعية للتلاميد التظامين و دروس يومية للمسجلين في التعليم عن بعد
                        </Text>
                        <Text
                            as="h1"
                            sx={{
                                display: ["block", "block",  "block", "none", "none", "none", "none", ],
                                textIndent: 20,
                                color: 'white',
                                opacity:  1,
                                fontSize: ["30px", "40px", "30px", "34px", '34px', "38px", "45px"],

                            }}
                        >
                            مدرسة المناهل هي محاولة لنخبة من الدكاترة و الأساتدة لتقديم تربية علمية بطرق و تكنولوجيا عصرية لطلبتنا الأعزاء
                        </Text>
                        <Box>
                            <Button sx={{ml: 2}}>
                                 <Text sx={{mx: 1, p: 1, fontSize: 25}}>
                                     سجل الآن
                                 </Text>
                            </Button>

                            <Button
                                variant={"whiteButton"}
                            >
                                <Text sx={{mx: 1, p: 1, fontSize: 25}}>
                                    <a href={"#AboutUs"}>
                                        اكتشف المزيد
                                    </a>
                                </Text>

                            </Button>
                        </Box>

                    </Box>
                    <Box sx={styles.thumbnail}>
                        <SimpleImageSlider
                            autoPlay={true}
                            width={'100%'}
                            height={504}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                        <Box sx={styles.shapeBox}>
                            <Image src={shapePattern} alt="Shape" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export  default Landing
