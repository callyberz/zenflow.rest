export function HeroSection() {
  return (
    <section className="w-full  py-6 md:py-12 lg:py-16 xl:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              zenflow.rest
            </h1>
            <p className="mx-auto max-w-[700px] text-black md:text-xl">
              Anything we can help you with?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
