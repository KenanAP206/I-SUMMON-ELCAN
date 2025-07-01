import React from 'react';
import { Select as MuiSelect, MenuItem, Popper, Paper, ClickAwayListener } from '@mui/material';

export function SelectContent({ children, ...props }) {
  return (
    <Popper {...props}>
      <Paper>{children}</Paper>
    </Popper>
  );
}

export function Select({ children, ...props }) {
  return <MuiSelect {...props}>{children}</MuiSelect>;
}

export function SelectItem({ children, ...props }) {
  return <MenuItem {...props}>{children}</MenuItem>;
}

export function SelectTrigger({ children, ...props }) {
  return <MuiSelect {...props}>{children}</MuiSelect>;
}

export function SelectValue({ children, ...props }) {
  return <span {...props}>{children}</span>;
}
