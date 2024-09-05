import Link from "next/link";
import Container from "./Container";
import Button from "./ui/Button";
import Title from "./ui/Title";

const Classes = () => {
  return (
    <Container className="grid gird-col-1 lg:grid-cols-3 gap-7">
      <div className="flex flex-col gap-y-5 items-start">
        <h3 className="text-4xl text-gray-900 font-titleFont">
          Many Styles Of Yoga To Suit Everyone
        </h3>
        <p>
          Yoga blends breath, movement, and meditation to promote relaxation,
          flexibility, and mental clarity. It is a path to balance and inner
          peace.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <Title className=" uppercase text-xl">Ansura</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
        <div>
          <Title className=" uppercase text-xl">Ashtanga</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
        <div>
          <Title className=" uppercase text-xl">Bikram</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
        <div>
          <Title className=" uppercase text-xl">Hatha</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <Title className=" uppercase text-xl">Hot Yoga</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
        <div>
          <Title className=" uppercase text-xl">Iyengar</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
        <div>
          <Title className=" uppercase text-xl">Restorative</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
        <div>
          <Title className=" uppercase text-xl">Vinyasa</Title>
          <p className="text-lg text-gray-500 tracking-wide font-titleFont">
            Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida
            eros.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Classes;
