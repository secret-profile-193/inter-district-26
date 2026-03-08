/**
 * ═══════════════════════════════════════════════════════════════════
 *  Sports Memories Gallery – app.js
 *  Production-ready, client-side-only photo & video gallery
 *  Technologies: Vanilla JS + Bootstrap 5.3.3
 * ═══════════════════════════════════════════════════════════════════
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   1. MEDIA CATALOGUE  – auto-generated from ./media/ contents
      src paths use encodeURIComponent so spaces in filenames work.
      To add more files: copy a block and update src/filename/date.
   ═══════════════════════════════════════════════════════════════════ */
const MEDIA_CATALOGUE = [
    // ── PHOTOS (106 files) ──────────────────────────────────────────
    { id: 1, type: 'photo', src: 'media/WhatsApp Image 2026-02-13 at 11.00.50 PM.webp', filename: 'WhatsApp Image 2026-02-13 at 11.00.50 PM.webp', date: '2026-02-13' },
    { id: 2, type: 'photo', src: 'media/WhatsApp Image 2026-02-13 at 11.00.51 PM.webp', filename: 'WhatsApp Image 2026-02-13 at 11.00.51 PM.webp', date: '2026-02-13' },
    { id: 3, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.57.39 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.57.39 PM.webp', date: '2026-02-15' },
    { id: 4, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.57.40 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.57.40 PM.webp', date: '2026-02-15' },
    { id: 5, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.57.42 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.57.42 PM.webp', date: '2026-02-15' },
    { id: 6, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.57.59 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.57.59 PM.webp', date: '2026-02-15' },
    { id: 7, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.00 PM (1).webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.00 PM (1).webp', date: '2026-02-15' },
    { id: 8, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.00 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.00 PM.webp', date: '2026-02-15' },
    { id: 9, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.31 PM (1).webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.31 PM (1).webp', date: '2026-02-15' },
    { id: 10, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.31 PM (2).webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.31 PM (2).webp', date: '2026-02-15' },
    { id: 11, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.31 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.31 PM.webp', date: '2026-02-15' },
    { id: 12, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.36 PM (1).webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.36 PM (1).webp', date: '2026-02-15' },
    { id: 13, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.36 PM (2).webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.36 PM (2).webp', date: '2026-02-15' },
    { id: 14, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.36 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.36 PM.webp', date: '2026-02-15' },
    { id: 15, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.37 PM (1).webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.37 PM (1).webp', date: '2026-02-15' },
    { id: 16, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 2.58.37 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 2.58.37 PM.webp', date: '2026-02-15' },
    { id: 17, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.33 PM (1).webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.33 PM (1).webp', date: '2026-02-15' },
    { id: 18, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.33 PM (2).webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.33 PM (2).webp', date: '2026-02-15' },
    { id: 19, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.33 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.33 PM.webp', date: '2026-02-15' },
    { id: 20, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.34 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.34 PM.webp', date: '2026-02-15' },
    { id: 21, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.35 PM (1).webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.35 PM (1).webp', date: '2026-02-15' },
    { id: 22, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.35 PM (2).webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.35 PM (2).webp', date: '2026-02-15' },
    { id: 23, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.35 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.35 PM.webp', date: '2026-02-15' },
    { id: 24, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.36 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.36 PM.webp', date: '2026-02-15' },
    { id: 25, type: 'photo', src: 'media/WhatsApp Image 2026-02-15 at 3.30.37 PM.webp', filename: 'WhatsApp Image 2026-02-15 at 3.30.37 PM.webp', date: '2026-02-15' },
    { id: 26, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.02 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.02 PM.webp', date: '2026-02-16' },
    { id: 27, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.03 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.03 PM.webp', date: '2026-02-16' },
    { id: 28, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.04 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.04 PM.webp', date: '2026-02-16' },
    { id: 29, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.06 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.06 PM (1).webp', date: '2026-02-16' },
    { id: 30, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.06 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.06 PM.webp', date: '2026-02-16' },
    { id: 31, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.07 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.07 PM (1).webp', date: '2026-02-16' },
    { id: 32, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.07 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.07 PM.webp', date: '2026-02-16' },
    { id: 33, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.08 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.08 PM.webp', date: '2026-02-16' },
    { id: 34, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.09 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.09 PM (1).webp', date: '2026-02-16' },
    { id: 35, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.09 PM (2).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.09 PM (2).webp', date: '2026-02-16' },
    { id: 36, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.09 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.09 PM.webp', date: '2026-02-16' },
    { id: 37, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.10 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.10 PM (1).webp', date: '2026-02-16' },
    { id: 38, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.10 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.10 PM.webp', date: '2026-02-16' },
    { id: 39, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.11 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.11 PM (1).webp', date: '2026-02-16' },
    { id: 40, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.11 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.11 PM.webp', date: '2026-02-16' },
    { id: 41, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.12 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.12 PM (1).webp', date: '2026-02-16' },
    { id: 42, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.12 PM (2).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.12 PM (2).webp', date: '2026-02-16' },
    { id: 43, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.12 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.12 PM.webp', date: '2026-02-16' },
    { id: 44, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.13 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.13 PM (1).webp', date: '2026-02-16' },
    { id: 45, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.13 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.13 PM.webp', date: '2026-02-16' },
    { id: 46, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.14 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.14 PM.webp', date: '2026-02-16' },
    { id: 47, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.15 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.15 PM (1).webp', date: '2026-02-16' },
    { id: 48, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.15 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.15 PM.webp', date: '2026-02-16' },
    { id: 49, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.16 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.16 PM.webp', date: '2026-02-16' },
    { id: 50, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.18 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.18 PM.webp', date: '2026-02-16' },
    { id: 51, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.19 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.19 PM.webp', date: '2026-02-16' },
    { id: 52, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.20 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.20 PM (1).webp', date: '2026-02-16' },
    { id: 53, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.20 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.20 PM.webp', date: '2026-02-16' },
    { id: 54, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.21 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.21 PM (1).webp', date: '2026-02-16' },
    { id: 55, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.21 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.21 PM.webp', date: '2026-02-16' },
    { id: 56, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.22 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.22 PM (1).webp', date: '2026-02-16' },
    { id: 57, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.22 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.22 PM.webp', date: '2026-02-16' },
    { id: 58, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.23 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.23 PM (1).webp', date: '2026-02-16' },
    { id: 59, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.23 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.23 PM.webp', date: '2026-02-16' },
    { id: 60, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.24 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.24 PM.webp', date: '2026-02-16' },
    { id: 61, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.25 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.25 PM (1).webp', date: '2026-02-16' },
    { id: 62, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.25 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.25 PM.webp', date: '2026-02-16' },
    { id: 63, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.26 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.26 PM (1).webp', date: '2026-02-16' },
    { id: 64, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.26 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.26 PM.webp', date: '2026-02-16' },
    { id: 65, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.27 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.27 PM.webp', date: '2026-02-16' },
    { id: 66, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.28 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.28 PM (1).webp', date: '2026-02-16' },
    { id: 67, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.28 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.28 PM.webp', date: '2026-02-16' },
    { id: 68, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.29 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.29 PM (1).webp', date: '2026-02-16' },
    { id: 69, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.29 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.29 PM.webp', date: '2026-02-16' },
    { id: 70, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.30 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.30 PM (1).webp', date: '2026-02-16' },
    { id: 71, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.30 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.30 PM.webp', date: '2026-02-16' },
    { id: 72, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.31 PM (1).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.31 PM (1).webp', date: '2026-02-16' },
    { id: 73, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.31 PM (2).webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.31 PM (2).webp', date: '2026-02-16' },
    { id: 74, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.31 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.31 PM.webp', date: '2026-02-16' },
    { id: 75, type: 'photo', src: 'media/WhatsApp Image 2026-02-16 at 3.15.32 PM.webp', filename: 'WhatsApp Image 2026-02-16 at 3.15.32 PM.webp', date: '2026-02-16' },
    { id: 76, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.51.58 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.51.58 AM (1).webp', date: '2026-02-20' },
    { id: 77, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.51.58 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.51.58 AM.webp', date: '2026-02-20' },
    { id: 78, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.51.59 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.51.59 AM.webp', date: '2026-02-20' },
    { id: 79, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.47 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.47 AM (1).webp', date: '2026-02-20' },
    { id: 80, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.47 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.47 AM.webp', date: '2026-02-20' },
    { id: 81, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.48 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.48 AM (1).webp', date: '2026-02-20' },
    { id: 82, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.48 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.48 AM.webp', date: '2026-02-20' },
    { id: 83, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.55 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.55 AM (1).webp', date: '2026-02-20' },
    { id: 84, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.55 AM (2).webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.55 AM (2).webp', date: '2026-02-20' },
    { id: 85, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.55 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.55 AM.webp', date: '2026-02-20' },
    { id: 86, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.56 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.56 AM.webp', date: '2026-02-20' },
    { id: 87, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.57 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.57 AM (1).webp', date: '2026-02-20' },
    { id: 88, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.57 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.57 AM.webp', date: '2026-02-20' },
    { id: 89, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.58 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.58 AM.webp', date: '2026-02-20' },
    { id: 90, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.59 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.59 AM (1).webp', date: '2026-02-20' },
    { id: 91, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.53.59 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.53.59 AM.webp', date: '2026-02-20' },
    { id: 92, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.00 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.00 AM (1).webp', date: '2026-02-20' },
    { id: 93, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.00 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.00 AM.webp', date: '2026-02-20' },
    { id: 94, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.01 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.01 AM (1).webp', date: '2026-02-20' },
    { id: 95, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.01 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.01 AM.webp', date: '2026-02-20' },
    { id: 96, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.02 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.02 AM (1).webp', date: '2026-02-20' },
    { id: 97, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.02 AM (2).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.02 AM (2).webp', date: '2026-02-20' },
    { id: 98, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.02 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.02 AM.webp', date: '2026-02-20' },
    { id: 99, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.03 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.03 AM (1).webp', date: '2026-02-20' },
    { id: 100, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.03 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.03 AM.webp', date: '2026-02-20' },
    { id: 101, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.04 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.04 AM (1).webp', date: '2026-02-20' },
    { id: 102, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.04 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.04 AM.webp', date: '2026-02-20' },
    { id: 103, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.05 AM (1).webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.05 AM (1).webp', date: '2026-02-20' },
    { id: 104, type: 'photo', src: 'media/WhatsApp Image 2026-02-20 at 11.54.05 AM.webp', filename: 'WhatsApp Image 2026-02-20 at 11.54.05 AM.webp', date: '2026-02-20' },
    { id: 105, type: 'photo', src: 'media/WhatsApp Image 2026-02-21 at 11.44.35 AM.webp', filename: 'WhatsApp Image 2026-02-21 at 11.44.35 AM.webp', date: '2026-02-21' },
    { id: 106, type: 'photo', src: 'media/WhatsApp Image 2026-02-21 at 12.39.04 PM.webp', filename: 'WhatsApp Image 2026-02-21 at 12.39.04 PM.webp', date: '2026-02-21' },
    // ── VIDEOS (26 files) ───────────────────────────────────────────
    { id: 107, type: 'video', src: 'media/WhatsApp Video 2026-02-14 at 4.48.25 PM.mp4', filename: 'WhatsApp Video 2026-02-14 at 4.48.25 PM.mp4', date: '2026-02-14' },
    { id: 108, type: 'video', src: 'media/WhatsApp Video 2026-02-15 at 12.23.01 AM.mp4', filename: 'WhatsApp Video 2026-02-15 at 12.23.01 AM.mp4', date: '2026-02-15' },
    { id: 109, type: 'video', src: 'media/WhatsApp Video 2026-02-15 at 2.57.59 PM.mp4', filename: 'WhatsApp Video 2026-02-15 at 2.57.59 PM.mp4', date: '2026-02-15' },
    { id: 110, type: 'video', src: 'media/WhatsApp Video 2026-02-15 at 2.58.30 PM.mp4', filename: 'WhatsApp Video 2026-02-15 at 2.58.30 PM.mp4', date: '2026-02-15' },
    { id: 111, type: 'video', src: 'media/WhatsApp Video 2026-02-15 at 2.58.35 PM.mp4', filename: 'WhatsApp Video 2026-02-15 at 2.58.35 PM.mp4', date: '2026-02-15' },
    { id: 112, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.01 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.01 PM.mp4', date: '2026-02-16' },
    { id: 113, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.02 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.02 PM.mp4', date: '2026-02-16' },
    { id: 114, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.03 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.03 PM.mp4', date: '2026-02-16' },
    { id: 115, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.04 PM (1).mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.04 PM (1).mp4', date: '2026-02-16' },
    { id: 116, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.04 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.04 PM.mp4', date: '2026-02-16' },
    { id: 117, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.05 PM (1).mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.05 PM (1).mp4', date: '2026-02-16' },
    { id: 118, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.05 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.05 PM.mp4', date: '2026-02-16' },
    { id: 119, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.06 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.06 PM.mp4', date: '2026-02-16' },
    { id: 120, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.08 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.08 PM.mp4', date: '2026-02-16' },
    { id: 121, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.14 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.14 PM.mp4', date: '2026-02-16' },
    { id: 122, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.15 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.15 PM.mp4', date: '2026-02-16' },
    { id: 123, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.18 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.18 PM.mp4', date: '2026-02-16' },
    { id: 124, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.19 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.19 PM.mp4', date: '2026-02-16' },
    { id: 125, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.23 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.23 PM.mp4', date: '2026-02-16' },
    { id: 126, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.25 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.25 PM.mp4', date: '2026-02-16' },
    { id: 127, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.27 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.27 PM.mp4', date: '2026-02-16' },
    { id: 128, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 3.15.29 PM.mp4', filename: 'WhatsApp Video 2026-02-16 at 3.15.29 PM.mp4', date: '2026-02-16' },
    { id: 129, type: 'video', src: 'media/WhatsApp Video 2026-02-20 at 11.53.54 AM.mp4', filename: 'WhatsApp Video 2026-02-20 at 11.53.54 AM.mp4', date: '2026-02-20' },
    { id: 130, type: 'video', src: 'media/WhatsApp Video 2026-02-20 at 11.53.56 AM.mp4', filename: 'WhatsApp Video 2026-02-20 at 11.53.56 AM.mp4', date: '2026-02-20' },
    { id: 131, type: 'video', src: 'media/WhatsApp Video 2026-02-20 at 11.53.58 AM.mp4', filename: 'WhatsApp Video 2026-02-20 at 11.53.58 AM.mp4', date: '2026-02-20' },
    { id: 132, type: 'video', src: 'media/WhatsApp Video 2026-02-20 at 11.54.00 AM.mp4', filename: 'WhatsApp Video 2026-02-20 at 11.54.00 AM.mp4', date: '2026-02-20' },
];

/* ═══════════════════════════════════════════════════════════════════
   2. APPLICATION STATE
   ═══════════════════════════════════════════════════════════════════ */
const State = {
    filter: 'all',          // 'all' | 'photo' | 'video' | 'wishlist' | 'folder:<name>'
    isBulkMode: false,
    selectedIds: new Set(),
    viewerIndex: 0,              // current index in filteredMedia()
    viewerOpen: false,
    zoom: 1,              // viewer image zoom level
    zoomPanX: 0,
    zoomPanY: 0,
    addToFolderCtx: null,           // { ids: [...] } – current add-to-folder target
};

/* ═══════════════════════════════════════════════════════════════════
   3. PERSISTENCE (localStorage helpers)
   ═══════════════════════════════════════════════════════════════════ */
const Store = {
    keyFavs: 'smg_favourites',
    keyFolders: 'smg_folders',

    getFavs() { return JSON.parse(localStorage.getItem(this.keyFavs) || '[]'); },
    getFolders() { return JSON.parse(localStorage.getItem(this.keyFolders) || '{}'); },

    saveFavs(arr) { localStorage.setItem(this.keyFavs, JSON.stringify(arr)); },
    saveFolders(o) { localStorage.setItem(this.keyFolders, JSON.stringify(o)); },

    toggleFav(id) {
        const favs = this.getFavs();
        const idx = favs.indexOf(id);
        if (idx === -1) favs.push(id); else favs.splice(idx, 1);
        this.saveFavs(favs);
        return idx === -1; // true = added
    },

    isFav(id) { return this.getFavs().includes(id); },

    createFolder(name) {
        const folders = this.getFolders();
        if (!folders[name]) folders[name] = [];
        this.saveFolders(folders);
    },

    addToFolder(name, ids) {
        const folders = this.getFolders();
        if (!folders[name]) folders[name] = [];
        ids.forEach(id => { if (!folders[name].includes(id)) folders[name].push(id); });
        this.saveFolders(folders);
    },

    removeFolder(name) {
        const folders = this.getFolders();
        delete folders[name];
        this.saveFolders(folders);
    },
};

/* ═══════════════════════════════════════════════════════════════════
   4. LOADING SCREEN + PARTICLE CANVAS
   ═══════════════════════════════════════════════════════════════════ */
function initLoadingScreen() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    const bar = document.getElementById('loadProgressBar');
    const pctLabel = document.getElementById('loadPercent');
    const screen = document.getElementById('loadingScreen');
    const appShell = document.getElementById('appShell');

    // ── Particle system ─────────────────────────────────────────────
    const particles = [];
    const PARTICLE_COUNT = 55;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ICONS = ['🪢', '💪', '🤼', '🤼‍♂️', '🤼‍♀️', '⛓️', '🏋️', '🏋️‍♂️', '👥', '🏆'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vy: -(0.4 + Math.random() * 0.8),
            size: 12 + Math.random() * 14,
            icon: ICONS[Math.floor(Math.random() * ICONS.length)],
            alpha: 0.05 + Math.random() * 0.15,
        });
    }

    let animId;
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.font = `${p.size}px serif`;
            ctx.fillText(p.icon, p.x, p.y);
            p.y += p.vy;
            if (p.y < -20) { p.y = canvas.height + 20; p.x = Math.random() * canvas.width; }
        });
        animId = requestAnimationFrame(drawParticles);
    }
    drawParticles();

    // ── Simulated progress ──────────────────────────────────────────
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 14 + 3;
        if (progress >= 100) progress = 100;
        bar.style.width = progress + '%';
        pctLabel.textContent = Math.round(progress) + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                cancelAnimationFrame(animId);
                screen.classList.add('fade-out');
                appShell.classList.remove('d-none');
                setTimeout(() => { screen.style.display = 'none'; }, 750);
            }, 400);
        }
    }, 80);
}

/* ═══════════════════════════════════════════════════════════════════
   5. FILTERS / SEARCH – derive visible items
   ═══════════════════════════════════════════════════════════════════ */
function filteredMedia() {
    const folders = Store.getFolders();
    const favIds = Store.getFavs();

    return MEDIA_CATALOGUE.filter(item => {
        // Sidebar filter
        switch (State.filter) {
            case 'all': return true;
            case 'photo': return item.type === 'photo';
            case 'video': return item.type === 'video';
            case 'wishlist': return favIds.includes(item.id);
            default:
                if (State.filter.startsWith('folder:')) {
                    const name = State.filter.slice(7);
                    return (folders[name] || []).includes(item.id);
                }
                return true;
        }
    });
}

/* ═══════════════════════════════════════════════════════════════════
   6. CARD RENDERING
   ═══════════════════════════════════════════════════════════════════ */
function buildCard(item) {
    const isFav = Store.isFav(item.id);
    const isSelected = State.selectedIds.has(item.id);
    const card = document.createElement('div');

    card.className = `media-card${isFav ? ' is-fav' : ''}${isSelected ? ' selected' : ''}${State.isBulkMode ? ' bulk-mode' : ''}`;
    card.dataset.id = item.id;
    card.setAttribute('role', 'listitem');

    // Media container
    let mediaHtml;
    if (item.type === 'photo') {
        mediaHtml = `
      <div class="card-media-wrap">
        <img src="${item.src}" alt="${item.filename}" loading="lazy"
             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22160%22><rect fill=%22%231a1a1a%22 width=%22200%22 height=%22160%22/><text x=%2250%%25%22 y=%2250%%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2213%22>No Image</text></svg>'"/>
        <div class="card-overlay">
          <div class="overlay-top">
            <button class="card-btn fav-btn${isFav ? ' active' : ''}" data-id="${item.id}" title="Favourite" aria-label="Toggle favourite">
              <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
          </div>
          <div class="overlay-bottom">
            <button class="card-btn dl-btn" data-src="${item.src}" data-name="${item.filename}" title="Download" aria-label="Download">
              <i class="bi bi-download"></i>
            </button>
          </div>
        </div>
      </div>`;
    } else {
        mediaHtml = `
      <div class="card-media-wrap">
        <video src="${item.src}" muted loop playsinline preload="none"
               data-autoplay style="min-height:120px;"></video>
        <div class="video-play-badge"><i class="bi bi-play-fill"></i></div>
        <div class="card-overlay">
          <div class="overlay-top">
            <button class="card-btn fav-btn${isFav ? ' active' : ''}" data-id="${item.id}" title="Favourite" aria-label="Toggle favourite">
              <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
          </div>
          <div class="overlay-bottom">
            <button class="card-btn dl-btn" data-src="${item.src}" data-name="${item.filename}" title="Download" aria-label="Download">
              <i class="bi bi-download"></i>
            </button>
          </div>
        </div>
      </div>`;
    }

    card.innerHTML = `
    <div class="card-checkbox-wrap">
      <input type="checkbox" class="card-checkbox" ${isSelected ? 'checked' : ''}
             aria-label="Select ${item.filename}" data-id="${item.id}" />
    </div>
    ${mediaHtml}`;

    return card;
}

/* ═══════════════════════════════════════════════════════════════════
   7. GRID RENDERING
   ═══════════════════════════════════════════════════════════════════ */
const grid = document.getElementById('masonryGrid');
const emptyState = document.getElementById('emptyState');
const mediaCount = document.getElementById('mediaCount');

function renderGrid() {
    const items = filteredMedia();
    mediaCount.textContent = `${items.length} item${items.length !== 1 ? 's' : ''}`;
    grid.innerHTML = '';

    if (items.length === 0) {
        emptyState.classList.remove('d-none');
        return;
    }
    emptyState.classList.add('d-none');

    // Use DocumentFragment for performance
    const frag = document.createDocumentFragment();
    items.forEach((item, idx) => {
        const card = buildCard(item);
        // Stagger animation delay (cap at 300ms)
        card.style.animationDelay = `${Math.min(idx * 28, 300)}ms`;
        frag.appendChild(card);
    });
    grid.appendChild(frag);

    // Attach card-level events
    attachCardEvents();
    initVideoObserver();
}

/* ═══════════════════════════════════════════════════════════════════
   8. CARD EVENT DELEGATION
   ═══════════════════════════════════════════════════════════════════ */
function attachCardEvents() {
    grid.querySelectorAll('.media-card').forEach(card => {
        const id = Number(card.dataset.id);

        // Long-press for bulk on mobile
        let pressTimer;
        card.addEventListener('pointerdown', () => {
            pressTimer = setTimeout(() => { if (!State.isBulkMode) enterBulkMode(); toggleSelect(id); }, 500);
        });
        card.addEventListener('pointerup', () => clearTimeout(pressTimer));
        card.addEventListener('pointerleave', () => clearTimeout(pressTimer));

        // Shift-click range select
        card.addEventListener('click', e => {
            if (e.target.closest('.fav-btn') || e.target.closest('.dl-btn') || e.target.closest('.card-checkbox')) return;
            if (State.isBulkMode) {
                toggleSelect(id);
                return;
            }
            openViewer(id);
        });

        // Favourite button
        card.querySelector('.fav-btn')?.addEventListener('click', e => {
            e.stopPropagation();
            handleFavToggle(id, card);
        });

        // Download button
        card.querySelector('.dl-btn')?.addEventListener('click', e => {
            e.stopPropagation();
            const btn = e.currentTarget;
            downloadFile(btn.dataset.src, btn.dataset.name);
        });

        // Checkbox
        card.querySelector('.card-checkbox')?.addEventListener('change', e => {
            e.stopPropagation();
            toggleSelect(id);
        });
    });
}

/* ═══════════════════════════════════════════════════════════════════
   9. FAVOURITE TOGGLE
   ═══════════════════════════════════════════════════════════════════ */
function handleFavToggle(id, cardEl) {
    const added = Store.toggleFav(id);
    // Update card visuals without re-rendering whole grid
    const btn = cardEl?.querySelector('.fav-btn') || null;
    const icon = btn?.querySelector('i');
    if (btn && icon) {
        btn.classList.toggle('active', added);
        icon.className = added ? 'bi bi-heart-fill' : 'bi bi-heart';
    }
    cardEl?.classList.toggle('is-fav', added);

    // Update viewer heart too if open
    if (State.viewerOpen) syncViewerHeart();

    showToast(added ? '❤️ Added to wishlist' : '💔 Removed from wishlist');

    // If we're in wishlist view and removed: remove card gracefully
    if (State.filter === 'wishlist' && !added) {
        cardEl?.style.setProperty('opacity', '0');
        cardEl?.style.setProperty('transform', 'scale(0.95)');
        setTimeout(() => { cardEl?.remove(); updateCount(); }, 280);
    }
}

function updateCount() {
    const items = filteredMedia();
    mediaCount.textContent = `${items.length} item${items.length !== 1 ? 's' : ''}`;
    if (!grid.children.length) emptyState.classList.remove('d-none');
}

/* ═══════════════════════════════════════════════════════════════════
   10. VIDEO AUTOPLAY WITH IntersectionObserver
   ── Fix: freeze all video playback DURING scroll to prevent jitter.
      Only resume visible videos 150 ms AFTER scroll stops.
   ═══════════════════════════════════════════════════════════════════ */
let videoObserver;
let scrollEndTimer = null;
let isScrolling = false;

function getAllGridVideos() {
    return Array.from(grid.querySelectorAll('video[data-autoplay]'));
}

/** Called by IntersectionObserver – only acts when NOT scrolling */
function handleVideoVisibility(entries) {
    if (isScrolling) return; // Skip: scroll is still in progress
    entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
            // Lazy-load: set src once from data-src if not already loaded
            if (!vid.src || vid.src === window.location.href) {
                const lazySrc = vid.dataset.lazySrc;
                if (lazySrc) vid.src = lazySrc;
            }
            vid.play().catch(() => { });
        } else {
            vid.pause();
        }
    });
}

function initVideoObserver() {
    if (videoObserver) videoObserver.disconnect();

    // Higher threshold = video must be ≥40% visible before playing
    videoObserver = new IntersectionObserver(handleVideoVisibility, {
        threshold: 0.40,
    });

    grid.querySelectorAll('video[data-autoplay]').forEach(v => videoObserver.observe(v));
}

/** Pause every grid video immediately when scroll starts */
function pauseAllGridVideos() {
    getAllGridVideos().forEach(v => { try { v.pause(); } catch (_) { } });
}

/** Resume videos that are currently in-viewport after scroll ends */
function resumeVisibleVideos() {
    getAllGridVideos().forEach(v => {
        const rect = v.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) v.play().catch(() => { });
    });
}

/* ── Scroll listener: freeze on scroll-start, thaw after scroll-end ── */
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        grid.classList.add('is-scrolling');    // suppresses CSS transitions on cards
        pauseAllGridVideos();
    }
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
        isScrolling = false;
        grid.classList.remove('is-scrolling');
        resumeVisibleVideos();
    }, 150); // 150 ms quiet period = scroll has "ended"
}, { passive: true });

/* ═══════════════════════════════════════════════════════════════════
   11. FULLSCREEN VIEWER
   ═══════════════════════════════════════════════════════════════════ */
const viewerModal = document.getElementById('viewerModal');
const viewerStage = document.getElementById('viewerStage');
const viewerMediaWrap = document.getElementById('viewerMediaWrap');
const viewerFilename = document.getElementById('viewerFilename');
const viewerDate = document.getElementById('viewerDate');
const viewerPrev = document.getElementById('viewerPrev');
const viewerNext = document.getElementById('viewerNext');
const viewerFilmstrip = document.getElementById('viewerFilmstrip');
const filmstripWrap = document.getElementById('filmstripWrap');
const zoomControls = document.getElementById('zoomControls');
const zoomLevelEl = document.getElementById('zoomLevel');

function openViewer(id) {
    const items = filteredMedia();
    const idx = items.findIndex(m => m.id === id);
    if (idx === -1) return;
    State.viewerIndex = idx;
    State.viewerOpen = true;
    State.zoom = 1; State.zoomPanX = 0; State.zoomPanY = 0;

    buildFilmstrip(items);
    loadViewerItem(items[idx]);
    viewerModal.classList.add('open');
    viewerModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeViewer() {
    stopViewerVideo();
    viewerModal.classList.remove('open');
    viewerModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    State.viewerOpen = false;
    viewerMediaWrap.innerHTML = '';
}

function loadViewerItem(item) {
    stopViewerVideo();
    State.zoom = 1; State.zoomPanX = 0; State.zoomPanY = 0;
    applyZoom();

    viewerFilename.textContent = item.filename;
    viewerDate.textContent = item.date || '';

    viewerMediaWrap.innerHTML = '';
    if (item.type === 'photo') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.filename;
        img.draggable = false;
        viewerMediaWrap.appendChild(img);
        zoomControls.style.display = 'flex';
        initPinchZoom(img);
        initWheelZoom();
        initDragPan();
    } else {
        const vid = document.createElement('video');
        vid.src = item.src;
        vid.controls = true;
        vid.autoplay = true;
        vid.muted = false; // Sound ON in viewer
        vid.loop = false;
        vid.playsInline = true;
        viewerMediaWrap.appendChild(vid);
        zoomControls.style.display = 'none';
        vid.play().catch(() => { });
    }

    // Update nav buttons
    const items = filteredMedia();
    viewerPrev.disabled = State.viewerIndex === 0;
    viewerNext.disabled = State.viewerIndex === items.length - 1;

    // Sync heart
    syncViewerHeart();

    // Sync filmstrip
    syncFilmstrip();
}

function stopViewerVideo() {
    const vid = viewerMediaWrap.querySelector('video');
    if (vid) { vid.pause(); vid.src = ''; }
}

function navigateViewer(delta) {
    const items = filteredMedia();
    const newIdx = State.viewerIndex + delta;
    if (newIdx < 0 || newIdx >= items.length) return;
    State.viewerIndex = newIdx;
    loadViewerItem(items[newIdx]);
}

function syncViewerHeart() {
    const items = filteredMedia();
    const item = items[State.viewerIndex];
    if (!item) return;
    const btn = document.getElementById('viewerWishlistBtn');
    const isFav = Store.isFav(item.id);
    btn.classList.toggle('active', isFav);
    btn.querySelector('i').className = isFav ? 'bi bi-heart-fill' : 'bi bi-heart';
}

/* ── Filmstrip ─────────────────────────────────────────────────────── */
function buildFilmstrip(items) {
    viewerFilmstrip.innerHTML = '';
    const frag = document.createDocumentFragment();
    items.forEach((item, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `filmstrip-thumb${idx === State.viewerIndex ? ' active' : ''}`;
        thumb.dataset.idx = idx;
        thumb.setAttribute('role', 'button');
        thumb.setAttribute('aria-label', `Go to ${item.filename}`);

        if (item.type === 'photo') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.filename;
            img.loading = 'lazy';
            thumb.appendChild(img);
        } else {
            const vid = document.createElement('video');
            vid.src = item.src;
            vid.muted = true;
            vid.preload = 'metadata';
            thumb.appendChild(vid);
        }

        thumb.addEventListener('click', () => {
            State.viewerIndex = idx;
            loadViewerItem(items[idx]);
        });
        frag.appendChild(thumb);
    });
    viewerFilmstrip.appendChild(frag);
}

function syncFilmstrip() {
    viewerFilmstrip.querySelectorAll('.filmstrip-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === State.viewerIndex);
    });
    // Scroll active thumb into view
    const active = viewerFilmstrip.querySelector('.filmstrip-thumb.active');
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

document.getElementById('viewerCloseBtn').addEventListener('click', closeViewer);
document.getElementById('viewerPrev').addEventListener('click', () => navigateViewer(-1));
document.getElementById('viewerNext').addEventListener('click', () => navigateViewer(1));

// Viewer wishlist
document.getElementById('viewerWishlistBtn').addEventListener('click', () => {
    const items = filteredMedia();
    const item = items[State.viewerIndex];
    if (!item) return;
    handleFavToggle(item.id, grid.querySelector(`.media-card[data-id="${item.id}"]`));
    syncViewerHeart();
});

// Viewer download
document.getElementById('viewerDownloadBtn').addEventListener('click', () => {
    const items = filteredMedia();
    const item = items[State.viewerIndex];
    if (item) downloadFile(item.src, item.filename);
});

// Viewer add to folder
document.getElementById('viewerFolderBtn').addEventListener('click', () => {
    const items = filteredMedia();
    const item = items[State.viewerIndex];
    if (!item) return;
    openAddToFolder([item.id]);
});

/* ═══════════════════════════════════════════════════════════════════
   12. ZOOM (Wheel + Pinch-to-Zoom + Drag-to-Pan)
   ═══════════════════════════════════════════════════════════════════ */
function applyZoom() {
    viewerMediaWrap.style.transform = `translate(${State.zoomPanX}px, ${State.zoomPanY}px) scale(${State.zoom})`;
    if (zoomLevelEl) zoomLevelEl.textContent = Math.round(State.zoom * 100) + '%';
}

function clampZoom(val) { return Math.min(Math.max(val, 1), 5); }

function initWheelZoom() {
    viewerStage.onwheel = e => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.12 : 0.12;
        State.zoom = clampZoom(State.zoom + delta);
        if (State.zoom === 1) { State.zoomPanX = 0; State.zoomPanY = 0; }
        applyZoom();
    };
}

function initDragPan() {
    let isDragging = false, startX, startY, startPanX, startPanY;
    viewerStage.addEventListener('pointerdown', e => {
        if (State.zoom <= 1) return;
        isDragging = true;
        startX = e.clientX; startY = e.clientY;
        startPanX = State.zoomPanX; startPanY = State.zoomPanY;
        viewerStage.style.cursor = 'grabbing';
    });
    window.addEventListener('pointermove', e => {
        if (!isDragging) return;
        State.zoomPanX = startPanX + (e.clientX - startX);
        State.zoomPanY = startPanY + (e.clientY - startY);
        applyZoom();
    });
    window.addEventListener('pointerup', () => {
        isDragging = false;
        viewerStage.style.cursor = '';
    });
}

function initPinchZoom(img) {
    let lastDist = null;
    viewerStage.addEventListener('touchmove', e => {
        if (e.touches.length !== 2) { lastDist = null; return; }
        e.preventDefault();
        const t1 = e.touches[0], t2 = e.touches[1];
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        if (lastDist !== null) {
            const delta = (dist - lastDist) * 0.005;
            State.zoom = clampZoom(State.zoom + delta);
            if (State.zoom === 1) { State.zoomPanX = 0; State.zoomPanY = 0; }
            applyZoom();
        }
        lastDist = dist;
    }, { passive: false });
    viewerStage.addEventListener('touchend', () => { lastDist = null; });
}

// Zoom UI buttons
document.getElementById('zoomInBtn')?.addEventListener('click', () => {
    State.zoom = clampZoom(State.zoom + 0.25); applyZoom();
});
document.getElementById('zoomOutBtn')?.addEventListener('click', () => {
    State.zoom = clampZoom(State.zoom - 0.25);
    if (State.zoom <= 1) { State.zoom = 1; State.zoomPanX = 0; State.zoomPanY = 0; }
    applyZoom();
});
document.getElementById('zoomResetBtn')?.addEventListener('click', () => {
    State.zoom = 1; State.zoomPanX = 0; State.zoomPanY = 0; applyZoom();
});

/* ═══════════════════════════════════════════════════════════════════
   13. TOUCH SWIPE (Viewer)
   ═══════════════════════════════════════════════════════════════════ */
(function initSwipe() {
    let touchStartX = 0;
    viewerModal.addEventListener('touchstart', e => {
        if (e.touches.length === 1) touchStartX = e.touches[0].clientX;
    }, { passive: true });
    viewerModal.addEventListener('touchend', e => {
        if (State.zoom > 1) return; // Don't navigate when zoomed
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) navigateViewer(dx < 0 ? 1 : -1);
    });
})();

/* ═══════════════════════════════════════════════════════════════════
   14. KEYBOARD SHORTCUTS
   ═══════════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
    // Don't fire when typing in inputs
    if (e.target.matches('input, textarea')) return;

    switch (e.key) {
        case 'Escape':
            if (State.viewerOpen) closeViewer();
            if (State.isBulkMode) exitBulkMode();
            break;
        case 'ArrowLeft':
            if (State.viewerOpen) { e.preventDefault(); navigateViewer(-1); }
            break;
        case 'ArrowRight':
            if (State.viewerOpen) { e.preventDefault(); navigateViewer(1); }
            break;
        case 'f': case 'F':
            if (State.viewerOpen) document.getElementById('viewerWishlistBtn').click();
            break;
        case 'd': case 'D':
            if (State.viewerOpen) document.getElementById('viewerDownloadBtn').click();
            break;
    }
});


/* ═══════════════════════════════════════════════════════════════════
   16. SIDEBAR FILTER + SECTION TITLE
   ═══════════════════════════════════════════════════════════════════ */
const sectionTitle = document.getElementById('sectionTitle');

function setFilter(filter, label) {
    State.filter = filter;
    sectionTitle.textContent = label;

    // Sync all sidebar items (desktop + mobile)
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        const active = btn.dataset.filter === filter ||
            (filter.startsWith('folder:') && btn.dataset.filter === filter);
        btn.classList.toggle('active', active);
    });

    renderGrid();
}

document.querySelectorAll('.sidebar-item[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
        const map = { all: 'All Media', photo: 'Photos', video: 'Videos', wishlist: 'Wishlist' };
        setFilter(btn.dataset.filter, map[btn.dataset.filter] || btn.dataset.filter);
    });
});

/* ═══════════════════════════════════════════════════════════════════
   18. BULK SELECT
   ═══════════════════════════════════════════════════════════════════ */
const bulkBar = document.getElementById('bulkBar');
const bulkCount = document.getElementById('bulkCount');

function enterBulkMode() {
    State.isBulkMode = true;
    document.getElementById('bulkToggleBtn').classList.add('active');
    bulkBar.classList.remove('d-none');
    grid.querySelectorAll('.media-card').forEach(c => c.classList.add('bulk-mode'));
}

function exitBulkMode() {
    State.isBulkMode = false;
    State.selectedIds.clear();
    document.getElementById('bulkToggleBtn').classList.remove('active');
    bulkBar.classList.add('d-none');
    grid.querySelectorAll('.media-card').forEach(c => {
        c.classList.remove('bulk-mode', 'selected');
        c.querySelector('.card-checkbox').checked = false;
    });
    updateBulkCount();
}

function toggleSelect(id) {
    if (State.selectedIds.has(id)) State.selectedIds.delete(id);
    else State.selectedIds.add(id);

    const card = grid.querySelector(`.media-card[data-id="${id}"]`);
    if (card) {
        card.classList.toggle('selected', State.selectedIds.has(id));
        const cb = card.querySelector('.card-checkbox');
        if (cb) cb.checked = State.selectedIds.has(id);
    }
    updateBulkCount();
}

function updateBulkCount() {
    bulkCount.textContent = `${State.selectedIds.size} selected`;
}

document.getElementById('bulkToggleBtn').addEventListener('click', () => {
    if (State.isBulkMode) exitBulkMode();
    else enterBulkMode();
});

document.getElementById('bulkCancelBtn').addEventListener('click', exitBulkMode);

document.getElementById('bulkDownloadBtn').addEventListener('click', () => {
    if (!State.selectedIds.size) return;
    
    // Browsers often block multiple simultaneous downloads.
    // Adding a slight delay between each download helps bypass this restriction.
    let delay = 0;
    State.selectedIds.forEach(id => {
        const item = MEDIA_CATALOGUE.find(m => m.id === id);
        if (item) {
            setTimeout(() => {
                downloadFile(item.src, item.filename);
            }, delay);
            delay += 300; // 300ms gap between downloads
        }
    });
    
    showToast(`⬇️ Downloading ${State.selectedIds.size} files…`);
});

document.getElementById('bulkFolderBtn').addEventListener('click', () => {
    if (!State.selectedIds.size) return;
    openAddToFolder([...State.selectedIds]);
});

/* ═══════════════════════════════════════════════════════════════════
   19. FOLDER / ALBUM MANAGEMENT
   ═══════════════════════════════════════════════════════════════════ */
const createFolderModal = new bootstrap.Modal(document.getElementById('createFolderModal'));
const addToFolderModal = new bootstrap.Modal(document.getElementById('addToFolderModal'));

// Render sidebar folder list (desktop + mobile)
function renderFolderSidebar() {
    const folders = Store.getFolders();
    const names = Object.keys(folders);

    ['folderList', 'folderListMobile'].forEach(listId => {
        const list = document.getElementById(listId);
        list.innerHTML = '';

        if (!names.length) {
            list.innerHTML = '<li><span class="sidebar-item text-muted" style="font-size:.8rem;padding:6px 14px;display:block;">No albums yet</span></li>';
            return;
        }

        names.forEach(name => {
            const li = document.createElement('li');
            li.style.cssText = 'display:flex;align-items:center;gap:4px;padding-right:6px;';

            // Album filter button
            const btn = document.createElement('button');
            btn.className = `sidebar-item${State.filter === `folder:${name}` ? ' active' : ''}`;
            btn.dataset.filter = `folder:${name}`;
            btn.style.flex = '1';
            btn.innerHTML = `<i class="bi bi-folder2"></i><span>${name}</span>
        <span class="ms-auto text-muted" style="font-size:.72rem;">${folders[name].length}</span>`;
            btn.addEventListener('click', () => setFilter(`folder:${name}`, `📁 ${name}`));

            // Delete button
            const del = document.createElement('button');
            del.className = 'album-delete-btn';
            del.title = `Delete "${name}"`;
            del.innerHTML = '<i class="bi bi-trash3"></i>';
            del.addEventListener('click', e => {
                e.stopPropagation();
                deleteAlbum(name);
            });

            li.appendChild(btn);
            li.appendChild(del);
            list.appendChild(li);
        });
    });
}

function deleteAlbum(name) {
    Store.removeFolder(name);
    // If we were viewing that album, go back to All Media
    if (State.filter === `folder:${name}`) {
        setFilter('all', 'All Media');
    }
    renderFolderSidebar();
    // showToast(`🗑️ Album "${name}" deleted`);
}


// Create folder
function openCreateFolder() {
    document.getElementById('folderNameInput').value = '';
    createFolderModal.show();
    setTimeout(() => document.getElementById('folderNameInput').focus(), 400);
}

document.getElementById('createFolderBtn').addEventListener('click', openCreateFolder);
document.getElementById('createFolderBtnMobile').addEventListener('click', openCreateFolder);

document.getElementById('confirmCreateFolder').addEventListener('click', () => {
    const name = document.getElementById('folderNameInput').value.trim();
    if (!name) return;
    Store.createFolder(name);
    renderFolderSidebar();
    createFolderModal.hide();
    showToast(`📁 Album "${name}" created`);
});

document.getElementById('folderNameInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('confirmCreateFolder').click();
});

// Add to folder
function openAddToFolder(ids) {
    State.addToFolderCtx = { ids };
    const folders = Store.getFolders();
    const list = document.getElementById('folderPickerList');
    list.innerHTML = '';

    const names = Object.keys(folders);
    if (!names.length) {
        list.innerHTML = '<p class="text-muted text-center py-2" style="font-size:.85rem;">No albums yet. Create one below.</p>';
    } else {
        names.forEach(name => {
            const btn = document.createElement('button');
            btn.className = 'btn folder-pick-btn';
            btn.innerHTML = `<i class="bi bi-folder2"></i>${name} <span class="ms-auto text-muted" style="font-size:.75rem;">${folders[name].length} items</span>`;
            btn.addEventListener('click', () => {
                Store.addToFolder(name, ids);
                renderFolderSidebar();
                addToFolderModal.hide();
                showToast(`📁 Added to "${name}"`);
                if (State.isBulkMode) exitBulkMode();
            });
            list.appendChild(btn);
        });
    }
    addToFolderModal.show();
}

document.getElementById('addToFolderCreateNew').addEventListener('click', () => {
    addToFolderModal.hide();
    setTimeout(() => {
        document.getElementById('confirmCreateFolder').onclick = () => {
            const name = document.getElementById('folderNameInput').value.trim();
            if (!name) return;
            Store.createFolder(name);
            if (State.addToFolderCtx) Store.addToFolder(name, State.addToFolderCtx.ids);
            renderFolderSidebar();
            createFolderModal.hide();
            showToast(`📁 Album "${name}" created & items added`);
            if (State.isBulkMode) exitBulkMode();
            // Restore default onclick
            document.getElementById('confirmCreateFolder').onclick = () => {
                const n = document.getElementById('folderNameInput').value.trim();
                if (!n) return;
                Store.createFolder(n);
                renderFolderSidebar();
                createFolderModal.hide();
                showToast(`📁 Album "${n}" created`);
            };
        };
        openCreateFolder();
    }, 300);
});

/* ═══════════════════════════════════════════════════════════════════
   20. DOWNLOAD HELPER
   ═══════════════════════════════════════════════════════════════════ */
function downloadFile(src, name) {
    const a = document.createElement('a');
    a.href = src;
    a.download = name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

/* ═══════════════════════════════════════════════════════════════════
   21. TOAST NOTIFICATION
   ═══════════════════════════════════════════════════════════════════ */
const toastEl = document.getElementById('appToast');
const toastMsg = document.getElementById('toastMessage');
let toastInstance;

function showToast(msg, delay = 2800) {
    toastMsg.textContent = msg;
    if (!toastInstance) {
        toastInstance = new bootstrap.Toast(toastEl, { delay });
    }
    toastEl.dataset.bsDelay = delay;
    toastInstance.show();
}

/* ═══════════════════════════════════════════════════════════════════
   22. CLICK-OUTSIDE VIEWER (dark area)
   ═══════════════════════════════════════════════════════════════════ */
viewerModal.addEventListener('click', e => {
    // Only close if clicking the bare backdrop (not stage or topbar etc.)
    if (e.target === viewerModal) closeViewer();
});

/* ═══════════════════════════════════════════════════════════════════
   23. BOOTSTRAP TOOLTIP INIT
   ═══════════════════════════════════════════════════════════════════ */
function initTooltips() {
    document.querySelectorAll('[title]').forEach(el => {
        new bootstrap.Tooltip(el, { trigger: 'hover', placement: 'bottom' });
    });
}

/* ═══════════════════════════════════════════════════════════════════
   24. BOOTSTRAP MODAL – ENTER KEY FIX
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('createFolderModal').addEventListener('shown.bs.modal', () => {
    document.getElementById('folderNameInput').focus();
});

/* ═══════════════════════════════════════════════════════════════════
   25. BOOT – Start Everything
   ═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading screen (shows first, hides after simulated load)
    initLoadingScreen();

    // 2. Render the grid once app shell becomes visible
    //    (renderGrid is called after loading finishes via CSS class removal)
    //    We observe the app shell becoming visible.
    const shellObserver = new MutationObserver(() => {
        if (!document.getElementById('appShell').classList.contains('d-none')) {
            renderGrid();
            renderFolderSidebar();
            initTooltips();
            shellObserver.disconnect();
        }
    });
    shellObserver.observe(document.getElementById('appShell'), { attributes: true, attributeFilter: ['class'] });
});
