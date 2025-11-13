import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [liveData, setLiveData] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: liveData,
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert([data]);
      if (error) throw error;
      toast.success("Message sent successfully!");
      form.reset();
      setLiveData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        {/* Grid layout with Form (left) and Code Preview (right) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-card border border-border rounded-2xl p-6 shadow-md"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your name"
                        onChange={(e) => {
                          field.onChange(e);
                          setLiveData((prev) => ({ ...prev, name: e.target.value }));
                        }}
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="your.email@example.com"
                        onChange={(e) => {
                          field.onChange(e);
                          setLiveData((prev) => ({ ...prev, email: e.target.value }));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Your message..."
                        rows={5}
                        onChange={(e) => {
                          field.onChange(e);
                          setLiveData((prev) => ({ ...prev, message: e.target.value }));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>

          {/* Code Preview */}
          <div className="bg-gray-900 text-green-400 font-mono rounded-2xl p-6 shadow-inner">
            <pre className="text-sm overflow-auto">
{`const button = document.querySelector('#sendBtn');
const message = {
  name: "${liveData.name}",
  email: "${liveData.email}",
  message: "${liveData.message}",
  date: "${new Date().toLocaleDateString()}",
};

button.addEventListener('click', () => {
  form.send(message);
});`}
            </pre>
          </div>
        </div>

        {/* Contact Links - Horizontal */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          <a
            href="mailto:nyashakufa29@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            <Mail className="w-5 h-5" /> Email
            
          </a>
          <a
            href="https://github.com/TheaNyashaKufa8910"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="www.linkedin.com/in/nyasha-thea-kufa-5218272a8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>

        <div className="mt-20 text-center text-muted-foreground">
          <p>© 2025 Nyasha Thea Kufa. Built with React & TypeScript.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

