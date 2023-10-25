interface TableValues {
  jsonData: any[];
  onClickFunction: () => void;
}

function TableComponent({ jsonData, onClickFunction }: TableValues) {
  const headings = Object.keys(jsonData[0] || {});
  let i = 0;

  // const handleRowClick = (rowData: any) => {
  //   // Replace the alert with your desired action
  //   alert(`You clicked a row: ${JSON.stringify(rowData)}`);
  // };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
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
                    onClick={onClickFunction}
                    className={`bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100`}
                  >
                    {headings.map((head) => (
                      <td
                        key={head}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {data[head]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
