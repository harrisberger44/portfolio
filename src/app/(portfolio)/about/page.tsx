import ContentBlock from "@/components/ContentBlock";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">About</h1>
      </header>

      <ContentBlock
        text="Creative professional with a background spanning illustration, graphic design, exhibition production, and gallery operations. Experienced in managing projects from concept through execution within the contemporary art world. Seeking opportunities at the intersection of art, design, and other disciplines, where I can apply my skills in art direction, design, and creative production."
        imageSrc="/images/about page/DSCF0332.JPEG"
        imageAlt="Harris Berger"
        imagePosition="below"
      />
    </div>
  );
}
