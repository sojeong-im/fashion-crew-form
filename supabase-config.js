// Supabase Configuration
// Project: fashion-crew-form

const SUPABASE_URL = 'https://wlhorgwsggcxmcncjxus.supabase.co';
const SUPABASE_KEY = 'sb_publishable_bhbekqoWzbUoC1k5Z0jPnQ_XvZRNxl9';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
