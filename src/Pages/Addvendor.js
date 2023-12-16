import React, { useEffect, useState } from "react";
import "./Addvendor.css";

const Addvendor = () => {
  const initialvalues = {
    Name: "",
    address: "",
    email: "",
    mobileno: "",
    officeno: "",
    comments: "",
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [formerrors, setformerrors] = useState({});
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
    if (!value.Name) {
      errors.Name = "name is required!";
    }

    if (!value.address) {
      errors.address = "address is required!";
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
              <h1>Add vendor form</h1>
            </th>
          </tr>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <input
                type="text"
                name="Name"
                value={formvalues.Name}
                onChange={handlechange}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.Name}</label>
            </td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="labelerror">{formerrors.email}</label>
            </td>
            <td></td>
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

export default Addvendor;
