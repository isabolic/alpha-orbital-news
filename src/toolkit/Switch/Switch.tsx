import { css } from "@stitches/react";

const container = css({
  position: "relative",
  display: "inline-block",
  width: "60px",
  height: "30px",
});

const slider = css({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#ccc",
  transition: ".4s",
  borderRadius: "34px",
  "&:before": {
    position: "absolute",
    content: "",
    height: "24px",
    width: "24px",
    left: "4px",
    bottom: "3px",
    backgroundColor: "white",
    transition: ".4s",
    borderRadius: "50%",
  },
});

const input = css({
  opacity: 0,
  width: 0,
  height: 0,
  "&:checked + span": {
    backgroundColor: "#2196F3",
  },
  "&:focus + span": {
    boxShadow: "0 0 1px #2196F3",
  },
  "&:checked + span:before": {
    transform: "translateX(28px)",
  },
});

interface SwitchProps {
  className?: string;
  onChange?: (toggle: boolean) => void;
}

const Switch = ({ onChange }: SwitchProps) => {
  return (
    <label className={container()}>
      <input
        type="checkbox"
        className={input()}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className={slider()}></span>
    </label>
  );
};

export { Switch };
