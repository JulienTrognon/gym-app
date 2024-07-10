export default function Hero() {
  return (
    <div className="flex min-h-screen max-w-[800] flex-col items-center justify-center gap-10 text-center">
      <div className="flex flex-col gap-4">
        <p className="uppercase">Become more Chad than a greek statue</p>
        <h1 className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          Gym<span className="text-yellow-400">eact</span>
        </h1>
      </div>
      <p className="text-sm font-light md:text-base">
        Become the strongest you&apos;ve ever been. Unleash your{" "}
        <span className="font-medium text-yellow-400">inner gorilla</span>.
        Squat more, deadlift more, bench more. Lift heavy and feel{" "}
        <span className="font-medium text-yellow-400">
          the rush of adrenaline
        </span>{" "}
        as your muscles grow stronger.
      </p>
      <button className="blueShadow rounded-md border-[2px] border-solid border-yellow-400 bg-slate-950 px-8 py-4">
        Accpet & Begin
      </button>
    </div>
  );
}
