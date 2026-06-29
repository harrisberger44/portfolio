import ContentBlock from "@/components/ContentBlock";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">About</h1>
      </header>

      <ContentBlock
        text="Introductory text about the illustrator will go here. Share background, practice, and what drives the work."
      />

      <ContentBlock
        title="Biography"
        text="A longer biography section with education, exhibitions, clients, and other relevant details."
        imagePosition="above"
      />
    </div>
  );
}
