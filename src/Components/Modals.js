import React from "react";

function Modals({ member, handleClose }) {
  return (
    <>
      <dialog  open>
        <button
          className="close"
          onClick={handleClose}
        >
            close hero
        </button>
        
        <div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "300px",
              }}
              src={require(`../images/${member.slug}.svg`)}
              alt={member.name}
            />
            <div>
              <h1>{member.name}</h1>
              <h2>Origin: {member.origin}</h2>
              <p>{member.bio}</p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Modals;
