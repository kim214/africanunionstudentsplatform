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
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_URL : undefined) ||
  "";
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) ||
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_ANON_KEY : undefined) ||
  "";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    "[AUSP] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set. " +
      "News and events from Supabase will be skipped until these values are configured."
  );
}

const urlForClient =
  supabaseUrl || "https://placeholder.invalid";
const keyForClient =
  supabaseAnonKey ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.development-placeholder";

export const supabase = createClient(urlForClient, keyForClient);

