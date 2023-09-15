import type { ChangeEvent } from "react";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectComponentProps {
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const SelectBox: React.FC<SelectComponentProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
