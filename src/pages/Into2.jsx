import yourLogo from "../assets/into2.png";
import { IntroStepper } from "../components/IntroStepper";
const Into2 = () =>{
    
    // const navigate = useNavigate();

    // const handlePrevClick = () =>{
    //     navigate(-1)
    // }

    //  const handleNextClick = () =>{
    //     navigate('/Into3');
    // }
    return(
          <IntroStepper
              title={"Where Form Fresh Happiness Grows"}
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                      corporis fuga, mollitia cum ea expedita nesciunt quis nemo
                      dignissimos iure aut! Officiis libero aut sed veniam eveniet, ab
                      culpa eum!`}
              prevHref={"/"}
              nextHref={"/Into3"}
              yourLogo={yourLogo}
            />
    )
}

export default Into2;