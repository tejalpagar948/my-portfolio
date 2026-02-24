import React, { useMemo } from 'react';
import { useFormValue } from 'sanity';
import type { StringInputProps } from 'sanity';

export function InviteLinkInput(_props: StringInputProps) {
  const token = useFormValue(['token']) as string | undefined;

  // ✅ get current studio URL
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const inviteLink = useMemo(() => {
    if (!token || !baseUrl) return '';
    return `${baseUrl}/review-form?token=${token}`;
  }, [token, baseUrl]);

  return (
    <input
      value={inviteLink}
      readOnly
      onFocus={(e) => e.target.select()}
      style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'copy',
      }}
    />
  );
}
