import ImageGallery from "@/components/ImageGallery";
import { getIllustrationGalleries } from "@/lib/illustration";

const ZINE_CANVA_EMBED =
  "https://www.canva.com/design/DAHPsHeBEi4/mrdQMX1wDB3EOsZ9hZ7vQw/view?embed";

export default function IllustrationPage() {
  const {
    digitalSeries,
    digitalPhotoFinal,
    analogSeries,
    studioPracticeSeries,
  } = getIllustrationGalleries();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">
          Illustration
        </h1>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">Digital</h2>
        <div className="flex flex-col gap-4">
          {digitalSeries.map((images, index) => (
            <ImageGallery
              key={images.join("|")}
              images={images}
              altPrefix={`Digital illustration series ${index + 1} by Harris Berger`}
            />
          ))}
          <ImageGallery
            images={digitalPhotoFinal}
            altPrefix="Digital photo final series by Harris Berger"
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">Analog</h2>
        <div className="relative w-full overflow-hidden bg-neutral-100 pt-[56.25%]">
          <iframe
            loading="lazy"
            src={ZINE_CANVA_EMBED}
            title="zine slide show"
            allow="fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="flex flex-col gap-4">
          {analogSeries.map((images, index) => (
            <ImageGallery
              key={images.join("|")}
              images={images}
              altPrefix={`Analog illustration series ${index + 1} by Harris Berger`}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">
          Studio Practice
        </h2>
        <div className="flex flex-col gap-4">
          {studioPracticeSeries.map((images, index) => (
            <ImageGallery
              key={images.join("|")}
              images={images}
              altPrefix={`Studio practice series ${index + 1} by Harris Berger`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
