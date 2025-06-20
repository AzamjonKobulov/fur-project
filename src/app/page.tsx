import AboutCompany from "./components/pages/home/AboutCompany";
import AnswersToQuestions from "./components/pages/home/AnswersToQuestions";
import BuyInChina from "./components/pages/shared/BuyInChina";
import DeliveryClearance from "./components/pages/shared/DeliveryClearance";
import EvaluateBenefits from "./components/pages/shared/EvaluateBenefits";
import HomeHero from "./components/pages/home/HomeHero";
import InteriorDesign from "./components/pages/home/InteriorDesign";
import MebelTourIs from "./components/pages/home/MebelTourIs";
import MediaAboutUs from "./components/pages/home/MediaAboutUs";
import OurHappyClients from "./components/pages/home/OurHappyClients";
import OutArticles from "./components/pages/shared/OutArticles";
import QualityControl from "./components/pages/home/QualityControl";
import ShallWeGoOnTour from "./components/pages/shared/ShallWeGoOnTour";
import StagesOfWorkingWithUs from "./components/pages/shared/StagesOfWorkingWithUs";
import WantToGoTour from "./components/pages/home/WantToGoTour";
import WhoAreWe from "./components/pages/home/WhoAreWe";
import WorkingOptions from "./components/pages/shared/WorkingOptions";
import Regions from "./components/pages/shared/Regions";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BuyInChina />
      <AboutCompany />
      <StagesOfWorkingWithUs />
      <WorkingOptions />
      <EvaluateBenefits />
      <MebelTourIs />
      <QualityControl />
      <WhoAreWe />
      <DeliveryClearance />
      <WantToGoTour />
      <OutArticles title={"Наши статьи"} />
      <AnswersToQuestions />
      <InteriorDesign />
      <Regions />
      <OurHappyClients />
      <MediaAboutUs />
      <ShallWeGoOnTour />
    </>
  );
}
