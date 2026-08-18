# shreyash-t02.github.io

Personal site — [shreyash-t02.github.io](https://shreyash-t02.github.io/)

Robotics, motion planning, model-based control, and simulation. M.S. Mechanical Engineering at USC.

Built on [al-folio](https://github.com/alshedivat/al-folio) (Jekyll), deployed to GitHub Pages via GitHub Actions.

---

## Structure

| Path | What lives there |
| --- | --- |
| `_pages/about.md` | Landing page — bio, focus areas, availability |
| `_projects/` | One file per project; `category` sorts it into Research or Engineering |
| `_news/` | Short dated updates shown on the landing page |
| `assets/json/resume.json` | **Source of truth for the `/cv/` page** (JSON Resume format) |
| `assets/img/projects/` | Hand-authored SVG diagrams, one per project |
| `_sass/_custom.scss` | Site-specific styles, kept separate so theme updates stay mergeable |

> The CV page renders from `assets/json/resume.json`, **not** `_data/cv.yml` — `_layouts/cv.liquid`
> prefers the JSON whenever `site.data.resume` exists. Edit the JSON.

## Running locally

Requires Ruby 3.3+, Node, and ImageMagick on `PATH`.

```bash
bundle install
```

```bash
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

### Adding a project

Create `_projects/N_name.md`:

```yaml
---
layout: page
title: Project Name
description: One line that shows on the card
img: assets/img/projects/name.svg
importance: 3          # sort order within the category
category: Engineering  # or: Research
github: https://github.com/...   # optional, adds a repo icon to the card
---
```

## Notes

- **Windows local builds**: `jekyll-imagemagick` shells out to `convert`, which collides with the
  Windows built-in `convert.exe`. Responsive WebP generation fails locally but works in CI (Linux);
  images fall back to the original file, so the site still renders correctly.
- **`_data/socials.yml`**: a `custom_social` entry's `logo` must be an image *file path* —
  `social.liquid` renders it inside `<img src="...">`, so raw `<i>` markup produces a broken request.
