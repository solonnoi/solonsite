import Head from 'next/head';
import { Box, Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Styles from '../styles/portfolio.module.css';
import Particle from '@/components/particles';
import useBreakpoint from 'use-breakpoint';

const inter = Inter({ subsets: ['latin'] });

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function portfolio() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    'desktop'
  );
  return (
    <>
      <Box
        h={
          breakpoint == 'desktop' || breakpoint == 'tablet' ? '10px' : '70px'
        }></Box>
      <Box
        className={Styles.frontText}
        h="90px"
        color="black"
        align="center"
        fontSize="50px"
        fontWeight="800">
        Portfolio
      </Box>
      <Flex justify="center">
        <Box
          className="boxShadow"
          backgroundColor="black"
          color="white"
          m={30}
          w={900}
          borderRadius={15}
          style={{
            position: 'relative',
          }}>
          {breakpoint == 'desktop' && <></>}
          {breakpoint === 'mobile' && <Box h="12" />}
          <Box p={8} pb={0} fontSize={24} fontWeight={900}>
            {' '}
            Coming soon! :D
          </Box>
        </Box>
      </Flex>
    </>
  );
}
