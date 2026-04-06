export default function Page() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold">AI Trust Design Checklist</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Based on Buzz Usborne&apos;s &ldquo;Designing AI experiences people actually use&rdquo; &mdash; Applied to:
          Contacts Search + Event Analyzer
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">The 4 Forces</h2>
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          <li>
            <strong>Trust</strong> &mdash; users must be able to validate, shape, and override AI
          </li>
          <li>
            <strong>Value Perception</strong> &mdash; users must immediately see why the AI is worth their effort
          </li>
          <li>
            <strong>Cognitive Effort</strong> &mdash; mental energy to use the AI must be low
          </li>
          <li>
            <strong>Cost of Failure</strong> &mdash; stakes of an AI mistake must match its autonomy level
          </li>
        </ol>
      </section>

      <ChecklistSection
        title="Contacts Search"
        groups={[
          {
            label: "Trust",
            items: [
              { done: true, text: "Three-tier safety model (Low/Medium/High) — controllability over perfection" },
              { done: true, text: "HITL for ticket assignment and email — human validates before AI acts" },
              { done: true, text: "Full preview before confirm on high-safety actions" },
              { done: true, text: "Phase sequencing — read-only first, write actions later" },
              { done: true, text: "Thumbs up/down feedback (Epic 5) — calibration through use" },
              { done: false, text: "No data stewardship messaging — how is user data handled/processed?" },
            ],
          },
          {
            label: "Value Perception",
            items: [
              { done: true, text: "Proactive intelligence (Epic 5) — surfaces value before user asks" },
              { done: true, text: "Data quality flags — demonstrates value on bad data unprompted" },
              { done: true, text: '"8-step workflows → single sentence" is the stated value prop' },
              { done: true, text: '"Show don\'t configure" UX principle' },
              { done: false, text: "No designed first-open state — value requires imagination, not demonstration" },
            ],
          },
          {
            label: "Cognitive Effort",
            items: [
              { done: false, text: "No first-message / blank page mitigation — user faces empty chat input" },
              { done: false, text: "No example prompts or suggested actions surfaced in UI" },
              { done: false, text: "44 pre-defined intents exist in system prompt but are invisible to users" },
              { done: false, text: "Chat interface depends on user knowing what to ask — fragile design" },
            ],
          },
          {
            label: "Cost of Failure",
            items: [
              { done: true, text: "Read-only search (Epic 1) — zero cost if wrong" },
              { done: true, text: "All write actions require human confirmation" },
              { done: true, text: "Thumbs down on suggestion = low-stakes calibration moment" },
              { done: false, text: 'No designed "mediocre first interaction" onboarding — first use may disappoint' },
            ],
          },
        ]}
      />

      <ChecklistSection
        title="Event Analyzer"
        groups={[
          {
            label: "Trust",
            items: [
              { done: true, text: "Manual trigger — user initiates, human always validates output" },
              { done: true, text: "What/where/why/recommendation per finding — fully interrogable output" },
              { done: true, text: "Webhook (autonomous) deferred to V2 — autonomy sequenced correctly" },
              { done: true, text: "Findings-only in V1 — no automated remediation, human always acts" },
              { done: false, text: "No feedback on findings — can't flag false positives, no calibration loop" },
              { done: false, text: "No data stewardship messaging" },
            ],
          },
          {
            label: "Value Perception",
            items: [
              { done: true, text: "Surfaces completeness gaps, config mismatches, readiness gates proactively" },
              { done: true, text: "Time-aware severity — same finding escalates as event date approaches" },
              { done: true, text: "Single trigger, structured output — easy to use" },
              {
                done: true,
                text: 'Specific findings ("Agenda session at 2pm missing a speaker") not generic advice',
              },
            ],
          },
          {
            label: "Cognitive Effort",
            items: [
              { done: true, text: "User reacts to findings — no articulation burden, no blank page" },
              { done: true, text: "Ring 1+2 prompt architecture absorbs all analytical reasoning internally" },
              { done: true, text: "Severity-sorted markdown output — no cognitive load in reading results" },
              { done: true, text: "No prompt engineering required from user" },
            ],
          },
          {
            label: "Cost of Failure",
            items: [
              { done: true, text: "Analysis-only output — human decides what to act on" },
              { done: true, text: "<10% false positive rate is an explicit NFR" },
              { done: true, text: "Webhook (higher autonomy) is V2 — not before trust is established" },
              { done: false, text: "No false-positive flagging — repeated bad findings erode trust with no fix" },
            ],
          },
        ]}
      />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Priority Gaps to Address</h2>
        <div className="overflow-hidden rounded-lg border text-sm">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-2 text-left font-medium">#</th>
                <th className="px-4 py-2 text-left font-medium">Gap</th>
                <th className="px-4 py-2 text-left font-medium">Project</th>
                <th className="px-4 py-2 text-left font-medium">Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                {
                  n: 1,
                  gap: "No blank-page mitigation — chat opens empty",
                  project: "Contacts Search",
                  fix: "Agent opens with 3–5 context-aware suggested actions",
                },
                {
                  n: 2,
                  gap: "No feedback on analyzer findings",
                  project: "Event Analyzer",
                  fix: 'Add "mark as incorrect" / thumbs on findings',
                },
                {
                  n: 3,
                  gap: "44 intents invisible to users",
                  project: "Contacts Search",
                  fix: "Surface example prompts or suggested actions in UI",
                },
                {
                  n: 4,
                  gap: "No data stewardship transparency",
                  project: "Both",
                  fix: "Brief visible note on how data is used",
                },
                {
                  n: 5,
                  gap: "No onboarding for new users",
                  project: "Contacts Search",
                  fix: "Low-stakes first interaction that shows capability",
                },
                {
                  n: 6,
                  gap: "V2 webhook needs trust criteria",
                  project: "Event Analyzer",
                  fix: "Define what trust threshold must be met before enabling",
                },
              ].map((row) => (
                <tr key={row.n} className="hover:bg-muted/30">
                  <td className="px-4 py-2 text-muted-foreground">{row.n}</td>
                  <td className="px-4 py-2">{row.gap}</td>
                  <td className="px-4 py-2 text-muted-foreground">{row.project}</td>
                  <td className="px-4 py-2">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function ChecklistSection({
  title,
  groups,
}: {
  title: string;
  groups: { label: string; items: { done: boolean; text: string }[] }[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label} className="rounded-lg border p-4 space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{group.label}</h3>
            <ul className="space-y-1.5">
              {group.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className={item.done ? "text-green-500 mt-0.5" : "text-red-400 mt-0.5"}>
                    {item.done ? "✓" : "✗"}
                  </span>
                  <span className={item.done ? "" : "text-muted-foreground"}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
