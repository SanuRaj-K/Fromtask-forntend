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
      <div class="flex min-h-screen items-center justify-center">
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white shadow-md rounded-xl">
            <thead>
              <tr class="bg-blue-gray-100 text-gray-700">
                <th class="py-3 px-4 text-left"> Name</th>
                <th class="py-3 px-4 text-left">University</th>
                <th class="py-3 px-4 text-left">DOB</th>
                <th class="py-3 px-4 text-left">Rating</th>
                <th class="py-3 px-4 text-left">Subject</th>
              </tr>
            </thead>
            <tbody class="text-blue-gray-900">
              <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">Company A</td>
                <td class="py-3 px-4">$50.25</td>
                <td class="py-3 px-4">100</td>
                <td class="py-3 px-4">$5025.00</td>
                <td class="py-3 px-4">data</td>
              </tr>
            </tbody>
          </table>
          <div class="w-full pt-5 px-4 mb-8 mx-auto "></div>
        </div>
      </div>
    </div>
  );
}

export default TableView;
