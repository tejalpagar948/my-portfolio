import React, { useMemo, useEffect, useState } from 'react';
import type { StringInputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';

export function InviteLinkInput({ onChange }: StringInputProps) {
  const [token, setToken] = useState<string>('');

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  // Generate token on mount if not already set
  useEffect(() => {
    if (!token) {
      const newToken = Math.random().toString(36).substring(2, 10);
      setToken(newToken);

      // Save token in Studio
      if (onChange) {
        onChange(
          PatchEvent.from(set(`${baseUrl}/review-form?token=${newToken}`))
        );
      }
    }
  }, [token, baseUrl, onChange]);

  const inviteLink = useMemo(() => {
    return token ? `${baseUrl}/review-form?token=${token}` : 'Generating...';
  }, [token, baseUrl]);

  return (
    <input
      type="text"
      readOnly
      value={inviteLink}
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
