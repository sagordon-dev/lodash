const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start = 0, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let tmp = end;
      end = start;
      start = tmp;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },

  words(string) {
    return string.split(" ");
  },

  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key) {
    if (key in object) {
      return true;
    } else {
      return false;
    }
  },

  invert(object) {
    invertedObject = {};
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const originalValue = object[key];
        invertedObject[originalValue] = key;
      }
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue === true) {
          return key;
        }
      }
    }
    return undefined;
  },

  drop(array, number) {
    if (number === undefined) {
      number = 1;
    }
    arrayCopy = array.slice(number);
    return arrayCopy;
  },

  dropWhile(array, predicate) {
    const callBack = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(callBack);
    droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size = 1) {
    let arrayChunks = [];
    for (let index = 0; index < array.length; index += size) {
      let arrayChunk = array.slice(index, index + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
