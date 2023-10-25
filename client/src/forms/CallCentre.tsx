import Message from "../components/general/Message";
import { GetUserMode } from "../functions/UserMode";
import Navbar from "../components/general/Navbar";
import { useState } from "react";
import TableComponent from "../components/general/TableComponent";
import DataJson from "../testing/JSONdata.json";
import BlueButton from "../components/general/BlueButton";
import BackgroundImage from "../assets/BGPic.jpg";

function CallCentre() {
  const divStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-photo/crafting-tools-blackboard-with-blank-space-center_2101-382.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
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
  const exampleData = [
    {
      ID: 1,
      "": (
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU')]"></div>
      ),
      Name: "Alice",
      Surname: "Grey",
      Email: "ag27@gmail.com",
      Country: "Australia",
      City: "Sidney",
      Company: "Apple",
      Package: 3,
      Duration: "03:02",
    },
    {
      ID: 2,
      "": (
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/5231/5231019.png')]"></div>
      ),
      Name: "Britney",
      Surname: "Thorn",
      Email: "bt25@gmail.com",
      Country: "South Africa",
      City: "Pretoria",
      Company: "Sony",
      Package: 1,
      Duration: "10:32",
    },
    {
      ID: 3,
      "": (
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpksu6S3Rc6c62Ce5RmC5DGRK9Bu3Q4Nal0A&usqp=CAU')]"></div>
      ),
      Name: "Candice",
      Surname: "Brown",
      Email: "cb654@gmail.com",
      Country: "South Africa",
      City: "Cape Town",
      Company: "Sonny",
      Package: 3,
      Duration: "05:02",
    },
    {
      ID: 4,
      "": (
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU')]"></div>
      ),
      Name: "Dorin",
      Surname: "Farmly",
      Email: "df@gmail.com",
      Country: "England",
      City: "London",
      Company: "HP",
      Package: 1,
      Duration: "15:45",
    },
    {
      ID: 5,
      "": (
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU')]"></div>
      ),
      Name: "Erin",
      Surname: "Jason",
      Email: "ej458@gmail.com",
      Country: "England",
      City: "Liverpool",
      Company: "N/A",
      Package: 3,
      Duration: "25:30",
    },
    {
      ID: 6,
      "": (
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1268548918/vector/white-create-account-screen-icon-isolated-with-long-shadow-red-circle-button-vector.jpg?s=612x612&w=0&k=20&c=tyaWWtW2_yQyvK4hBnVXEt3tfSNr0jVC_6P7XbOBrbk=')]"></div>
      ),
      Name: "Frank",
      Surname: "Simpson",
      Email: "sf98@gmail.com",
      Country: "South Korea",
      City: "Seoul",
      Company: "LG",
      Package: 1,
      Duration: "06:20",
    },
  ];
  const handleRowClick = () => {
    alert("Row clicked");
  };

  function testingClick() {}
  const [data, setData] = useState(exampleData);

  if (isMobile) {
    return (
      <div style={divStyle}>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE CallCentre page
        </h1>
        <Message />
      </div>
    );
  } else {
    if (isHome) {
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
            <h2 className="text-2xl font-bold text-center text-black mb-8">
              My Account
            </h2>
            <div>
              <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-pink-700/30 rounded-full bg-cover bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/5231/5231019.png')]"></div>
              <div>
                <h2 className="text-lg font-bold text-center text-black mb-8">
                  Contact Details
                </h2>
                <div>
                  <p>Company / CallCentre Name:</p>
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
        <div className="bg-black w-full" style={divStyle}>
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
        <div className="bg-black w-full" style={divStyle}>
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
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl text-white">Clients</h1>
              <button className="ml-auto bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 mx-2 rounded ">
                Add
              </button>
              <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 mx-2 rounded ">
                Delete
              </button>
              <button className="bg-gray-400 hover:bg-gray-300 text-black px-4 py-2 mx-2 rounded ">
                Edit
              </button>
              <div className="relative">
                <input
                  type="text"
                  className="bg-white border-2 border-gray-300 rounded-md w-40 px-3 py-2 pr-10 focus:outline-none focus:border-blue-500"
                  placeholder="Search..."
                />
                <button className="absolute top-0 right-0 h-full px-4 py-2 bg-blue-500 text-white rounded-r-md">
                  Search
                </button>
              </div>
            </div>
            <TableComponent
              jsonData={exampleData}
              onClickFunction={handleRowClick}
            />
          </div>
        </div>
      );
    } else if (isMakeCall) {
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

export default CallCentre;
