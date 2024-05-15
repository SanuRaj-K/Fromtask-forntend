import axios from "axios";
import React, { useEffect, useState } from "react";

function TableView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/dummy/get")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl">
            <thead>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">University</th>
                <th className="py-3 px-4 text-left">DOB</th>
                <th className="py-3 px-4 text-left">Rating</th>
                <th className="py-3 px-4 text-left">Subject</th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              {data?.map((item, index) => (
                <tr key={index} className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.university}</td>
                  <td className="py-3 px-4">{item.dob}</td>
                  <td className="py-3 px-4">{item.rating}</td>
                  <td className="py-3 px-4">{item.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full pt-5 px-4 mb-8 mx-auto "></div>
        </div>
      </div>
    </div>
  );
}

export default TableView;
