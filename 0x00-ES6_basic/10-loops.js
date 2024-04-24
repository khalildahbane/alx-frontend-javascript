export default function appendToEachArrayValue(array, appendString) {
    const newArray = array;
    for (const value of array) {
      const idx = array.ndexOf(value);
      newArray[idx] = appendString + value;
    }
  
    return array;
  }
