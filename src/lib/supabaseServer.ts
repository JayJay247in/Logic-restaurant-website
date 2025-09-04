import { createClient } from '@supabase/supabase-js';
import 'server-only'; // Ensures this file is never imported into a client-side component

export function createServerClient() {
  // We use the same public credentials, as we want to operate on behalf of the user
  // and respect the Row Level Security policies we just created.
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}