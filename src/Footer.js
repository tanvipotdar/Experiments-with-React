import React from 'react';


var Footer = React.createClass({
  render: function () {

    var containerStyle = {
      fontFamily: '"Raleway", sans-serif',
      padding: '0px 0',
      overflow: 'hidden',
      color: '#ccc'
    };

    var footerContentStyle = {
      fontSize: '11px',
      fontWeight: '500',
      margin: '10px 10px 10px 10px',
      color:'black'
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle} data-style-footer>

            <div className="col-sm-12">
              <p style={footerContentStyle}>

                ©ShreyasHospital1993

              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

export default Footer;