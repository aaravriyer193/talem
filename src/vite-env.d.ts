/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Set by artifact/vite.config.ts for the sandboxed claude.ai preview build.
  readonly VITE_SANDBOX?: string;
}
