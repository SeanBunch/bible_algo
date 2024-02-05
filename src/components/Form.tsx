import React, { useState } from "react";
import "../style/modal.css";

function From() {
    const [ showModal, setShowModal ] = useState(false);


      // setShowCircle(false);
  const openModal = () => {
    setShowModal(true);
  };

  // setShowCircle(true);
  const closeModal = () => {
    setShowModal(false);
  };

    const handleSubmit = () => {
        

    }
    const changeHandler = () => {
        
    }
   

    return (
        <div>
            <button
            onClick={openModal}
            >
            Begin
            </button>

            {showModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="container column">
              <form onSubmit={handleSubmit}>
                <div className="container row mb50">
                  <div>
                    <input
                      type="text"
                      className="noborder h50 font25"
                      placeholder="Name your plan."
                      onChange={changeHandler}

                    />
                    <input
                      type="text"
                      className="noborder h50 font25"
                      placeholder="Days to completion?"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                <div className="container space-btw">
                  
                  <button
                    onClick={closeModal}
                    className="bdr10 bt h30 w100px"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-black bdr10 wt h30 w100px"
                  >
                    Submit
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}
           

        </div>
    )
}

export default From;
