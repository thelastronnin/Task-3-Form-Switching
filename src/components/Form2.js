import React, { useState } from "react";

import InputField from "./InputField";
import InputFieldTextArea from "./InputFieldTextArea";
import Button from "./Button";

// iF = INPUT FIELD
class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      mName: "",
      lName: "",
      bDate: "",
      address: "",
      contact: "",
      email: "",

      errorfName: false,
      errorMName: false,
      errorLName: false,
      errorBdate: false,
      errorAddress: false,
      errorContact: false,
      errorEmail: false,

      errorMssgFName: "",
      errorMssgMName: "",
      errorMssgLName: "",
      errorMssgBDate: "",
      errorMssgAddress: "",
      errorMssgContact: "",
      errorMssgEmail: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    // DO SOMETHING HERE
    // onAdd({ fName, mName, lName, bDate, address, contact, email });
  };

  // CHECK FIRST NAME
  checkFName = (value) => {
    !value
      ? this.setState({ errorfName: true })
      : this.setState({ errorfName: false });
    !value
      ? this.setState({ errorMssgFName: "Invalid Input" })
      : this.setState({ errorMssgFName: "" });

    if (/[^a-zA-Z ]/.test(value)) {
      this.setState({ errorfName: true });
      this.setState({ errorMssgFName: "A-Z letters only" });
    }
    return this.setState({ fName: value });
  };

  // CHECK MIDDLE NAME
  checkMName = (value) => {
    !value
      ? this.setState({ errorMName: true })
      : this.setState({ errorMName: false });
    !value
      ? this.setState({ errorMssgMName: "Invalid Input" })
      : this.setState({ errorMssgMName: "" });

    if (/[^a-zA-Z ]/.test(value)) {
      this.setState({ errorMName: true });
      this.setState({ errorMssgMName: "A-Z letters only" });
    }
    return this.setState({ mName: value });
  };

  // CHECK LAST NAME
  checkLName = (value) => {
    !value
      ? this.setState({ errorLName: true })
      : this.setState({ errorLName: false });
    !value
      ? this.setState({ errorMssgLName: "Invalid Input" })
      : this.setState({ errorMssgLName: "" });

    if (/[^a-zA-Z ]/.test(value)) {
      this.setState({ errorLName: true });
      this.setState({ errorMssgLName: "A-Z letters only" });
    }
    return this.setState({ lName: value });
  };

  // CHECK BIRTHDATE
  checkBDate = (value) => {
    !value
      ? this.setState({ errorBdate: true })
      : this.setState({ errorBdate: false });

    if (!value) {
      this.setState({ errorBdate: true });
      this.setState({ errorMssgBDate: "Invalid Input" });
    }
    return this.setState({ bDate: value });
  };

  // CHECK ADDRESS
  checkAddress = (value) => {
    !value
      ? this.setState({ errorAddress: true })
      : this.setState({ errorAddress: false });
    !value
      ? this.setState({ setErrorMssgAddress: "Invalid Input" })
      : this.setState({ setErrorMssgAddress: "" });

    if (/[^a-zA-Z 0-9 ,.-]/.test(value)) {
      this.setState({ errorAddress: true });
      this.setState({ setErrorMssgAddress: "Alphanumeric and (, - .) only" });
    }
    return this.setState({ address: value });
  };

  // CHECK CONTACT NUMBER
  checkContactNumber = (value) => {
    !value
      ? this.setState({ errorContact: true })
      : this.setState({ errorContact: false });
    !value
      ? this.setState({ setErrorMssgContact: "Invalid Input" })
      : this.setState({ setErrorMssgContact: "" });

    if (value.length < 11) {
      this.setState({ errorContact: true });
      this.setState({ setErrorMssgContact: "Invalid Input" });
    }

    if (/[^0-9]/.test(value)) {
      this.setState({ errorContact: true });
      this.setState({ setErrorMssgContact: "Invalid Input" });
    }
    return this.setState({ contact: value });
  };

  // CHECK ADDRESS
  checkEmailAddress = (value) => {
    !value
      ? this.setState({ errorEmail: true })
      : this.setState({ errorEmail: false });
    !value
      ? this.setState({ setErrorMssgEmail: "Invalid Input" })
      : this.setState({ setErrorMssgEmail: "" });

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
      this.setState({ errorEmail: true });
      this.setState({ setErrorMssgEmail: "Email Address only" });
    }
    return this.setState({ email: value });
  };

  render() {
    const { title, onAdd } = this.props;
    return (
      <form className="add-form">
        <h3>{title}</h3>
        {/* FIRST NAME INPUT FIELD */}
        <InputField
          iFLabel="First name"
          iFType="text"
          iFPlaceholder="First name"
          iFvalue={this.state.fName}
          onChange={(e) => this.checkFName(e.target.value)}
          iFError={this.state.errorfName}
          iFErrorMessage={this.state.errorMssgFName}
          maxlength="255"
        />

        {/* MIDDLE NAME INPUT FIELD */}
        <InputField
          iFLabel="Middle name"
          iFType="text"
          iFPlaceholder="Middle name"
          iFvalue={this.state.mName}
          onChange={(e) => this.checkMName(e.target.value)}
          iFError={this.state.errorMName}
          iFErrorMessage={this.state.errorMssgMName}
          maxlength="255"
        />

        {/* LAST NAME INPUT FIELD */}
        <InputField
          iFLabel="Last name"
          iFType="text"
          iFPlaceholder="Last name"
          iFvalue={this.state.lName}
          onChange={(e) => this.checkLName(e.target.value)}
          iFError={this.state.errorLName}
          iFErrorMessage={this.state.errorMssgLName}
          maxlength="255"
        />

        {/* BIRTH DATE INPUT FIELD */}
        <InputField
          iFLabel="Birth Date"
          iFType="date"
          iFPlaceholder=""
          iFvalue={this.state.bDate}
          onChange={(e) => this.checkBDate(e.target.value)}
          iFError={this.state.errorBdate}
          iFErrorMessage={this.state.errorMssgBDate}
          maxlength="255"
        />

        {/* ADDRESS INPUT FIELD */}
        <InputFieldTextArea
          iFLabel="Address"
          iFPlaceholder="Address"
          iFvalue={this.state.address}
          onChange={(e) => this.checkAddress(e.target.value)}
          iFError={this.state.errorAddress}
          iFErrorMessage={this.state.errorMssgAddress}
        />

        {/* CONTACT INPUT FIELD */}
        <InputField
          iFLabel="Contact Number"
          iFType="text"
          iFPlaceholder="09#########"
          iFvalue={this.state.contact}
          onChange={(e) => this.checkContactNumber(e.target.value)}
          iFError={this.state.errorContact}
          iFErrorMessage={this.state.errorMssgContact}
          maxlength="11"
        />

        {/* EMAIL INPUT FIELD */}
        <InputField
          iFLabel="Email"
          iFType="text"
          iFPlaceholder="email@gmail.com"
          iFvalue={this.state.email}
          onChange={(e) => this.checkEmailAddress(e.target.value)}
          iFError={this.state.errorEmail}
          iFErrorMessage={this.state.errorMssgEmail}
          maxlength="255"
        />

        <Button text="Save" onClick={() => this.onSubmit()} />
      </form>
    );
  }
}

export default Form2;
