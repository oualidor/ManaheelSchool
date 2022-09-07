
import {Button, Image, jsx} from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import Smart from '../../src/assets/Images/feature/webSitesDev.png';
import Winner from '../../src/assets/Images/feature/winner.svg';
import Cloud from '../../src/assets/Images/feature/cloud.svg';
import Setting from '../../src/assets/Images/feature/setting.svg';
import Design from '../../src/assets/Images/feature/design.svg';
import Chat from '../../src/assets/Images/feature/chat.svg';
import SectionHeader from "../../components/section-header";
import FeatureCard from "../../components/feature-card";
import ServiceThumb from "../../src/assets/Images/service-thumb.png";
import Banner from "../../src/assets/Images/logo.png";
import {IoIosPlay} from "react-icons/io";
import shapePattern from "../../src/assets/Images/shape-pattern1.png";
import React from "react";
import shape3Rtl from "../../src/assets/Images/shape3Rtl.png";
import {keyframes} from "@emotion/core";
import {motion} from 'framer-motion'
const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'AI',
    title: 'برامج وزارية',
    text:
      'دروس و برامج وفق المنهاح الوزاري المعمتمد من طرف الدولة ووزارة التربية الوطنية، وفق التوزيع السنوي للدروس و الامتحانات',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'تأطير ممتاز',
    text:
      'اخترنا لكم طاقما بيداغوجيا من نخبة أساتدة ودكاترة الولاية سواءا من خبرات القطاع و أسماءه الثقيلة أو من طاقاته الشبانية الجديدة من أجل ضمان تحصيل علمي يليق بمستوى تطلعاتنا و تطلعاتكم',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'ظروف استثنائية',
    text: 'قاعات مثالية، طاولات فردية، النقل من وإلى المدرسة، أفواج عادية و أخرى خاصة',
  },
];

export default function Feature() {
  return (
     <Box sx={{ variant: 'section.feature' }} id={'AboutUs'}>
      <Container>
        <SectionHeader
          slogan="من أجل مستقل أفضل"
          title="مزايا و برامج تأخد بيدك الى النجاح"
        />
        <Box sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'column', 'column', 'row', 'row', 'row']
        }}>
          <Box sx={styles.thumbnail}>
            <Image src={Banner} alt="Thumbnail" width={'100%'}  style={{borderRadius: '40px',}}/>

            <Box sx={styles.shapeBox}>
              <Image src={shape3Rtl} alt="Shape" />
            </Box>
          </Box>
          <Box sx={styles.grid}>
            {data.map((item, index) => (
                <motion.div
                    initial={{opacity: '0%', }}
                    whileInView={{opacity: '100%', }}
                    transition={{ duration: 2, type: "tween" }}
                >
                  <FeatureCard
                      key={item.id}
                      src={item.imgSrc}
                      alt={item.title}
                      title={item.title}
                      text={item.text}
                  />
                </motion.div>

            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
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
  grid: {
    display: 'flex', flexDirection: 'column',
    justifyContent: "space-around",
    width:  ['100%', '100%', '100%', '100%', "50%", "50%", "50%"],

        // pt: [0, null, null, null, null, null, 1, 1],
        // gridGap: [
        //   '37px 0',
        //   null,
        //   '45px 30px',
        //   null,
        //   '50px 30px',
        //   null,
        //   null,
        //   '90px 70px',
        // ],
        //
        // mx: 'auto',
        // gridTemplateColumns: [
        //   'repeat(1,1fr)',
        //   null,
        //   'repeat(2,1fr)',
        //   null,
        //   'repeat(3,1fr)',
        // ],

  },
  thumbnail: {

    borderRadius: '60px',
    height: '60vh',
    ml: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    display: ['none','none', 'none', 'none', 'inline-flex'],
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
    right: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
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
      backgroundColor: 'rgba(255,255,255,0.5)',
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
};
