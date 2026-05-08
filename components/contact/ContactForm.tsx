"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { Send, Star } from "lucide-react";
import "react-phone-number-input/style.css";
import { toast } from "sonner";
import { SyncLoader } from 'react-spinners';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const formSchema = z.object({
  request_type: z.enum(["contact", "feedback"], {
    error: "Please select the nature of your request",
  }),
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email(),
  phone: z.string().min(1, "Phone number is required"),
  rating: z.number().min(1).max(5).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const labelClass = "text-[10px] font-sans-ui tracking-[0.18em] uppercase text-navy/50 font-normal";
const inputClass = "rounded-none border-navy/20 bg-transparent focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-0 font-sans-ui text-navy placeholder:text-navy/30";

export default function ContactFeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const requestType = form.watch("request_type");
  const isFeedback = requestType === "feedback";

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
    form.setValue("rating", starRating);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const payload = {
        fullName: `${data.first_name} ${data.last_name}`,
        email: data.email,
        phone: data.phone,
        message: data.message,
        requestType: data.request_type,
        ...(isFeedback && { rating: data.rating }),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setRating(0);
        toast("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* Request Type */}
        <FormField
          control={form.control}
          name="request_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>
                Nature of your request
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-none border-navy/20 font-sans-ui text-navy focus:ring-1 focus:ring-gold focus:ring-offset-0">
                    <SelectValue placeholder="Select request type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-none font-sans-ui">
                  <SelectItem value="contact">Contact / Inquiry</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-sans-ui" />
            </FormItem>
          )}
        />

        {/* Name + Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>First name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" className={inputClass} {...field} type="text" />
                </FormControl>
                <FormMessage className="text-xs font-sans-ui" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" className={inputClass} {...field} type="text" />
                </FormControl>
                <FormMessage className="text-xs font-sans-ui" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={() => (
              <FormItem>
                <FormLabel className={labelClass}>Phone number</FormLabel>
                <FormControl>
                  <PhoneInputWithCountry
                    name="phone"
                    control={form.control}
                    rules={{ required: "Phone number is required" }}
                    defaultCountry="NG"
                    placeholder="Phone number"
                    className="flex h-10 w-full border border-navy/20 bg-transparent px-3 py-2 text-sm font-sans-ui text-navy placeholder:text-navy/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage className="text-xs font-sans-ui" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" className={inputClass} {...field} type="email" />
                </FormControl>
                <FormMessage className="text-xs font-sans-ui" />
              </FormItem>
            )}
          />
        </div>

        {/* Star rating — feedback only */}
        {isFeedback && (
          <FormField
            control={form.control}
            name="rating"
            render={() => (
              <FormItem>
                <FormLabel className={labelClass}>Rate your experience</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-1 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <Star
                          className={`h-7 w-7 transition-colors duration-200 ${
                            star <= (hoveredRating || rating)
                              ? "fill-gold text-gold"
                              : "text-navy/20 hover:text-gold/50"
                          }`}
                        />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="ml-3 text-xs font-sans-ui text-navy/50">
                        {rating} / 5
                      </span>
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-sans-ui" />
              </FormItem>
            )}
          />
        )}

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>
                {isFeedback ? "Your feedback" : "Your message"}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={isFeedback ? "Share your feedback..." : "How can we help you?"}
                  className={`${inputClass} resize-none min-h-[120px]`}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-sans-ui" />
            </FormItem>
          )}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group relative overflow-hidden w-full border border-navy text-navy mt-2 px-8 py-4 text-[10px] font-sans-ui tracking-[0.22em] uppercase inline-flex items-center justify-center gap-3 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]" />
          <span className="relative group-hover:text-white transition-colors duration-300 flex items-center gap-3">
            {loading ? (
              <SyncLoader size={4} color="#0D1B2A" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {loading ? 'Sending...' : isFeedback ? 'Send Feedback' : 'Send Message'}
          </span>
        </button>

      </form>
    </Form>
  );
}
