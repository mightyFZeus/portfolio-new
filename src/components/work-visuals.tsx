import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type WorkVisualProps = {
  visual: "rag" | "law" | "wallet" | "system";
  className?: string;
};

export function WorkVisual({ visual, className }: WorkVisualProps) {
  const visuals = {
    rag: <RagVisual />,
    law: <LawVisual />,
    wallet: <WalletVisual />,
    system: <SystemVisual />,
  };

  return (
    <div className={cn("work-visual relative overflow-hidden rounded-lg border border-line bg-paper shadow-artifact", className)}>
      {visuals[visual]}
    </div>
  );
}

function WindowChrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-[360px] bg-paper-deep">
      <div className="flex items-center justify-between border-b border-line bg-paper px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-moss" />
        </div>
        <p className="font-mono text-[11px] text-muted">{title}</p>
      </div>
      {children}
    </div>
  );
}

function RagVisual() {
  return (
    <WindowChrome title="doc-explain/session">
      <div className="grid gap-4 p-4 md:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-3">
          <div className="rounded-md border border-line bg-paper p-4">
            <p className="text-sm font-semibold text-ink">Lease Agreement.pdf</p>
            <div className="mt-3 h-2 rounded-full bg-line">
              <div className="progress-line h-2 w-4/5 rounded-full bg-moss" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted">
              <span>18 pages</span>
              <span>encrypted</span>
              <span>pgvector</span>
              <span>ready</span>
            </div>
          </div>
          <div className="rounded-md border border-line bg-ink p-4 text-paper">
            <p className="font-mono text-[11px] text-paper/70">worker queue</p>
            {["extract text", "chunk document", "embed vectors", "classify"].map((item, index) => (
              <div key={item} className="mt-3 flex items-center gap-3 text-sm">
                <span className="queue-step grid h-6 w-6 place-items-center rounded-full bg-paper text-xs text-ink">{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-line bg-paper p-4">
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-md bg-coral/20" />
            <div>
              <p className="font-semibold">Can the tenant terminate early?</p>
              <p className="mt-2 max-w-[34ch] text-sm leading-6 text-muted">
                Yes, but the notice period depends on the contract term and any clause that changes statutory defaults.
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {["Clause 8.2 mentions thirty days written notice.", "Section 13 gives the landlord response window.", "Conversation memory used for follow-up context."].map((line) => (
              <div key={line} className="rounded-md border border-line bg-paper-deep px-3 py-2 text-sm text-ink">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

function LawVisual() {
  return (
    <WindowChrome title="housing-agent/search">
      <div className="p-4">
        <div className="rounded-md border border-line bg-paper p-4">
          <p className="text-sm font-semibold">Search tenancy law</p>
          <div className="mt-3 rounded-md border border-line bg-paper-deep px-3 py-3 text-sm text-muted">
            What can a tenant do when a landlord locks the apartment?
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-md border border-line bg-paper p-4">
            <p className="font-semibold">Short answer</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-moss/35" />
              <div className="h-2 w-11/12 rounded-full bg-moss/35" />
              <div className="h-2 w-8/12 rounded-full bg-moss/35" />
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              The UI streams the answer in chunks, then keeps the official excerpt close enough for trust.
            </p>
          </div>
          <div className="rounded-md border border-line bg-ink p-4 text-paper">
            <p className="text-sm font-semibold">Official excerpt</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-paper/35" />
              <div className="h-2 w-10/12 rounded-full bg-paper/35" />
              <div className="h-2 w-9/12 rounded-full bg-paper/35" />
            </div>
            <button className="mt-5 rounded-md border border-paper/35 px-3 py-2 text-sm">Copy excerpt</button>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

function WalletVisual() {
  return (
    <div className="grid min-h-[390px] place-items-center bg-paper-deep p-6">
      <div className="w-full max-w-[260px] rounded-[2rem] border-[10px] border-ink bg-paper p-4 shadow-artifact">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-line" />
        <div className="rounded-lg bg-ink p-4 text-paper">
          <p className="text-sm text-paper/70">Wallet balance</p>
          <p className="mt-2 text-3xl font-black">N128,500</p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-md bg-paper px-3 py-1 text-sm text-ink">Tip</span>
            <span className="rounded-md border border-paper/35 px-3 py-1 text-sm">Withdraw</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
            <div key={number} className="grid aspect-square place-items-center rounded-md border border-line bg-paper-deep font-semibold">
              {number}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-md bg-coral px-4 py-3 text-center font-semibold text-ink">Send tip</div>
      </div>
    </div>
  );
}

function SystemVisual() {
  return (
    <WindowChrome title="mobile/app-foundation">
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div className="rounded-md border border-line bg-paper p-4">
          <p className="font-semibold">Navigation</p>
          <div className="mt-4 space-y-3">
            {["Auth stack", "Main app", "Settings", "Feature flows"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-moss" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-line bg-paper p-4">
          <p className="font-semibold">Shared layer</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {["api", "store", "hooks", "styles", "assets", "utils"].map((item) => (
              <span key={item} className="rounded-md bg-paper-deep px-3 py-2 font-mono text-[12px] text-muted">
                src/{item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-line bg-ink p-4 text-paper md:col-span-2">
          <p className="font-semibold">Why it matters</p>
          <p className="mt-2 text-sm leading-6 text-paper/70">
            App foundations decide whether new screens feel easy to add or painful to maintain. This one keeps team work visible.
          </p>
        </div>
      </div>
    </WindowChrome>
  );
}
