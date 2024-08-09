"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "~/components/ui/use-toast";
import { Button } from "../button";
import styles from "./form.module.css";
import { FormSchema } from "./formSchema";

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data, undefined, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={clsx({
                  "text-red-500": form.formState.errors.name,
                })}
              >
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g Joh Doe"
                  {...field}
                  className={clsx(`w-full ${styles.placholderCustom}`, {
                    "border-red-500": form.formState.errors.name,
                  })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={clsx({
                  "text-red-500": form.formState.errors.email,
                })}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g johndoe@gmail.com"
                  {...field}
                  className={clsx(`w-full ${styles.placholderCustom}`, {
                    "border-red-500": form.formState.errors.email,
                  })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={clsx({
                  "text-red-500": form.formState.errors.number,
                })}
              >
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g 08123456789"
                  {...field}
                  className={clsx(`w-full ${styles.placholderCustom}`, {
                    "border-red-500": form.formState.errors.number,
                  })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex pt-3">
          <Button type="submit" className="ml-auto" >Add New User</Button>
        </div>
      </form>
    </Form>
  );
}
