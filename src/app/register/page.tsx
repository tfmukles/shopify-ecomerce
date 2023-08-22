"use client";

import { ShopifyCustomer } from "@/lib/shopify/types";
import { createUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type key = keyof ShopifyCustomer;

const Register = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { error, user } = useAppSelector((state) => state.user);
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));
    startTransition(async () => {
      dispatch(createUser(formData as any))
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("I am rejected");
        });
    });
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
                    name="email"
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
                  <button
                    disabled={isPending}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p className="mt-3">
                Already hava an account ?<a href="/login"> Login</a>
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
