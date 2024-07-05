import red from './images/red.png'
import amber from './images/amber.png'
import green from './images/green.png'

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const image_size = 50;

export function createImagePickerElement(prefix, name, title) {
  return {
    "type": "imagepicker",
    "name": `${prefix}_${name}`,
    "title": title,
    "imageWidth": image_size,
    "imageHeight": image_size,
    "choices": rateValues.map(rate => ({
      "value": rate.value,
      "imageLink": rate.imageLink
    }))
  };
}

export function createRatingElement(prefix, name, title) {
  return {
    "type": "rating",
    "name": `${prefix}_${name}`,
    "title": title,
    "rateType": "smileys",
    "scaleColorMode": "colored",
    "rateValues": rateValues.map(rate => ({
      "value": rate.value,
      "text": rate.text
    }))
  };
}
