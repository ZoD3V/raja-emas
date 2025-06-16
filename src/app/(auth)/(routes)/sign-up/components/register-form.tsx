"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpCredentials } from "@/lib/action";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    errors: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Handle form change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: "", // Reset error message when input changes
      },
    }));
  };

  // Handle form submit
  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      password: "",
    };

    if (!state.name) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!state.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email is not valid";
      valid = false;
    }

    if (!state.password) {
      errors.password = "Password is required";
      valid = false;
    }

    setState((prevState) => ({
      ...prevState,
      errors,
    }));

    return valid;
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return; // If form is not valid, stop the submit
    }

    // Mengonversi data form ke FormData
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("password", state.password);

    // Panggil signUpCredentials dengan FormData
    const result = await signUpCredentials(null, formData);

    console.log(result); // Hasil dari signUpCredentials
  };
  
  return (
    <div className={cn("flex flex-col gap-6 font-body", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="username"
                  value={state.name}
                  onChange={handleInputChange}
                  required
                />
                {state.errors.name && (
                  <span className="text-red-500 text-sm">{state.errors.name}</span>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  value={state.email}
                  onChange={handleInputChange}
                  required
                />
                {state.errors.email && (
                  <span className="text-red-500 text-sm">{state.errors.email}</span>
                )}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={state.password}
                  onChange={handleInputChange}
                  required
                />
                {state.errors.password && (
                  <span className="text-red-500 text-sm">{state.errors.password}</span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
