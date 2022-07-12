
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box  sx={styles.wrapper}>
        <Image src={src} alt={altText} sx={styles.img} />
        <Heading sx={styles.wrapper.title}>{title}</Heading>
      </Box>
      <Text sx={styles.wrapper.subTitle}>{text}</Text>
    </Box>
  );
}

const styles = {
  card: {

    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    mb: 6
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
    flexDirection: 'row',
    mt: '-5px',
    alignItems: 'center',
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
      fontSize: 4,
      fontWeight: 300,
      lineHeight: [1.85, null, 2],
    },
  },
};
