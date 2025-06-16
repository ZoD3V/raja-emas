"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
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
import { useFormStatus } from "react-dom";
import { Loader2Icon } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction] = useActionState(signInCredentials, null);
  const { pending } = useFormStatus();

  return (
    <div className={cn("flex flex-col gap-6 font-body", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          {state?.message && (
            <div className="text-red-500 text-sm mb-4">{state?.message}</div>
          )}
        </CardHeader>
        <CardContent>
          <div></div>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  // onChange={handleInputChange}
                  required
                />
                <div className="text-red-500 text-sm">
                  {state?.error?.email}
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" required />
                <div className="text-red-500 text-sm">
                  {state?.error?.password}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {pending ? (
                  <Button disabled>
                    <Loader2Icon className="animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
