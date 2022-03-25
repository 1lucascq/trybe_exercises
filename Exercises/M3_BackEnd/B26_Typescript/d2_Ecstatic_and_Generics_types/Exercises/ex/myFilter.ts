type MyFilterCallback<T> = (
  item: T,
  index?: number,
  array?: Array<T>
) => boolean;

function myFilter<T>(
  array: Array<T>,
  callback: MyFilterCallback<T>
): Array<T> {
  
  const newArray: Array<T> = [];

  for (let i: number = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i])
    }
  }
  return newArray;
}
