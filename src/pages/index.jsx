import Head from 'next/head';
import { useCallback, useEffect, useState, Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import useBreakpoint from 'use-breakpoint';
import { useAnimate } from 'framer-motion';
import BounceInSide from '../components/animation/bouncein';
import { useTranslation } from 'react-i18next';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Home() {
  const { t } = useTranslation();
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    'desktop'
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ensure translations are ready before rendering the content
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Box h={breakpoint == 'desktop' || breakpoint == 'tablet' ? 70 : 70} />

      <Flex
        justify="center"
        pr={breakpoint == 'desktop' ? 150 : null}
        zIndex="1">
        <Box w={50}></Box>

        <Flex justify="center" position="relative">
          {' '}
          {/* Center section on the top page */}
          <Box w={90}></Box>
          <Box w={breakpoint == 'desktop' || breakpoint == 'tablet' ? 8 : 0} />
          <Box>
            <FadeIn>
              <Box fontSize={22} fontWeight={400}>
                Hello, I{"'"}m
              </Box>
              <Box fontSize={50} fontWeight={600} lineHeight={'55px'}>
                Sólon Nói
              </Box>

              <Box fontSize={25} fontWeight={400}>
                Software Engineer with a passion for AI
              </Box>

              <a
                href="https://drive.google.com/file/d/1mZUuAlHo4tJoBTG_o3ed3pCscYWgQTTU/view?usp=drive_link"
                target="_blank">
                <Box
                  display="inline-block"
                  backgroundColor="black"
                  color="white"
                  padding="10px 20px 10px 20px"
                  fontWeight={500}
                  borderRadius={10}
                  margin="10px 0px 10px 0px">
                  View My Resume
                </Box>
              </a>
              <a href="https://github.com/solonnoi" target="_blank">
                <Box
                  display="inline-block"
                  backgroundColor="black"
                  color="white"
                  padding="10px 20px 10px 20px"
                  fontWeight={500}
                  borderRadius={10}
                  margin="0px 0px 10px 0px">
                  View My GitHub
                </Box>
              </a>
              <Box w="70%" fontWeight={500} fontSize={20}>
                Full Stack Development • React.js • React Native • Python •
                PostgreSQL • Electrical Engineering • Honeywell EBI
              </Box>
            </FadeIn>
          </Box>
        </Flex>

        {breakpoint === 'desktop' && (
          <BounceInSide
            viewThreshold={0.4}
            startX={-400}
            duration={2}
            className="front">
            <Box
              backgroundColor="gray.300"
              borderRadius={10}
              ml="25px"
              h={350}
              w={350}
              style={{
                position: 'relative !important',
                bottom: 40,
                zIndex: 2,
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                maxWidth: 'none',
              }}>
              <img
                src={
                  'https://res.cloudinary.com/df3txxgc1/image/upload/v1679514901/solonnoi/solonpic.png'
                }
                style={{
                  width: '350px',
                  borderRadius: '10px',
                  zIndex: '2',
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  maxWidth: 'none',
                }}
              />
            </Box>
          </BounceInSide>
        )}
      </Flex>
    </>
  );
}
