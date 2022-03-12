import { faker } from "@faker-js/faker";

const Contact = () => {
  const userCard = faker.helpers.userCard();

  return (
    <div>
      <h1>Contact</h1>
      <pre>
        <code>{JSON.stringify(userCard, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Contact;
