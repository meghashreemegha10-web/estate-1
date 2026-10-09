import { useState } from "react";
import { consent, enquiryAck, interestedIn, lookingFor } from "@/data/copy";

const field =
  "w-full border border-current/30 bg-inherit px-3 py-3 text-base placeholder:text-current/50";

export function EnquiryForm({ tone }: { tone: "paper" | "ink" }) {
  const [sent, setSent] = useState(false);
  const label = tone === "paper" ? "text-paper" : "text-ink";

  if (sent) {
    return <p className={`max-w-xl text-lg leading-relaxed ${label}`}>{enquiryAck}</p>;
  }

  return (
    <form
      className={`grid gap-4 ${label}`}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="grid gap-2 text-sm">
        I'm looking for
        <select name="looking" className={field} defaultValue={lookingFor[0]}>
          {lookingFor.map((option) => (
            <option key={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Full name*
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-2 text-sm">
        Mobile number*
        <input name="mobile" required autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="grid gap-2 text-sm">
        Interested in
        <select name="interest" className={field} defaultValue="">
          <option value="" className="text-ink">
            Select an option
          </option>
          {interestedIn.map((option) => (
            <option key={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="grid gap-2">
        <legend className="text-sm">Site visit required?</legend>
        <label className="flex items-center gap-2">
          <input type="radio" name="visit" value="yes" />
          Yes, schedule a site visit
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="visit" value="no" defaultChecked />
          Not yet — just information
        </label>
      </fieldset>
      <label className="grid gap-2 text-sm">
        Message
        <textarea name="message" rows={4} className={field} />
      </label>
      <button
        type="submit"
        className={tone === "paper" ? "bg-paper px-5 py-3 text-clay" : "bg-clay px-5 py-3 text-paper"}
      >
        Send enquiry
      </button>
      <p className="text-sm leading-relaxed opacity-80">{consent}</p>
    </form>
  );
}
