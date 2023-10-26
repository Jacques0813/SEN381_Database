import { useState } from "react";

interface TableValues {
  jsonData: any[];
  onClickFunction: (rowData: any) => void;
}

function TableComponent({ jsonData, onClickFunction }: TableValues) {
  const headings = Object.keys(jsonData[0] || {});
  const [selectedRow, setSelectedRow] = useState(null);
  let i = 0;

  // const handleRowClick = (rowData: any) => {
  //   // Replace the alert with your desired action
  //   alert(`You clicked a row: ${JSON.stringify(rowData)}`);
  // };

  return (
    <div className="overflow-scroll max-h-[75vh] mx-[2vw]">
      <table className="min-w-full">
        <thead className="bg-blue-300 border-b sticky top-0">
          <tr>
            {headings.map((head) => (
              <th
                key={head}
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonData.map((data) => (
            <tr
              key={i++}
              onClick={() => {
                setSelectedRow(data);
                onClickFunction(data);
              }}
              className={`${
                selectedRow === data
                  ? "bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } bg-white border-b transition duration-300 ease-in-out`}
            >
              {headings.map((head) => (
                <td
                  key={head}
                  className={`${
                    selectedRow === data ? "text-white" : "text-gray-900"
                  } px-6 py-4 whitespace-nowrap text-sm font-medium`}
                >
                  {data[head]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
