'use strict';

// Fractal Continuum (Hard)
[{
  zoneRegex: /^The Fractal Continuum \(Hard\)$/,
  triggers: [
    {
      id: 'Fractal Swipe',
      regex: /(?:14:2AE5:Servomechanical Minotaur starts using 16-Tonze Swipe|14:29A2:Biomanufactured Minotaur starts using 11-Tonze Swipe)/,
      regexDe: /(?:14:2AE5:Servomechanischer Minotaurus starts using 16-Tonzen-Hieb|14:29A2:Biotech-Minotaurus starts using 11-Tonzen-Hieb)/,
      infoText: {
        en: 'swipe',
        de: 'Hieb',
      },
    },
    {
      id: 'Fractal Swing',
      regex: /(?:14:2AE4:Servomechanical Minotaur starts using 128-Tonze Swing|14:29A1:Biomanufactured Minotaur starts using 111-Tonze Swing)/,
      regexDe: /(?:14:2AE4:Servomechanischer Minotaurus starts using 128-Tonzen-Schwung|14:29A1:Biotech-Minotaurus starts using 111-Tonzen-Schwung)/,
      alertText: {
        en: 'Swing',
        de: 'Schwung',
      },
    },
    {
      id: 'Fractal Dragon Voice',
      regex: /starts using The Dragon's Voice/,
      regexDe: /starts using Stimme Des Drachen/,
      alertText: {
        en: 'Dragon\'s Voice',
        de: 'Stimme Des Drachen',
      },
      tts: {
        en: 'dragon',
        de: 'drache',
      },
    },
    {
      id: 'Fractal Ram Voice',
      regex: /starts using The Ram's Voice/,
      regexDe: /starts using Stimme Des Widders/,
      alertText: {
        en: 'Ram\'s Voice',
        de: 'Stimme Des Widders',
      },
      tts: {
        en: 'ram',
        de: 'widder',
      },
    },
    {
      id: 'Fractal Death Spin',
      regex: /14:27AE:The Ultima Beast starts using Death Spin/,
      regexDe: /14:27AE:Ultimative Bestie starts using Strudel Des Todes/,
      infoText: {
        en: 'Knockback',
        de: 'Rückstoß',
      },
    },
    {
      id: 'Fractal Aether Bend',
      regex: /14:27(?:A3|AF|B0):The Ultima Beast starts using Aether Bend/,
      regexDe: /14:27(?:A3|AF|B0):Ultimative Bestie starts using Ätherbeugung/,
      alertText: {
        en: 'Get In',
        de: 'Reingehen',
      },
      tts: {
        en: 'in in in',
        de: 'rein rein rein',
      },
    },
  ],
}];
