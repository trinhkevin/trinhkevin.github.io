# Kevin Trinh — Resume Site

Static resume site built with [Templ](https://templ.gallery) and [Tailwind CSS](https://tailwindcss.com).

## Build

```bash
task generate
```

Or manually:

```bash
npm run css      # Build Tailwind CSS
templ generate   # Generate Go from .templ files
go run .         # Generate index.html
```

## Project Structure

- `*.templ` — Templ components (edit these)
- `src/input.css` — Tailwind config and theme
- `src/tailwind.css` — Built CSS (generated)
- `main.go` — Renders templ to HTML
- `index.html` — Output (generated)
