'use client';

import {useEffect} from 'react';
import {track} from '@vercel/analytics';
import {Analytics} from '@vercel/analytics/next';

/*
 * Statistiche del sito: Vercel Web Analytics + i click che contano.
 * (Stesso componente del monorepo ristoranti-treno, adattato: qui non c'è un
 * modulo di prenotazione ma il modulo "Cerca ricambio".)
 *
 * Due cose, montate una volta sola nel root layout:
 *
 *  1. <Analytics /> — visite e pagine viste. Vercel Web Analytics non usa
 *     cookie né localStorage e non salva l'IP: per questo NON passa dal banner
 *     dei cookie. Va comunque descritto nell'informativa privacy.
 *
 *  2. Un ascoltatore UNICO sul document che conta i click sui contatti —
 *     chiamare, WhatsApp, indicazioni, Instagram, email, recensioni Google —
 *     riconoscendoli dal link, non dal testo: un link nuovo viene contato da sé.
 *     Per forzare un nome: `data-track="…"` sul link.
 *
 * L'invio del modulo "Cerca ricambio" NON è un link: apre wa.me con
 * window.open. Lo conta il modulo stesso con
 * `trackEvent('Richiesta ricambio inviata')`.
 *
 * ⚠️ Gli eventi personalizzati Vercel li registra solo sui piani Pro ed
 * Enterprise. Su Hobby `track()` non fallisce: semplicemente non arriva nulla.
 */

/** Nomi degli eventi, come compaiono nel pannello Events di Vercel. */
export type SiteEventName =
  | 'Richiesta ricambio inviata'
  | 'Chiama'
  | 'WhatsApp'
  | 'Indicazioni'
  | 'Instagram'
  | 'Email'
  | 'Recensione Google';

/*
 * Al massimo DUE proprietà per evento: è il limite del piano Pro. Oltre, Vercel
 * scarta l'evento. Qui: la pagina (es. `/it`, `/qr`) e la zona della pagina in
 * cui sta il link (header, hero, contatti, footer, modulo…).
 */
export function trackEvent(name: SiteEventName, zona?: string): void {
  try {
    const pagina = typeof window === 'undefined' ? '' : window.location.pathname;
    track(name, zona ? {pagina, zona} : {pagina});
  } catch {
    // Le statistiche non devono MAI rompere un click o un invio.
  }
}

/** Riconosce il tipo di contatto dal link cliccato. `null` = non si conta. */
function classify(el: Element): SiteEventName | null {
  // Esplicito vince su tutto: <a data-track="Chiama">.
  const explicit = el.getAttribute('data-track');
  if (explicit) return explicit as SiteEventName;

  const href = el.getAttribute('href') ?? '';
  if (href.startsWith('tel:')) return 'Chiama';
  if (href.startsWith('mailto:')) return 'Email';

  const h = href.toLowerCase();
  if (h.includes('wa.me/') || h.includes('whatsapp.com') || h.startsWith('whatsapp:')) {
    return 'WhatsApp';
  }
  // Il link "scrivi una recensione" (g.page/r/…/review) e la pagina delle
  // recensioni su Google: vanno PRIMA delle mappe, sono anch'essi URL Google.
  if (h.includes('g.page/') || h.includes('/local/reviews') || h.includes('writereview')) {
    return 'Recensione Google';
  }
  if (
    h.includes('google.com/maps') ||
    h.includes('maps.google.') ||
    h.includes('maps.app.goo.gl') ||
    h.includes('goo.gl/maps') ||
    h.includes('maps.apple.com')
  ) {
    return 'Indicazioni';
  }
  if (h.includes('instagram.com')) return 'Instagram';
  return null;
}

/**
 * La zona della pagina: l'`id` della sezione più vicina (#contatti, #menu…),
 * altrimenti header/footer/dialog. Serve a capire QUALE bottone funziona.
 */
function zoneOf(el: Element): string | undefined {
  const explicit = el.closest('[data-track-zona]')?.getAttribute('data-track-zona');
  if (explicit) return explicit;
  if (el.closest('[role="dialog"], dialog')) return 'modulo';
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'footer';
  return el.closest('section[id], article[id]')?.id || undefined;
}

export function SiteAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const el = target?.closest('a, [data-track]');
      if (el == null) return;
      const name = classify(el);
      if (name == null) return;
      trackEvent(name, zoneOf(el));
    };
    /*
     * In CATTURA: parte prima di qualunque altro gestore, quindi conta il
     * click anche se un altro gestore fa `preventDefault()`. Non blocca e non
     * modifica nulla.
     */
    document.addEventListener('click', onClick, {capture: true});
    return () => document.removeEventListener('click', onClick, {capture: true});
  }, []);

  return <Analytics />;
}
