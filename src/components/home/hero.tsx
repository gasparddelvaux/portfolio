"use client";
import { Code } from "@/types/ui";
import {
  IconAddressBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconSparkles,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";
import CodeBlock from "./code";

const code: Code = {
  variableName: "gaspard",
  type: "Developer",
  content: {
    name: "Gaspard Delvaux",
    city: "Namur",
    skills: [
      "React",
      "NextJS",
      "AngularJS",
      "Tailwind CSS",
      "Bootstrap",
      "Laravel",
      "AdonisJS",
      "MySQL",
      "MongoDB",
    ],
    isAvailable: true,
    education: {
      selfTaughtYears: 9,
      officialTraining: "IFAPME - Web Developer",
      averageGrade: 94.15,
    },
    passions: {
      themeParkEnthusiast: true,
      animals: true,
      coffeeAddict: false,
    },
  },
};

type Socials = {
  icon: JSX.Element;
  href: string;
  name: string;
};

const socials: Socials[] = [
  {
    icon: <IconBrandGithub size={24} />,
    href: "https://github.com/gasparddelvaux/",
    name: "GitHub",
  },
  {
    icon: <IconBrandLinkedin size={24} />,
    href: "https://www.linkedin.com/in/gaspard-delvaux-b178aa2a4/",
    name: "LinkedIn",
  },
  {
    icon: <IconBrandX size={24} />,
    href: "https://x.com/gaspard_dlx",
    name: "X (Twitter)",
  },
];

export default function Hero() {
  function scrollToSection(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="container px-12 mx-auto mt-48" id="hero">
      <div className="grid xl:grid-cols-2 gap-24">
        <div className="flex flex-col gap-8 h-full justify-center">
          <h2 className="text-5xl font-bold leading-[3.5rem]">
            Hey !<br /> Je m'apelle{" "}
            <span className="bg-gradient-to-tr from-violet-500 to-rose-500 inline-block text-transparent bg-clip-text">
              Gaspard
            </span>
            , et je suis un développeur{" "}
            <span className="bg-gradient-to-tr from-violet-500 to-rose-500 inline-block text-transparent bg-clip-text">
              full-stack
            </span>
            .
          </h2>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <Button asChild key={index} variant="ghost">
                <Link href={social.href} className="flex items-center gap-1">
                  {social.icon} {social.name}
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              className="flex items-center gap-1"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <IconAddressBook size={24} /> Me contacter
            </Button>
            <Button
              className="flex items-center gap-1"
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("skills")}
            >
              <IconSparkles size={24} /> Mes compétences
            </Button>
          </div>
        </div>
        <CodeBlock code={code} animated />
      </div>
    </section>
  );
}
