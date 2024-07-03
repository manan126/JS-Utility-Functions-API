const flatten = (arr) => {
    const result = arr.reduce((acc, item) => {

      if (Array.isArray(item)) {
        const flattenSubArray = flatten(item);
        acc = acc.concat(flattenSubArray);
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    return result; 
  };
  
  module.exports = flatten; 