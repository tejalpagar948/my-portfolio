// @/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ipmoketerffdsdfefuud.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbW9rZXRlcmZmZHNkZmVmdXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzOTAzOTUsImV4cCI6MjA3NDk2NjM5NX0.mQnf3tYUyvx07yWFDb9SQpOj02LvSW3eEyPOcy1UylE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
