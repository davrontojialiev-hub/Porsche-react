import CarText from "./CarText";
import CarImage from "./CarImage";

const Car = () => {
  return (
    <section className="car">
      <div className="container car__wrap">
        <CarText />
        <CarImage />
      </div>
    </section>
  );
};

export default Car;