import LinkButton from "./LinkButton";

export const IntroStepper = ({
  title,
  description,
  prevHref,
  nextHref,
  yourLogo
}) => {
  return (
    <div
      className="h-screen w-screen justify-center items-end flex bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${  yourLogo})` }}
    >
      <div className="bg-white flex-1 max-w-md lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl p-4 lg:p-12 rounded-t-lg ">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 ">
            {title}
          </h1>
          <p className="text-gray-600 text-xs md:text-sm mt-4 lg:mt-8">
            {description}
          </p>
        </div>
        <div className="flex justify-center my-4">
          <div className="h-2 w-2 rounded-full bg-[#6CC51D] mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
        </div>

        <div className="flex space-x-4 justify-between items-center mt-8 lg:mt-32">
          <LinkButton href={prevHref}>Previous</LinkButton>
          <LinkButton href={nextHref}>Next</LinkButton>
        </div>
      </div>
    </div>
  );
};
