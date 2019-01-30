export function isEmail(email) {
  if( email.match(/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/) ){
    return true;
  }
  return false;
};

export function isPhoneNumber(phoneNumber) {
  if( phoneNumber.match(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]+$/) ){
    return true;
  };
  return false;
};