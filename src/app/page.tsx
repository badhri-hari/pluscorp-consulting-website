import React from "react";
import { Heading, Text, Center, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="page-container">
      <video autoPlay muted loop className="background-video">
        <source src="/home-video.mp4" type="video/mp4" />
        Please update your browser.
      </video>
      <Center textAlign="center" flex="1">
        <VStack>
          <Heading
            as="h1"
            size="lg"
            fontWeight="normal"
            mb={4}
            style={{ color: "white" }}
          >
            Crafting Innovative and Efficient Business Solutions
          </Heading>
          <Heading
            as="h1"
            size="4xl"
            fontWeight="bold"
            mb={6}
            style={{ color: "white" }}
          >
            PLUSCORP CONSULTING IS READY TO TAKE YOU HIGHER
          </Heading>
          <Text fontSize="lg" maxW="2xl" mx="auto" style={{ color: "white" }}>
            Pluscorp Consulting offers a{" "}
            <strong>wide and comprehensive suite of consulting services</strong>{" "}
            tailored for various industries. Our extensive tools and expertise
            empower us to{" "}
            <strong>
              support your business growth, manage your expansion effectively,
              and guide your next project
            </strong>
            . We collaborate closely with our clients to{" "}
            <strong>
              create compelling business strategies, design high-quality and
              scalable solutions, and deliver enriching brand experiences.
            </strong>
          </Text>
        </VStack>
      </Center>
    </div>
  );
}
