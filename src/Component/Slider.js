import React, { useState } from "react";

function Slider() {
  const [val, setVal] = useState([{ placeholder: "", min: "", max: "" }]);
  const handleaddclick = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleinputchange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleremove = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  console.log(val);

  return (
    <>
      {val.map((x, i) => {
        return (
          <div className="container my-4 d-flex" key={i}>
            <div className="col-md-3 position-relative form-floating">
              <input
                type="text"
                className="form-control"
                id="placeholder"
                placeholder="Placeholder"
                name="placeholder"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="floatingInput" className="form-label ">
                Placeholder
              </label>
            </div>
            <div className="col-md-1 position-relative mx-3 form-floating">
              <input
                type="number"
                className="form-control "
                id="min"
                placeholder="Min"
                name="min"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="floatingInput" className="form-label ">
                Min
              </label>
            </div>
            <div className="col-md-1 position-relative form-floating">
              <input
                type="number"
                className="form-control"
                id="max"
                placeholder="Max"
                name="max"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="floatingInput" className="form-label">
                Max
              </label>
            </div>
            <div className="form-group col-md-2 ">
              {val.length !== 1 && (
                <button
                  className="btn btn-danger mx-4 "
                  onClick={() => handleremove(i)}
                >
                  Remove
                </button>
              )}
              {val.length - 1 === i && (
                <div className="addButton m-3">
                  <button className="btn btn-success " onClick={handleaddclick}>
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Slider;
