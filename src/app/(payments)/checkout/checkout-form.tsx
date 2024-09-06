"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import CheckoutWithRazorpayAndAdmin from "@/components/checkout-razorpay"
import { useRef, useState } from "react"
import { LoaderCircle } from "lucide-react"
import { indianStates } from "@/lib/dummy_data"

export const CustomerDataFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().regex(/^\d{10}$/, {
        message: "Phone number must be 10 digits.",
    }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    state: z.string().min(2, {
        message: "Please select a state.",
    }),
    zipCode: z.string().regex(/^\d{6}(-\d{4})?$/, {
        message: "Please enter a valid ZIP code.",
    }),

})

export function CheckoutForm({ action, loading }: { action: (data: z.infer<typeof CustomerDataFormSchema>) => void, loading: boolean }) {
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loading indicator

    const form = useForm<z.infer<typeof CustomerDataFormSchema>>({
        resolver: zodResolver(CustomerDataFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
        },
    })

    function onSubmit(data: z.infer<typeof CustomerDataFormSchema>) {
        console.log("You submitted the following values:", data)

        setIsSubmitting(true); // Set loading indicator for submission
        console.log("You submitted the following values:", data);


        setIsSubmitting(false); // Clear loading indicator after simulation

        // Here you would typically send this data to your server or payment processor

        localStorage.setItem("checkoutData", JSON.stringify(data));

        action(data); // Trigger action (e.g., redirect to confirmation page)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-2xl space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="johndoe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="1234567890" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input placeholder="New York" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a state" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {indianStates.map(state =>
                                            <SelectItem value={state.name.replaceAll(' ', '-').toLowerCase()}>{state.name}</SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                                <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox


                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                            Save my information for faster checkout
                        </FormLabel>
                        <FormDescription>
                            Your payment information will be stored securely.
                        </FormDescription>
                    </div>
                </FormItem>
                <Button className="w-full" type="submit" disabled={loading}>
                    Complete Purchase
                    {loading || isSubmitting &&
                        <LoaderCircle className="ml-2 animate-spin" />
                    }

                </Button>

            </form>
        </Form>
    )
}