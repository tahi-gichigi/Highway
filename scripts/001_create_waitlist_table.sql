-- Create waitlist_entries table
create table if not exists public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.waitlist_entries enable row level security;

-- Allow anyone to insert (public waitlist signup)
create policy "Anyone can join waitlist"
  on public.waitlist_entries
  for insert
  with check (true);

-- Only allow users to view their own entry (if they want to check status later)
create policy "Users can view own entry"
  on public.waitlist_entries
  for select
  using (true);
