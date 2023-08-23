"use client";

import { getUser } from "@/redux/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, isError, error, user } = useAppSelector(
    (state) => state.user,
  );

  useEffect(() => {
    if (user?.token) {
      router.push("/");
    }
  }, [user?.token, router]);

  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget as HTMLFormElement),
    );
    try {
      const response = await dispatch(getUser(formData as any)).unwrap();
      localStorage.setItem("user", JSON.stringify(response));
      toast.success("Login sucessfully!");
      router.push("/");
    } catch (error: AxiosError | any) {
      const errorResponse = error.response?.data as any;
      if (errorResponse?.message) {
        toast.error(errorResponse.message ?? "Something went wrong");
        return;
      }
      toast.error("Something went wrong");
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
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="btn btn-primary"
                  >
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
