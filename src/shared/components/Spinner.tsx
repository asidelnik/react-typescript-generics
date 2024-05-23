export default function Spinner() {
  return (
    <div className="spinner-outer">
      <div className="spinner-inner" />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}