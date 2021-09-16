/* eslint-disable react-hooks/exhaustive-deps */
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
  const [currentUser, setCurrentUser] = useState(null);

  const sendData = () => {
    //update data if there is a 'currentUser' state /tri ggered by edit btn
    if (currentUser) {
      dbRef
        .ref(`contacts/${currentUser.id}`)
        .set(contactForm, (err) =>
          err
            ? console.log("something went wrong")
            : console.log("user updated successfully")
        );
    } else {
      dbRef
        .ref("contacts")
        .push(contactForm, (err) =>
          err ? console.log(err) : console.table("data send")
        );
    }
    console.log(contactForm);
    setContactForm(initialState);
  };
  const deleteData = (id) => {
    const ref = dbRef.ref("contacts").child(id); // passing the id from records state/user
    ref.remove();
  };

  useEffect(() => {
    dbRef.ref("contacts").on(
      "value",
      (snapshot) => {
        let temp = [];
        const list = snapshot.val();
        for (let id in list) {
          temp.push({ id, ...list[id] });
        }
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
    setContactForm(initialState);
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Contact App</h1>
      <Input
        onChange={onChangeHandle}
        onSubmit={submitHandler}
        contactForm={contactForm}
        sendData={sendData}
      />
      <People
        records={records}
        setContactForm={setContactForm}
        contactForm={contactForm}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        deleteData={deleteData}
      />
    </div>
  );
}

export default App;
