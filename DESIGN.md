---
name: Wortschmiederei
description: Selbstbewusste, wortgetriebene Marken-Website für Karin Kleists Kommunikations-Praxis.
colors:
  magenta: "#fc1370"
  magenta-deep: "#b41e86"
  hero-grad-start: "#9c0a50"
  hero-grad-end: "#c8106a"
  ink: "#353333"
  black: "#000000"
  muted: "#7c6f73"
  surface: "#f3f3f3"
  sand: "#eae6e5"
  white: "#ffffff"
  border: "#dddddd"
typography:
  display:
    fontFamily: "'Abril Fatface', Georgia, serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  hero:
    fontFamily: "'Abril Fatface', Georgia, serif"
    fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "normal"
  body:
    fontFamily: "'Open Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Open Sans', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  pill: "2rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 2.2rem"
  button-primary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.magenta}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.magenta}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 2.2rem"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "2.5rem"
  seg-control-active:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.6rem"
---

# Design System: Wortschmiederei

## 1. Overview

**Creative North Star: "Die Wortschmiede"**

Eine Werkstatt, in der Worte geschmiedet werden. Das System ist ruhig und schwarz-weiß in seiner Substanz – echte Reportage-Fotos von Karin, klare Sans-Serif-Fließtexte, großzügig gesetzte Display-Headlines – und lässt genau einen Werkstoff glühen: ein sattes Magenta, das wie der Funke am Amboss nur dort auftaucht, wo es zählt (Hero-Flächen, Buttons, der eine Akzent). Selbstbewusst und klar, nie laut. Das Handwerk selbst ist der Beweis: Eine Kommunikationsexpertin muss durch die eigene Seite zeigen, dass sie Botschaften auf den Punkt bringt.

Tiefe ist taktil, nicht dekorativ. Karten ruhen flach, heben sich aber spürbar an, wenn man sie anfasst (Hover-Lift + weicher Schatten); der Hero ist ein vollflächiger Magenta-Verlauf mit harter Kante zum Foto. Typografie trägt die Marke – es ist eine *Wort*schmiederei: Abril Fatface für die Headlines, Open Sans für alles Lesbare. Bild und Effekt unterstützen, ersetzen nie das Wort.

Ausdrücklich abgelehnt: austauschbare Agentur-/SaaS-Template-Optik, kalte Konzernsprache, laute Gimmicks und alles, was billig oder zusammengeschustert wirkt.

**Key Characteristics:**
- Schwarz-weiße Substanz, ein einziger glühender Magenta-Akzent
- Display-Serif (Abril Fatface) gegen humanistische Sans (Open Sans) – Kontrast-Paarung
- Taktile Tiefe: flach in Ruhe, hebt sich bei Interaktion
- Volle Viewport-Heroes mit hartem Magenta/Foto-Seam
- Persönliche Du-Ansprache, echte Fotos statt Stockware

## 2. Colors

Eine schwarz-weiße Basis, die von einem einzigen, kräftigen Magenta zusammengehalten wird; Neutraltöne sind warm-grau, nicht kalt.

### Primary
- **Schmiede-Magenta** (#fc1370): Die Markenfarbe. Trägt Hero-Flächen, primäre Buttons, aktive Segmente, Akzent-Unterstreichungen, Links. Der „Funke" – bewusst dominant im Hero, sparsam überall sonst.
- **Tiefes Magenta** (#b41e86): Dunklere Magenta-Variante für Verläufe und Akzentvarianten.
- **Hero-Verlauf** (#9c0a50 → #c8106a): Diagonaler 135°-Verlauf (dunkel oben links → hell) als vollflächiger Hero-Hintergrund.

### Neutral
- **Tinte** (#353333): Primäre Fließtextfarbe – warmes Fast-Schwarz, nicht reines Schwarz.
- **Schwarz** (#000000): Überschriften.
- **Gedämpft** (#7c6f73): Sekundärtext, Bildunterschriften, Meta – warmes Taupe-Grau.
- **Fläche** (#f3f3f3): Abwechselnde Sektions-Hintergründe, Karten-Ruhezonen.
- **Sand** (#eae6e5): Sehr helle Tonfläche für dezente Akzente.
- **Weiß** (#ffffff): Haupthintergrund, Karten, heller Footer.
- **Rahmen** (#dddddd): 1px-Rahmen, Trennlinien, Card-Outlines.

### Named Rules
**Die Funken-Regel.** Magenta ist der einzige gesättigte Ton im System. Im Hero darf es flächig glühen; auf allen Inhaltsflächen bleibt es Akzent (Buttons, ein aktives Element, eine Linie) – nie zwei konkurrierende Magenta-Flächen pro Screen.

## 3. Typography

**Display Font:** Abril Fatface (Fallback: Georgia, serif)
**Body Font:** Open Sans (Fallback: sans-serif)

**Character:** Kontrast-Paarung statt Geschwister: eine hochkontrastige Display-Serif mit Charakter gegen eine ruhige humanistische Sans. Die Serif gibt der „Wortschmiederei" Stimme, die Sans hält den Lesefluss klar.

### Hierarchy
- **Hero** (Abril Fatface 400, clamp(2.2rem, 3.6vw, 3.2rem), 1.18): Hero-H1, weiß auf Magenta, vertikal zentriert.
- **Display / Headline** (Abril Fatface 400, clamp(1.8rem, 3.5vw, 2.6rem), 1.2): Sektions-H2 („Das kann ich für dich tun", „Happy Clients").
- **Title** (Abril Fatface 400, clamp(1.3rem, 2.5vw, 1.8rem), 1.2): H3 / Karten-Titel.
- **Body** (Open Sans 400, 1rem ≈ 15px, 1.75): Fließtext; Zeilenlänge auf ~65–75ch begrenzen.
- **Label** (Open Sans 700, 0.78rem, letter-spacing 0.06em, UPPERCASE): Header-CTA, Segment-Schalter, Workshop-Tags, Section-Labels.

### Named Rules
**Die Wort-zuerst-Regel.** Typografie trägt die Marke. Bevor ein Effekt oder eine Grafik hinzukommt, muss der Text allein tragen. Es ist eine Wortschmiederei – das Wort gewinnt.

## 4. Elevation

Taktiles System: Flächen ruhen flach, gewinnen Tiefe aber durch Interaktion. Der eine ambiente Schatten markiert „abgesetzte" Inhalte (Testimonials); Service-Karten liegen flach mit 1px-Rahmen und heben sich beim Hover spürbar an. Keine Dauer-Schatten als Deko.

### Shadow Vocabulary
- **Ambient (Ruhe)** (`box-shadow: 0 2px 20px rgba(0,0,0,0.08)`): Testimonial-Karten, abgesetzte Boxen – weicher, diffuser Auftrieb.
- **Lift (Hover)** (`box-shadow: 0 12px 30px rgba(0,0,0,0.08)` + `translateY(-3px)`): Service-Karten bei Hover – die Karte „kommt entgegen".

### Named Rules
**Die Anfassen-Regel.** Tiefe ist eine Antwort auf Interaktion, kein Default. Karten sind in Ruhe flach (Rahmen, kein Schatten) und heben sich erst bei Hover/Fokus.

## 5. Components

### Buttons
- **Shape:** dezent gerundet (2px); voll-pill (2rem) nur bei Tags/Badges.
- **Primary:** Magenta-Fläche (#fc1370), weißer Text, Padding 0.85rem 2.2rem, 2px transparenter Rahmen. Hover: invertiert zu weißem Grund + Magenta-Text.
- **Light (Hero):** weißer Grund, Magenta-Text – der CTA auf der Magenta-Heldenfläche. Hover: transparent + weißer Text.
- **Casing:** Header-CTA und Hero-Buttons sind UPPERCASE (Label-Stil); inhaltliche Buttons („Mehr erfahren", „Mach den ersten Schritt") in normaler Schreibweise.
- **Hover/Focus:** Farb- und Rahmenwechsel über `0.3s ease`.

### Chips / Tags
- **Workshop-Tag:** Magenta-Pille (#fc1370), weißer Text, 0.75rem, uppercase – kennzeichnet Format/Kategorie.
- **Segmented Control (Video-Umschalter):** zusammenhängende Leiste mit 2px Magenta-Rahmen; aktives Segment Magenta-gefüllt (weißer Text), inaktive weiß (Magenta-Text) mit 1px-Teilern. Optik des Header-CTA.

### Cards / Containers
- **Corner Style:** 4px (Karten), Sektions-Flächen ohne Radius.
- **Background:** Weiß auf Fläche (#f3f3f3) im Wechsel; die „Erst die Kunden"-Box ist Magenta-gefüllt mit weißem Text.
- **Shadow Strategy:** siehe Elevation – flach in Ruhe, Lift bei Hover.
- **Border:** 1px (#dddddd) auf Service-/Prozess-Karten.
- **Internal Padding:** 2.5rem (lg).

### Inputs / Fields
- **Style:** 2px Rahmen (#dddddd), weißer Grund, 2px Radius, Open Sans.
- **Focus:** Rahmen wechselt auf Magenta (#fc1370).

### Navigation
- **Style:** fixe weiße Kopfleiste (92px), HD-Schriftzug-Logo links, horizontale Sans-Links, rechts ein Magenta-CTA (UPPERCASE).
- **States:** Links wechseln auf Magenta bei Hover/aktiv; Leiste bekommt beim Scrollen Rahmen + leichten Schatten.
- **Mobile:** Hamburger öffnet ein Vollflächen-Overlay; Hero stapelt Text über Foto.

### Hero (Signature)
- Vollhöhe (100vh), zweispaltig: ~40% Magenta-Verlauf-Textspalte / ~60% Foto als `background-size: cover` mit **harter** vertikaler Kante. Eyebrow (Display, klein) + großes H1 + Light-CTA, vertikal zentriert. Auf Mobile gestapelt (Text, dann Foto).

## 6. Do's and Don'ts

### Do:
- **Do** Magenta (#fc1370) als einzigen gesättigten Akzent einsetzen – flächig nur im Hero, sonst sparsam (Funken-Regel).
- **Do** echte Schwarz-Weiß-/Reportage-Fotos von Karin verwenden; den Menschen zeigen.
- **Do** Abril Fatface für Headlines gegen Open Sans für Text setzen (Kontrast-Paarung), Fließtext bei ~65–75ch halten.
- **Do** Karten flach lassen und erst bei Hover anheben (Anfassen-Regel).
- **Do** auf jeder Seite einen klaren Weg zum Kennenlern-Kaffee anbieten.
- **Do** für Animationen eine `prefers-reduced-motion`-Alternative mitliefern.

### Don't:
- **Don't** in generische Agentur-/SaaS-Template-Optik verfallen (austauschbare Hero-Metrik-Kacheln, identische Icon-Karten-Raster, Stockfoto-Beliebigkeit).
- **Don't** kalt/corporate werden – keine steife Konzernsprache; die Du-Stimme bleibt.
- **Don't** laut/verspielt dekorieren: keine Verlaufs-Texte, kein Glassmorphism als Default, keine sketchy SVG-Doodles, keine Streifen-Hintergründe.
- **Don't** zwei konkurrierende Magenta-Flächen auf einem Screen stapeln.
- **Don't** Seitenstreifen-Rahmen (>1px farbiger `border-left/right`) als Akzent nutzen; volle Rahmen oder Tonflächen stattdessen.
- **Don't** Karten überrunden (Radius >16px) – hier 4px; nur Tags/Buttons dürfen Pille sein.
- **Don't** Fließtext in hellem Grau auf getöntem Weiß setzen (Kontrast ≥4.5:1; Tinte #353333 ist die Default-Textfarbe).
