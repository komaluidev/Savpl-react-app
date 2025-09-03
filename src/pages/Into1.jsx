import yourLogo from "../assets/into1.png";
import { IntroStepper } from "../components/IntroStepper";
const Into1 = () => {
  return (
    <IntroStepper
      title={"From Our Fields to Your Table"}
      description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              corporis fuga, mollitia cum ea expedita nesciunt quis nemo
              dignissimos iure aut! Officiis libero aut sed veniam eveniet, ab
              culpa eum!`}
      prevHref={"/"}
      nextHref={"/Into2"}
      yourLogo={yourLogo}
    />
  );
};

export default Into1;
