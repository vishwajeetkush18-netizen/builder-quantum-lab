import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { t } from "@/lib/i18n";

const ROLES = ["ASHA", "Volunteer", "Citizen"] as const;

type Role = (typeof ROLES)[number];

export default function MobileHome() {
  const [role, setRole] = useState<Role>("Volunteer");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    setOtpSent(true);
    // mock: store otp 1234
    sessionStorage.setItem("otp", "1234");
  };

  const verify = async () => {
    if (otp === sessionStorage.getItem("otp")) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ role, phone, token: "mock-token" }),
      );
      alert("Logged in");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-center text-2xl font-semibold">Community Care</h1>
      <div className="grid grid-cols-3 gap-3">
        {ROLES.map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`rounded-xl border p-4 text-sm font-medium ${role === r ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white"}`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="rounded-2xl bg-white/80 p-4 shadow">
        <label className="text-sm font-medium">{t("enterPhone")}</label>
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 98765 43210"
          className="mt-2"
        />
        {!otpSent ? (
          <Button className="mt-3 w-full" onClick={sendOtp}>
            {t("getOtp")}
          </Button>
        ) : (
          <div className="mt-3 space-y-2">
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP (1234)"
            />
            <Button className="w-full" onClick={verify}>
              {t("verify")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
