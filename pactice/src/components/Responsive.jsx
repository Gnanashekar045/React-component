import React from "react";

function Responsive() {
  return (
    <>
      <body>
        <div className="container">
          <div className="Naviater">
            <h4>Navebar</h4>
          </div>
          <div className="Subcontainer">
            <div className="Sidebar">
              <h4>SiteBar</h4>
            </div>
            <div className="main_container">
              <div className="main">
                <h4>Main</h4>
              </div>
              <div className="conten1t">
                <h4>content1</h4>
              </div>
              <div className="content2">
                <h4>content2</h4>
              </div>
              <div className="content3">
                <h4>content3</h4>
              </div>
              <div className="footer">
                <h4>footer</h4>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Responsive;
