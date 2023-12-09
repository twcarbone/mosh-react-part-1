interface Props {
  label: string;
  onClick: (label: string) => void;
}

function Button({ label, onClick }: Props) {
  return (
    <button
      className="btn btn-primary"
      onClick={(e) => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
