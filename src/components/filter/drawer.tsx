import { type Dispatch, type ReactNode, type SetStateAction, useEffect } from "react";

export default function FilterDrawer({
  open = false,
  setOpen,
  children,
}: {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={() => setOpen(false)} />

      {/* Drawer panel */}
      <div className="relative z-50 h-full w-[400px] bg-white shadow-lg transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            className="text-gray-500 hover:text-black text-xl"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">{children}</div>
      </div>
    </div>
  );
}

