import "./App.css";
import fireDB from "./firebase";
import Input from "./Input";
import People from "./People";
import { useState, useEffect } from "react";

function App() {
  const dbRef = fireDB.database();

  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };
  const [contactForm, setContactForm] = useState(initialState);
  const [records, setRecords] = useState([]);

  const sendData = () => {
    dbRef
      .ref("contacts")
      .push(contactForm, (err) =>
        err ? console.log(err) : console.table("Success")
      );
  };
  useEffect(() => {
    dbRef.ref("contacts").on(
      "value",
      (snapshot) => {
        let temp = [];
        snapshot.forEach((data) => {
          temp.push(data.val());
        });
        setRecords(temp);
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }, []);
  const onChangeHandle = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.phone) return;

    sendData();
    setContactForm(initialState);
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Contact App</h1>
      <Input
        onChange={onChangeHandle}
        onSubmit={submitHandler}
        contactForm={contactForm}
      />
      <People records={records} />
    </div>
  );
}

export default App;
