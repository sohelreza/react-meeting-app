import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div className="display-4 text-primary mt-3 mb-2">Meeting Log</div>
            <p className="lead">
              {user == null && "this is a paragraph"}
              {user && `Hello ${user.displayName}`}
            </p>
            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2">
                  Login
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Meetings
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
