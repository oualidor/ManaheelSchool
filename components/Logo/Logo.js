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
                width: ["35%", "35%", "50%", "30%", "30%", "30%", "100px"],
                height: "80px", mx: 5
            }}/>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Text sx={{fontSize: "36px", fontWeight: '1'}}>{text}</Text>

            </Box>
        </Box>
    </Link>
  );
}
