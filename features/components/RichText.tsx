import React from "react";
import { PortableText, PortableTextComponents } from "next-sanity";
import { RichText as RichTextType } from "@/sanity/types";

const customComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-7 text-foreground">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="font-display text-4xl leading-tight font-semibold text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl leading-tight font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl leading-snug font-semibold text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-xl leading-snug font-semibold text-foreground">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-display text-lg leading-snug font-semibold text-foreground">
        {children}
      </h5>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-6 text-foreground">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 text-foreground">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold ">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => (
      <code className="rounded  px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href;
      const isExternal = href?.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-medium underline underline-offset-4 hover:no-underline"
        >
          {children}
        </a>
      );
    },
  },
};

type RichTextProps = NonNullable<RichTextType["richText"]>;

function RichText({ richTextContent }: { richTextContent: RichTextProps }) {
  return (
    <div className="space-y-4">
      <PortableText value={richTextContent} components={customComponents} />
    </div>
  );
}

export default RichText;
