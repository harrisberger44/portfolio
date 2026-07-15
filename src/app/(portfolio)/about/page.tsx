import ContentBlock from "@/components/ContentBlock";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">About</h1>
      </header>

      <ContentBlock
        text="I am a creative professional with a background spanning illustration, exhibition production, and gallery operations. I have experience managing projects from concept through execution within the contemporary art world. I am passionate about collaborating with multidisciplinary teams to bring ideas to life."
        imageSrc="/images/about page/DSCF0332.jpg"
        imageAlt="Harris Berger"
        imagePosition="below"
      />
    </div>
  );
}
