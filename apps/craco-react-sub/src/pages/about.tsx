import { faker } from "@faker-js/faker";

const About = () => {
  const paragraphs = faker.lorem.paragraphs(5, "\n").split("\n");

  return (
    <div>
      <h1>About</h1>
      {paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default About;
