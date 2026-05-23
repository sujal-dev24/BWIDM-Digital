# BWIDM Digital (Website + Contact Backend)

This project is a small website for **BWIDM Digital**.
It has:
- a **frontend** (Next.js) website users can browse
- a **backend** (PHP) contact API that saves contact form messages in a MySQL database

If you are not a coder, you can still run it locally and use the website.

---

## What this app does (functionalities)

### 1) Website pages (frontend)
- **Home page (/**)**
  - Hero section with animated visuals
  - Services carousel (SEO/SEM/Paid Media/Conversion/Reputation/Music)
  - YouTube channel cards with links to external channels
  - A scrolling “partner/brand” strip
  - About section
  - Contact section (button to go to contact form)

- **About page (/about-us)**
  - About text, animated sections, and a video block (opens `video.mp4`)
  - Contact section at the bottom

- **Services page (/services)**
  - (If you have this route in your repo; the navigation shows it.)

- **Contact page (/contact-us)**
  - A form where users can send their details and message
  - Sends the form data to the PHP backend API

- **Navbar + Footer**
  - Navbar links: Home, About Us, Services, and “Get in touch”
  - Footer includes email + social links

### 2) Contact form submission (backend)
When a user submits the contact form:
- the website validates required fields
- it sends the data as **JSON** to the backend
- the backend inserts the data into a MySQL table named **`contacts`**
- the backend returns success/failure JSON to the website

> The form fields are: `name`, `email`, `phone`, `company`, `designation`, `message`.

---

## How to run the project locally

### Prerequisites
You need:
- **Node.js** (for the Next.js frontend)
- **PHP** + **MySQL** (for the backend)

> The backend PHP code expects a MySQL database named `pariavi`.

---

## Step A: Run the frontend (Next.js)

1. Open a terminal in the `client` folder:
   - `d:/pariavi-content/client`

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open in your browser:
   - http://localhost:3000

---

## Step B: Configure and run the backend (PHP)

The backend file is:
- `backend/api/contact.php`

This PHP file:
- connects to MySQL with:
  - host: `localhost`
  - user: `root`
  - password: *(empty in code)*
  - database: `pariavi`
- reads the JSON body sent by the frontend
- inserts into table: `contacts`

### Important: Create the MySQL table
The backend inserts into:
- `name`
- `email`
- `phone`
- `company`
- `designation` column (or a column named similarly; it tries to detect `designation`)
- `message`
- `dt` (timestamp)

If your database schema is different, the insert may fail.

### Also important: Set URL for the frontend
In the contact page code, the form does this request:
```js
fetch(process.env.URL, { method: "POST", ... })
```
So you must set the environment variable `URL` in the frontend.

Example:
- `URL=http://localhost/path-to-contact.php`

Common setups:
- If you run PHP on `http://localhost/backend/api/contact.php`, then set `URL` to that.

*(How you set environment variables depends on your hosting/dev setup.)*

---

## How to use the application (non-coder guide)

1. Start the frontend (`npm run dev`).
2. Open the home page in your browser.
3. Click **“Let’s Work Together”** or **“Get in touch”** in the navbar.
4. On **Contact Us** page:
   - Enter your **Name**
   - Enter a valid **Email**
   - Enter **Phone number**
   - Enter **Company name**
   - Enter **Designation**
   - Write your **Message**
5. Click **Submit**.
6. If the backend is set correctly:
   - you will see a success message
   - otherwise you will see an error message like “Please fix the highlighted fields…” or “Unable to submit right now…”

---

## Notes / troubleshooting

### “Unable to submit right now”
Common causes:
- The backend URL (`process.env.URL`) is not set or is wrong
- Backend server is not running
- Database connection details are wrong
- The `contacts` table is missing or columns don’t match

### CORS headers
`backend/api/contact.php` allows cross-origin requests using:
- `Access-Control-Allow-Origin: *`

So the frontend can call it even if it runs on a different port.

---

## Project structure
- `client/` → Next.js website
- `backend/` → PHP backend API
  - `backend/api/contact.php` → contact form handler
  - `backend/config/db.php` → database configuration file

---

## Next steps (optional)
- Add/update documentation for database schema (`contacts` table)
- Add environment example file for `process.env.URL`
- Add tests / logging on backend for easier debugging

