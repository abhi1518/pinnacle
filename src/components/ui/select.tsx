'use client';

import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';
import Select from 'react-select';

type Option = { label: string; value: string };

type FormSelectProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  options: Option[];
};

export function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  options,
}: FormSelectProps<T>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            value={options.find((opt) => opt.value === field.value)}
            onChange={(selected) => field.onChange(selected?.value)}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: `hsl(var(--card))`,
                borderColor: `hsl(var(--custom-border))`,
                color: `hsl(var(--card-foreground))`,
                boxShadow: 'none',
                borderRadius: '0.5rem',
                minHeight: '42px',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: `hsl(var(--card))`,
                color: `hsl(var(--card-foreground))`,
                zIndex: 50,
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? 'hsl(var(--muted))'
                  : 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                cursor: 'pointer',
              }),
              singleValue: (base) => ({
                ...base,
                color: `hsl(var(--card-foreground))`,
              }),
              input: (base) => ({
                ...base,
                color: `hsl(var(--card-foreground))`,
              }),
              placeholder: (base) => ({
                ...base,
                color: `hsl(var(--muted-foreground))`,
              }),
            }}
            classNamePrefix="react-select"
          />
        )}
      />
    </div>
  );
}
