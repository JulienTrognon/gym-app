import PropTypes from "prop-types";

export default function SectionWrapper({ children, header, title }) {
  return (
    <section className="flex min-h-screen flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-2 bg-slate-950 py-10">
        <p className="font-medium uppercase">{header}</p>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]}{" "}
          <span className="uppercase text-yellow-400">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="mx-auto flex max-w-[800px] flex-col gap-10">
        {children}
      </div>
    </section>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
};
