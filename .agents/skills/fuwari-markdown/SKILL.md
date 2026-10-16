---
name: fuwari-markdown
description: Use Fuwari extended markdown features (admonitions, expressive code, GitHub cards, collapsible sections, video embeds, tables, math) in Astro blog posts.
---

# Fuwari Extended Markdown Skill

Use this skill when writing or updating blog posts in this Astro/Fuwari project.

## Supported Extended Features

### Admonitions

Use `:::` syntax for callouts:

```markdown
:::note Highlights information users should take into account. :::
:::tip Optional info to help users succeed. :::
:::important Crucial info necessary to succeed. :::
:::warning Critical content demanding immediate attention. :::
:::caution Negative potential consequences. :::
```

Custom titles:

```markdown
:::note[MY CUSTOM TITLE] This is a note with a custom title. :::
```

GitHub syntax is also supported:

```markdown
> [!NOTE]
> The GitHub syntax is also supported.
```

### GitHub Repository Cards

Embed dynamic repo cards pulled from the GitHub API on page load:

```markdown
::github{repo="Fabrizz/MMM-OnSpotify"}
::github{repo="saicaca/fuwari"}
```

### Expressive Code

Code blocks support syntax highlighting, frames, line markers, collapsible sections, line numbers, word wrap, and diff-like syntax.

**Syntax Highlighting** — regular highlighting and ANSI escape sequences.

**Editor & Terminal Frames** — add `title` or override frame types.

**Text & Line Markers** — mark full lines, ranges (`"7-8"`), or individual text. Types: `mark`, `ins`, `del`. Add labels. Use diff-like syntax (`+` inserted, `-` deleted). Combine with syntax highlighting.

**Word Wrap** — configure per block (`wrap`, `wrap=false`, `preserveIndent`).

**Collapsible Sections** — wrap boilerplate/setup code in collapsible blocks; keep visible sections by default.

**Line Numbers** — display per block, disable per block, or change starting line number.

### Collapsible Sections

Wrap collapsible code in blocks. Sections before/after visible content can be collapsed.

### Video Embeds

Paste embed `<iframe>` code directly in markdown. Supported platforms include YouTube and Bilibili.

```markdown
<iframe width="100%" height="468" src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
```

### Tables

Standard Markdown tables work. Multi-line tables and definition lists are supported.

```markdown
| size | material | color |
| 9 | leather | brown |
```

### Basic Markdown Features

- Block quotes (`>`), nested lists, numbered lists
- Links (`[text](url)`), local docs, section headings (`#section`)
- Footnotes (`[^1]` with `[^1]: text`)
- Images (`![alt](path)` or inline URLs)
- Inline math (`$...$`) and display math (`$$...$$`)
- Definition lists (`term : definition`)
- Line blocks (`| Line one | Line too |`)
- Em-dash (`---`), ellipsis (`...`), Unicode

### Frontmatter of Posts

Every post in `src/content/posts/` uses YAML frontmatter:

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: Short description for index page.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

Image paths:
- `http://` or `https://` — web image
- `/` — image in `public` dir
- No prefix — relative to the markdown file

### Where to Place Post Files

Post files go in `src/content/posts/`. Sub-directories are allowed for organization:

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## When to Apply

- Writing `src/content/posts/*.md`
- Updating existing posts with callouts, code examples, repo links, or architecture highlights
- Adding video embeds, tables, math expressions, or expressive code blocks
