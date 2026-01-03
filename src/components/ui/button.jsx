export function Button({ children, asChild = false, variant = "default", href = "#" }) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition text-sm flex items-center justify-center";
  const styles =
    variant === "outline"
      ? "border border-red-500 text-red-400 hover:bg-red-500/10"
      : "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-900/40";

  const Comp = asChild ? "a" : "button";

  return (
    <Comp
      className={`${base} ${styles}`}
      href={asChild ? href : undefined}
      target={asChild ? "_blank" : undefined}
      rel={asChild ? "noopener noreferrer" : undefined}
    >
      {children}
    </Comp>
  );
}
