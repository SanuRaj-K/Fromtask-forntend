import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [formvalues, setFormValues] = useState({});
  const history = useNavigate();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://render.com/docs/web-services#port-binding/api/post", {
        formvalues: formvalues,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          history("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className=" w-full flex justify-center mt-28 ">
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className=" border px-6 py-9 rounded-lg bg-slate-300"
        >
          <h2 className=" uppercase text-center my-7 font-extrabold">Form</h2>
          <div className=" mb-3 ">
            <label className=" mr-3" htmlFor="name">
              Name:
            </label>
            <input
              className=" border "
              onChange={(e) => handleOnchange(e)}
              type="text"
              name="name"
              required
              id="name"
            />
          </div>
          <div className=" mb-3 ">
            <label className=" mr-3" htmlFor="dob">
              DOB:
            </label>
            <input
              onChange={(e) => handleOnchange(e)}
              className=" border "
              type="number"
              required
              name="dd"
              id="dd"
              placeholder="dd"
            />
            <input
              onChange={(e) => handleOnchange(e)}
              className=" border "
              type="number"
              required
              name="mm"
              id="mm"
              placeholder="mm"
            />
            <input
              onChange={(e) => handleOnchange(e)}
              className=" border "
              type="number"
              required
              name="yy"
              id="yy"
              placeholder="yyyy"
            />
          </div>
          <div className=" mb-3 ">
            <label className=" mr-3" htmlFor="university">
              University:
            </label>
            <input
              required
              onChange={(e) => handleOnchange(e)}
              className=" border "
              type="text"
              name="university"
              id="university"
            />
          </div>
          <div className=" mb-3 ">
            <label
              className=" mr-3"
              htmlFor="rating"
              onChange={(e) => handleOnchange(e)}
            >
              Rating:
            </label>
            <select
              onChange={(e) => handleOnchange(e)}
              name="rating"
              id="rating"
            >
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label className=" mr-3" htmlFor="subject">
              Subject:
            </label>
            <input
              className=" border "
              type="text"
              onChange={(e) => handleOnchange(e)}
              name="subject"
              id="subject"
            />
          </div>
          <div className=" flex justify-center mt-4">
            <button className=" bg-green-600 px-3 py-2 hover:bg-teal-500 rounded-md">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
