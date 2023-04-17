import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const PeopleForm = ({ kisiler, submitFn }) => {
  const [isim, setIsim] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (kisiler.includes(isim)) {
      setError("Bu isim daha önce eklenmiş")
    } else {
      setError(null)
    }
  }, [isim, kisiler])

  function handleIsimChange(e) {
    setIsim(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitFn(isim);
    setIsim("");
    setTimeout(()=>{
      toast.success('Kişi eklendi', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    },100)
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          onChange={handleIsimChange}
          value={isim}
        />
        <p className="input-error">{error}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={isim.length === 0 || error}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
