"use client";

import { useId, useState, type FormEvent } from "react";
import { consult, contact } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

type Values = { name: string; email: string; company: string; market: string; service: string; urgency: string; message: string };
type Required = Exclude<keyof Values, "message">;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", company: "", market: "", service: "", urgency: "", message: "" };
const f = consult.form;
const required: Required[] = ["name", "email", "company", "market", "service", "urgency"];

const inputCls =
  "mt-2 block w-full rounded-xl border bg-surface px-4 text-[16px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

function buildMessage(v: Values) {
  const lines = [
    f.intro,
    "",
    `${f.fields.name}: ${v.name}`,
    `${f.fields.email}: ${v.email}`,
    `${f.fields.company}: ${v.company}`,
    `${f.fields.market}: ${v.market}`,
    `${f.fields.service}: ${v.service}`,
    `${f.fields.urgency}: ${v.urgency}`,
  ];
  if (v.message.trim()) lines.push("", v.message.trim());
  return lines.join("\n");
}

export function ConsultForm() {
  const id = useId();
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);

  const set = (k: keyof Values) => (val: string) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  function validate(values: Values): Errors {
    const e: Errors = {};
    required.forEach((k) => {
      if (!values[k].trim()) e[k] = f.errors.required;
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = f.errors.email;
    return e;
  }

  function send(channel: "whatsapp" | "email") {
    const e = validate(v);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const text = buildMessage(v);
    if (channel === "whatsapp") {
      const link = whatsappLink(text);
      setSentLink(link);
      const w = window.open(link, "_blank", "noopener,noreferrer");
      if (!w) window.location.href = link;
    } else {
      const link = `mailto:${contact.email}?subject=${encodeURIComponent(`${f.emailSubject}: ${v.company}`)}&body=${encodeURIComponent(text)}`;
      setSentLink(link);
      window.location.href = link;
    }
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    send("whatsapp");
  }

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${id}-${k}-err`} className="mt-1.5 text-[13.5px] text-[#a3261a]">
        {errors[k]}
      </p>
    ) : null;

  const border = (k: keyof Values) => (errors[k] ? "border-[#a3261a]" : "border-line-strong");
  const aria = (k: keyof Values) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined,
  });

  const pills = (k: "market" | "urgency", options: string[]) => (
    <fieldset>
      <legend className="text-[14px] font-medium">{f.fields[k]}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2" id={`${id}-${k}`} tabIndex={-1} {...aria(k)}>
        {options.map((o) => {
          const checked = v[k] === o;
          return (
            <label
              key={o}
              className={`relative inline-flex h-11 cursor-pointer items-center rounded-full border px-4 text-[15px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                checked ? "border-ink bg-ink text-white" : `${border(k)} bg-surface text-ink-2 hover:border-ink`
              }`}
            >
              <input type="radio" name={k} value={o} checked={checked} onChange={() => set(k)(o)} className="sr-only" />
              {o}
            </label>
          );
        })}
      </div>
      {err(k)}
    </fieldset>
  );

  const text = (k: "name" | "email" | "company", type: string, auto: string) => (
    <div>
      <label htmlFor={`${id}-${k}`} className="text-[14px] font-medium">
        {f.fields[k]}
      </label>
      <input
        id={`${id}-${k}`}
        type={type}
        autoComplete={auto}
        value={v[k]}
        onChange={(e) => set(k)(e.target.value)}
        className={`${inputCls} h-12 ${border(k)}`}
        {...aria(k)}
      />
      {err(k)}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-7 bg-surface p-6 pt-8 shadow-[0_30px_60px_-36px_rgba(0,17,40,0.4)] sm:p-9 sm:pt-11">
      <div className="bar-tri absolute inset-x-0 top-0 h-[3px]" aria-hidden="true" />
      <div className="grid gap-7 sm:grid-cols-2">
        {text("name", "text", "name")}
        {text("email", "email", "email")}
      </div>
      {text("company", "text", "organization")}

      {pills("market", f.markets)}

      <div>
        <label htmlFor={`${id}-service`} className="text-[14px] font-medium">
          {f.fields.service}
        </label>
        <div className="relative">
          <select
            id={`${id}-service`}
            value={v.service}
            onChange={(e) => set("service")(e.target.value)}
            className={`${inputCls} h-12 ${border("service")} appearance-none pr-10 ${v.service ? "" : "text-muted"}`}
            {...aria("service")}
          >
            <option value="">{f.select}</option>
            {f.services.map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 6l4 4 4-4" fill="none" stroke="#5b6478" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {err("service")}
      </div>

      {pills("urgency", f.urgencies)}

      <div>
        <label htmlFor={`${id}-message`} className="text-[14px] font-medium">
          {f.fields.message} <span className="font-normal text-muted">({f.fields.optional})</span>
        </label>
        <textarea
          id={`${id}-message`}
          rows={3}
          value={v.message}
          onChange={(e) => set("message")(e.target.value)}
          className={`${inputCls} border-line-strong py-3`}
        />
      </div>

      <div className="border-t border-line pt-7">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-medium text-white transition-colors hover:bg-accent-ink"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"
              />
            </svg>
            {f.whatsappButton}
          </button>
          <button
            type="button"
            onClick={() => send("email")}
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-ink/25 px-6 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            {f.emailButton}
          </button>
        </div>
        <p className="mt-3 text-[13.5px] text-muted">{f.helper}</p>
        <div aria-live="polite">
          {sentLink && (
            <p className="mt-4 bg-accent-soft px-4 py-3 text-[14px] text-ink">
              {f.sent}{" "}
              <a
                href={sentLink}
                target={sentLink.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-medium text-accent-ink underline underline-offset-4"
              >
                {f.fallback}
              </a>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
