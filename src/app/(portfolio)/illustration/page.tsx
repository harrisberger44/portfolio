import ContentBlock from "@/components/ContentBlock";

export default function IllustrationPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">
          Illustration
        </h1>
      </header>

      <ContentBlock
        text="A curated selection of illustration work — editorial, publishing, packaging, and more."
      />

      <ContentBlock
        title="Editorial"
        text="Editorial illustration samples with short captions or publication credits."
      />

      <ContentBlock
        title="Publishing"
        text="Book covers, interior art, and other publishing-related illustration."
        imagePosition="above"
      />
    </div>
  );
}
