import Message from "../components/general/Message";
import { GetUserMode } from "../functions/UserMode";
import Navbar from "../components/general/Navbar";
import Headings from "../components/general/Headings";

function Client() {
  const isMobile = GetUserMode();

  if (isMobile) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE Client page
        </h1>
        <Message />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar/>
        <h1 className="text-3xl font-bold underline">
          This is the DESKTOP Client page
        </h1>
        <Message />
      </div>
    );
  }
}

export default Client;
