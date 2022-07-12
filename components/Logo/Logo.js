import {Box, Image, Text} from 'theme-ui';
import Link from "next/link";


export default function Logo({ src, text, desc, ...rest }) {
  return (
    <Link
      href="/"
      sx={{
        variant: 'links.logo',
        display: 'block',
        cursor: 'pointer',

      }}
      {...rest}
    >
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Image src={src} alt="Logo" sx={{
                width: ["30px", "35px", "45px", "55px", "60px", "80px", "80px"],
                 mx: 4
            }}/>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Text sx={{fontSize: ["20px", "20px", "30px", "34px", '34px', "38px", "38px"], fontWeight: '1', fontFamily: "'Gulzar', serif"}}>{text}</Text>

            </Box>
        </Box>
    </Link>
  );
}
