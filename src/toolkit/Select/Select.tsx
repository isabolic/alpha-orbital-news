import { styled } from "@stitches/react";

const SelectList = styled("select", {
  $padding: "10px 15px",
  padding: "$$padding",
});

type Option<T> = { value: T; label: string };

interface SelectProps<T = string> {
  list: Option<T>[];
  onChange?: (value: T) => void;
  value: T | string;
  empty?: boolean;
  className?: string;
}

const Select = <T extends string>({
  list,
  className,
  empty = false,
  value,
  onChange,
}: SelectProps<T>) => {
  const options = [...list, { value: "", label: "" }];
  return (
    <SelectList
      onChange={(e) => onChange && onChange(e.target.value as T)}
      value={value}
      className={className}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </SelectList>
  );
};

export { Select };
