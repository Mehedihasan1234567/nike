import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className=" text-coral-red"> Specail </span>
          Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Ensuring premiun comfort and style, our meticulously comforted
          footwear is designed to elevate your exprerince,providing you with
          unmached quality,innovation, and a touch of elegance
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">
          {" "}
          Our dedication to detail and excelance ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
