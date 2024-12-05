import React from "react";
import ServiceHero from "../components/pages/service/ServiceHero";
import ToursInNumbers from "../components/pages/service/ToursInNumbers";
import LetsGoOnTour from "../components/pages/service/LetsGoOnTour";
import BuyInChina from "../components/pages/shared/BuyInChina";
import EvaluateBenefits from "../components/pages/shared/EvaluateBenefits";
import ReqFullCatalog from "../components/pages/service/ReqFullCatalog";
import WhoAreWeFoshan from "../components/pages/service/WhoAreWeFoshan";
import StagesOfWorkingWithUs from "../components/pages/shared/StagesOfWorkingWithUs";
import WorkingOptions from "../components/pages/shared/WorkingOptions";
import DeliveryClearance from "../components/pages/shared/DeliveryClearance";
import ShallWeGoOnTour from "../components/pages/shared/ShallWeGoOnTour";
import VideoShops from "../components/pages/service/VideoShops";
import AboutCompanyService from "../components/pages/service/AboutCompanyService";

export default function page() {
  return (
    <>
      <ServiceHero />
      <VideoShops />
      <ToursInNumbers />
      <LetsGoOnTour />
      <BuyInChina />
      <EvaluateBenefits />
      <ReqFullCatalog />
      <AboutCompanyService />
      <WhoAreWeFoshan />
      <WorkingOptions />
      <StagesOfWorkingWithUs />
      <DeliveryClearance />
      <ShallWeGoOnTour />
    </>
  );
}
