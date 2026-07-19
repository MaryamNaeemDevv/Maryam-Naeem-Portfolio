type HeroPhotoSlotProps = {
  src?: string;
  alt?: string;
};

export function HeroPhotoSlot({
  src = "/images/my_pic.png",
  alt = "Maryam portrait",
}: HeroPhotoSlotProps) {
  return (
    <div className="hero-photo-slot relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -right-3 top-8 h-[50%] w-[50%] rotate-12 rounded-5xl bg-burgundy/25"
      />

      <div className="hero-photo-animation relative z-10">
        <div className="hero-photo-frame overflow-hidden rounded-5xl border border-white/10 bg-black/40">
          <div className="aspect-[4/5] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
