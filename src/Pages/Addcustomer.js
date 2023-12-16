import React, { useEffect, useState } from "react";
import "./Addvendor.css";

const Addcustomer = () => {
  const initialvalues = {
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    mobileno: "",
    officeno: "",
    comments: "",
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [formerrors, setformerrors] = useState({});
  const [selects, setselects] = useState();
  const [issubmit, setissubmit] = useState(false);
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
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formerrors]);
  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.firstname) {
      errors.firstname = "firstname is required!";
    }
    if (!value.lastname) {
      errors.lastname = "lastname is required!";
    }
    if (!value.address) {
      errors.address = "address is required!";
    }

    if (!selects) {
      errors.category = "not selected";
    }

    if (!value.mobileno) {
      errors.mobileno = "mobileno is required!";
    }
    if (!value.email) {
      errors.email = "email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "email is in invalid format!";
    }
    return errors;
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <table className="table">
          <tr>
            <th colspan="4">
              <h1>Add Customer form</h1>
            </th>
          </tr>
          <tr>
            <td>
              <label>First name</label>
            </td>
            <td>
              <input
                type="text"
                name="firstname"
                value={formvalues.firstname}
                onChange={handlechange}
              />
            </td>
            <td>
              <label>Last name</label>
            </td>
            <td>
              <input
                type="text"
                name="lastname"
                value={formvalues.lastname}
                onChange={handlechange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.firstname}</label>
            </td>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.lastname}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Address</label>
            </td>
            <td>
              <input
                type="text"
                name="address"
                value={formvalues.address}
                onChange={handlechange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.address}</label>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input
                type="email"
                name="email"
                value={formvalues.email}
                onChange={handlechange}
              />
            </td>
            <td>Category</td>
            <td>
              <select
                id="Customer_category"
                name="category"
                value={selects}
                onChange={(e) => setselects(e.target.value)}
              >
                <option value="" selected>
                  Select option
                </option>
                <option value="Guest">Guest</option>
                <option value="Real">Real</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.email}</label>
            </td>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.category}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Mobile no</label>
            </td>
            <td>
              <input
                type="Tel"
                name="mobileno"
                value={formvalues.mobileno}
                onChange={handlechange}
              />
            </td>
            <td>
              <label>Office no</label>
            </td>
            <td>
              <input
                type="Tel"
                name="officeno"
                value={formvalues.officeno}
                onChange={handlechange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.mobileno}</label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label>Comments</label>
            </td>
            <td>
              <input type="text" name="comments" value={formvalues.comments} />
            </td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>
              <input type="submit" />
            </td>
            <td>
              <input type="reset" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Addcustomer;
