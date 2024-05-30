import {
  Box,
  Heading,
  Text,
  VStack,
  Center,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Center className="page-container">
        <VStack spacing={8}>
          <Flex
            direction={{ base: "column", md: "row" }}
            className="about-section glassmorphism"
          >
            <Box className="about-image-container">
              <Image
                src="/pluscorp-logo.png"
                alt="About Pluscorp"
                width={150}
                height={150}
                className="about-image"
              />
            </Box>

            <VStack
              align="start"
              spacing={4}
              flex="1"
              className="about-text-container"
            >
              <Heading as="h1" size="lg">
                About Pluscorp
              </Heading>
              <Text>
                Founded in 2016, Pluscorp Consulting is a premier finance
                consulting and recruitment firm. We serve a variety of sectors,
                committed to delivering innovative and impactful solutions. Our
                boutique, partner-driven approach ensures that we consistently
                offer unique, tailored solutions to prioritize the needs of our
                clients.
              </Text>
            </VStack>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            className="about-section glassmorphism"
          >
            <Box className="about-image-container">
              <Image
                src="/pluscorp-logo.png"
                alt="Our Journey"
                width={150}
                height={150}
                className="about-image"
              />
            </Box>

            <VStack
              align="start"
              spacing={4}
              flex="1"
              className="about-text-container"
            >
              <Heading as="h1" size="lg">
                Our Journey
              </Heading>
              <Text>
                Over nearly a decade, our team has proudly served over 10,000
                clients and job seekers, continually expanding our portfolio. We
                leverage industry-specific expertise and deep functional
                knowledge to deliver concrete and scalable results. With a
                strong legacy and commitment to client success, we stand ready
                to propel your business forward.
              </Text>
            </VStack>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            className="about-section glassmorphism"
          >
            <Box className="about-image-container">
              <Image
                src="/pluscorp-logo.png"
                alt="Our Purpose"
                width={150}
                height={150}
                className="about-image"
              />
            </Box>

            <VStack
              align="start"
              spacing={4}
              flex="1"
              className="about-text-container"
            >
              <Heading as="h1" size="lg">
                Our Purpose
              </Heading>
              <Text>
                At Pluscorp, our purpose is to deliver tangible and sustainable
                results for our clients. We combine our expertise and experience
                with your unique insights. From initial discovery to final
                delivery, we maintain the highest levels of professional rigor.
                Our commitment to excellence, client-centric approach, and deep
                industry knowledge make us your trusted partner in achieving
                your business goals.
              </Text>
            </VStack>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            className="about-section glassmorphism"
          >
            <Box className="about-image-container">
              <Image
                src="/pluscorp-logo.png"
                alt="Vision & Mission"
                width={150}
                height={150}
                className="about-image"
              />
            </Box>

            <VStack
              align="start"
              spacing={4}
              flex="1"
              className="about-text-container"
            >
              <Heading as="h1" size="lg">
                Vision & Mission
              </Heading>
              <Text>
                <strong>Vision:</strong> To deliver tangible and sustainable
                results for our clients by combining our expertise and
                experience with their insights. <br />
                <strong>Mission:</strong> We maintain the highest levels of
                professional rigor throughout every assignment, from the initial
                discovery phase to the final delivery. Our commitment to
                excellence, client-centric approach, and industry knowledge make
                us your trusted partner in achieving your business goals. At
                Pluscorp, we don’t just consult; we transform businesses and
                empower success. Join us on a journey of growth and innovation,
                where your success is our ultimate goal.
              </Text>
            </VStack>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            className="about-section glassmorphism"
          >
            <Box className="about-image-container">
              <Image
                src="/pluscorp-logo.png"
                alt="Our Expertise"
                width={150}
                height={150}
                className="about-image"
              />
            </Box>

            <VStack
              align="start"
              spacing={4}
              flex="1"
              className="about-text-container"
            >
              <Heading as="h1" size="lg">
                Our Expertise
              </Heading>
              <Text>
                We specialize in assisting small and medium enterprises (SMEs)
                in developing business strategies that guarantee organizational
                success. Originally founded as a recruiting company, Pluscorp
                has expanded its services to include comprehensive consulting,
                leveraging the expertise of our seasoned consultants and
                business transformation experts. Our team excels in negotiating
                and managing challenging projects, collaborating seamlessly with
                teams and businesses. At the core of our capability lies the art
                of enabling and sustaining change while creating frameworks for
                continuous improvement. We integrate technology, industry best
                practices, and business consulting to provide comprehensive
                solutions for your business’s unique needs.
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Center>
    </>
  );
}
