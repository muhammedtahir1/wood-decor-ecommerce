"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const colors_options = [
  {
    id: "red",
    label: "Red",
  },
  {
    id: "blue",
    label: "Blue",
  },

  {
    id: "black",
    label: "Black",
  },
  {
    id: "white",
    label: "White",
  },
  {
    id: "other",
    label: "Let us know on call",
  },
] as const;

const FormSchema = z.object({
  colors: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function CheckboxReactHookFormMultiple() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      colors: ["black"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="colors"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Colors</FormLabel>
                <FormDescription>
                  Select the colors you want to add to your product.
                </FormDescription>
              </div>
              {colors_options.map((color) => (
                <FormField
                  key={color.id}
                  control={form.control}
                  name="colors"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={color.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(color.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, color.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== color.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {color.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
