export function createTextElement(prefix, name, title, inputType = "text") {
  return {
    "type": "text",
    "name": `${prefix}_${name}`,
    "title": title,
    "inputType": inputType
  };
}
