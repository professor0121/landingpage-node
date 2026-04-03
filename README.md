# thewebtab — Landing Page

A modern landing page with a Node.js + Express backend that serves static HTML and handles contact form submissions via email (Nodemailer + Gmail SMTP).

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Form Fields](#form-fields)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- Serves a static landing page (`public/index.html`)
- Contact / lead form submission that sends a formatted HTML email via Gmail SMTP
- CORS whitelisted for the production domain and Vercel preview URLs
- Environment-variable-based configuration (no secrets in code)

---

## Project Structure

```
thelandingpage/
├── public/                  # Static assets served by Express
│   ├── index.html           # Main landing page
│   ├── submit.html          # Thank-you page shown after form submission
│   ├── fav/                 # Favicon assets
│   ├── images/              # Project / client images
│   ├── logos/               # Brand / client logos
│   └── svg/                 # Inline SVG assets
├── services/
│   └── smtp.service.js      # Nodemailer transporter & sendMail helper
├── .env.example             # Template for required environment variables
├── index.js                 # Express app entry point
└── package.json
```

---

## Prerequisites

| Tool          | Minimum version                              |
| ------------- | -------------------------------------------- |
| Node.js       | 16+                                          |
| npm           | 8+                                           |
| Gmail account | with an **App Password** enabled (see below) |

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/professor0121/landingpage-node.git
   cd landingpage-node
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Fill in the values (see [Environment Variables](#environment-variables)).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The server starts at `http://localhost:3000`.

5. **Production start**

   ```bash
   npm start
   ```

---

## Environment Variables

Copy `.env.example` to `.env` and populate the following:

| Variable    | Description                                           | Example               |
| ----------- | ----------------------------------------------------- | --------------------- |
| `SMTP_USER` | Gmail address used to send emails                     | `you@gmail.com`       |
| `SMTP_PASS` | Gmail **App Password** (16-character, spaces allowed) | `abcd efgh ijkl mnop` |
| `PORT`      | _(optional)_ Port for the Express server              | `3000`                |

> **How to get a Gmail App Password**
>
> 1. Enable 2-Step Verification on your Google account.
> 2. Go to **Google Account → Security → App Passwords**.
> 3. Generate a password for "Mail" / "Other".
> 4. Paste the 16-character password as `SMTP_PASS`.

---

## API Endpoints

| Method | Path           | Description                                              |
| ------ | -------------- | -------------------------------------------------------- |
| `GET`  | `/`            | Serves `public/index.html`                               |
| `POST` | `/submit-form` | Processes form, sends email, serves `public/submit.html` |

### `POST /submit-form`

Accepts `application/x-www-form-urlencoded` or `application/json`.

---

## Form Fields

The contact form collects the following fields and includes them in the notification email:

| Field name                           | Description                   |
| ------------------------------------ | ----------------------------- |
| `name`                               | Submitter's full name         |
| `Email`                              | Submitter's email address     |
| `Phone`                              | Submitter's phone number      |
| `Website-URL`                        | Their website URL             |
| `Ads-Spends`                         | Current monthly ad spend      |
| `Where-did-you-get-to-hear-about-us` | Referral / discovery source   |
| `Urgency`                            | How urgently they need help   |
| `Problem-Statements-List`            | Key problems they want solved |
| `Product-Page-Link`                  | Link to their product page    |

---

## Deployment

The project is configured for **Vercel** deployment.

CORS is pre-configured for:

- `https://thewebtab.com`
- Vercel preview URLs (`*.vercel.app`)

Set the environment variables (`SMTP_USER`, `SMTP_PASS`) in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## License

ISC © [Abhishek Kushwaha](https://github.com/professor0121)

# To do ....

Updated Form Fields Schema

1. Revenue
   Type: Dropdown (Select)
   Field Name: revenue

Options:
```js
[
{ "label": "Want to start", "value": "start" },
{ "label": "0 - 10,000", "value": "0-10000" },
{ "label": "10,000 - 20,000", "value": "10000-20000" },
{ "label": "20,000 - 30,000", "value": "20000-30000" },
{ "label": "Above 30,000", "value": "above-30000" }
] 
```
2. What do you want?
Type: Dropdown (Select)
Field Name: requirement

Options:
```js
[
{ "label": "Want a new store", "value": "new_store" },
{ "label": "Redesign / Optimize existing store", "value": "redesign_optimize" }
]
```