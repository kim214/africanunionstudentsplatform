import "./banter-loader.css";

const Loader = ({ className = "" }: { className?: string }) => (
  <div className={`banter-loader ${className}`} role="status" aria-label="Loading">
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="banter-loader__box" />
    ))}
  </div>
);

export default Loader;
