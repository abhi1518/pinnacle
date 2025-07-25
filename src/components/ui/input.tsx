'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
}

export function FormInput({ name, label, className = '', ...rest }: Props) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className='text-[#8D8D99]'>{label}</FormLabel>
          <FormControl>
            <input
              {...field}
              {...rest}
              className="w-full p-2 border border-[hsl(var(--custom-border))] rounded-lg bg-[hsl(var(--form-input))]"
              readOnly={rest.readOnly}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
