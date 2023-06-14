// Object - Address

let currentAddress = createAddress("palma", "Madrid", "28015");
const anotherAddress = new CreateAddress("cuba", "Valencia", "46006");

console.log(currentAddress);
console.log(anotherAddress);

function createAddress(street, city, zipcode) {
  return {
    street: street,
    city: city,
    zipcode: zipcode,
  };
}

function CreateAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}
