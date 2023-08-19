"use client";

import { shopifyFetch } from "@/lib/shopify";
import { customerCreate } from "@/lib/shopify/mutations/customer";

const Register = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formObject: { [key: string]: unknown } = {};
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const data = shopifyFetch<any>({
      query: customerCreate,
      variables: formObject,
    });

    console.log(data);
  };
  return (
    <section className="signin-page account">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="block text-center">
              <a className="logo" href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
              <h2 className="text-center">Create Your Account</h2>
              <form onSubmit={submitHandler} className="text-left clearfix">
                <div className="form-group">
                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </form>
              <p className="mt-3">
                Already hava an account ?<a href="login.html"> Login</a>
              </p>
              <p>
                <a href="forget-password.html"> Forgot your password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
