export default function Footer() {
  return (
    <footer className="text-center mt-16 text-gray-500 dark:text-gray-400">
      <div className="space-y-2">
        <p className="text-sm">
          Built with ❤️ by{" "}
          <a
            href="https://seancoughlin.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sean Coughlin
          </a>
        </p>
        <div className="flex justify-center space-x-4 text-xs">
          <a
            href="https://portfolio.seancoughlin.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:underline"
          >
            Portfolio
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://github.com/Scc33/counter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:underline"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}
