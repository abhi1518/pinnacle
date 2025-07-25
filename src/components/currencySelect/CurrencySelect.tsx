"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import flags from "emoji-flags";
import { Label } from "@/components/ui/label";

const currencyOptions = [
  { code: "USD", countryCode: "US", label: "US Dollar" },
  { code: "INR", countryCode: "IN", label: "Indian Rupee" },
  { code: "EUR", countryCode: "EU", label: "Euro" },
  { code: "GBP", countryCode: "GB", label: "British Pound" },
  // Add more as needed
];

interface CurrencySelectProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

export default function CurrencySelect({
  onChange,
  label,
  className = "",
}: CurrencySelectProps) {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const formatted = currencyOptions.map(({ code, countryCode }) => ({
      value: code,
      label: `${flags.countryCode(countryCode)?.emoji || ""} ${code}`,
    }));
    setOptions(formatted);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <Label className="text-[#8D8D99]">{label}</Label>}
      <Select
        options={options}
        onChange={(e) => onChange(e?.value || "")}
        placeholder="Select currency"
        classNamePrefix="react-select text-[hsl(var(--text-card-foreground))]"
        styles={{
          control: (provided, state) => ({
            ...provided,
            backgroundColor: "hsl(var(--form-input))",
            border: "1px solid hsl(var(--custom-border))",
            borderRadius: "0.5rem",
            padding: "2px",
            boxShadow: state.isFocused ? "0 0 0 1px #A855F7" : undefined,
            "&:hover": {
              borderColor: "#A855F7",
            },
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 50,
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "#000",
          }),
        }}
      />
    </div>
  );
}
