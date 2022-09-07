import { Container, Box } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import PostThumb1 from '../../src/assets/Images/1.jpg';
import PostThumb2 from '../../src/assets/Images/2.jpg';
import PostThumb3 from '../../src/assets/Images/3.jpg';
import youcef from '../../src/assets/Images/youcef.jpg';
import unknowFemaleTeacher from '../../src/assets/Images/unknowFemaleTeacher.png';
import ButtonGroup from "../../components/button-group";
import PostCard from "../../components/post-card";
import SectionHeader from "../../components/section-header";

const data = [
    {
        id: 1,
        imgSrc: youcef,
        altText: 'Marketing',
        postLink: '#',
        title: 'الدكتور يوسف سعيدي',
        authorName: 'رياضيات',
        date: 'Oct 20, 2020',
    },

    {
        id: 3,
        imgSrc: unknowFemaleTeacher,
        altText: 'Startup',
        postLink: '#',
        title: 'الأستادة دباس وسام',
        authorName: 'انجليزية',
        date: 'Oct 20, 2020',
    },
    {
        id: 2,
        imgSrc: PostThumb2,
        altText: 'Creative',
        postLink: '#',
        title: 'الدكتورة حبيبة لخضاري',
        authorName: 'فيزياء',
        date: 'Oct 20, 2020',
    },
    {
        id: 4,
        imgSrc: unknowFemaleTeacher,
        altText: 'Creative',
        postLink: '#',
        title: 'الأستادة قدوري أمينة',
        authorName: 'فرنسية',
        date: 'Oct 20, 2020',
    },
    {
        id: 4,
        imgSrc: unknowFemaleTeacher,
        altText: 'Creative',
        postLink: '#',
        title: 'الأستادة قدوري أمينة',
        authorName: 'James Carter',
        date: 'Oct 20, 2020',
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

export default function OurTeachers() {
    return (


        <Box sx={{ variant: 'section.feature',  }}>
            <Container>
                <SectionHeader
                    slogan="تأطير بداغوجي مميز"
                    title="تشكيلة مميزة من خبرات القطاع و طاقاته الجديدة"
                />
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        dotListClass=""
                        containerClass={'CarouselContainer'}
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={true}
                        sliderClass=""
                        slidesToSlide={1}
                    >
                        {data.map((item) => (
                            <PostCard
                                key={item.id}
                                src={item.imgSrc}
                                alt={item.altText}
                                postLink={item.postLink}
                                title={item.title}
                                authorName={item.authorName}
                                date={item.date}
                            />
                        ))}
                    </Carousel>
            </Container>
        </Box>

    );
}
