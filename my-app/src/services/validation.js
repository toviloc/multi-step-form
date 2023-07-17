const capitalizeBySentence = str => {
  const sentences = str.split(". ");

  const revArray = sentences.map(sentence => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });

  return revArray.join(". ");
};

const buildMessagesByFieldsFromJoiReports = joiReports => {
  const messagesByFields = {};

  joiReports.forEach(({ context, path, message }) => {
    if (path.length > 1) {
      const topLevel = path[0];
      if (!messagesByFields[topLevel]) {
        messagesByFields[topLevel] = {};
      }
      messagesByFields[topLevel][path[1]] = capitalizeBySentence(message);
    } else {
      messagesByFields[context.key] = capitalizeBySentence(message);
    }
  });

  return messagesByFields;
};

export default ({ form, schema }) => {

  const { error } = schema.validate(form, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (!error) {
    return {};
  }

	console.log({error})

  return buildMessagesByFieldsFromJoiReports(error.details);
};
