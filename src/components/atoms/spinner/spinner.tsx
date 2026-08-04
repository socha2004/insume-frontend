export const Spinner = ({ size = "w-8 h-8", color = "border-blue-600" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${size} animate-spin rounded-full border-4 border-solid border-blue-400 ${color} border-t-transparent`}
        role="status"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
}