# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/eef5255f-82e9-4cfc-bc36-0e97dba26c87

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/eef5255f-82e9-4cfc-bc36-0e97dba26c87) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

Use Node.js 22.12 or later in the Node 22 line, or Node.js 24 or later, with npm.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Create the local configuration and start the development server.
cp .env.example .env
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Create `.env` from `.env.example` on the server and configure the listener there.

- `PORT` is the application port. Point the reverse proxy upstream at the same port.
- `HOST` is the bind address. Use `127.0.0.1` for a proxy on the same machine, or the appropriate interface when the proxy runs elsewhere.
- `ALLOWED_HOSTS` lists the exact hostnames forwarded by the reverse proxy, separated by commas. Use hostnames without `https://`, paths, or ports. For example, `ALLOWED_HOSTS=college.example.org,www.college.example.org`.

Configure the proxy to preserve the public `Host` header and restart the application after changing `.env`.

```sh
npm install
npm run build
npm start
```

`npm start` serves `dist` and supports direct navigation to React routes. `npm run dev` and `npm run preview` read the same listener settings, so stop a process before starting another on the configured port.

Contact form submissions are saved as individual JSON records in `.data/contact-enquiries/` on the server. The contact page displays the record’s reference number after it is saved. Give authorised college staff access to this directory and preserve it across deployments so they can retrieve and respond to enquiries.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
