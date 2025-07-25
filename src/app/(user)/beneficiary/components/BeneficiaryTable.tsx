import CustomTable from "@/components/tabel/table";
import { Beneficiary } from "@/types/beneficiaryTypes";
import BeneficiaryActions from "./BeneficiaryActions";

interface Props {
  data: Beneficiary[];
  onDelete: (record: Beneficiary) => void;
  onAdd: () => void;
}

export default function BeneficiaryTable({ data, onDelete, onAdd }: Props) {
  const columns = [
    { title: "Account Name", dataIndex: "name" },
    { title: "Client ID", dataIndex: "id" },
    { title: "Currency", dataIndex: "currency" },
    { title: "Bank Name", dataIndex: "bank" },
    {
      title: "Status",
      dataIndex: "status",
      render: (value: unknown) => {
        const status = value as string;
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              status === "Active"
                ? "text-blue-600 bg-blue-100"
                : "text-gray-500 bg-gray-200"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      title: "Action",
      render: (_: unknown, record: Beneficiary) => (
        <BeneficiaryActions record={record} onDelete={onDelete} />
      ),
    },
  ];

  return (
    <CustomTable
      title="Beneficiaries"
      description="All your assigned beneficiaries in one place."
      key="id"
      size="small"
      columns={columns}
      dataSource={data}
      isAddBtn
      btnText="+ Add New Beneficiary"
      onAddBtnClick={onAdd}
      isFilter={false}
      isSearch
      pagination
      exportButton={false}
    />
  );
}
