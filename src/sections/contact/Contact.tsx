import { useEffect, useRef, useState } from "react";
import { EarthCanvas, TitleHeader } from "../../components";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const cleanValue = DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
    setForm((prevForm) => ({ ...prevForm, [name]: cleanValue }));
    setToast({ type: "success", message: "Message sent successfully!" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      if (!form.name || !form.email || !form.message) {
        alert("All fields are required.");
        setLoading(false);
        return;
      }

      if (!emailRegex.test(form.email)) {
        alert("Please enter a valid email address.");
        setLoading(false);
        return;
      }

      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setToast({ type: "success", message: "Message sent successfully!" });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding relative">
      {/* <StarsCanvas /> */}
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What’s your good name?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      required
                    />
                  </div>
                  {toast && (
                    <div
                      className={`mt-3 flex items-center justify-center gap-2 rounded px-4 py-3 text-white shadow text-sm  ${
                        toast.type === "success"
                          ? "bg-emerald-600"
                          : "bg-red-600"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={
                            toast.type === "success"
                              ? "M5 13l4 4L19 7"
                              : "M6 18L18 6M6 6l12 12"
                          }
                        />
                      </svg>
                      <span className="">{toast.message}</span>
                    </div>
                  )}

                  <button type="submit" disabled={loading}>
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? "Sending..." : "Send Message"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              </>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className=" w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
