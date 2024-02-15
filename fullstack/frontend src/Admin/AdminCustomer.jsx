import React, { useState } from "react";
import './LoanStatus'
import data from "../Componenets/TemplateData.json";
import NavBar1 from "../NavBar1";
import Header from './Header'
function UserStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Function to check if the input is a valid number
  const isValidNumber = (input) => {
    const parsedNumber = parseInt(input, 10);
    return !isNaN(parsedNumber) && parsedNumber > 0;
  };

  const filteredData = isValidNumber(searchTerm)
    ? data.filter((val) => val.id.toString().includes(searchTerm))
    : [];

  const handleTrackButtonClick = () => {
    setShowResults(true);
  };

  return (
    <div className='App1'>
    <NavBar1/>
     <div className="SideMenuAndPageContent">
     <Header/>
     
     <div className="das">
    <div className="templateContainer">
        <div className="searchInput_Container1">
          <input
            id="searchInput"
            type="number"
            placeholder="Search by ID..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        
        <button className="button-421" onClick={handleTrackButtonClick}>Track</button>
        {showResults && isValidNumber(searchTerm) && (
          <div className="template_Container">
            {filteredData.length === 0 ? (
              <p>No matching data found.</p>
            ) : (
              filteredData.map((val) => (
                <div className="template" key={val.id}>
                  <div>
                    <strong>ID:</strong> {val.id}
                  </div>
                  <div>
                    <strong>Eventname:</strong> {val.name}
                  </div>
                  <div>
                    <strong>Duration:</strong> {val.mobile}
                  </div>
                  <div>
                    <strong>Venue:</strong> {val.email}
                  </div>
                  <div>
                    <strong>Payment status:</strong> {val.aadharNo}
                  </div>
                 
                </div>
              ))
            )}
          </div>
        )}
      </div>

    </div>
    </div>
    </div>
  );
}

export default UserStatus;
