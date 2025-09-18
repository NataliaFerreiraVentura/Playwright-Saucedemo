// support/dataGenerators.js
const { faker } = require('@faker-js/faker');

const generateRandomName = () => faker.person.fullName();
const generateRandomFirstName = () => faker.name.firstName();
const generateRandomSurname = () => faker.person.lastName();
const generateRandomLastName = () => faker.name.lastName();
const generateRandomEmail = () => faker.internet.email();
const generateRandomZipCode = () => faker.location.zipCode().replace('-', '');
const generateRandomPhone = () => faker.phone.phoneNumber('##########'); // 10 dígitos
const generateRandomPassword = () => faker.internet.password(8); // senha de 8 caracteres

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
