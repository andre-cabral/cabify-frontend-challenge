//JSONs with countries data from http://country.io/data/

//svg flags from the repository recommended on the readme file 
//https://github.com/madebybowtie/FlagKit

import _ from 'lodash';
import countryNames from './countryNames.json';
import prefixes from './prefixes.json';
import { getFlagsImagesList } from '../utils/flags'

export function getFlagsImages(codeList) {
  return getFlagsImagesList(codeList);
};

function importAll(r) {
  return r.keys().map(r);
}

export function getCountryName(code) {
  return _.get(countryNames, code);
}

export function getPrefix(code) {
  return _.get(prefixes, code);
}