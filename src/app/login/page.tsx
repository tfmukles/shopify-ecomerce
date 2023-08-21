"use client";

import { useProvider } from "@/lib/state/context";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Login = () => {
  const router = useRouter();
  const {
    user: { dispatch, state },
  } = useProvider();
  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget as HTMLFormElement),
    );
    try {
      const res = await fetch("/api/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      dispatch({ type: "success", payload: data });
      alert("Thank for login");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className="signin-page account">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="block text-center">
              <a className="logo" href="index.html">
                <Image
                  width={169}
                  height={39}
                  src="/images/logo.png"
                  alt="logo"
                />
              </a>
              <h2 className="text-center">Welcome Back</h2>
              <form
                onSubmit={submitHanlder}
                className="text-left clearfix"
                action="index.html"
              >
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
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <p className="mt-3">
                New in this site ?
                <Link href="/register"> Create New Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
