import { Box, Heading, Text, VStack, Divider, Center } from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Center className="page-container">
        <VStack>
          <Box className="about-section" style={{ left: "15%" }}>
            <Box className="about-image-container-left">
              <Image
                src="/pluscorp-logo.png"
                alt="About Us"
                width={100}
                height={100}
                className="about-image-left"
              />
            </Box>
            <VStack align="start" spacing={4} className="glassmorphism">
              <Heading as="h1" size="lg">
                About Us
              </Heading>
              <Text>
                Founded in 2016, Pluscorp Consulting is a comprehensive Finance
                Consulting and Recruitment firm, serving various sectors with a
                commitment to innovative and impactful solutions. We pride
                ourselves on delivering insights that not only meet but exceed
                client expectations. Our boutique, partner-driven approach
                ensures we consistently offer unique, tailored solutions that
                prioritize the needs of our clients.
              </Text>
            </VStack>
          </Box>
          <Divider mt={6} mb={9} />
          <Box className="about-section" style={{ right: "15%" }}>
            <Box className="about-image-container-right">
              <Image
                src="/pluscorp-logo.png"
                alt="Founder"
                width={100}
                height={100}
                className="about-image-right"
              />
            </Box>
            <VStack align="start" spacing={4} className="glassmorphism">
              <Heading as="h1" size="lg">
                About the Founder
              </Heading>
              <Text>
                Raghuraman Chandrasekaran, known as Raghu, is a Chartered
                Accountant and Management Accountant with a distinguished
                career. After two decades of success in reputed companies from
                Wipro, ICICI, Satyam, CSC, and Sutherland, he established
                Pluscorp Consulting in 2016. Raghu brings a wealth of experience
                across multiple industries including Finance, Banking, Treasury,
                Core Banking, BPO, and Audit. Certified as a Six Sigma
                Greenbelt, he is well-versed in managing large teams and has
                significant expertise in both captive and third-party
                outsourcing environments.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </>
  );
}
