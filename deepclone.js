const clone = (input) => {
    if (input === null || typeof input !== "object") {
        return input;
    }

    const initialValue = Array.isArray(input) ? [] : {};

    return Object.keys(input).reduce((acc, key) => {
        acc[key] = clone(input[key]);
        return acc;
    }, initialValue);
};

module.exports = clone;