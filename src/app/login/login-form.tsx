"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/auth";
import { signInAction } from "@/lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await signInAction(data);
      console.log("Result from signup action", result);
      if (result.success) {
        toast("Login Success");
        router.push("/");
      } else {
        console.log("Login Failed", result.error);
        toast(`Login Failed: ${result.error}`);
      }
    } catch (error) {
      console.log(error);
      console.log("Login Failed");
    }
    // if (result.success) {
    //   console.log("Login succes");
    //   toast({
    //     title: "Login success",
    //     description: "There was a problem with your request.",
    //   });
    //   // router.push("/courses");
    // } else {
    //   console.log("Login Failed", result.error);
    //   toast({
    //     variant: "destructive",
    //     title: "Login Failed!",
    //     description: result.error,
    //   });
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
