// support/dataGenerators.js

let faker;
async function getFaker() {
  if (!faker) {
    faker = (await import('@faker-js/faker')).faker;
  }
  return faker;
}


const generateRandomName = async () => (await getFaker()).person.fullName();
const generateRandomFirstName = async () => (await getFaker()).name.firstName();
const generateRandomSurname = async () => (await getFaker()).person.lastName();
const generateRandomLastName = async () => (await getFaker()).name.lastName();
const generateRandomEmail = async () => (await getFaker()).internet.email();
const generateRandomZipCode = async () => (await getFaker()).location.zipCode().replace('-', '');
const generateRandomPhone = async () => (await getFaker()).phone.phoneNumber('##########'); // 10 dígitos
const generateRandomPassword = async () => (await getFaker()).internet.password(8); // senha de 8 caracteres


module.exports = {
  generateRandomName,
  generateRandomFirstName,
  generateRandomSurname,
  generateRandomLastName,
  generateRandomEmail,
  generateRandomZipCode,
  generateRandomPhone,
  generateRandomPassword,
};
