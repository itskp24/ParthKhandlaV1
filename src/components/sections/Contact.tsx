import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest("POST", "/api/contacts", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    contactMutation.mutate(data);
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:+917984920020" className="hover:text-primary">
                    +91 7984920020
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:khandlaparth68@gmail.com" className="hover:text-primary">
                    khandlaparth68@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://linkedin.com/in/khandla-parth-790433228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Limbdi 363421, Gujarat</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...form.register("name")}
                      className={form.formState.errors.name ? "border-destructive" : ""}
                    />
                    {form.formState.errors.name && (
                      <span className="text-sm text-destructive">
                        {form.formState.errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...form.register("email")}
                      className={form.formState.errors.email ? "border-destructive" : ""}
                    />
                    {form.formState.errors.email && (
                      <span className="text-sm text-destructive">
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      {...form.register("phone")}
                      className={form.formState.errors.phone ? "border-destructive" : ""}
                    />
                    {form.formState.errors.phone && (
                      <span className="text-sm text-destructive">
                        {form.formState.errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className={`min-h-[120px] ${form.formState.errors.message ? "border-destructive" : ""
                        }`}
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <span className="text-sm text-destructive">
                        {form.formState.errors.message.message}
                      </span>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}