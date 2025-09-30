import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(16, "Tell me a little more about your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const formErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormValues;
        formErrors[field] = issue.message;
      });
      setErrors(formErrors);
      return;
    }

    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <section id="contact" className="py-24">
      <SectionHeader
        eyebrow="Collaborate"
        title="Let's explore intelligent experiences together"
        description="Tell me a bit about your idea, and I’ll share how we can orchestrate GenAI, immersive design, and measurable outcomes."
        alignment="center"
      />

      <motion.form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your name"
          />

          <Field
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div className="mt-6">
          <TextareaField
            label="How can I help?"
            name="message"
            value={values.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Share the challenge you're tackling, your current stage, or the outcomes you’re seeking."
          />
        </div>

        <motion.button
          type="submit"
          className="mt-8 w-full rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          Send message
        </motion.button>

        {submitted ? (
          <motion.p
            className="mt-4 text-center text-sm text-emerald-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks for reaching out! I’ll get back within two working days.
          </motion.p>
        ) : null}
      </motion.form>
    </section>
  );
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Field({ label, error, className, ...rest }: FieldProps) {
  return (
    <label className="block text-sm font-medium text-slate-300">
      {label}
      <input
        {...rest}
        className={`mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-emerald-300 ${className ?? ""}`}
      />
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </label>
  );
}

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function TextareaField({ label, error, className, ...rest }: TextareaFieldProps) {
  return (
    <label className="block text-sm font-medium text-slate-300">
      {label}
      <textarea
        {...rest}
        className={`mt-2 w-full min-h-[160px] rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-emerald-300 ${className ?? ""}`}
      />
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </label>
  );
}
