const URL = "https://randomuser.me/api/?gender=female";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    name: `${first} ${last}`,
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
  };
};

export default getUser;
