'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export const PageHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        'mb-4 flex flex-wrap items-center justify-between space-y-2 gap-x-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export const PageHeaderTitle = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
};

PageHeader.displayName = 'PageHeader';