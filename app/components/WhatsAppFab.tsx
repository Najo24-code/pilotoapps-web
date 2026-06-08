const WHATSAPP_URL =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola Forja, quiero información sobre un sistema para mi negocio.");

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 px-4 py-3.5 font-semibold text-white shadow-lg shadow-black/40 backdrop-blur transition-transform hover:scale-105 hover:bg-zinc-800"
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.989-1.045a9.866 9.866 0 0 0 .002-.001zm5.49-7.713c-.13-.218-.477-.349-.998-.61-.52-.26-3.077-1.519-3.554-1.692-.477-.174-.825-.26-1.172.26-.347.521-1.345 1.692-1.649 2.04-.303.347-.607.39-1.128.13-.521-.26-2.199-.811-4.188-2.585-1.549-1.382-2.595-3.089-2.899-3.61-.303-.521-.032-.802.228-1.061.234-.234.521-.609.782-.913.26-.304.347-.522.521-.869.174-.347.087-.651-.043-.911-.13-.26-1.172-2.823-1.606-3.866-.423-1.015-.853-.878-1.172-.894l-1-.017c-.347 0-.911.13-1.388.652-.477.52-1.822 1.779-1.822 4.342 0 2.562 1.866 5.038 2.126 5.385.26.347 3.673 5.608 8.901 7.862 1.243.537 2.213.857 2.969 1.097 1.248.396 2.383.34 3.281.206.999-.149 3.077-1.258 3.511-2.474.434-1.215.434-2.258.304-2.474z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
