import Container from "./Container";
import UsersSlider from "./UsersSlider";

const UsersSection = () => {
  return (
    <Container Element="section">
      <div className="flex flex-col items-center justify-center py-11 text-center md:py-24">
        <h1 className="mb-6 text-xl font-medium text-neutral-2 md:mb-10 md:text-4xl md:font-bold">
          More than 200 <span className="text-primary">Users</span> make use of
          our Boilerplate
        </h1>
        <div className="w-full">
          <UsersSlider />
        </div>
      </div>
    </Container>
  );
};

export default UsersSection;
