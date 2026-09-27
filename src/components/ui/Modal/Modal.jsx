import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "../Button/Button";

export default function Modal({ isOpen, onClose, title, children, footer }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop with native v2 animation utilities */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition duration-300 ease-out data-closed:opacity-0"
      />

      {/* Wrapper to center the panel */}
      <div className="fixed inset-0 flex min-h-0.5 items-center justify-center p-4 text-center sm:p-6 overflow-y-auto">
        {/* Core Dialog Panel component ensures bulletproof accessibility */}
        <DialogPanel
          transition
          className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700 transition duration-300 ease-out data-closed:scale-95 data-closed:opacity-0
          max-h-[80vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-6 py-4">
            <DialogTitle className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {title}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 text-left">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 dark:border-slate-700 px-6 py-4 sm:flex-row sm:justify-end">
              {footer}
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
