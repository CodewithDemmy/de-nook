# De Nook — Creative Co-Working Space Website

A multi-page portfolio website for **De Nook**, a fictional creative co-working space located in Yaba, Lagos. Built with plain HTML, CSS and JavaScript — no frameworks, no build tools.

🌐 **Live Site:** [denook.netlify.app](https://denook.netlify.app)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — hero with live desk map, highlights, spaces & membership preview, testimonials, CTA |
| `about.html` | Origin story, founding timeline, values grid, team section |
| `services.html` | Included amenities, add-on services and pricing list |
| `spaces.html` | Hot desks, private studios, meeting rooms and The Yard |
| `membership.html` | Plan comparison table (Day Pass → Team Studio) and FAQ accordion |
| `booking.html` | Space selector, date/time picker, live cost summary sidebar |
| `contact.html` | Location info, opening hours, contact form, Google Maps embed |

---

## Project Structure

```
de-nook/
├── index.html
├── about.html
├── services.html
├── spaces.html
├── membership.html
├── booking.html
├── contact.html
├── css/
│   ├── style.css        # Global design tokens, navbar, footer, shared layout
│   ├── home.css         # Homepage-specific styles
│   ├── about.css        # About page styles
│   ├── services.css     # Services page styles
│   ├── spaces.css       # Spaces page styles
│   ├── membership.css   # Membership table and FAQ styles
│   ├── booking.css      # Booking form and sidebar styles
│   └── contact.css      # Contact form and map styles
├── js/
│   ├── main.js          # Mobile nav toggle + live desk map animation
│   ├── booking.js       # Booking form logic and live cost summary
│   └── contact.js       # Contact form submission handler
└── images/              # Drop space/gallery photos here
```

---

## Design Tokens

| Token | Value |
|-------|-------|
| Primary dark | `#14342A` (Forest green) |
| Accent | `#FF6B4A` (Coral) |
| Secondary accent | `#E0B354` (Gold) |
| Background | `#FBF6EC` (Warm cream) |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono font | Space Mono |

---

## Features

- **Live desk map** — animated availability grid on the homepage hero, updates every 3 seconds
- **Booking form** — space selector cards with live cost estimation in the sidebar
- **Membership comparison table** — full feature breakdown across all four plans
- **FAQ accordion** — native `<details>` / `<summary>` elements, zero JS
- **Contact form** — subject selector, validation and success state
- **Responsive** — mobile-first layout, hamburger nav, fluid typography via `clamp()`
- **No dependencies** — plain HTML, CSS and vanilla JS only

---

## Built By

**Demmy** · [@CodewithDemmy](https://github.com/CodewithDemmy) · [codewithdemmy.netlify.app](https://codewithdemmy.netlify.app)
