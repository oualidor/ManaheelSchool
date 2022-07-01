import {Container, Flex, Button, Box, Text} from 'theme-ui';
import NextLink from 'next/link';
import { keyframes } from '@emotion/react';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactCountryFlag from "react-country-flag";
import React, {useEffect, useState} from 'react';
import {useTranslation} from "next-i18next";
import Logo from "../Logo/Logo";
import LogoBlackEnglish from "../../src/assets/Images/LogoBlackEnglish.svg"
import logoMinEnglishBlack from "../../src/assets/Images/logoMinEnglishBlack.svg"
import LogoMinWhite from "../../src/assets/Images/LogoMinWhite.svg"
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

export default function Header({ className }) {
  const {t, i18n} = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)
  let HeaderData = [
    {
      path: '/',
      label: t('Home:Home'),
    },
    {
      path: '/Portfolio',
      label: t('Home:Categories'),
    },
    {
      path: '/Portfolio',
      label: t('Home:OurTeam'),
    },
    {
      path: '/Portfolio',
      label: 'اتصل بنا',
    },
  ]

  let text = t('Home:Logo')
  const styles = {
    link: {
      fontSize: [null, null, null, null, null, "20px", "20px"],
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
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'transparent',
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
      '&.sticky': {
        position: 'fixed',
        backgroundColor: 'background',
        color: 'primary',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
        py: 3,
        'nev > a': {
          color: 'text',
        },
        '.donate__btn': {
          borderColor: 'primary',
          color: 'primary',
          '&:hover': {
            boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
            backgroundColor: 'primary',
            color: 'white',
          },
        },
      },
    },
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',


    },
    nav: {
      height: "100%",
      width: "60%",
      alignItems: "center",
      justifyContent: 'space-between',
      display: 'none',
      '@media screen and (min-width: 1220px)': {
        display: 'flex',
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


  };
  useEffect(()=>{

  }, [])

  return (

      <Box sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className == "sticky" ? LogoMinWhite: LogoMinWhite} text={text} desc={"For our children's future"}></Logo>
          <Box sx={styles.nav} id={"navContent"}>
            {HeaderData.map(({ path, label }, i) => (
                <span key={i}>
                   <NextLink
                       href={path}
                   >
                    <Text sx={styles.link}>{label}</Text>
                  </NextLink>
                </span>

            ))}

            <Box sx={styles.lanIcon}>
              <Box >
                <LanguageIcon></LanguageIcon>
                <ArrowDropDownIcon></ArrowDropDownIcon>
              </Box>
              <Box id={"langContainer"} sx={styles.lanBox} className={"langBox"}>
                <LanTag lang={"ar"} label={"العربية"} country={"DZ"} style={styles.langTag}></LanTag>
                <LanTag lang={"en"} label={"English"} country={"GB"} style={styles.langTag}></LanTag>
                <LanTag lang={"fe"} label={'French'} country={"Fr"} style={styles.langTag}></LanTag>
              </Box>
            <Box>
            </Box>
            </Box>
          </Box>
        </Container>
      </Box>

  );
}
