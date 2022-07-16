import {Container, Flex, Button, Box, Text, Image} from 'theme-ui';
import NextLink from 'next/link';
import { keyframes } from '@emotion/react';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactCountryFlag from "react-country-flag";
import React, {useEffect, useState} from 'react';
import facebook from '../../src/assets/Images/facebook.png';
import twitter from '../../src/assets/Images/twitter.png';
import linkedin from '../../src/assets/Images/linkedin.png';
import Widget from "../widget";
const data = [
  {
    id: 3,
    title: 'اتصل بنا',
    items: [
      {
        path: 'tel:+213550750576',
        label: '0550750576',
      },
      {
        path: 'tel:+213696825194',
        label: '0659521475',
      },
    ],
  },
  {
    id: 5,
    title: 'تابعنا',
    items: [
      {
        path: 'https://web.facebook.com/youritdepartment',
        icon: facebook,
        label: 'Facebook',
        target: '_blank'
      },
      {
        path: 'https://www.linkedin.com/company/yourit-department/',
        icon: linkedin,
        label: 'LinkedIn',
      },
    ],
  },
]
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

export default function Footer({ className }) {

  const [openMenu, setOpenMenu] = useState(false)
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
          <Box sx={{display: 'flex', justifyContent: 'space-between',      alignItems: 'center',     flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'column-reverse', 'row', 'row', 'row']}}>
            <Box>
              <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                  <Text sx={{fontSize: ['50px', '20px', '20px', "40px"], fontWeight: '1', fontFamily: "'Gulzar', serif"}}>{text}</Text>
                </Box>
              </Box>
              <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{display: "flex", alignItems: "", flexDirection: 'column'}}>
                  <Text sx={{fontSize: ['32px',"22px"], fontWeight: '1'}}>
                    شارع هنون الزقاي، سيدي الشيخ
                  </Text>
                  <Text sx={{fontSize: ['32px',"22px"], fontWeight: '1',}}>
                    ولاية سعيدة، بلدية سعيدة
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box sx={{display: 'flex'}}>
              {data.map(({ id, title, items }) => (
                  <Widget key={id} title={title} items={items} />
              ))}

            </Box>
          </Box>
          <Box sx={{borderTop: '5px solid white', width: '100%', display: "flex"}}>
            <Text sx={{fontSize: ['16px',"22px"], fontWeight: '1', textAlign: "center", width: '100%', backgroundColor: ''}}>
              جميع الحقوق محفوظة 2022
            </Text>
          </Box>
        </Container>
      </Box>

  );
}
