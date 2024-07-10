import SectionWrapper from "./SectionWrapper.jsx";
import PropTypes from "prop-types";

export default function Generator() {
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "O'Clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your Poison"}
        description={"Select the workout you wish to endure."}
      />
    </SectionWrapper>
  );
}

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-3">
        <p className="text-3xl font-semibold text-slate-400 sm:text-4xl md:text-5xl">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="mx-auto text-sm sm:text-base">{description}</p>
    </div>
  );
}

Header.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
