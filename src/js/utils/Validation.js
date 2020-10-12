/**
 * NOTE: Check if the input form data is valid or not.
 * @param {Object} formData account form id
 * @return {Tuple} [isValid, errors]
 */
export const checkAccountForm = (formData) => {
  let isValid = false;
  let errors = [];

  let {
    firstName,
    lastName,
    password,
    confirmPassword,
    email,
    dateOfBirth,
  } = formData;

  // NOTE: Name validation
  if (!firstName) {
    errors.push({ firstName: "First name required." });
  }
  if (!lastName) {
    errors.push({ lastName: "Last name required." });
  }

  // NOTE: Email validation
  if (!email) {
    errors.push({ email: "Email required." });
  } else if (!validEmail(email)) {
    errors.push({ email: "Valid email required." });
  }

  // NOTE: Password validation
  if (!password) {
    errors.push({ password: "Password required." });
  }

  // NOTE: Date of birth validation
  if (!dateOfBirth) {
    errors.push({ dateOfBirth: "DateOfBirth required." });
  }

  if (errors.length === 0) isValid = true;

  return [isValid, errors];
};

export const validEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const checkGameForm = (formData) => {
  let isValid = false;
  let errors = [];

  let { gameName, ageRestriction, thumbnail } = formData;

  // NOTE: Game name validation
  if (!gameName) {
    errors.push({ gameName: "GameName required." });
  }

  // NOTE: Age restriction validation
  if (!ageRestriction) {
    errors.push({ ageRestriction: "Age restriction required." });
  }

  // NOTE: Thumbnail validation
  if (!thumbnail) {
    errors.push({ thumbnail: "Thumbnail required." });
  }

  if (errors.length === 0) isValid = true;

  return [isValid, errors];
};

export const getErrorMessage = (formId, errors) => {
  const item = errors
    .filter((e) => e.hasOwnProperty(formId))
    .filter((e) => e[formId]);

  if (item.length > 0) {
    return item[0][formId];
  } else {
    return "";
  }
};
