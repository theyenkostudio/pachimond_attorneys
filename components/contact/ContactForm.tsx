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
import { Button } from "../ui/button";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setRating(0);
        toast("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Request Type Selector */}
          <FormField
            control={form.control}
            name="request_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  What is the nature of your request?
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="contact">Contact/Inquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name and Contact Fields */}
          <div className="mb-3 lg:mb-0 space-y-3 lg:space-y-0 grid lg:grid-cols-2 lg:gap-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">First name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Last name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={() => (
                <FormItem>
                  <FormLabel className="font-semibold">Phone number</FormLabel>
                  <FormControl>
                    <PhoneInputWithCountry
                      name="phone"
                      control={form.control}
                      rules={{ required: "Phone number is required" }}
                      defaultCountry="NG"
                      placeholder="Enter phone number"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
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
                  <FormLabel className="font-semibold">Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Rating Section - Only shows for feedback */}
          {isFeedback && (
            <FormField
              control={form.control}
              name="rating"
              render={() => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    How would you rate your experience?
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="focus:outline-none transition-colors duration-200"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= (hoveredRating || rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300 hover:text-yellow-300"
                            } transition-colors duration-200`}
                          />
                        </button>
                      ))}
                      {rating > 0 && (
                        <span className="ml-2 text-sm text-gray-600">
                          {rating} out of 5 stars
                        </span>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  {isFeedback ? "Your feedback" : "Enter your message"}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      isFeedback
                        ? "Share your feedback with us..."
                        : "Enter your message"
                    }
                    className="resize-none w-full min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-10 bg-gradient-to-r from-[#093F61] to-[#009CFF] text-white p-5 text-base font-semibold rounded-lg inline-flex items-center gap-2 hover:from-[#0a4a75] hover:to-[#00a8ff] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <SyncLoader size={6} color="white" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                {isFeedback ? "Send Feedback" : "Send Message"}
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}