import { getFlagsImagesList } from './flags';
import { getCountryName, getPrefix, getFlagsImages } from './prefixes';
import { isEmail, isPhoneNumber } from './validation';

const countryCodesList0 = [];
const countryCodesList1 = ['MX'];
const countryCodesList2 = ['ES', 'CL', 'PE', 'MX', 'CO'];
const countryCodesList3 = ['CL', 'PE'];


it('List of flags images (flags.js and prefixes.js utils files)', () => {
  const countryCodesObj0 = {};
  const countryCodesObj1 = {MX: 'MX.svg'};
  const countryCodesObj2 = {ES: 'ES.svg', CL: 'CL.svg', PE: 'PE.svg', MX: 'MX.svg', CO: 'CO.svg'};
  const countryCodesObj3 = {CL: 'CL.svg', PE: 'PE.svg'};

  const flagsImagesList0 = getFlagsImagesList(countryCodesList0);
  const flagsImagesList1 = getFlagsImagesList(countryCodesList1);
  const flagsImagesList2 = getFlagsImagesList(countryCodesList2);
  const flagsImagesList3 = getFlagsImagesList(countryCodesList3);
  expect(flagsImagesList0).toEqual(countryCodesObj0);
  expect(flagsImagesList1).toEqual(countryCodesObj1);
  expect(flagsImagesList2).toEqual(countryCodesObj2);
  expect(flagsImagesList3).toEqual(countryCodesObj3);

  const flagList0 = getFlagsImages(countryCodesList0);
  const flagList1 = getFlagsImages(countryCodesList1);
  const flagList2 = getFlagsImages(countryCodesList2);
  const flagList3 = getFlagsImages(countryCodesList3);
  expect(flagList0).toEqual(countryCodesObj0);
  expect(flagList1).toEqual(countryCodesObj1);
  expect(flagList2).toEqual(countryCodesObj2);
  expect(flagList3).toEqual(countryCodesObj3);
});

it('Telephone number prefix by country code', () => {
  const countryCode0 = "";
  const countryCode1 = "GA";
  const countryCode2 = "OM";
  const countryCode3 = "MX";
  const countryCode4 = "WRONGCODE";

  const prefix0 = getPrefix(countryCode0);
  const prefix1 = getPrefix(countryCode1);
  const prefix2 = getPrefix(countryCode2);
  const prefix3 = getPrefix(countryCode3);
  const prefix4 = getPrefix(countryCode4);
  expect(prefix0).toEqual(undefined);
  expect(prefix1).toEqual("241");
  expect(prefix2).toEqual("968");
  expect(prefix3).toEqual("52");
  expect(prefix4).toEqual(undefined);
});

it('Country name by country code', () => {
  const countryCode0 = "";
  const countryCode1 = "GA";
  const countryCode2 = "OM";
  const countryCode3 = "MX";
  const countryCode4 = "WRONGCODE";

  const name0 = getCountryName(countryCode0);
  const name1 = getCountryName(countryCode1);
  const name2 = getCountryName(countryCode2);
  const name3 = getCountryName(countryCode3);
  const name4 = getCountryName(countryCode4);
  expect(name0).toEqual(undefined);
  expect(name1).toEqual("Gabon");
  expect(name2).toEqual("Oman");
  expect(name3).toEqual("Mexico");
  expect(name4).toEqual(undefined);
});

it('Email validation', () => {
  const email0 = "";
  const email1 = "someemail@someserver.com";
  const email2 = "another-email@another-server.co.uk";
  const email3 = "_@_.com";
  const email4 = "_a@a.com";

  const check0 = isEmail(email0);
  const check1 = isEmail(email1);
  const check2 = isEmail(email2);
  const check3 = isEmail(email3);
  const check4 = isEmail(email4);
  expect(check0).toEqual(false);
  expect(check1).toEqual(true);
  expect(check2).toEqual(true);
  expect(check3).toEqual(false);
  expect(check4).toEqual(false);
});

it('Telephone number validation', () => {
  const number0 = "";
  const number1 = "(11) 11111-2222";
  const number2 = "+55112222255555";
  const number3 = "sdafsf343424234";
  const number4 = "12313213adasdasdasd";

  const check0 = isPhoneNumber(number0);
  const check1 = isPhoneNumber(number1);
  const check2 = isPhoneNumber(number2);
  const check3 = isPhoneNumber(number3);
  const check4 = isPhoneNumber(number4);
  expect(check0).toEqual(false);
  expect(check1).toEqual(true);
  expect(check2).toEqual(true);
  expect(check3).toEqual(false);
  expect(check4).toEqual(false);
});