import ContentBlock from "@/components/ContentBlock";

export default function SpecialProjectsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">
          Special Projects
        </h1>
      </header>

      <ContentBlock
        text="Self-initiated and experimental work lives here — personal series, collaborations, and one-off explorations."
      />

      <ContentBlock
        title="Series Title"
        text="Overview of a special project or series, including themes, process, and outcomes."
        imagePosition="above"
      />
    </div>
  );
}
