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
import Style from './Style'
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

const langBoxAnim = keyframes`
  from {
   
    opacity: 0;
  }
  to {
 
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const MainStyle = Style.Main
export default function Footer({ className }) {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(()=>{

  }, [])

  return (

      <Box sx={MainStyle.Container} className={className} id="header">
        <Container>
          <Box sx={MainStyle.FirstLine}>
            <Box sx={MainStyle.LogoContainer}>
                  <Text sx={{fontSize: ['50px', '20px', '20px', "40px"], fontFamily: "'Gulzar', serif"}}>مدرسة المناهل</Text>
                  <Text sx={{fontSize: ['28px',"22px"], }}> شارع هنون الزقاي، سيدي الشيخ</Text>
                  <Text sx={{fontSize: ['28px',"22px"],  }}>ولاية سعيدة، بلدية سعيدة</Text>
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
