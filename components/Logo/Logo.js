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
        mr: 15,
      }}
      {...rest}
    >
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Image src={src} alt="Logo" sx={{
                width: ["35%", "35%", "50%", "30%", "30%", "30%", "100px"],
                height: "100px", m: 5
            }}/>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Text sx={{fontSize: "28px", fontWeight: '400'}}>{text}</Text>
                <Text sx={{fontSize: "28px"}}>{desc}</Text>
            </Box>
        </Box>
    </Link>
  );
}
