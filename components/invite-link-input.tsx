import React, { useMemo, useEffect, useState } from 'react';
import type { StringInputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';

export function InviteLinkInput({ value, onChange }: StringInputProps) {
  const baseUrl = 'https://my-portfolio-ten-navy-92.vercel.app';

  const [token, setToken] = useState<string>('');

  // ✅ Extract token if value already exists
  useEffect(() => {
    if (value && typeof value === 'string') {
      const existingToken = value.split('token=')[1];
      if (existingToken) setToken(existingToken);
    }
  }, [value]);

  // ✅ Generate only if no value exists in DB
  useEffect(() => {
    if (!value) {
      const newToken = Math.random().toString(36).substring(2, 10);
      setToken(newToken);

      onChange?.(
        PatchEvent.from(set(`${baseUrl}/review-form?token=${newToken}`))
      );
    }
  }, [value, onChange]);

  const inviteLink = useMemo(() => {
    return token ? `${baseUrl}/review-form?token=${token}` : 'Generating...';
  }, [token]);

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
