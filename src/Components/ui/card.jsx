import React from 'react';
import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';

export function Card({ children, ...props }) {
  return <MuiCard {...props}>{children}</MuiCard>;
}

export function CardContent({ children, ...props }) {
  return <MuiCardContent {...props}>{children}</MuiCardContent>;
}
