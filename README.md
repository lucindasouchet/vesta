# [Vesta](https://visionary-gumption-c97094.netlify.app/)
---

# Table of Contents <a name="tableOfContents"></a>

1. [Project Structure](#projectStructure)

2. [Commands](#commands)

3. [Deployment](#deployment)

   - [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
   - [Deployment – Live website](#deploymentLiveWebsite)

---

## 🚀 Project Structure <a name="projectStructure"></a>

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   ├── images
│   |   └── image.svg
│   ├── locales
│   │   ├── en
│   │   |   └── translation.json
│   │   ├── es
│   │   |   └── translation.json
│   └── └── fr
│           └── translation.json
├── src
│   ├── components
│   │   └── Home.astro
│   ├── layouts
│   │   └── BaseLayout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

Back to [top](#tableOfContents)

---

## 🧞 Commands <a name="commands"></a>

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Back to [top](#tableOfContents)

---

## 🧞 Deployment <a name="deployment"></a>

### Deployment – Run locally <a name="#deploymentRunLocally"></a>
1. Prerequisite:
   - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
   - Please see `.nvmrc` file at the root of `vesta` repo containing the Node version.
   - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc. Here is [NVM for Windows](https://github.com/coreybutler/nvm-windows)
2. In GitHub click on the repository nammed [vesta](https://github.com/lucindasouchet/vesta)
3. Clone the repository locally. Run

   ```
   git clone https://github.com/lucindasouchet/vesta.git
   ```

4. Install all modules listed as dependencies in package.json

   ```
   cd vesta
   npm install
   ```

5. Runs the app in the development mode.
   Open http://localhost:4321/ to view it in the browser.
   ```
   cd vesta
   npm run dev
   ```

Back to [top](#tableOfContents)

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

=> live link: https://visionary-gumption-c97094.netlify.app/

Back to [top](#tableOfContents)

---

## 👀 Want to learn more?

[Astro Documentation](https://docs.astro.build)
[Astro Discord server](https://astro.build/chat)
