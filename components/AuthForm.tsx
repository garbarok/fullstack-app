"use client";
import { register, signin } from "@/lib/api";
import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";
import Loader from "./loader";

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already a member?",
  header: "Create Your Account",
  subheader: "Let's get you set up in a few easy steps",
  buttonText: "Sign Up",
};

const signinContent = {
  linkUrl: "/register",
  linkText: "New here? Join us!",
  header: "Welcome Back!",
  subheader: "Sign in to access your account",
  buttonText: "Log In",
};

const initial = { email: "", password: "", firstName: "", lastName: "" };

const AuthForm = ({ mode }) => {
  const [formState, setFormState] = useState({ ...initial });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "register") {
        await register(formState);
      } else {
        await signin(formState);
      }

      router.push("/home");
      setFormState(initial);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const content = mode === "register" ? registerContent : signinContent;

  return (
    <Card>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full">
          <div className="text-center">
            <h2 className="mb-2 text-3xl">{content.header}</h2>
            <p className="tex-lg text-black/25">{content.subheader}</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full py-10">
            {mode === "register" && (
              <div className="mb-8 flex justify-between">
                <div className="pr-2">
                  <div className="mb-4 ml-2 text-lg text-black/50">
                    First Name
                  </div>
                  <Input
                    required
                    placeholder="First Name"
                    value={formState.firstName}
                    className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, firstName: e.target.value }))
                    }
                  />
                </div>
                <div className="pl-2">
                  <div className="mb-4 ml-2 text-lg text-black/50">
                    Last Name
                  </div>
                  <Input
                    required
                    placeholder="Last Name"
                    value={formState.lastName}
                    className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, lastName: e.target.value }))
                    }
                  />
                </div>
              </div>
            )}
            <div className="mb-8">
              <div className="mb-4 ml-2 text-lg text-black/50">Email</div>
              <Input
                required
                type="email"
                placeholder="Email"
                value={formState.email}
                className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
              />
            </div>
            <div className="mb-8">
              <div className="mb-4 ml-2 text-lg text-black/50">Password</div>
              <Input
                required
                value={formState.password}
                type="password"
                placeholder="Password"
                className="border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, password: e.target.value }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span>
                  <Link
                    href={content.linkUrl}
                    className="font-bold text-blue-600"
                  >
                    {content.linkText}
                  </Link>
                </span>
              </div>
              <div>
                <Button type="submit" intent="secondary">
                  {content.buttonText}
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
};

export default AuthForm;
