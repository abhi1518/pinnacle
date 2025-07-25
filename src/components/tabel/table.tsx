"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import TableFilter from "../filter";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CustomTableProps<T> {
  title?: string;
  description?: string;
  isFilter?: boolean;
  isSearch?: boolean;
  btnText?: string;
  isAddBtn?: boolean;
  rowKey?: string | ((record: T) => string);
  size?: "small" | "middle" | "large";
  pagination?: boolean;
  columns: Array<{
    title: string;
    dataIndex?: keyof T | string;
    render?: (value: unknown, record: T, index: number) => React.ReactNode;
  }>;
  dataSource: T[];
  onAddBtnClick?: () => void;
  filterComponent?: React.ReactNode;
  exportButton?: boolean;
  pageSize?: number;
}

const CustomTable = <T extends object>({
  title = "",
  description = "",
  isFilter = true,
  isSearch = true,
  btnText = "",
  isAddBtn = false,
  rowKey,
  size = "middle",
  pagination = false,
  columns,
  dataSource,
  onAddBtnClick,
  filterComponent,
  exportButton = true,
  pageSize = 10,
}: CustomTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = pagination
    ? dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : dataSource;

  const totalPages = Math.ceil(dataSource.length / pageSize);

  const getPadding = () => {
    switch (size) {
      case "small":
        return "py-2";
      case "large":
        return "py-5";
      default:
        return "py-3";
    }
  };

  return (
    <Card>
      <CardHeader>
        {title || isAddBtn ? (
          <div className="flex items-center justify-between mb-0">
            {title && <h2 className="text-2xl font-semibold">{title}</h2>}
            {isAddBtn && (
              <Button
                className="bg-[#6836F8] hover:bg-[#5429d1] text-white rounded-full px-6 py-2 transition-all duration-200"
                onClick={onAddBtnClick}
              >
                {btnText}
              </Button>
            )}
          </div>
        ) : null}
        {description && (
          <p className="text-sm text-muted-foreground mb-0">{description}</p>
        )}

        <div className="flex items-center justify-between">
          {isSearch && (
            <div className="flex-1 max-w-md">
              <TableFilter isSearch={true} isFilter={false}>
                {filterComponent}
              </TableFilter>
            </div>
          )}
          <div className="flex items-center gap-3">
            {isFilter && (
              <TableFilter isSearch={false} isFilter={true}>
                {filterComponent}
              </TableFilter>
            )}
            {exportButton && (
              <Button variant="outline" className="text-sm">
                Export
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="overflow-auto">
        <div className="rounded-2xl border border-[hsl(var(--custom-border))] shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-muted-foreground text-sm font-semibold border-[hsl(var(--custom-border))]">
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className={`text-left px-4 ${getPadding()} border-b border-[hsl(var(--custom-border))]`}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((record, index) => (
                <tr
                  key={
                    typeof rowKey === "function"
                      ? String(rowKey(record))
                      : record[rowKey as keyof T] !== undefined
                      ? String(record[rowKey as keyof T])
                      : String(index)
                  }
                  className="hover:bg-muted/30 transition-colors duration-200 border-b border-[hsl(var(--custom-border))] last:border-b-0"
                >
                  {columns.map((col, colIndex) => {
                    let value: unknown;
                    if (
                      col.dataIndex &&
                      typeof col.dataIndex === "string" &&
                      col.dataIndex in record
                    ) {
                      value = record[col.dataIndex as keyof T];
                    } else if (
                      col.dataIndex &&
                      typeof col.dataIndex !== "string"
                    ) {
                      value = record[col.dataIndex as keyof T];
                    } else {
                      value = undefined;
                    }

                    return (
                      <td
                        key={colIndex}
                        className={`px-4 ${getPadding()} text-sm text-card-foreground`}
                      >
                        {col.render
                          ? col.render(value, record, index)
                          : (value as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Custom Pagination */}
        {pagination && (
          <div className="flex justify-center items-center mt-6">
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-xs"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-sm text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  const isActive = page === currentPage;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ${
                          isActive
                            ? "bg-indigo-600 text-white focus:outline-indigo-600"
                            : "text-gray-900 ring-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span
                        key={page}
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                }
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-sm text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomTable;
