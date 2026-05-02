# VibeCoding Portfolio Design

name: VibeCoding Luminous Dark
version: 1.2
last_updated: 2026-05-02
status: [active]

## 1. Concept & Identity
VibeCoding is a dark, AI-native portfolio for a developer who ships real products quickly. The design must feel like the supplied reference: compact, technical, luminous and direct. It avoids generic SaaS hero language and uses the exact brand story from the mockup: fast AI-powered products, automation, full-stack development, and a builder mindset.

## 2. Visual Tokens
### Colors
- **BG Core**: `#060912` (Very dark blue/black)
- **Surface**: `#07111f` (Slightly lighter surface for depth)
- **Lines/Borders**: `rgba(111, 132, 171, 0.22)`
- **Accent Hot**: `rgba(255, 110, 88, 0.32)` (Orange/Red for energy)
- **Primary Gradient**: `#ff8762` -> `#d75c78` -> `#765eff` (Warm to cool)

### Typography
- **Primary**: `Manrope` (Inter-like, but with more character)
- **Weight**: 400 (regular), 700 (bold), 800 (extrabold)

### Brand Geometry
- Radius: `12px` to `14px` (Card corners)
- Grid: `14px` x `14px` dot/grid pattern in background

## 3. Brand Story & Copy
- Brand: `VibeCoding`
- Hero: `I build AI-powered products fast.`
- Subcopy: `VibeCoding, automation and full-stack development to turn ideas into working products in days, not months.`
- CTA: `Let's build`, `View my work`

## 4. Key Sections
- Navigation: Brand + Work, Stack, Process, About + CTA
- Hero: Compact with a Focus Grid (tool logos on a grid)
- Stats: Built in, Outcome, Focus (Small pill-like items)
- Stack sections: `AI & VibeCoding`, `Backend & Infra`, `Frontend`, `Data & Database`, `Integrations`, `Deployment & DevOps`
- Process: Speed first, AI-native, Iterative approach
- Builds: Large cards with mock-ui placeholders and meta info
- CTA Band: Strong gradient box with "Contact me" primary button

## 5. Implementation Notes
- Use Astro for performance and component-based architecture.
- Vanilla CSS with variables for all tokens.
- No Tailwind unless specifically requested (keep it lean and pixel-perfect).
- Responsive design: Single column on mobile, grid on desktop.
