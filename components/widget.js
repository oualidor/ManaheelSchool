
import {Box, Heading, Image, Link, Text} from 'theme-ui';
import { rgba } from 'polished';

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h1" sx={{color: 'white'}}>{title}</Heading>
      <ul>
        {items.map(({ path, label, icon, target }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <Link href={path} key={i} label={label}  target={target} sx={{color: "red"}}>
              <Text sx={{color: 'white'}} as={'h2'}>{label}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        fontSize: '15px',
        color: rgba('#02073E', 0.8),
        lineHeight: 2.5,
      },
    },
  },
};
