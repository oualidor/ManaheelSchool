import {Box, Button, Container, Heading, Image, Text} from "theme-ui";
import ShapeLeft from '../../../src/assets/Images/shape-left.png';
import ShapeRight from '../../../src/assets/Images/shape-right.png';
import BannerImg from '../../../src/assets/Images/banner-thumb.png';
import $ from 'jquery';
import {useEffect} from "react";
import SimpleImageSlider from "react-simple-image-slider";
const Landing = ()=>{

    const style = {
        banner: {
            display: "flex",
            justifyContent: "center",
            height: "95vh",
            pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
            pb: [2, null, 0, null, 2, 0, null, 5],
            position: 'relative',
            zIndex: 2,
            '&::before': {
                position: 'absolute',
                content: '""',
                bottom: 6,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: -1,
                backgroundImage: `url(${ShapeRight})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'bottom left',
                backgroundSize: '100%',
            },
            '&::after': {
                position: 'absolute',
                content: '""',
                bottom: '50px',
                right: 0,
                height: '100%',
                width: '100%',
                zIndex: -1,
                backgroundImage: `url(${ShapeLeft})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'bottom right',
                backgroundSize: '100%',
            },
            container: {
                minHeight: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            },
            contentBox: {
                width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
                mx: 'auto',
                textAlign: 'center',
                mb: ['40px', null, null, null, null, 7],
            },
            imageBox: {
                width: 1002,
                height: 600,
                // backgroundColor: "red",
                // boxShadow: "10px 10px 10px grey",
                justifyContent: 'center',
                textAlign: 'center',
                display: 'inline-flex',
                img: {
                    position: 'relative',
                    height: [245, 'auto'],
                },
            },
        },
    }
    const images = [
        { url: "https://scontent.forn1-2.fna.fbcdn.net/v/t39.30808-6/242510171_375847890679102_9101656435887925844_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHNju6KpweobG6ASFqrLk4mUGRyRlOkcfxQZHJGU6Rx_CyVF3eT6TBLtcJykdlDxdERobV1m6u865PKY48vC0kC&_nc_ohc=Kmia_ygeDMYAX-g8uwh&tn=J3QbMblY0w9mrhWO&_nc_zt=23&_nc_ht=scontent.forn1-2.fna&oh=00_AT8XghnGdwUyEJY-wQ1oem2KjrBDVA1brdx22OqhLd-elQ&oe=62C410D0" },
        { url: "https://scontent.forn1-2.fna.fbcdn.net/v/t39.30808-6/240222512_357272179203340_1460396114112624838_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH9mkNDNl5EB4o8T8EwSmXmrb3G8J3pH7mtvcbwnekfuU8w7pGvryKj2ekk9mXGmOpRNqEUoSwB8z4lbpUTdsft&_nc_ohc=ccHoHQmKhTsAX-iNkWm&_nc_zt=23&_nc_ht=scontent.forn1-2.fna&oh=00_AT8cGabjwX6KnSdOiWVepiC7hTmBF0cPBnnTwNxFWy3G7Q&oe=62C46D30" },

    ];
    useEffect(()=>{

    }, [])
    return(
        <Box sx={style.banner}>
            <Container sx={style.banner.container}>
                <Box sx={style.banner.contentBox}>
                    <Heading as="h1" variant="heroPrimary">
                        مدرسة المناهل لدروس الدعم
                    </Heading>
                    <Text as="h1" variant="heroSecondary">
                        دروس حضورية و عن بعد من طرف خيرة أساتدة الوطن
                    </Text>
                    <Button variant="primary">تصفح البرامج</Button>
                </Box>
            </Container>
        </Box>
    )
}

export  default Landing
