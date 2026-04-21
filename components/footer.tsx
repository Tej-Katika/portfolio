export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          Tejashwar Reddy Katika
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
