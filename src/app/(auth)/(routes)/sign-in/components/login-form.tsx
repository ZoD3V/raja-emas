"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInCredentials } from "@/lib/action";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name)
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
  const handleSubmit = async (e: React.FormEvent) => {
    console.log('submit')
    e.preventDefault();
    console.log(state)

    // Mengonversi data form ke FormData
    const formData = new FormData();
    formData.append("email", state.email);
    formData.append("password", state.password);

    // Panggil signUpCredentials dengan FormData
    const result = await signInCredentials(null, formData);

    console.log(result); // Hasil dari signUpCredentials
  };

  return (
    <div className={cn("flex flex-col gap-6 font-body", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
