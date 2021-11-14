import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateJob = () => {
  const [details, setDetails] = useState({

    title: "",
    descriptioon: "",
    external: "",
    publicatiob_date: "",
    location: "",
    level:""
  });

  const { title, descriptioon, external, publicatiob_date, location,level } = details;

  const handlechange = (e) => {
    // e.preventDefault()
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    var res = await axios.post("http://localhost:8000/job", details);
    console.log("post=", res);
  };

  return (
    <div>
      <form onSubmit={(e) => onsubmit(e)}>
        <input
          style={{
            borderRadius: "5px",
          }}
          type="text"
          name="title"
          value={title}
          onChange={handlechange}
          placeholder="title"
        />
        <br /> <br />{" "}
        <input
          style={{
            borderRadius: "5px",
          }}
          type="text"
          name="descriptioon"
          value={descriptioon}
          onChange={handlechange}
          placeholder="descriptioon"
        />
        <br /> <br />{" "}
        <input
          style={{
            borderRadius: "5px",
          }}
          type="text"
          name="external"
          value={external}
          onChange={handlechange}
          placeholder="external"
        />
        <br /> <br />{" "}
        <input
          style={{
            borderRadius: "5px",
          }}
          type="text"
          name="publicatiob_date"
          value={publicatiob_date}
          onChange={handlechange}
          placeholder="publicatiob_date"
        />
        <br /> <br />{" "}
        <input
          style={{
            borderRadius: "5px",
          }}
          type="text"
          name="location"
          value={location}
          onChange={handlechange}
          placeholder="location"
        />
        <br />
        <br />{" "}
        <input
          style={{
            borderRadius: "5px",
          }}
          type="text"
          name="level"
          value={level}
          onChange={handlechange}
          placeholder="level"
        />
        <br />
        <br />{" "}

        <button
          style={{
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
