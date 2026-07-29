"use client";

import Link from "next/link";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    console.log(data);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">

      <div className="absolute left-0 top-20  rounded-full bg-purple-700/30 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="relative w-full max-w-2xl rounded-2xl border border-purple-600/40 bg-zinc-950 p-6 shadow-[0_0_40px_rgba(168,85,247,0.25)]">

        <div className="mb-6 text-center">

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Register to get started
          </p>

        </div>


        <Form
          className="flex flex-col gap-4"
          render={(props) => <form {...props} />}
          onSubmit={handleSubmit}
        >

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <TextField isRequired name="name">
              <Label className="mb-1 text-sm text-purple-300">
                Full Name
              </Label>

              <Input placeholder="Enter your name" className="rounded-xl border border-purple-600 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500" />

              <FieldError />
            </TextField>


            <TextField isRequired name="email" type="email">
              <Label className="mb-1 text-sm text-purple-300">
                Email
              </Label>

              <Input placeholder="Enter your email" className="rounded-xl border border-purple-600 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500" />

              <FieldError />
            </TextField>


            <TextField name="image">
              <Label className="mb-1 text-sm text-purple-300">
                Image URL
              </Label>

              <Input placeholder="Profile image url" className="rounded-xl border border-purple-600 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500" />
            </TextField>


            <TextField isRequired name="password" type="password">
              <Label className="mb-1 text-sm text-purple-300">
                Password
              </Label>

              <Input placeholder="Enter password" className="rounded-xl border border-purple-600 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500" />

              <FieldError />
            </TextField>

          </div>


          <Button
            type="submit"
            className="mt-10 w-full rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02]"
          >
            <Check />
            Create Account
          </Button>


        </Form>


        <p className="mt-5 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-purple-400 hover:text-purple-300">
            Login
          </Link>
        </p>


      </div>

    </main>
  );
}