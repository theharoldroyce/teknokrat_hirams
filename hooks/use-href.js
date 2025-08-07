'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useHref() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const href = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const queryString = searchParams.toString();
    // return `${window.location.origin}${pathname}${
    //   queryString ? `?${queryString}` : ''
    // }`;

    return `${pathname}${
      queryString ? `?${queryString}` : ''
    }`;
  }, [pathname, searchParams]);

  return href;
}
