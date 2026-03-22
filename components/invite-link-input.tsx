import React, { useMemo, useEffect, useState } from 'react';
import type { StringInputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';

export function InviteLinkInput({ value, onChange }: StringInputProps) {
  // ✅ Hardcoded deployed URL
  const baseUrl = 'https://my-portfolio-ten-navy-92.vercel.app';
  const [token, setToken] = useState<string>('');

  // ✅ Extract existing token only in browser
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (value && typeof value === 'string') {
      try {
        const urlParams = new URLSearchParams(value.split('?')[1]);
        const existingToken = urlParams.get('token');
        if (existingToken) setToken(existingToken);
      } catch (err) {
        console.warn('Failed to parse existing invite link', err);
      }
    }
  }, [value]);

  // ✅ Generate token only in browser if no value
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!value && onChange) {
      const newToken = Math.random().toString(36).substring(2, 10);
      setToken(newToken);
      onChange(
        PatchEvent.from(set(`${baseUrl}/review-form?token=${newToken}`))
      );
    }
  }, [value, onChange]);

  const inviteLink = useMemo(
    () => (token ? `${baseUrl}/review-form?token=${token}` : 'Generating...'),
    [token]
  );

  return (
    <input
      type="text"
      readOnly
      value={inviteLink}
      onFocus={(e) => e.target.select()}
      onClick={() => navigator.clipboard.writeText(inviteLink)}
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
