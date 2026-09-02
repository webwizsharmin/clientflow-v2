import { Search } from "@boxicons/react";

export default function Searchbar() {
  return (
    <form
      role="search"
      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
    >
      <Search className="text-xl text-slate-500" />
      <input
        type="search"
        aria-label="Search Site Content"
        placeholder="Search . . ."
        className="flex-1 border-0 focus:ring-1 bg-transparent text-slate-700 dark:text-slate-200"
      />
    </form>
  );
}
