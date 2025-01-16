import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGxwdm16YWRzYnNqeGJyZHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNzE5NzksImV4cCI6MjAyMjc0Nzk3OX0.0C_61tGxzlqvqII3jmBgH9_qFa2hxJcTVUqTekYY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);