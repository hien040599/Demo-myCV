import React from "react";
import Directional from "../../layout/Directional/Directional";
import "./Css/style.css";

function CheckOut(props) {
  return (
    <div className="wrapper">
      <Directional namePage={"checkout"} />
      <div className="container">
        <div className="row">
          <div className="col-checkout__infor">
            <div className="col-checkout__infor__wrapper">
              <h3>Billing Details</h3>
              <div className="row col-checkout__infor__wrapper__form">
                <div className="col-checkout__infor__wrapper__form-group">
                  <label>First Name</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Last Name</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Company Name</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Country</label>
                  <select className="abc">
                    <option>Select a country</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                  </select>
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Street Address</label>
                  <input
                    placeholder="House number and street name"
                    type="text"
                  />
                  <input
                    placeholder="Apartment, suite, unit etc."
                    type="text"
                  />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Town / City</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>State / County</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Phone</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Postcode / ZIP</label>
                  <input type="text" />
                </div>

                <div className="col-checkout__infor__wrapper__form-group">
                  <label>Email Address</label>
                  <input type="text" />
                </div>
              </div>
              <h4>Additional information</h4>
              <div className="col-checkout__infor__wrapper__oder-notes">
                <label>Order notes</label>
                <textarea
                  placeholder="Notes about your order, e.g. special notes for delivery. "
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
