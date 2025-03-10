import SectionContainer from "../../layout/SectionContainer";
import PricingCard from "./components/PricingCard";
import { plans } from "./pricing";

export const Princing = () => {
  return (
    <SectionContainer
      title="Conoce los planes que tenemos para ti"
      description="Empieza ya y decide el plan que mejor le convenga a tu negocio"
    >
      <div className="flex flex-wrap justify-center gap-12">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            featudata={plan.featudata}
            isPopular={plan.isPopular}
            price={plan.price}
            title={plan.title}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
