import { useState } from "react";

interface Names {
  heads: string[];
  onClickFunctions: (() => void)[];
}

function Headings({ heads, onClickFunctions }: Names) {
  const [message, setMessage] = useState("Initial Message");

  function toggleOptions(val: string, index: number) {
    setMessage(val);
    onClickFunctions[index]();
  }

  return heads.map((head, index) => (
    <a
      key={head}
      href="#"
      className={`mx-1.5 sm:mx-6 hover:border-blue-500 hover:border-b-2 ${
        message === head ? "border-b-2 border-blue-500" : ""
      }`}
      onClick={() => toggleOptions(head, index)}
    >
      {head}
    </a>
  ));
}

export default Headings;
