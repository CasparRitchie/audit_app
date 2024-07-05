import red from './images/red.png';
import amber from './images/amber.png';
import green from './images/green.png';

const rateValues = [
  { "value": 1, "text": "Red", "imageLink": red },
  { "value": 2, "text": "Orange", "imageLink": amber },
  { "value": 3, "text": "Green", "imageLink": green }
];
const imageSize = 25;

export function createImagePicker(name, title = " ") {
  return {
    "type": "imagepicker",
    "name": name,
    "title": title,
    "imageWidth": imageSize,
    "imageHeight": imageSize,
    "choices": rateValues.map(rate => ({
      "value": rate.value,
      "imageLink": rate.imageLink
    }))
  };
}
