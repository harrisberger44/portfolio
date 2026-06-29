import ContentBlock from "@/components/ContentBlock";

export default function WorkPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">Work</h1>
      </header>

      <ContentBlock
        text="Selected commissions and client work will be presented here with accompanying images and brief descriptions."
      />

      <ContentBlock
        title="Project One"
        text="Description of a selected project — client, medium, year, and context."
      />

      <ContentBlock
        title="Project Two"
        text="Description of another selected project — client, medium, year, and context."
      />
    </div>
  );
}
