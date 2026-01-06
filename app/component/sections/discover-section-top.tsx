const DiscoverSectionTop = () => {
  return (
    <div className="mx-auto max-w-7xl wrapper pt-27 pb-18">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
        {/* LEFT CONTENT */}
        <h3 className="font-serif text-4xl leading-tight text-white lg:col-span-3 lg:text-[50px]">
          Discover A Mesmerizing <br />
          Nature Landscape & <br />
          Stunning Culture
        </h3>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 lg:ml-auto max-w-xl">
          <p className="leading-relaxed text-white/70">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold tracking-wide text-black transition hover:bg-gray-200">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSectionTop;
