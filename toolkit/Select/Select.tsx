import { styled } from "@stitches/react";

const SelectList = styled("select", {
  padding: "10px 15px",
});

type Option<T> = { value: T; label: string };

interface SelectProps<T = string> {
  list: Option<T>[];
  onChange?: (value: T) => void;
  className?: string;
}

const Select = <T extends string>({
  list,
  className,
  onChange,
}: SelectProps<T>) => {
  return (
    <SelectList
      onChange={(e) => onChange && onChange(e.target.value as T)}
      className={className}
    >
      {list.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </SelectList>
  );
};

export { Select };
