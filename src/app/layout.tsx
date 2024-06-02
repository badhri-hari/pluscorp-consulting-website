import { ReactNode } from "react";
import { Center, ChakraProvider, VStack } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import Background from "../components/Background";

import { ThemeProvider } from "../../contexts/ThemeContext";
import "../styles/stylesheet.css";

type LayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Pluscorp Consulting",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Background />
          <Center>
            <Nav />
          </Center>
          <VStack spacing={0} height="100vh">
            <Cursor />
            <div className="page-layout-container">
              <ChakraProvider>{children}</ChakraProvider>
            </div>
            <div className="footer-container">
              <Footer />
            </div>
          </VStack>
        </ThemeProvider>
      </body>
    </html>
  );
}
