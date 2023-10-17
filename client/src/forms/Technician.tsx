import BlueButton from "../components/general/BlueButton";
import Message from "../components/general/Message";

import { GetUserMode } from "../functions/UserMode";

function Technician() {
  const isMobile = GetUserMode();

  function getTC() {
    fetch('http://localhost:3000/Api')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log(data); // Log the JSON response
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  if (isMobile) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE Technician Page
        </h1>
        <Message />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the DESKTOP Technician Page
        </h1>
        <BlueButton buttonText="test_DB" onClickFunction={getTC}/>
        <Message />
      </div>
    );
  }
}

export default Technician;
