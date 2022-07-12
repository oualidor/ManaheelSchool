import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="h1"
        sx={{
            variant: 'sectionHeader.subTitle',
            color: isWhite ? 'white' : 'heading',
            opacity: isWhite ? 0.7 : 1,

        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading_secondary',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
