import ContentBlock from "@/components/ContentBlock";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">About</h1>
      </header>

      <ContentBlock
        text="Hello, I'm Harris! I am an illustrator, art director, and registrar based in Brooklyn, New York."
        imageSrc="/images/about page/DSCF0332.jpg"
        imageAlt="Harris Berger"
        imagePosition="above"
      />
    </div>
  );
}
