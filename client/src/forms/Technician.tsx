import { useState } from "react";
import SelectableTicket from "../components/general/SelectableTicket";
import TicketForm from "../components/general/TicketForm";
import { GetUserMode } from "../functions/UserMode";
import BackgroundImage from "../assets/BGPic.jpg";
import Message from "../components/general/Message";
import Navbar from "../components/general/Navbar";

function Technician() {
  const divStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",
  };

  const isMobile = GetUserMode();

  const [isHome, setIsHome] = useState(true);
  // const [isNew, setIsNew] = useState(false);
  // const [isSearch, setIsSearch] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isTicketForm, setIsTicketForm] = useState(false);

  function toggleHome() {
    setIsHome(true);
    // setIsNew(false);
    // setIsSearch(false);
    setIsContacts(false);
    setIsAbout(false);
    setIsTicketForm(false);
  }

  function toggleNew() {
    setIsHome(false);
    // setIsNew(true);
    // setIsSearch(false);
    setIsContacts(false);
    setIsAbout(false);
    setIsTicketForm(false);
  }

  function toggleSearch() {
    setIsHome(false);
    // setIsNew(false);
    // setIsSearch(true);
    setIsContacts(false);
    setIsAbout(false);
    setIsTicketForm(false);
  }

  // function toggleContacts() {
  //   setIsHome(false);
  //   setIsNew(false);
  //   setIsSearch(false);
  //   setIsContacts(true);
  //   setIsAbout(false);
  //   setIsTicketForm(false);
  // }

  function toggleAbout() {
    setIsHome(false);
    // setIsNew(false);
    // setIsSearch(false);
    setIsContacts(false);
    setIsAbout(true);
    setIsTicketForm(false);
  }

  interface Ticket {
    id: number;
    ticketName: string;
    requesterName: string;
    dateCreated: string;
    status: string;
    assignedTo: string;
    issueStatus: string;
    dateResponded?: string; // Optional
    phoneNumber: string;
    emailAddress: string;
    alternativeNumber: string; // Added Contact Details
    address: string; // Added Address
    paymentDetails: {
      cardType: string;
      cardNumber: string;
      expirationDate: string;
      cvv: string;
    };
  }

  // Define your component's state and functions here
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      ticketName: "Issue 1",
      requesterName: "User A",
      dateCreated: "2023-10-20",
      status: "Low",
      assignedTo: "John",
      issueStatus: "Open",
      phoneNumber: "Contact Info 1", // Sample contact details
      emailAddress: "example@gmail.com",
      alternativeNumber: "Number 2",
      address: "Address 1", // Sample address
      paymentDetails: {
        cardType: "Visa",
        cardNumber: "1234 5678 9876 5432",
        expirationDate: "12/25",
        cvv: "123",
      },
    },
    {
      id: 2,
      ticketName: "Issue 2",
      requesterName: "User B",
      dateCreated: "2023-10-21",
      status: "Medium",
      assignedTo: "Liam",
      issueStatus: "Resolved",
      phoneNumber: "Contact Info 1", // Sample contact details
      emailAddress: "example@gmail.com",
      alternativeNumber: "Number 2",
      address: "Address 2", // Sample address
      paymentDetails: {
        cardType: "MasterCard",
        cardNumber: "9876 5432 1234 5678",
        expirationDate: "06/23",
        cvv: "456",
      },
    },
    {
      id: 3,
      ticketName: "Issue 3",
      requesterName: "User C",
      dateCreated: "2023-10-22",
      status: "High",
      assignedTo: "Kim",
      issueStatus: "Open",
      phoneNumber: "Contact Info 1", // Sample contact details
      emailAddress: "example@gmail.com",
      alternativeNumber: "Number 2",
      address: "Address 3", // Sample address
      paymentDetails: {
        cardType: "American Express",
        cardNumber: "5678 9876 1234 4321",
        expirationDate: "09/24",
        cvv: "789",
      },
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (ticketId: number) => {
    const selected = tickets.find((ticket) => ticket.id === ticketId);
    if (selected) {
      setSelectedTicket(selected);
      setIsEditing(true);
    }
  };

  const handleSave = (editedTicket: Ticket) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === editedTicket.id ? { ...ticket, ...editedTicket } : ticket
    );
    setTickets(updatedTickets);
    setSelectedTicket(null);
    setIsEditing(false);
  };

  // const handleReply = (ticketId: number) => {
  //   const selected = tickets.find((ticket) => ticket.id === ticketId);
  //   if (selected) {
  //     setSelectedTicket(selected);
  //   }
  // };

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
        <div className="page-container w-full h-screen" style={divStyle}>
          <div>
            <Navbar
              heads={["Home", "New", "Search", "About"]}
              functions={[toggleHome, toggleNew, toggleSearch, toggleAbout]}
            />
          </div>
          <div
            className="tickets-container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="text-2xl font-bold text-center text-white">
              Ticket Dashboard:
            </h1>
            <div
              className="tickets-list"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1dvh",
              }}
            >
              {tickets.map((ticket) => (
                <SelectableTicket
                  key={ticket.id}
                  ticket={ticket}
                  // onSave={handleSave}
                  // onCancel={() => setSelectedTicket(null)}
                  onClick={() => handleEdit(ticket.id)}
                />
              ))}
              {isEditing && selectedTicket && (
                <TicketForm
                  ticket={selectedTicket}
                  onSave={handleSave}
                  onCancel={() => setIsEditing(false)}
                />
              )}
            </div>
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
              heads={["Home", "New", "Search", "About"]}
              functions={[toggleHome, toggleNew, toggleSearch, toggleAbout]}
            />
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
    } else if (isContacts) {
      return (
        <div>
          <Navbar
            heads={["Home", "New", "Search", "About"]}
            functions={[toggleHome, toggleNew, toggleSearch, toggleAbout]}
          />
        </div>
      );
    } else if (isTicketForm) {
      return (
        <div className="bg-black w-full h-screen" style={divStyle}>
          <Navbar
            heads={["Home", "New", "Search", "About"]}
            functions={[toggleHome, toggleNew, toggleSearch, toggleAbout]}
          />

          <div></div>
        </div>
      );
    }
  }
}

export default Technician;
