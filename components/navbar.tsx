"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Tabs, Tab } from "@heroui/tabs";

import { link as linkStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	ConsoleIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = ({ filters, setFilters }) => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Filter maps"
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
      onValueChange={(val) => setFilters({ ...filters, name: val.toLowerCase() }) }
		/>
	);

	return (
		<NextUINavbar maxWidth="xl">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">GoPanel</p>
					</NextLink>
				</NavbarBrand>
        <NavbarItem key="map-sources">
          <Tabs key="map-sources-tabs" size="md" onSelectionChange={(val) => setFilters({ ...filters, source: val }) }>
            <Tab key="official" title="Official Maps" />
            <Tab key="workshop" title="Workshop Maps" />
          </Tabs>
        </NavbarItem>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						startContent={<ConsoleIcon />}
						variant="flat"
					>
						RCON
					</Button>
				</NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem key="official-maps-menu-item">
            <Link color="foreground" href="#" size="lg">Official Maps</Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="workshop-maps-menu-item">
            <Link color="foreground" href="#" size="lg">Workshop Maps</Link>
          </NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
