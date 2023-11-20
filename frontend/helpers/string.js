export const allowSoftHyphens = (value) => {
  if (!value) {
    return "";
  }
  return value
    .replace(
      // normal soft hyphens
      /&shy;/g,
      "\u00AD"
    )
    .replace(
      // when added in RichText
      /&amp;shy;/g,
      "\u00AD"
    );
};

export const stripTagFromHtml = (tagName, html) => {
  if (!html) {
    return "";
  }
  return html.replace(`<${tagName}>`, "").replace(`</${tagName}>`, "");
};

export const validateEmail = (email) => {
  let regex = new RegExp("[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}");
  return regex.test(email);
};

export const validateUpperCase = (password) => {
  let regex = new RegExp(".[A-Z]");
  return regex.test(password);
};

export const validateLowerCase = (password) => {
  let regex = new RegExp(".[a-z]");
  return regex.test(password);
};

export const validateHasNumber = (password) => {
  let regex = new RegExp("d");
  return regex.test(password);
};

export const validatePasswordLength = (password) => {
  return password.length > 8;
};
