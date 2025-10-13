// src/components/options/getInTouch/option1.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

// Zod schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Option1 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent! Thank you for reaching out.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-RGB(255, 250, 240) py-20 px-4"> 
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-3xl text-center font-semibold mb-2">Send Message</h3>
          <p className="text-center text-gray-500 mb-6">I'll respond within 24 hours</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border rounded-lg text-gray-900"
                {...register("name")}
              />
              <p className="text-red-500 text-sm mt-1">{formState?.errors?.name?.message}</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 border rounded-lg text-gray-900"
                {...register("email")}
              />
              <p className="text-red-500 text-sm mt-1">{formState?.errors?.email?.message}</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                className="w-full p-3 border rounded-lg text-gray-900 min-h-[160px] resize-none"
                {...register("message")}
              ></textarea>
              <p className="text-red-500 text-sm mt-1">{formState?.errors?.message?.message}</p>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold flex justify-center items-center gap-2 bg-black text-white hover:bg-blue-700 transition ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t">
            <p className="text-center text-sm text-gray-500 mb-4">Or connect with me on social media</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option1;
