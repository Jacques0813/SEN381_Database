import Message from "../components/general/Message";
import { GetUserMode } from "../functions/UserMode";

function Admin() {
  const isMobile = GetUserMode();

  if (isMobile) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE Admin page
        </h1>
        <h2>example</h2>
        <Message />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the DESKTOP Admin page
        </h1>
        <h2>example</h2>
        <Message />
      </div>
    );
  }
}

export default Admin;
