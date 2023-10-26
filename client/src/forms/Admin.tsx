import { useEffect, useState } from "react";
import Message from "../components/general/Message";
import Navbar from "../components/general/Navbar";
import { GetUserMode } from "../functions/UserMode";
import TableComponent from "../components/general/TableComponent";
import Data from "../testing/JSONdata.json";
import BlueButton from "../components/general/BlueButton";
import GrayButton from "../components/general/GrayButton";
import RedButton from "../components/general/RedButton";

function Admin() {
  const Base_Url = "http://localhost:3000/";
  const isMobile = GetUserMode();

  const [isClientM, setClientM] = useState(true);
  const [isContractM, setContractM] = useState(false);
  const [isServiceM, setServiceM] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [idType, setidType] = useState("JobId");
  const [rowId, setRowId] = useState(0);
  const [rows, setRows] = useState([]);
  const [dataType, setDataType] = useState("Job");
  const [operation, setOperation] = useState("");
  const [changed, setChanged] = useState(false);

  function toggleClient() {
    setClientM(true);
    setContractM(false);
    setServiceM(false);
    setDataType("Job");
    setidType("JobId");
  }

  function toggleContract() {
    setClientM(false);
    setContractM(true);
    setServiceM(false);
    setDataType("Job");
    setidType("JobId");
  }

  function toggleService() {
    setClientM(false);
    setContractM(false);
    setServiceM(true);
    setDataType("Job");
    setidType("JobId");
  }

  useEffect(() => {
    fetch(`${Base_Url}DB/All${dataType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log(data); // Log the JSON response
        setRows(data.slice(0, data.length));
      })
      .catch((error) => {
        console.log(error);
      });

    setRowId(0);
  }, [dataType, changed]);

  useEffect(() => {
    if (selectedRow.hasOwnProperty(idType)) {
      setRowId(parseInt(selectedRow[idType as keyof typeof selectedRow]));
    }
  }, [selectedRow]);

  useEffect(() => {
    console.log(rowId);
  }, [rowId]);

  useEffect(() => {
    if (operation == "Delete") {
      alert(operation);
      setOperation("");
      fetch(`${Base_Url}DB/Delete${dataType}/${rowId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the response as JSON
        })
        .then((data) => {
          console.log(data); // Log the JSON response
          setChanged(!changed);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [operation]);

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
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/crafting-tools-blackboard-with-blank-space-center_2101-382.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <Navbar
          heads={["Client", "Contract", "Service"]}
          functions={[toggleClient, toggleContract, toggleService]}
        ></Navbar>
        <h1 className="inline-block text-3xl font-bold underline text-white ml-[3vw] mt-[1vh] mb-[1vh]">
          Clients
        </h1>
        <div className="inline-block bg-white w-fit h-[6vh] mx-[2vw] my-[1vh] pl-[0.5vw] pr-[1vw] py-[1.5vh] rounded-md">
          <BlueButton
            buttonText="Add"
            onClickFunction={toggleClient}
            height="3vh"
            width="5vw"
          />
          <GrayButton
            buttonText="Edit"
            onClickFunction={toggleClient}
            height="3vh"
            width="5vw"
          />
          <RedButton
            buttonText="Delete"
            onClickFunction={() => {
              setOperation("Delete");
            }}
            height="3vh"
            width="5vw"
          />

          {/* <button
            className="group relative overflow-hidden rounded-md bg-red-500 text-lg font-bold text-white ml-[0.5vw]"
            onClick={() => {
              setOperation("Delete");
            }}
          >
            Delete
            <div className="absolute inset-0 scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 z-40"></div>
          </button> */}
        </div>
        <TableComponent
          jsonData={rows}
          onClickFunction={(rowData) => {
            setSelectedRow(rowData);
          }}
        />
      </div>
    );
  }
}

export default Admin;
