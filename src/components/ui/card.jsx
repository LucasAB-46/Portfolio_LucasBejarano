export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-700 bg-gray-800/60 shadow-xl shadow-black/50 hover:border-red-500 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
