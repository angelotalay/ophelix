import React from "react";
import Image from "next/image";
import Link from "next/link";

import RoundedButton from "@/components/buttons/RoundedButton";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { OphelixShort } from "@/components/icons/OphelixLogo";

import Instagram from "@/assets/instagram_white_glyph.svg";
import X from "@/assets/x.svg";
import FOOTER_CONTENT from "@/components/footer/footer.copy";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <Image
        src="/images/facebook.png"
        alt="Facebook logo"
        width={26}
        height={26}
      />
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: <X className="h-5 w-5 md:h-6 md:w-6" />,
  },
] as const;

function SocialLinks() {
  return (
    <nav aria-label="Social media">
      <Stack className="flex flex-row items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
          <Link
            href={social.href}
            aria-label={social.name}
            className="inline-flex items-center justify-center"
            key={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </Stack>
    </nav>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-1 text-center">
      <h6 className="font-semibold">{title}</h6>
      {children}
    </section>
  );
}

function NewsletterForm() {
  return (
    <div className="w-full max-w-xl">
      <Field orientation="horizontal" className="flex flex-row gap-4">
        <Input type="email" placeholder="Enter your email" />
        <RoundedButton intent="background" size="lg" variant="outline">
          Subscribe
        </RoundedButton>
      </Field>
    </div>
  );
}

function FooterLinks() {
  return (
    <Stack className="justify-between" orientation="horizontal">
      <p>© 2025. Ophelix. All rights reserved.</p>
      <div className="flex gap-4">
        {FOOTER_CONTENT.links.map((link) => (
          <Link href={link.href} key={link.title} className="underline">
            {link.title}
          </Link>
        ))}
      </div>
    </Stack>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-20 text-primary-foreground">
      <Container>
        <Stack className="items-center justify-center text-center">
          <OphelixShort className="md:h-10" />
          <Stack className="items-center" gap="sm">
            <p className="text-background">
              Join our newsletter to stay up to date on future releases.
            </p>
            <NewsletterForm />
          </Stack>
          <SocialLinks />
          <Stack className="items-center">
            <FooterSection title="Address">
              <address className="not-italic">
                Level 12, 447 Collins Street, Melbourne VIC 3000
              </address>
            </FooterSection>

            <FooterSection title="Contact">
              <Stack className="items-center" gap="xs">
                {FOOTER_CONTENT.contact_links.map((item) => (
                  <Link key={item.href} href={item.href} className="underline">
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FooterSection>
          </Stack>
          <Separator />
          <FooterLinks />
        </Stack>
      </Container>
    </footer>
  );
}

export default Footer;
