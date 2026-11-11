import { comparison } from "@/content/site";

function Mark({ v, highlight = false }: { v: number; highlight?: boolean }) {
  const label = comparison.legend.find((l) => l.v === v)!.label;
  const fill = highlight ? "#008eff" : "#001128";
  return (
    <span className="inline-flex items-center justify-center" title={label}>
      <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
        {v === 2 && <circle cx="8" cy="8" r="6" fill={fill} />}
        {v === 1 && (
          <>
            <circle cx="8" cy="8" r="5.4" fill="none" stroke={fill} strokeWidth="1.2" />
            <path d="M8 2.6a5.4 5.4 0 0 1 0 10.8Z" fill={fill} />
          </>
        )}
        {v === 0 && <circle cx="8" cy="8" r="5.4" fill="none" stroke="#c9c5ba" strokeWidth="1.2" />}
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}
export function Comparison() {
  const last = comparison.providers.length - 1;
  return (
    <div>
      <ul className="space-y-3 md:hidden">
        {comparison.rows.map((r) => (
          <li key={r.label} className="rounded-2xl bg-surface p-4">
            <p className="text-[15px] font-medium leading-snug text-ink">{r.label}</p>
            <div className="mt-4 grid grid-cols-5 gap-1 text-center">
              {r.values.map((v, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-1.5 py-2 ${i === last ? "bg-gradient-to-b from-ink to-[#003a7a] text-white" : ""}`}
                >
                  <Mark v={v} highlight={i === last} />
                  <span className={`text-[10.5px] leading-tight ${i === last ? "font-semibold" : "text-muted"}`}>
                    {comparison.short[i]}
                  </span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">What each type of provider usually covers, compared with Nexply</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[34%] pb-4 pr-4 align-bottom">
                <span className="sr-only">Service</span>
              </th>
              {comparison.providers.map((p, i) => (
                <th
                  key={p}
                  scope="col"
                  className={`px-3 pb-4 text-center align-bottom text-[14px] font-medium leading-tight ${
                    i === last ? "relative rounded-t-2xl bg-gradient-to-b from-ink to-[#003a7a] text-white" : "text-ink-2"
                  }`}
                >
                  {i === last ? (
                    <span className="serif block pt-4 text-[22px] tracking-[-0.01em]">{p}</span>
                  ) : (
                    p
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((r) => (
              <tr key={r.label} className="border-b border-ink/10 transition-colors hover:bg-white/70">
                <th scope="row" className="py-4 pr-4 text-[15px] font-normal leading-snug text-ink">
                  {r.label}
                </th>
                {r.values.map((v, i) => (
                  <td key={i} className={`px-3 py-4 text-center ${i === last ? "bg-accent/[0.07]" : ""}`}>
                    <Mark v={v} highlight={i === last} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-[13.5px] text-muted md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {comparison.legend.map((l) => (
            <li key={l.v} className="inline-flex items-center gap-2">
              <Mark v={l.v} />
              {l.label}
            </li>
          ))}
        </ul>
        <p>{comparison.note}</p>
      </div>
    </div>
  );
}
