// api.js
export const fetchAnimals = (type) => {
    const url = type === "missing" ? `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/disparition` : `https://kyumibdd.osc-fr1.scalingo.io/api/get/findings/adoption`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
