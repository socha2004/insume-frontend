interface SpinnerProps {
  size?: string | "w-8 h-8";
  color?: string | "border-blue-600";
}

export const Spinner = (props: SpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${props.size} animate-spin rounded-full border-4 border-solid border-blue-400 ${props.color} border-t-transparent`}
        role="status"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
}