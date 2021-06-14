import React, { useState } from "react";

import InputField from "./InputField";
// import InputFieldTextArea from "./InputFieldTextArea";
import Button from "./Button";

// iF = INPUT FIELD

const Form = ({ onAdd }) => {
  const [fName, setFname] = useState("");
  const [mName, setMname] = useState("");
  const [lName, setLname] = useState("");
  const [bDate, setBdate] = useState(null);
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [errorfName, setErrorFname] = useState(false);
  const [errorMName, setErrorMname] = useState(false);
  const [errorLName, setErrorLname] = useState(false);
  const [errorBdate, setErrorBdate] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const [errorMssgFName, setErrorMssgFName] = useState("");
  const [errorMssgMName, setErrorMssgMName] = useState("");
  const [errorMssgLName, setErrorMssgLName] = useState("");
  const [errorMssgBDate, setErrorMssgBDate] = useState("");
  const [errorMssgAddress, setErrorMssgAddress] = useState("");
  const [errorMssgContact, setErrorMssgContact] = useState("");
  const [errorMssgEmail, setErrorMssgEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // DO SOMETHING HERE
    // onAdd({ fName, mName, lName, bDate, address, contact, email });
  };

  // CHECK FIRST NAME
  const onChangeIfFname = (value) => {
    !value ? setErrorFname(true) : setErrorFname(false);
    !value ? setErrorMssgFName("Invalid Input") : setErrorMssgFName("");

    if (/[^a-zA-Z ]/.test(value)) {
      setErrorFname(true);
      setErrorMssgFName("A-Z letters only");
    }
    return setFname(value);
  };

  // CHECK MIDDLE NAME
  const onChangeIfMname = (value) => {
    !value ? setErrorMname(true) : setErrorMname(false);
    !value ? setErrorMssgMName("Invalid Input") : setErrorMssgMName("");

    if (/[^a-zA-Z ]/.test(value)) {
      setErrorMname(true);
      setErrorMssgMName("A-Z letters only");
    }
    return setMname(value);
  };

  // CHECK LAST NAME
  const onChangeIfLname = (value) => {
    !value ? setErrorLname(true) : setErrorLname(false);
    !value ? setErrorMssgLName("Invalid Input") : setErrorMssgLName("");

    if (/[^a-zA-Z ]/.test(value)) {
      setErrorLname(true);
      setErrorMssgLName("A-Z letters only");
    }
    return setLname(value);
  };

  // CHECK BIRTHDATE
  const onChangeIfBdate = (value) => {
    !value ? setErrorBdate(true) : setErrorBdate(false);

    if (!value) {
      setErrorBdate(true);
      setErrorMssgBDate("Invalid Input");
    }
    return setBdate(value);
  };

  // CHECK ADDRESS
  const onChangeIfAddress = (value) => {
    !value ? setErrorAddress(true) : setErrorAddress(false);
    !value ? setErrorMssgAddress("Invalid Input") : setErrorMssgAddress("");

    if (/[^a-zA-Z 0-9 ,.-]/.test(value)) {
      setErrorAddress(true);
      setErrorMssgAddress("Alphanumeric and (, - .) only");
    }
    return setAddress(value);
  };

  // CHECK CONTACT NUMBER
  const onChangeIfContact = (value) => {
    !value ? setErrorContact(true) : setErrorContact(false);
    !value ? setErrorMssgContact("Invalid Input") : setErrorMssgContact("");
    if (value.length < 11) {
      setErrorContact(true);
      setErrorMssgContact("Invalid Input");
    }

    if (/[^0-9]/.test(value)) {
      setErrorContact(true);
      setErrorMssgContact("Numeric Characters Only");
    }
    return setContact(value);
  };

  // CHECK ADDRESS
  const onChangeIfEmailAddress = (value) => {
    !value ? setErrorEmail(true) : setErrorEmail(false);
    !value ? setErrorMssgEmail("Invalid Input") : setErrorMssgEmail("");

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
      setErrorEmail(true);
      setErrorMssgEmail("Email Address only");
    }
    return setEmail(value);
  };

  return (
    <form className="add-form">
      {/* FIRST NAME INPUT FIELD */}
      <InputField
        iFLabel="First name"
        iFType="text"
        iFPlaceholder="First name"
        iFvalue={fName}
        onChange={(e) => onChangeIfFname(e.target.value)}
        iFError={errorfName}
        iFErrorMessage={errorMssgFName}
        maxlength="255"
      />

      {/* MIDDLE NAME INPUT FIELD */}
      <InputField
        iFLabel="Middle name"
        iFType="text"
        iFPlaceholder="Middle name"
        iFvalue={mName}
        onChange={(e) => onChangeIfMname(e.target.value)}
        iFError={errorMName}
        iFErrorMessage={errorMssgMName}
        maxlength="255"
      />

      {/* LAST NAME INPUT FIELD */}
      <InputField
        iFLabel="Last name"
        iFType="text"
        iFPlaceholder="Last name"
        iFvalue={lName}
        onChange={(e) => onChangeIfLname(e.target.value)}
        iFError={errorLName}
        iFErrorMessage={errorMssgLName}
        maxlength="255"
      />

      {/* BIRTH DATE INPUT FIELD */}
      <InputField
        iFLabel="Birth Date"
        iFType="date"
        iFPlaceholder=""
        iFvalue={bDate}
        onChange={(e) => onChangeIfBdate(e.target.value)}
        iFError={errorBdate}
        iFErrorMessage={errorMssgBDate}
        maxlength="255"
      />

      {/* ADDRESS INPUT FIELD */}
      {/* <InputFieldTextArea
        iFLabel="Address"
        iFPlaceholder="Address"
        iFvalue={address}
        onChange={(e) => onChangeIfAddress(e.target.value)}
        iFError={errorAddress}
        iFErrorMessage={errorMssgAddress}
      /> */}

      {/* CONTACT INPUT FIELD */}
      <InputField
        iFLabel="Contact Number"
        iFType="text"
        iFPlaceholder="09#########"
        iFvalue={contact}
        onChange={(e) => onChangeIfContact(e.target.value)}
        iFError={errorContact}
        iFErrorMessage={errorMssgContact}
        maxlength="11"
      />

      {/* EMAIL INPUT FIELD */}
      <InputField
        iFLabel="Email"
        iFType="text"
        iFPlaceholder="email@gmail.com"
        iFvalue={email}
        onChange={(e) => onChangeIfEmailAddress(e.target.value)}
        iFError={errorEmail}
        iFErrorMessage={errorMssgEmail}
        maxlength="255"
      />

      <Button text="Save" onClick={onSubmit} />
    </form>
  );
};

export default Form;
