import Section from "@/components/layout/Section";
import { FilterByType } from "@sanity/codegen";
import { MarketingPageSectionType } from "@/features/marketing/types";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import { OphelixShort } from "@/components/icons/OphelixLogo";
import Image from "next/image";

type ProductSpecificationSectionType = FilterByType<
  MarketingPageSectionType,
  "productSpecification"
>;

type ProductSpecificationSectionProps = {
  key: ProductSpecificationSectionType["_key"];
  title: ProductSpecificationSectionType["title"];
  text: ProductSpecificationSectionType["text"];
  specificationItems: ProductSpecificationSectionType["specificationItems"];
};

function ProductSpecificationSection({
  key,
  title,
  text,
  specificationItems,
}: ProductSpecificationSectionProps) {
  return (
    <Section key={key}>
      <Container>
        <Stack orientation="vertical" gap="lg">
          <Stack orientation={"vertical"} gap={"sm"} className="items-center">
            <OphelixShort className="h-12 w-16" />
            <h1 className="text-5xl">{title}</h1>
            <p className="">{text}</p>
          </Stack>
          <Stack orientation={"vertical"} gap={"sm"} className="w-full">
            {specificationItems &&
              specificationItems.map((item) => (
                <Stack key={item._key} orientation="horizontal" gap="lg" className="justify-around">
                  <Stack orientation="vertical" gap="md">
                    <h2 className="text-4xl">{item.title}</h2>
                    <p>{item.text}</p>
                  </Stack>
                  {item.image?.url && (
                    <Image
                      width={250}
                      height={250}
                      src={item.image.url}
                      alt={item.image.alt ?? ""}
                    />
                  )}
                </Stack>
              ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export default ProductSpecificationSection;
