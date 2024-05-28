"use client";

import { HStack, Center, Link, Box } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="header-container">
      <Box className="nav-logo-container nav-logo-red-background">
        <Image
          src="/pluscorp-logo.png"
          className="nav-image"
          alt="Pluscorp Logo"
          width={100}
          height={100}
        />
      </Box>
      <nav className="nav-members">
        <Center className="nav-container glassmorphism-nav">
          <HStack className="nav-hstack" spacing="auto">
            <Link
              href="/"
              className={`nav-links ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-links ${isActive("/about") ? "active" : ""}`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`nav-links ${isActive("/services") ? "active" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className={`nav-links ${
                isActive("/testimonials") ? "active" : ""
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className={`nav-links ${isActive("/contact") ? "active" : ""}`}
            >
              Contact Us
            </Link>
          </HStack>
        </Center>
      </nav>
    </header>
  );
}
