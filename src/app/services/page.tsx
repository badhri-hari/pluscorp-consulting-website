import {
  Heading,
  Text,
  Center,
  VStack,
  HStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import RecruitmentCategories from "../../components/RecruitmentCategories";

export default function Services() {
  return (
    <Center className="page-container">
      <VStack>
        <HStack gap={1} style={{}}>
          <Center>
            <VStack
              spacing={4}
              maxW="2xl"
              align="start"
              className="glassmorphism"
              style={{ marginLeft: 0, marginRight: 10 }}
            >
              <Heading as="h1" size="xl" fontWeight="bold">
                Recruitment Services
              </Heading>
              <Text fontSize="lg">
                We are currently focused in recruitment within the finance
                sector. Our expertise spans across all levels, from fresh
                graduates to Chief Financial Officers, and we cater to various
                industries. We will be expanding our recruitment services to
                other domains soon.
              </Text>
              <Text fontSize="lg">
                For updates on job openings, follow our social media channels
                linked in the footer. Additionally, join our job application
                groups for finance professionals on Telegram and WhatsApp by
                clicking the icons below.
              </Text>
              <HStack gap={150} mt="2vh" ml="30%" mr="30%">
                <Box className="contact-icon-container">
                  <a
                    href="https://t.me/pluscorp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icons"
                  >
                    <FaTelegram style={{ fontSize: "2rem" }} />
                  </a>
                  <Box className="contact-info-slide">Telegram</Box>
                </Box>

                <Box className="contact-icon-container">
                  <a
                    href="https://chat.whatsapp.com/HeBVVfO7U6sIxjZXbv2JWc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icons"
                  >
                    <FaWhatsapp style={{ fontSize: "2rem" }} />
                  </a>
                  <Box className="contact-info-slide">WhatsApp</Box>
                </Box>
              </HStack>
            </VStack>
            <div className="recruitment-categories-container">
              <RecruitmentCategories />
            </div>
          </Center>
        </HStack>
        <Divider mt={6} mb={6} />
        <Heading as="h1" size="xl" fontWeight="bold">
          Latest Posts
        </Heading>
        <Divider mt={6} mb={9} />
        <div
          className="glassmorphism"
          style={{ display: "flex", gap: "20px", justifyContent: "center" }}
        >
          <iframe
            src="https://www.juicer.io/api/feeds/plus-consulting-india/iframe?per=1&spacing=10"
            width="370"
            height="500"
            style={{ margin: "0 auto" }}
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fplusconsultingindia&tabs=timeline&width=375&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="370"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </VStack>
    </Center>
  );
}
