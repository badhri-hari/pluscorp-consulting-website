import { Box, Heading, Text, VStack, Divider, Center } from "@chakra-ui/react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <Heading as="h1" size="4xl" fontWeight="bold" marginTop="-3%">
        Testimonials
      </Heading>
      <Divider mt={6} mb={9} />
      <Center className="page-container">
        <VStack>
          <Box className="testimonials-section" style={{ left: "15%" }}>
            <Box className="testimonial-image-container-left">
              <Image
                src="/pluscorp-logo.png"
                alt="Entity's Name"
                width={100}
                height={100}
                className="testimonial-image-left"
              />
            </Box>
            <VStack align="start" spacing={4} className="glassmorphism">
              <Heading as="h1" size="lg">
                Entity 0
              </Heading>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora obcaecati maxime sequi, explicabo labore qui error
                deleniti eum hic ex voluptate sit fugiat laboriosam accusamus
                enim inventore! Magni harum itaque blanditiis exercitationem
                officia, ducimus veniam voluptates inventore beatae voluptatem!
                Voluptate rem vitae odio nostrum praesentium in laborum maxime
                earum quaerat nisi rerum possimus atque incidunt ad sequi,
                soluta enim fuga similique minima nulla? Cumque cum labore
                libero quibusdam error nostrum repellendus fuga architecto enim
                ipsum.
              </Text>
            </VStack>
          </Box>
          <Divider mt={6} mb={9} />
          <Box className="testimonials-section" style={{ right: "15%" }}>
            <Box className="testimonial-image-container-right">
              <Image
                src="/pluscorp-logo.png"
                alt="Entity 1"
                width={100}
                height={100}
                className="testimonial-image-right"
              />
            </Box>
            <VStack align="start" spacing={4} className="glassmorphism">
              <Heading as="h1" size="lg">
                Entity 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                sed incidunt accusamus dolore enim voluptate esse dolorum
                facilis sequi quisquam sunt aliquam eius impedit nulla inventore
                necessitatibus, beatae quis voluptas pariatur optio? Voluptates,
                corrupti eius. Aliquam molestias aliquid quis nihil? Quia
                molestiae maiores voluptas, aut libero animi facere molestias
                alias dolor, delectus at. Sed beatae fuga laudantium. Quo omnis
                eligendi voluptas quam dicta doloremque impedit accusamus earum
                facere suscipit accusantium quas, iste voluptatem quia sapiente
                ex. A numquam ut quidem veritatis porro expedita aspernatur. Ea.
              </Text>
            </VStack>
          </Box>
          <Divider mt={6} mb={9} />
          <Box className="testimonials-section" style={{ left: "15%" }}>
            <Box className="testimonial-image-container-left">
              <Image
                src="/pluscorp-logo.png"
                alt="Entity's Name"
                width={100}
                height={100}
                className="testimonial-image-left"
              />
            </Box>
            <VStack align="start" spacing={4} className="glassmorphism">
              <Heading as="h1" size="lg">
                Entity 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora obcaecati maxime sequi, explicabo labore qui error
                deleniti eum hic ex voluptate sit fugiat laboriosam accusamus
                enim inventore! Magni harum itaque blanditiis exercitationem
                officia, ducimus veniam voluptates inventore beatae voluptatem!
                Voluptate rem vitae odio nostrum praesentium in laborum maxime
                earum quaerat nisi rerum possimus atque incidunt ad sequi,
                soluta enim fuga similique minima nulla? Cumque cum labore
                libero quibusdam error nostrum repellendus fuga architecto enim
                ipsum.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </>
  );
}
