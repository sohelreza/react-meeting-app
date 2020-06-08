import React, { Component } from "react";
import firebase from "./Firebase";
import { navigate } from "@reach/router";
import FormError from "./FormError";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    let registrationInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        navigate("/meetings");
      })
      .catch((error) => {
        error.message !== null
          ? this.setState({ errorMessage: error.message })
          : this.setState({ errorMessage: null });
      });
  }

  render() {
    return (
      <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Login</h3>

                  <section className="form-group">
                    {this.state.errorMessage !== null ? (
                      <FormError theMessage={this.state.errorMessage} />
                    ) : null}
                    <label
                      className="form-control-label sr-only"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </section>

                  <section className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </section>

                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
