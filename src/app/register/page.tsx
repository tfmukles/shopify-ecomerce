"use client";

import { createUser } from "@/redux/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user?.token) {
      router.push("/");
    }
  }, [user?.token, router]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));
    startTransition(async () => {
      try {
        const response = await dispatch(createUser(formData as any)).unwrap();
        toast.success("Account is created sucessfully!");
        localStorage.setItem("user", JSON.stringify(response));
        router.push("/");
      } catch (error: AxiosError | any) {
        const errorResponse = error.response?.data as any;
        if (errorResponse?.message) {
          toast.error(errorResponse.message ?? "Something went wrong");
          return;
        }

        toast.error("Something went wrong");
      }
    });
  };

  return (
    <section className="signin-page account">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="block text-center">
              <Link className="logo" href="/">
                <Image
                  width={169}
                  height={40}
                  src="/images/logo.png"
                  alt="logo"
                />
              </Link>
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
                Already hava an account ?<Link href="/login"> Login</Link>
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
