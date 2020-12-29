import axios from "axios";

const postProperty = (data, alertFunction) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", data)
    .then((response) => {
      alertFunction({
        message: "Your submission has been sent",
        isSuccess: true,
      });
      return response;
    })
    .catch((error) => {
      alertFunction({
        message: "There was an error sending your request",
      });
      console.log(error);
    });
};

export default postProperty;
