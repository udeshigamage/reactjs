import React, { useEffect } from "react";
import "./Addcustomer.css";
import { useState } from "react";
const Addcustomer = () => {
  const initialvalues = {
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    category: "",
    mobileno: "",
    officeno: "",
    comments: "",
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [formErrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
  const SelectComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
  

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalues));
    setissubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length == 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = "firstname is required!";
      alert(errors.firstname);
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required!";
      alert(errors.lastname);
    }
    if (!values.address) {
      errors.address = "address is required!";
      alert(errors.address);
    }
    if (!values.email) {
      errors.email = "email is required!";
      alert(errors.email);
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format!";
      alert(errors.email);
    }
    if (!values.category) {
      errors.category = "select category!";
      alert(errors.category);
    }
    if (!values.mobileno) {
      errors.mobileno = "mobile no is required!";
      alert(errors.mobileno);
    }
  };
  return (
    <div>
      <center>
        <h1>ADD CUSTOMER TABLE</h1>
      </center>
      {Object.keys(formErrors).length === 0 && issubmit ? (
        <div classname="ui message success">saved successfullty</div>
      ) : (
        <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
      )}

      <form onSubmit={handlesubmit}>
        <table className="table">
          <tr>
            <td class="cell">
              <label>First Name</label>
            </td>

            <td class="cell">
              <input
                type="text"
                className="inputBox"
                name="firstname"
                value={formvalues.firstname}
                onChange={handlechange}
              />
              {formErrors.firstname}
            </td>
            <td class="cell">Last Name</td>
            <td class="cell">
              <input
                type="text"
                className="inputBox"
                name="lastname"
                value={formvalues.lastname}
                onChange={handlechange}
              />
            </td>
          </tr>

          <tr>
            <td class="cell">Address</td>
            <td colspan="3" class="cell">
              <textarea
                className="inputBox2"
                name="address"
                value={formvalues.address}
                onChange={handlechange}
              />
            </td>
          </tr>

          <tr>
            <td class="cell">Email</td>
            <td class="cell">
              <input
                type="email"
                className="inputBox"
                name="email"
                value={formvalues.email}
                onChange={handlechange}
              />
            </td>
            <td class="cell">Category</td>
            <td>
              <select
                id="Category"
                name="Category"
                className="inputBox"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="guest" name="guest" id="guest">
                  Guest
                </option>
                <option value="real" name="real">
                  Real
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td class="cell">Mobile No</td>
            <td>
              <input
                type="text"
                className="inputBox"
                name="mobileno"
                value={formvalues.mobileno}
                onChange={handlechange}
              />
            </td>
            <td class="cell">Office No</td>
            <td>
              <input
                type="tel"
                className="inputBox"
                name="officeno"
                value={formvalues.officeno}
                onChange={handlechange}
              />
            </td>
          </tr>

          <tr>
            <td class="cell">Comments</td>
            <td colspan="3" class="cell">
              <textarea
                className="inputBox3"
                name="comments"
                value={formvalues.comments}
                onChange={handlechange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="cell">
              <input type="reset" value="clear" className="inputBox" />
            </td>
            <td class="cell">
              <input
                type="submit"
                name="submit"
                value="submit"
                className="inputBox"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Addcustomer;
