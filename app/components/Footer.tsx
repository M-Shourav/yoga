import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container className="flex flex-col gap-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
          <div>
            <h1 className="text-xl text-gray-600 font-semibold">Yoga Style</h1>
          </div>
          <div>second text</div>
          <div>third text</div>
          <div>fourth text</div>
        </div>
        <div className="w-full text-center py-3">
          <p>AllRight reserve&copy;Masum Ahmed 2024</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
