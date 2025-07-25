"use client";
import { useState } from "react";
import ConfirmDeleteModal from "@/components/confirmModal/ConfirmModal";
import BeneficiaryTable from "./components/BeneficiaryTable";
import { Beneficiary } from "@/types/beneficiaryTypes";
import { mockData } from "./components/mockData";

export default function BeneficiariesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary | null>(null);

  const handleDeleteClick = (record: Beneficiary) => {
    setSelectedBeneficiary(record);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting:", selectedBeneficiary);
    setIsModalOpen(false);
    setSelectedBeneficiary(null);
    // TODO: Add delete logic
  };

  return (
    <>
      <BeneficiaryTable
        data={mockData}
        onDelete={handleDeleteClick}
        onAdd={() => alert("Open Add New Beneficiary modal")}
      />
      <ConfirmDeleteModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Beneficiary"
        description="Are you sure you want to delete this beneficiary? This action cannot be undone."
      />
    </>
  );
}
