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

const missing = !supabaseUrl || !supabaseAnonKey;

if (missing && import.meta.env.PROD) {
  throw new Error(
    "Missing Supabase configuration. " +
      "Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY for production builds."
  );
}

if (missing && import.meta.env.DEV) {
  console.warn(
    "[AUSP] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set. " +
      "Add a `.env` file in the project root and restart `npm run dev` so news and events load from Supabase."
  );
}

// Invalid placeholders only used in dev when env is missing; API calls fail gracefully via React Query.
const urlForClient =
  supabaseUrl || (import.meta.env.DEV ? "https://placeholder.invalid" : "");
const keyForClient =
  supabaseAnonKey ||
  (import.meta.env.DEV
    ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.development-placeholder"
    : "");

export const supabase = createClient(urlForClient, keyForClient);

