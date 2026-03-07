import React from "react";
import Image from "next/image";
import Link from "next/link";

import { OphelixShort } from "@/components/icons/OphelixLogo";
import RoundedButton from "@/components/buttons/RoundedButton";
import Container from "@/components/layout/Container";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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
      <ul className="flex items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
          <li key={social.name}>
            <Link
              href={social.href}
              aria-label={social.name}
              className="inline-flex items-center justify-center"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
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
      <Field orientation="horizontal">
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
    <div className="flex w-full flex-row justify-between">
      <p>© 2025. Ophelix. All rights reserved.</p>
      <div className="flex gap-4">
        {FOOTER_CONTENT.links.map((link) => (
          <Link href={link.href} key={link.title} className="underline">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="flex flex-col items-center justify-center gap-6 py-12 text-center">
        <OphelixShort className="md:h-10" />

        <div className="flex flex-col items-center gap-4">
          <p className="text-background">
            Join our newsletter to stay up to date on future releases.
          </p>
          <NewsletterForm />
        </div>

        <SocialLinks />

        <div className="flex flex-col items-center gap-4">
          <FooterSection title="Address">
            <address className="not-italic">
              Level 12, 447 Collins Street, Melbourne VIC 3000
            </address>
          </FooterSection>

          <FooterSection title="Contact">
            <div className="flex flex-col items-center gap-1">
              {FOOTER_CONTENT.contact_links.map((item) => (
                <Link key={item.href} href={item.href} className="underline">
                  {item.label}
                </Link>
              ))}
            </div>
          </FooterSection>
        </div>
        <Separator />
        <FooterLinks />
      </Container>
    </footer>
  );
}

export default Footer;
