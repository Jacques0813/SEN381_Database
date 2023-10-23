import Message from "../components/general/Message";
import { GetUserMode } from "../functions/UserMode";
import Navbar from "../components/general/Navbar";
import { useState } from "react";
import TableComponent from "../components/general/TableComponent";
import DataJson from "../testing/JSONdata.json";
import BlueButton from "../components/general/BlueButton";
import BackgroundImage from "../assets/BGPic.jpg";

function Client() {
  const divStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const isMobile = GetUserMode();

  const [isHome, setHome] = useState(true);
  const [isHelp, setHelp] = useState(false);
  const [isAccount, setAccount] = useState(false);
  const [isServices, setServices] = useState(false);
  const [isContracts, setContracts] = useState(false);
  const [isMakeCall, setMakeCall] = useState(false);
  const [isAbout, setAbout] = useState(false);

  function toggleHome() {
    setHome(true);
    setAbout(false);
    setHelp(false);
    setAccount(false);
    setServices(false);
    setContracts(false);
    setMakeCall(false);
  }

  function toggleAbout() {
    setAbout(true);
    setHome(false);
    setHelp(false);
    setAccount(false);
    setServices(false);
    setContracts(false);
    setMakeCall(false);
  }

  function toggleHelp() {
    setHelp(true);
    setHome(false);
    setAbout(false);
    setAccount(false);
    setServices(false);
    setContracts(false);
    setMakeCall(false);
  }

  function toggleAccount() {
    setAccount(true);
    setHome(false);
    setAbout(false);
    setHelp(false);
    setServices(false);
    setContracts(false);
    setMakeCall(false);
  }

  function toggleServices() {
    setServices(true);
    setHome(false);
    setAbout(false);
    setHelp(false);
    setAccount(false);
    setContracts(false);
    setMakeCall(false);
  }

  function toggleContracts() {
    setContracts(true);
    setHome(false);
    setAbout(false);
    setHelp(false);
    setAccount(false);
    setServices(false);
    setMakeCall(false);
  }

  function toggleCall() {
    setMakeCall(true);
    setHome(false);
    setAbout(false);
    setHelp(false);
    setAccount(false);
    setServices(false);
    setContracts(false);
  }

  function testingClick() {}

  if (isMobile) {
    return (
      <div style={divStyle}>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE Client page
        </h1>
        <Message />
      </div>
    );
  } else {
    if (isHome) {
      return (
        <div className="bg-black w-full h-screen">
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <div className="bg-white m-4 p-20 rounded">
            <h1 className="text-2xl font-bold text-center text-black">
              Welcome To
            </h1>
            <h2 className="text-5xl font-bold text-center text-black">
              Premier Service Solutions
            </h2>
          </div>
        </div>
      );
    } else if (isAbout) {
      return (
        <div className="bg-black w-full h-screen" style={divStyle}>
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <div className="bg-white m-4 p-20 rounded">
            <h2 className="text-2xl font-bold text-center text-black mb-5">
              About Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet. Qui eligendi suscipit aut ducimus ipsa
              aut consequuntur quis qui laborum officiis ut praesentium
              architecto et consequuntur quam ut ratione voluptas. Aut fugiat
              possimus et consequatur enim qui rerum incidunt ad temporibus
              alias ea dolor voluptate qui voluptas nulla. Est ipsam quam et
              similique tenetur qui nostrum dolorem cum nulla possimus id
              provident incidunt et quibusdam omnis cum voluptate sunt?
            </p>
            <br />
            <p>
              Quo amet itaque ea facilis magni eos omnis repudiandae in facilis
              aspernatur non harum quas quo velit totam? Quo voluptates dolorem
              sit dicta quisquam sit recusandae eius sed distinctio dolor est
              voluptatibus minus aut cupiditate dolor ab iusto rerum. Aut
              delectus dolore sed fugiat incidunt qui quis voluptate. Sed quam
              asperiores eos quia vero vel corrupti laudantium aut rerum ratione
              in facilis expedita.
            </p>
            <br />
            <p>
              A harum dolor qui dicta quia qui harum iste sed deserunt provident
              hic molestiae galisum. Eos fugiat odio non excepturi assumenda a
              assumenda natus cum rerum ipsam et beatae maiores. In odio
              assumenda qui dicta quia non dolorem amet ut dolorem doloribus ea
              asperiores veritatis et deserunt rerum ut quas fugiat.
            </p>
          </div>
        </div>
      );
    } else if (isHelp) {
      return (
        <div className="bg-black w-full h-screen">
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <div className="bg-white m-4 p-20 rounded">
            <h1 className="text-2xl font-bold text-center text-black mb-8">
              Service Solution Help Page
            </h1>
            <div>
              <form action="">
                <div className="flex items-top mb-4 justify-center items-center h-full">
                  <label htmlFor="question" className="mr-10">
                    Please enter your question:
                  </label>
                  <textarea
                    id="question"
                    required
                    className="w-60 h-24 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-red-300"
                  />
                </div>

                <div className="flex justify-center items-center h-full mt-10">
                  <BlueButton
                    buttonText="Submit Question"
                    onClickFunction={testingClick}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (isAccount) {
      return (
        <div className="bg-black w-full h-screen">
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <div className="bg-white m-4 p-20 rounded">
            <h2 className="text-2xl font-bold text-center text-black mb-8">
              My Account
            </h2>
            <div>
              <div>
                <h2 className="text-lg font-bold text-center text-black mb-8">
                  Contact Details
                </h2>
                <div>
                  <p>Company / Client Name:</p>
                  <p>Contact Number:</p>
                  <p>Email Address:</p>
                  <p>PO Box:</p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-center text-black mb-8">
                  Address
                </h2>
                <div>
                  <p>Street</p>
                  <p>Suburb</p>
                  <p>City</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2 className="text-lg font-bold text-center text-black mb-8">
                  Payment Details
                </h2>
                <div>
                  <p>Account Number:</p>
                  <p>Account Holder:</p>
                  <p>Bank:</p>
                  <p>Branch:</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-center text-black mb-8">
                  Services
                </h2>
                <div>
                  <p>Service 1</p>
                  <p>Service 2</p>
                  <p>Service 3</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center h-full mt-10">
              <BlueButton
                buttonText="Edit Account"
                onClickFunction={testingClick}
              />
            </div>
          </div>
        </div>
      );
    } else if (isServices) {
      return (
        <div className="bg-black w-full">
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center text-black m-8 bg-white rounded p-5">
              My Services History
            </h2>
            <TableComponent
              jsonData={DataJson}
              onClickFunction={testingClick}
            />
          </div>
        </div>
      );
    } else if (isContracts) {
      return (
        <div className="bg-black w-full">
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center text-black m-8 bg-white rounded p-5">
              My Contracts History
            </h2>
            <TableComponent
              jsonData={DataJson}
              onClickFunction={testingClick}
            />
          </div>
        </div>
      );
    } else if (isMakeCall) {
      return (
        <div className="bg-black w-full h-screen">
          <div>
            <div></div>
            <h1></h1>
            <Navbar
              heads={[
                "Home",
                "About Us",
                "Help",
                "My Services",
                "My Contracts",
                "Make a Call",
                "Account",
              ]}
              functions={[
                toggleHome,
                toggleAbout,
                toggleHelp,
                toggleServices,
                toggleContracts,
                toggleCall,
                toggleAccount,
              ]}
            ></Navbar>
          </div>

          <h2 className="text-2xl font-bold text-center text-black m-8 bg-white rounded p-5">
            Make a Call
          </h2>
          <div className="flex bg-white m-4 p-20 rounded">
            <div className="flex-1 p-4">
              <div>Call Contents</div>
            </div>
            <div className="pr-12">
              <h3 className="text-2xl font-bold text-center text-black m-8 bg-white rounded p-5">
                Call History
              </h3>
              <div>
                <p>Call 1: Date, Duration</p>
                <p>Call 2: Date, Duration</p>
                <p>Call 3: Date, Duration</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Client;
