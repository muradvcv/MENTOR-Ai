"use client";

import Link from "next/link";
import { Form, TextField, Label, Input, FieldError, Button } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

   
    // Success
    router.push("/");
    router.refresh();
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-2xl border border-purple-600 bg-zinc-950 p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Login to your account
        </p>

        <Form
          className="flex flex-col gap-5"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) =>
              value.includes("@") ? null : "Enter a valid email"
            }
          >
            <Label className="text-white">Email</Label>
            <Input
              placeholder="Enter your email"
              className="rounded-xl border border-purple-600 bg-zinc-900 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) =>
              value.length >= 8 ? null : "Minimum 8 characters"
            }
          >
            <Label className="text-white">Password</Label>
            <Input
              placeholder="Enter your password"
              className="rounded-xl border border-purple-600 bg-zinc-900 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            />
            <FieldError />
          </TextField>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-purple-400"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 py-3 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:from-purple-600 hover:to-violet-400"
          >
            <Check />
            Login
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Dont have an account?{" "}
          <Link href="/auth/register" className="text-purple-400">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}