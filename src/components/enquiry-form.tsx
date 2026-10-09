import { useState } from "react";
import { consent, enquiryAck, interestedIn, lookingFor } from "@/data/copy";
import { Send, CheckCircle2 } from "lucide-react";

const field =
  "w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-linen placeholder:text-white/40 outline-none transition-all focus:border-terracotta focus:bg-white/10 focus:ring-1 focus:ring-terracotta";

export function EnquiryForm({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-6 text-linen">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="size-6 text-emerald-400 shrink-0" />
          <h4 className="font-display text-xl font-bold text-white">Enquiry Received</h4>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-linen/90">{enquiryAck}</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 text-linen"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-linen/85">
        I'm looking for
        <select name="looking" className={field} defaultValue={lookingFor[0]}>
          {lookingFor.map((option) => (
            <option key={option} value={option} className="bg-[#1F3630] text-linen">
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-linen/85">
          Full name*
          <input
            name="name"
            required
            placeholder="e.g. Rahul Sharma"
            autoComplete="name"
            className={field}
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-linen/85">
          Mobile number*
          <input
            name="mobile"
            required
            placeholder="+91 98765 43210"
            autoComplete="tel"
            inputMode="tel"
            className={field}
          />
        </label>
      </div>

      <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-linen/85">
        Interested in Project / Service
        <select name="interest" className={field} defaultValue="">
          <option value="" className="bg-[#1F3630] text-linen">
            Select a project or service...
          </option>
          {interestedIn.map((option) => (
            <option key={option} value={option} className="bg-[#1F3630] text-linen">
              {option}
            </option>
          ))}
        </select>
      </label>

      <fieldset className="grid gap-2">
        <legend className="text-xs font-semibold uppercase tracking-wider text-linen/85">
          Site visit required?
        </legend>
        <div className="flex flex-wrap gap-4 pt-1">
          <label className="flex items-center gap-2 text-sm text-linen/90 cursor-pointer">
            <input
              type="radio"
              name="visit"
              value="yes"
              className="accent-terracotta size-4"
            />
            <span>Yes, schedule a site visit</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-linen/90 cursor-pointer">
            <input
              type="radio"
              name="visit"
              value="no"
              defaultChecked
              className="accent-terracotta size-4"
            />
            <span>Not yet — just information</span>
          </label>
        </div>
      </fieldset>

      <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-linen/85">
        Message / Requirement Details
        <textarea
          name="message"
          rows={3}
          placeholder="Mention plot size, location preference, or construction requirements..."
          className={field}
        />
      </label>

      <button
        type="submit"
        className="sweep flex items-center justify-center gap-2 rounded-full bg-clay py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-terracotta hover:text-pine hover:shadow-xl cursor-pointer"
      >
        <Send className="size-4" />
        <span>Send Enquiry</span>
      </button>

      <p className="text-xs leading-relaxed text-linen/60">{consent}</p>
    </form>
  );
}
