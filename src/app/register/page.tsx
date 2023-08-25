"use client";

import { useRegisterMutation } from "@/redux/features/account/accountApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const rotuer = useRouter();
  const { token } = useAppSelector((state) => state.account);
  const [register, { isLoading, isSuccess, isError, error, data }] =
    useRegisterMutation();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));
    register(formData);
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
                    disabled={isLoading}
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
