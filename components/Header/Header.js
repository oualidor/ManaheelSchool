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
import logoMinBleu from "../../src/assets/Images/logoMinBleu.svg"
import LogoMinWhite from "../../src/assets/Images/LogoMinWhite.svg"
import MobileDrawer from "./mobile-drawer";
import {IoMdMenu} from "react-icons/io";
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

  let text = "مدرسة المناهل"
  const styles = {
    link: {
      fontSize: [null, null, null, null, null, "20px", "26px"],
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
      right: 0,
      backgroundColor: 'transparent',
      transition: 'all 0.5s ease',
      animation: `${positionAnim} 0.4s ease`,
      '&.sticky': {
        top: 0,
        right: 0,
        position: 'fixed',
        backgroundColor: 'background',
        color: 'primary',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
        py: 3,
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
          <Logo src={className == "sticky" ? logoMinBleu: LogoMinWhite} text={text} desc={"For our children's future"}></Logo>
          <Box sx={{display: ["flex", "flex",  "flex", "flex", "none", "none", "none", ]}}>
            <IoMdMenu size="26px" />
          </Box>

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
          </Box>
        </Container>
      </Box>

  );
}
