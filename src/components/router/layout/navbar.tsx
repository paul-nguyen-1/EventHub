import { useState, useEffect, useRef } from "react";
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Autocomplete,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import classes from "./styles/navbar.module.css";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

const items = links.map((link) => (
  <a
    key={link.label}
    href={link.link}
    className={classes.link}
    onClick={(event) => event.preventDefault()}
  >
    {link.label}
  </a>
));

// https://ui.mantine.dev/category/headers/# -- implement header with mega menu, add search and get user icon and tab when i set up AWS Cognito

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [heightState, setHeightState] = useState("pageTop");
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current?.offsetHeight || 0;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > navbarHeight && currentScrollY > lastScrollY) {
        setHeightState("scrollDown");
      } else if (
        currentScrollY <= navbarHeight ||
        currentScrollY < lastScrollY
      ) {
        setHeightState("scrollUp");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box pb={120} style={{ position: "relative", zIndex: 999999 }}>
      <header
        ref={navbarRef}
        className={`${classes.header} fixed w-full transition-transform duration-700 ease-in-out ${
          heightState === "scrollDown" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Features
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
