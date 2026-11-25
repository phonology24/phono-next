# Phonology design direction

Read by people and AI agents before UI work. Tokens live in `styles/globals.css`; this file says how to use them.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1

## Identity
- Phonology is a voice carrier for businesses in India: SIP trunks, A-Z international calling, hosted VoIP and PBX, international virtual numbers, AI voice agents.
- Buyers: Indian companies that call or take calls from abroad every day (BPOs, call centres, exporters, teams with overseas customers). They compare carriers on coverage, call quality, rates and support.
- Voice: technical and plain. Name the thing (SIP trunk, country code, dialler), say what it does, no hype. Rates are never printed: the action is asking for a rate card.

## Look
- Palette: graphite ink, mint accent (`--mint`, text `--mint-text`), neutral surfaces. Call-status colours (`--status-live|ringing|missed|hold`) only inside call UI, never as decoration.
- Type: Unbounded for display (wide, telecom-console feel), Figtree for text, Martian Mono only for numbers, codes and call data.
- Motif: the keypad dot grid from the logo and live call UI (numbers, flags, durations). Pictures show calls and numbers, not stock people.
- Themes: light by default, dark through the picker. Both must work: use tokens only, never hard-coded colours.

## Layout
- Content width 1240px (`.wrap`). Text left, picture right on splits, top-aligned.
- Sections vary: a split with call UI, a service list in rows, a numbered setup sequence, a country directory, an always-dark band (`.ph-ink`) once per page.
- One main action per page: "Get a rate card" (homepage) or "Get a <country> number" (country pages), both scrolling to the `#quote` section. Secondary: call sales.

## Motion
- Hero enters once on load. Live call UI may pulse its status dot. Hover states on links and cards. No scroll-triggered fades.

## Never
- Invented numbers, customers or quotes (the four figures and three testimonials on the homepage are real, confirmed 2026-11-24).
- Prices, em dashes, "seamless/powerful/cutting-edge" copy, generic CTAs (Learn more, Get started).
