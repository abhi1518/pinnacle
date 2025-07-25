// components/KycProgressTracker.tsx
import { Info, Pause, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    label: "Submitted",
    status: "completed",
    icon: <CheckCircle className="w-4 h-4" />,
  },
  {
    id: 2,
    label: "Under Review",
    status: "pending",
    icon: <Pause className="w-4 h-4" />,
  },
  {
    id: 3,
    label: "Pending",
    status: "pending",
    icon: <Pause className="w-4 h-4" />,
  },
];

export default function KycProgressTracker() {
  return (
    <div className="bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] rounded-2xl p-4 sm:p-6 shadow-md w-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            {/* <span className="inline-block">🧑‍💼</span>  */}
            KYC Submitted Successfully
          </h2>
          <p className="text-sm mt-1 text-gray-600">
            Verification usually takes 24–48 hours — hang tight!
          </p>
        </div>
        <Info className="w-4 h-4 text-gray-400 mt-1" />
      </div>

      {/* Progress bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex items-center w-full sm:w-auto relative">
            {/* Circle with icon */}
            <div
              // className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              //   step.status === "completed"
              //     ? "bg-black text-white border-black"
              //     : "bg-white dark:bg-[#5E59831F] text-gray-600 border-gray-300"
              // } text-sm font-medium z-10`}

              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--transfer-background))] border border-[hsl(var(--custom-border))] text-sm font-medium z-10`}
            >
              {step.icon}
              <span>{step.id}. {step.label}</span>
            </div>

            {/* Connector line (except last step) */}
            {idx < steps.length - 1 && (
              <div className="hidden sm:block absolute left-full top-1/2 w-80 h-px bg-gray-300 ml-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
