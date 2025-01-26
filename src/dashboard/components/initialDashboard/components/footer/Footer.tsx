import { FooterSupport } from "./FooterSupport";
import { FooterTerms } from "./FooterTerms";

export const Footer = () => {
  return (
    <footer className="px-5 py-2 w-2/3 bg-gray-500 flex justify-between rounded-lg mx-auto mt-5">
      <FooterSupport />
      <FooterTerms />
    </footer>
  );
};
