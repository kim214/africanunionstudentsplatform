import { createClient } from "@supabase/supabase-js";

// Vite exposes environment variables that start with `VITE_` via
// `import.meta.env`.  Ensure the values are present at runtime because a
// missing key will cause Supabase calls to silently fail (network requests
// may hang or return 401s).

// Vite exposes variables starting with `VITE_` via `import.meta.env` during
// client-side builds. When running tests or SSR you may also see values
// injected through `process.env`.  Look in both places to make the code more
// resilient in different environments.
const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string) ||
  process.env.VITE_SUPABASE_URL ||
  "";
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  "";

if (!supabaseUrl || !supabaseAnonKey) {
  // the thrown error bubbles up during startup; in development the message
  // will appear in the browser console / terminal so it's easy to spot.
  throw new Error(
    "Missing Supabase configuration. " +
      "You must set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in a local .env (or env vars) and restart the dev server."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

