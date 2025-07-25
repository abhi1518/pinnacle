import { Pencil, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Beneficiary } from "@/types/beneficiaryTypes";

interface Props {
  record: Beneficiary;
  onDelete: (record: Beneficiary) => void;
}

export default function BeneficiaryActions({ record, onDelete }: Props) {
  return (
    <div className="flex gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="p-1 rounded-4xl cursor-pointer border-[1px] border-[#6836F880] bg-[#6836F81A]">
              <Pencil size={16} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="cursor-pointer rounded-4xl p-1 border-[1px] border-[#FF565880] bg-[#FF56581A]"
              onClick={() => onDelete(record)}
            >
              <Trash2 size={18} color="#FF5658" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
