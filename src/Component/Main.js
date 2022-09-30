import React, { useState } from "react";
import Select from "react-select";
import Text from "./Text";
import Textarea from "./Textarea";
import Number from "./Number";
import Slider from "./Slider";
import Radio from "./Radio";
import swal from "sweetalert";

function Main() {
  let dropdownList = [
    {
      value: 1,
      label: "None",
    },
    {
      value: 2,
      label: "Text",
      input: <Text />,
    },
    {
      value: 3,
      label: "Number",
      input: <Number />,
    },
    {
      value: 4,
      label: "Radio",
      input: <Radio />,
    },
    {
      value: 5,
      label: "TextArea",
      input: <Textarea />,
    },
    {
      value: 8,
      label: "Slider",
      input: <Slider />,
    },
  ];

  const [result, setResult] = useState(dropdownList.input);
  const listHandler = (e) => {
    setResult(e.input);
  };

  const [input, setInput] = useState({
    question_title: "",
    question_desc: "",
    dropdown: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(input);
    swal({
      title: "Success!",
      text: "Details submitted successfully!",
      icon: "success",
      button: "Ok",
    });
    event.preventDefault();
    setInput({ question_title: "", question_desc: "", dropdown: "" });
  };

  return (
    <>
      <div className="container my-5">
        <h4>Add Question</h4>
        <div className="formContent my-4">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="questionTitle"
                name="question_title"
                placeholder="Question Title"
                value={input.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Question Title</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="questionDesc"
                name="question_desc"
                placeholder="Question Description"
                value={input.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Question Description</label>
            </div>
            <div className="form-floating mb-3">
              <Select
                type="text"
                placeholder="Answer Type"
                name="dropdown"
                value={input.name}
                options={dropdownList}
                onChange={listHandler}
              />
              {result}
            </div>

            <div className="bottomButton">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
