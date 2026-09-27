const MainContent = ({ children }) => {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-auto">
      {children}
    </main>
  );
};

export default MainContent;
