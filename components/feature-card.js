
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />
      <Box  sx={styles.wrapper}>

        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>

    </Box>
  );
}

const styles = {
  card: {

    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    mb: 6, p: 2
  },

  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '60px'],
    height: 'auto',
    flexShrink: 0,
    ml:2,
    mb: [3, 4, null, null, 3, 1, null, 1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',

    title: {
      fontFamily: "heading",
      fontSize: [3, null, null, null, null, 7],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px',
    },
    subTitle: {
      fontFamily: "heading",
      fontSize: ['14px', null, '28px', null, null, '22px', '22px', '22px'],
      fontWeight: 300,
      lineHeight: [1.85, null, 2],
    },
  },
};
