/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BOOKING_URL: string;
  readonly PUBLIC_CRM_FORM_ACTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
