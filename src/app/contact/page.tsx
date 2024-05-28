import {
  Heading,
  Text,
  Center,
  HStack,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <Center
      className="page-container glassmorphism"
      style={{ height: "100%", width: "100%" }}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="4xl" fontWeight="bold" mb={6}>
          Contact Us
        </Heading>
        <HStack spacing={2} align="center" fontSize="lg">
          <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Chennai,+Tamil+Nadu+600059,+India"
            isExternal
            cursor="none"
          >
            <Text fontSize="lg" textDecoration="underline">
              Chennai, Tamil Nadu 600059, India
            </Text>
          </Link>
        </HStack>
        <HStack spacing={2} align="center" fontSize="lg">
          <FaPhoneAlt style={{ fontSize: "1.5rem" }} />
          <Link href="tel:+917358040770" cursor="none">
            <Text fontSize="lg" textDecoration="underline">
              +91-73580 40770
            </Text>
          </Link>
        </HStack>
        <div className="contact-icons">
          <Box className="contact-icon-container">
            <a
              href="mailto:support@plusconsulting.in"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaEnvelope />
            </a>
            <Box className="contact-info-slide">support@plusconsulting.in</Box>
          </Box>

          <Box className="contact-icon-container">
            <a
              href="https://www.linkedin.com/company/plus-consulting-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaLinkedin />
            </a>
            <Box className="contact-info-slide">LinkedIn</Box>
          </Box>

          <Box className="contact-icon-container">
            <a
              href="https://www.facebook.com/plusconsultingindia"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaFacebook />
            </a>
            <Box className="contact-info-slide">Facebook</Box>
          </Box>

          <Box className="contact-icon-container">
            <a
              href="https://www.instagram.com/pluscorpconsulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaInstagram />
            </a>
            <Box className="contact-info-slide">Instagram</Box>
          </Box>
        </div>
      </VStack>
    </Center>
  );
}
