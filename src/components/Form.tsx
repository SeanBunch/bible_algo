import React from "react";

function From() {

    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="Name your plan."
                
                />

                <input
                type="number"
                placeholder="Days to completion?"
                required

                />
                <button
                type="submit"
                >
                    Submit
                </button>
               
            </form>

        </div>
    )
}

export default From;
