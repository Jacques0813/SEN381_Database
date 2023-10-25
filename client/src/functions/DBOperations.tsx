function getTC() {
  fetch("http://localhost:3000/DB/AllTS")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log(data); // Log the JSON response
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

export default getTC;
