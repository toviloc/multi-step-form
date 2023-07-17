import Joi from "@hapi/joi";
import { isEmpty, isObject } from "lodash";
import { parsePhoneNumber } from "libphonenumber-js";


const emailRegex = /^.*@.*\.((?![0-9]).)*$/i;
const phoneNumberJoi = Joi.extend(joi => {
  return {
    type: "phoneNumber",
    base: joi.string(),
    messages: {
      "phoneNumber.base": "Please enter a valid phone number",
      "string.max": "Phone number must be less than 20 characters"
    },
    validate(value, helpers) {
      let number;
      try {
        number = parsePhoneNumber(value, "VN").formatInternational();
      } catch (e) {
        return { value, errors: helpers.error("phoneNumber.base") };
      }

      if (!parsePhoneNumber(number).isValid()) {
        return { value, errors: helpers.error("phoneNumber.base") };
      }

      // Tests user isn't putting letters with numbers
      if (!/^[0-9 +]+$/.test(value)) {
        return { value, errors: helpers.error("phoneNumber.base") };
      }

      return { value };
    }
  };
});

const getCustomMessages = (field) => {
  const messages = {
		"string.pattern.base": `Please enter ${field
      .toLowerCase()
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase()} in correct format`,
		"any.required": "This field is required",
		"string.empty": "This field is required"
	}
  return messages;
};

export const formSchema = Joi.object({
  name: Joi.string().required().messages(getCustomMessages("Name")),
  email: Joi.string()
    .email({
      tlds: { allow: false },
    })
    .pattern(emailRegex)
    .max(254)
    .required()
		.messages(getCustomMessages("Email")),
  phone: phoneNumberJoi.phoneNumber().max(20).required().messages(getCustomMessages("Phone number"))
});

export const disableFormButton = (errors = {}) => {
  return Object.values(errors).some(val =>
    isObject(val)
      ? Object.values(val).some(value => !isEmpty(value))
      : !isEmpty(val)
  );
};
