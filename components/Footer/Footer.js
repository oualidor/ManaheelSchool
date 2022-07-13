import {Container, Flex, Button, Box, Text, Image} from 'theme-ui';
import NextLink from 'next/link';
import { keyframes } from '@emotion/react';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactCountryFlag from "react-country-flag";
import React, {useEffect, useState} from 'react';
import {useTranslation} from "next-i18next";

import { FaMapMarkerAlt, FaPhone, FaAndroid } from "react-icons/fa";

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
const langBoxAnim = keyframes`
  from {
   
    opacity: 0;
  }
  to {
 
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const LanTag = ({label, lang, country, style}) => {
  return (

        <NextLink href={"/"} locale={lang}>

          <Flex sx={style} className={"langTag"}>
            <Text sx={{color: "primary"}}>{label}</Text>
            <ReactCountryFlag
                className="emojiFlag"
                countryCode={country}
                style={{
                  fontSize: '1em',
                  lineHeight: '2em',
                }}
                aria-label="United States"
            />
          </Flex>

        </NextLink>

  );
};

export default function Footer({ className }) {
  const {t, i18n} = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)
  let HeaderData = [
    {
      path: '/',
      label: 'الرئيسية',
    },

    {
      path: '/Portfolio',
      label: 'فضاء الأساتدة',
    },
    {
      path: '/Portfolio',
      label: 'فضاء الأولياء',
    },
  ]

  let teacherData = [

    {
      path: '/Portfolio',
      label: 'تحميل التطبيق',
    },
    {
      path: '/Portfolio',
      label: 'فضاء الأولياء',
    },
  ]


  let text = "مدرسة المناهل"
  const styles = {
    link: {
      fontSize: [null, null, null, null, null, "20px", "18px"],
      fontWeight: '400',
      textDecoration: "none",
      cursor: 'pointer',
      lineHeight: '1.2',
      '&:active': {
        color: 'green',
      },
      '&:visited': {
        color: 'yellow',
      },
    },
    header: {

      color: 'white',
      fontWeight: 'normal',
      py: 5,
      width: '100%',

      backgroundColor: 'primary',
      transition: 'all 0.5s ease',
      animation: `${positionAnim} 0.4s ease`,
      '.donate__btn': {
        display: "none",
        flexShrink: 0,
        mr: [15, 20, null, null, 0],
        ml: ['auto', null, null, null, 0],
        '@media screen and (min-width: 1220px)': {
          display: 'flex',
        },
      },
    },
    container: {
      backgroundColor: '',
      width: '100%',
      display: 'flex',

      justifyContent: 'space-between',
    },
    nav: {
      height: "100%",
      mr: 10,
      justifyContent: 'space-between',
      display: 'none',
      '@media screen and (min-width: 1220px)': {
        display: 'flex', flexDirection: 'column'
      },

    },
    lanBox: {
      // display: openMenu? "flex": "none", flexDirection: "column",
      display: "none",
      p: 20, mt: 0,
      position: "absolute", left: 0,
      backgroundColor: "rgba(255, 255, 255, 0.9)", animation: `${langBoxAnim} 0.8s ease`,
    },
    langTag: {
      cursor: "pointer",
      width: 80, mb:1,
      justifyContent: "space-between",
    },
    lanIcon: {
      position: "relative",
      "&:hover .langBox": {
        display: "block",
      },
    },
    sectionHeader: {
      fontSize: '26px'
    }
  };
  useEffect(()=>{

  }, [])

  return (

      <Box sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Box>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Box sx={{display: "flex", flexDirection: "column"}}>
                <Text sx={{fontSize: ['20px', '20px', '20px', "40px"], fontWeight: '1', fontFamily: "'Gulzar', serif"}}>{text}</Text>
              </Box>
            </Box>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Box sx={{display: "flex", alignItems: "", flexDirection: 'column'}}>
                <Text sx={{fontSize: ['16px',"22px"], fontWeight: '1'}}>
                  شارع هنون الزقاي، سيدي الشيخ
                </Text>
                <Text sx={{fontSize: ['16px',"22px"], fontWeight: '1',}}>
                  ولاية سعيدة، بلدية سعيدة
                </Text>
              </Box>
            </Box>
            <Box sx={{display: "flex", alignItems: "center"}}>

              <Box sx={{display: "flex", alignItems: "", flexDirection: 'column'}}>
                <Text sx={{fontSize: ['16px',"26px"], fontWeight: '1',}}>
                  0550750576 / 021264359
                </Text>
              </Box>
            </Box>

          </Box>
          <Box sx={{display: 'flex'}}>
            <Box sx={styles.nav} id={"navContent"}>
              <Text  sx={styles.sectionHeader}>فضاء الأولياء</Text>
              {HeaderData.map(({ path, label }, i) => (
                  <span key={i}>
                   <NextLink
                       href={path}
                   >
                    <Text sx={styles.link}>{label}</Text>
                  </NextLink>
                </span>

              ))}
            </Box>

          </Box>

        </Container>
      </Box>

  );
}
