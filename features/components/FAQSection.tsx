import React from "react";
import { FilterByType, Get } from "@sanity/codegen";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import { MarketingPageSectionType } from "@/features/marketing/types";
import { OphelixShort } from "@/components/icons/OphelixLogo";
import RichText from "@/features/components/RichText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-library/accordion";
import RoundedButton from "@/components/buttons/RoundedButton";


type FAQSectionType = FilterByType<MarketingPageSectionType, "faqSection">
type FAQSectionProps = {
  title: FAQSectionType["title"];
  text: FAQSectionType["text"];
  navigation: FAQSectionType["navigation"];
  faqItems: FAQSectionType["faqItems"];
}

type FAQItem= Get<FAQSectionProps["faqItems"], number>;
type FAQItemProps = {
  key: FAQItem["_key"];
  itemKey: FAQItem["_key"];
  question: FAQItem["question"];
  answer: FAQItem["answer"];
}

function FAQItem({itemKey,question, answer}: FAQItemProps){
  return (
    <AccordionItem value={itemKey}>
      <AccordionTrigger className="font-semibold">{question}</AccordionTrigger>
      <AccordionContent>
        {answer.richText && <RichText richTextContent={answer.richText} />}
      </AccordionContent>
    </AccordionItem>
  );
}

function FAQSection({title, text, faqItems, navigation}: FAQSectionProps) {
  return (
    <Section as="section">
      <Container>
        <Stack orientation="vertical" gap="lg" className="justify-center items-center">
          <Stack orientation="vertical" gap="md" className="justify-center items-center">
            <OphelixShort className="h-12 w-16" />
            <h2 className="font-display text-5xl">{title}</h2>
            <p>{text}</p>
            {navigation && <RoundedButton variant="outline" intent="background">{navigation.title}</RoundedButton>}
          </Stack>
          <Accordion type="single" collapsible className="w-full">
            {faqItems &&
              faqItems.length > 0 &&
              faqItems.map((item) => (
                <FAQItem
                  key={item._key}
                  itemKey={item._key}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
          </Accordion>
        </Stack>
      </Container>
    </Section>
  );
};

export default FAQSection;