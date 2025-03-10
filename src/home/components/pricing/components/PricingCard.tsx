import CheckIcon from "./../icons/CheckIcon";
import { Button } from "@heroui/button";

interface PricingCardProps {
  title: string;
  price: number;
  featudata: string[];
  isPopular?: boolean;
}

export default function PricingCard({
  title,
  price,
  featudata,
  isPopular,
}: PricingCardProps) {
  return (
    <article
      className={`w-[300px] md:w-[360px] lg:w-[310px] border-3 grid ${
        isPopular ? "border-blue-600" : "border-gray-400"
      } shadow-[-2px_10px_27px_12px_rgba(0,_0,_0,_0.2)] rounded-xl`}
    >
      {isPopular && (
        <span className="py-1 w-28 text-xl text-center text-white bg-blue-600 rounded-bl-xl ml-auto">
          Popular
        </span>
      )}
      <header
        className={`px-4 ${
          isPopular ? "pt-2" : "pt-6"
        } pb-4 border-b-2 space-y-2 border-gray-400`}
      >
        <h6 className="text-gray-400 text-xl uppercase">{title}</h6>
        <h6 className="flex items-center font-bold text-5xl">
          ${price}
          <span className="text-medium text-gray-400">/mensual</span>
        </h6>
      </header>
      <blockquote className="px-4 py-4 grid">
        <ul className="py-4 px-2 space-y-4">
          {featudata.map((feature, i) => (
            <li className="flex gap-2" key={i}>
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant={isPopular ? "shadow" : "ghost"}
          color="primary"
          className="mx-auto  w-2/3"
        >
          Obtener Ahora
        </Button>
      </blockquote>
    </article>
  );
}
