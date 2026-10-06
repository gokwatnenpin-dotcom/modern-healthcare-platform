# Healthcare Platform API

Express + PostgreSQL backend for the React healthcare platform.

## Run locally

1. From the project root, install dependencies once with `npm install`.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` to your local PostgreSQL credentials for the `modern_healthcare` database.
3. Start PostgreSQL: `docker compose up -d`.
4. From the project root, create tables and demo data: `npm run migrate && npm run seed`.
5. From the project root, start both apps: `npm run dev`.

The API runs on `http://localhost:4000`. Demo credentials are `patient@example.com / ziggy1234`.

## Main endpoints

- `POST /api/auth/register`, `POST /api/auth/login`
- `GET /api/providers`
- `GET/POST /api/appointments`, `PATCH /api/appointments/:id/status`
- `GET/PATCH /api/patients/me`
- `GET /api/patients/me/records`, `GET /api/patients/me/medications`
- `GET /api/health`

The schema also includes prescriptions, invoices, consents, and audit logs so these modules can be enabled without redesigning the database. Before production, add a secrets manager, HTTPS, object storage for encrypted documents, formal audit middleware, backups, retention policies, and a compliance review for the jurisdictions where the service will operate. Do not use the seed password or sample data in production.
