interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Buttons = ({ children, onClick, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
