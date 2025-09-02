import { t, getLang } from "@/lib/i18n";

const tips: Record<string, string[]> = {
  en: [
    "Boil water before drinking.",
    "Wash hands with soap for 20 seconds.",
    "Use covered containers for water storage.",
    "Keep toilets clean and sanitized.",
  ],
  hi: [
    "पीने से पहले पानी उबालें।",
    "साबुन से 20 सेकंड तक हाथ धोएं।",
    "पानी को ढक्कन वाले बर्तन में रखें।",
    "शौचालय साफ और स्वच्छ रखें।",
  ],
  rg: [
    "Boil water before drinking.",
    "Wash hands with soap for 20 seconds.",
    "Use covered containers for water storage.",
    "Keep toilets clean and sanitized.",
  ],
};

export default function Awareness() {
  const lang = getLang();
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">{t("awareness")}</h2>
      <div className="grid gap-3">
        {tips[lang].map((tip, i) => (
          <div key={i} className="rounded-xl border bg-white p-4 shadow">
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}
