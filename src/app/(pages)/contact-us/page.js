"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/Button";
import { cn } from "../../../lib/utils";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  message: "",
};

const collageTiles = [
  {
    className:
      "left-[0%] top-[0%] h-[160px] w-[168px] rounded-[44px] bg-[#ffb33d]",
    accent: "bg-[#2a1742]",
    type: "phone",
  },
  {
    className:
      "left-[60%] top-[0%] h-[188px] w-[138px] rounded-[34px] bg-[#cb925f]",
    accent: "bg-[#f2d5bf]",
    type: "dress",
  },
  {
    className:
      "left-[41%] top-[7%] h-[164px] w-[154px] rounded-[28px] bg-[#d9c8ff]",
    accent: "bg-[#eb5a53]",
    type: "twins",
  },
  {
    className:
      "left-[0%] top-[21%] h-[220px] w-[168px] rounded-[44px] bg-[#c8dbe4]",
    accent: "bg-[#7d5d4d]",
    type: "profile",
  },
  {
    className:
      "left-[28%] top-[29%] h-[158px] w-[162px] rounded-[50%] bg-[#f1a84f]",
    accent: "bg-[#f6ece6]",
    type: "hands",
  },
  {
    className:
      "left-[55%] top-[29%] h-[242px] w-[176px] rounded-[46px] bg-[#efd7c6]",
    accent: "bg-[#b08557]",
    type: "curly",
  },
  {
    className:
      "left-[28%] top-[50%] h-[170px] w-[162px] rounded-[34px] bg-[#d892c7]",
    accent: "bg-[#1b376f]",
    type: "blue",
  },
  {
    className:
      "left-[0%] top-[57%] h-[218px] w-[168px] rounded-[44px] bg-[#9c8e5f]",
    accent: "bg-[#53412d]",
    type: "cap",
  },
  {
    className:
      "left-[28%] top-[75%] h-[170px] w-[162px] rounded-[50%] bg-[#e3834a]",
    accent: "bg-[#f2e4d4]",
    type: "brush",
  },
  {
    className:
      "left-[55%] top-[82%] h-[154px] w-[176px] rounded-[50%] bg-[#1620a7]",
    accent: "bg-[#cf79d3]",
    type: "neon",
  },
];

function validateForm(values) {
  const nextErrors = {};

  if (!values.name.trim()) nextErrors.name = "Name is required.";
  if (!values.email.trim()) {
    nextErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) nextErrors.phone = "Phone number is required.";
  if (!values.company.trim()) nextErrors.company = "Company name is required.";
  if (!values.designation.trim())
    nextErrors.designation = "Designation is required.";
  if (!values.message.trim()) nextErrors.message = "Message is required.";

  return nextErrors;
}

function CollageFigure({ type, accent }) {
  const isPhone = type === "phone";
  const isDress = type === "dress";
  const isTwins = type === "twins";
  const isProfile = type === "profile";
  const isHands = type === "hands";
  const isCurly = type === "curly";
  const isBlue = type === "blue";
  const isCap = type === "cap";
  const isBrush = type === "brush";
  const isNeon = type === "neon";

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit] border border-[#ffe0dd]/85 shadow-[0_14px_28px_rgba(0,0,0,0.22)]">
      <div className={cn("absolute inset-0", accent)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.34),transparent_36%)]" />
      <div className="absolute inset-0">
        {isPhone ? (
          <>
            <div className="absolute left-[14%] top-[22%] h-[42%] w-[17%] rounded-[20px] bg-[#ffd3c5] rotate-[-14deg]" />
            <div className="absolute left-[27%] top-[28%] h-[14%] w-[22%] rounded-full bg-[#24111f] rotate-[18deg]" />
            <div className="absolute left-[14%] top-[18%] h-[24%] w-[18%] rounded-[18px] bg-[#f3e4ff]" />
            <div className="absolute right-[14%] top-[16%] h-[70%] w-[30%] rounded-[30px] bg-[#2c1c45] opacity-90" />
          </>
        ) : null}

        {isDress ? (
          <>
            <div className="absolute left-[16%] top-[10%] h-[78%] w-[36%] rounded-[28px] bg-[#f0d2b6]" />
            <div className="absolute right-[18%] top-[8%] h-[84%] w-[36%] rounded-[28px] bg-[#ad754c]" />
            <div className="absolute left-[18%] top-[32%] h-[42%] w-[28%] rounded-[24px] bg-[#f4c7a4]" />
            <div className="absolute right-[20%] top-[30%] h-[48%] w-[28%] rounded-[24px] bg-[#7a4c2f]" />
          </>
        ) : null}

        {isTwins ? (
          <>
            <div className="absolute left-[18%] top-[14%] h-[68%] w-[23%] rounded-[22px] bg-[#fcd0c6]" />
            <div className="absolute left-[44%] top-[14%] h-[68%] w-[23%] rounded-[22px] bg-[#fec1bc]" />
            <div className="absolute left-[8%] top-[24%] h-[44%] w-[28%] rounded-[20px] bg-[#fff0ef]" />
            <div className="absolute right-[8%] top-[24%] h-[44%] w-[28%] rounded-[20px] bg-[#ffe3e2]" />
          </>
        ) : null}

        {isProfile ? (
          <>
            <div className="absolute left-[18%] top-[20%] h-[62%] w-[30%] rounded-[32px] bg-[#5d4337]" />
            <div className="absolute left-[42%] top-[10%] h-[72%] w-[28%] rounded-[34px] bg-[#d7b79c]" />
            <div className="absolute right-[18%] top-[16%] h-[60%] w-[24%] rounded-[30px] bg-[#f1eee7]" />
          </>
        ) : null}

        {isHands ? (
          <>
            <div className="absolute left-[20%] top-[26%] h-[44%] w-[18%] rounded-[18px] bg-[#ffd4bf]" />
            <div className="absolute left-[35%] top-[18%] h-[54%] w-[16%] rounded-[18px] bg-[#e9d4ff]" />
            <div className="absolute right-[18%] top-[18%] h-[44%] w-[18%] rounded-[18px] bg-[#9c5d37]" />
            <div className="absolute left-[14%] bottom-[12%] h-[12%] w-[26%] rounded-full bg-[#fff7ea]" />
          </>
        ) : null}

        {isCurly ? (
          <>
            <div className="absolute left-[16%] top-[14%] h-[30%] w-[30%] rounded-full bg-[#8e5e36]" />
            <div className="absolute left-[32%] top-[10%] h-[58%] w-[42%] rounded-[36px] bg-[#f3d2b2]" />
            <div className="absolute left-[24%] top-[18%] h-[42%] w-[28%] rounded-[32px] bg-[#f5e5cf]" />
          </>
        ) : null}

        {isBlue ? (
          <>
            <div className="absolute left-[16%] top-[18%] h-[58%] w-[28%] rounded-[26px] bg-[#e6b2db]" />
            <div className="absolute left-[38%] top-[14%] h-[66%] w-[24%] rounded-[26px] bg-[#1c3d8a]" />
            <div className="absolute right-[18%] top-[18%] h-[40%] w-[22%] rounded-[22px] bg-[#f8d1d9]" />
          </>
        ) : null}

        {isCap ? (
          <>
            <div className="absolute left-[16%] top-[18%] h-[42%] w-[22%] rounded-full bg-[#33281d]" />
            <div className="absolute left-[32%] top-[20%] h-[50%] w-[30%] rounded-[26px] bg-[#d2d6dc]" />
            <div className="absolute right-[14%] bottom-[16%] h-[20%] w-[20%] rounded-full bg-[#f2d6b4]" />
          </>
        ) : null}

        {isBrush ? (
          <>
            <div className="absolute left-[15%] top-[28%] h-[42%] w-[22%] rounded-[26px] bg-[#e5d9cc]" />
            <div className="absolute right-[24%] top-[16%] h-[50%] w-[18%] rounded-[18px] bg-[#6f4a31]" />
            <div className="absolute right-[16%] top-[24%] h-[38%] w-[12%] rounded-[14px] bg-[#352a24]" />
          </>
        ) : null}

        {isNeon ? (
          <>
            <div className="absolute left-[26%] top-[6%] h-[60%] w-[34%] rounded-[30px] bg-[#7d2d9b]" />
            <div className="absolute left-[18%] top-[18%] h-[26%] w-[18%] rounded-[18px] bg-[#a962d9]" />
            <div className="absolute right-[18%] bottom-[10%] h-[16%] w-[26%] rounded-full bg-[#f3d4ff]" />
          </>
        ) : null}
      </div>
    </div>
  );
}

function CollageTile({ className, type, accent }) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden border border-[#ffe0dd]/85 shadow-[0_18px_34px_rgba(0,0,0,0.18)]",
        className,
      )}
    >
      <CollageFigure type={type} accent={accent} />
    </div>
  );
}

function InputField({ label, error, className, ...props }) {
  return (
    <label className={cn("block", className)}>
      <span className="sr-only">{label}</span>
      <input
        {...props}
        aria-invalid={Boolean(error)}
        className={cn(
          "h-[58px] w-full rounded-[16px] border border-[#6f1113] bg-[#110405] px-5 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#ff2b1f] focus:bg-[#160607]",
          error && "border-[#ff5a3c] focus:border-[#ff5a3c]",
        )}
      />
      {error ? (
        <p className="mt-2 text-xs font-medium text-[#ff8b7f]">{error}</p>
      ) : null}
    </label>
  );
}

export default function ContactUsPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(process.env.URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        setFeedback(data.message || "Thanks — your message is ready to send.");
        setForm(initialForm);
        setErrors({});
      } else {
        setStatus("error");
        setFeedback(
          data.message || "Please fix the highlighted fields and try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setFeedback("Unable to submit right now. Please try again.");
    }
  }

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* 🎬 LEFT SIDE VIDEO */}
      <div className="absolute left-0 top-0 h-full w-[65%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* 🔥 FADE OUT RIGHT SIDE */}
        <div className="absolute top-0 right-0 h-full w-[40%] bg-gradient-to-r from-transparent to-black" />
      </div>

      {/* 🧾 FORM */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 sm:px-10 lg:px-20">
        <section className="w-full max-w-[620px]">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white">
            Let’s build your brand’s <br />
            success story together!
          </h1>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-4 md:grid-cols-2">
              <InputField
                label="Name"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                autoComplete="name"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                autoComplete="email"
              />
              <InputField
                label="Phone number"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                autoComplete="tel"
              />
              <InputField
                label="Company name"
                name="company"
                placeholder="Company name"
                value={form.company}
                onChange={handleChange}
                error={errors.company}
                autoComplete="organization"
              />
              <InputField
                label="Designation"
                name="designation"
                placeholder="Designation"
                value={form.designation}
                onChange={handleChange}
                error={errors.designation}
                className="md:col-span-1"
              />
            </div>

            <label className="mt-5 block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your message here"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                className={cn(
                  "mt-0 w-full resize-none rounded-[16px] border border-[#6f1113] bg-[#110405] px-5 py-4 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#ff2b1f] focus:bg-[#160607]",
                  errors.message && "border-[#ff5a3c] focus:border-[#ff5a3c]",
                )}
              />
              {errors.message ? (
                <p className="mt-2 text-xs font-medium text-[#ff8b7f]">
                  {errors.message}
                </p>
              ) : null}
            </label>

            {status === "error" ? (
              <p className="mt-4 rounded-2xl border border-[#6f1113] bg-[#2a0a0b] px-4 py-3 text-sm font-medium text-[#ff8b7f]">
                {feedback || "Please fix the highlighted fields and try again."}
              </p>
            ) : null}

            {status === "success" ? (
              <p className="mt-4 rounded-2xl border border-[#6f1113] bg-[#0f1f14] px-4 py-3 text-sm font-medium text-[#b4f0c0]">
                {feedback || "Thanks — your message is ready to send."}
              </p>
            ) : null}

            <div className="mt-6">
              <Button className="h-14 w-full rounded-full bg-[#ff2b1f] text-[16px] hover:bg-[#e51f17]">
                Submit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
