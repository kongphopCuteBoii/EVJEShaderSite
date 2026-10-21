# Enhanced Visuals Shader

A small static website for **Crystaline**, a Minecraft Java Edition shader project, with a coming-soon section for **Cerulean**, its planned Bedrock Edition counterpart.

## Local preview

Open `index.html` in a browser, or run a local static server from the repository root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages whenever you push to `main`, or when you manually run the workflow. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Assets and copy

- In-game captures live in `assets/images/`.
- The visible website copy is collected in `website-copy.txt` as an editing reference. Editing that text file alone does not update the page; apply final wording to `index.html` as well.
- The comparison slider uses the supplied matching jungle-shore screenshots. The village pair is shown side-by-side for reference.

The site intentionally does not claim an available public shader download or unverified compatibility details.
