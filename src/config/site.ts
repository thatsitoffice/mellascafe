/** Zentrale Texte & URLs — Buchung + CRM-Formular per Umgebungsvariablen überschreibbar. */

export const site = {
  name: "Mella’s Café & Loungebar",
  tagline: "Café am Tag. Lounge am Abend.",
  description:
    "Ruhige Kaffeezeiten, ausgewählte Drinks und entspannte Lounge-Atmosphäre — ideal für Treffen, Feiern und lange Abende.",
  bookingUrl:
    import.meta.env.PUBLIC_BOOKING_URL ?? "https://example.com/ihr-buchungstool",
  crmFormAction: import.meta.env.PUBLIC_CRM_FORM_ACTION ?? "",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Mella%E2%80%99s%20Caf%C3%A9%20%26%20Loungebar",
  address: {
    street: "Musterstraße 12",
    zip: "12345",
    city: "Musterstadt",
    country: "Deutschland",
  },
  contact: {
    phone: "+49 123 456789",
    email: "hallo@mellas.example",
  },
  social: {
    instagram: "https://www.instagram.com/",
  },
  openingHours: [
    { days: "Montag – Donnerstag", hours: "10:00 – 01:00" },
    { days: "Freitag & Samstag", hours: "10:00 – 03:00" },
    { days: "Sonntag", hours: "11:00 – 00:00" },
    { days: "Feiertage", hours: "nach Ankündigung" },
  ],
  menuPdf: "/Getraenke-Karte.pdf",
} as const;
