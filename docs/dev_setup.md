# Getting Started (For Developers)

To run OpenCal locally for development, ensure Docker and Docker Compose are installed on your machine. The
`docker-compose.yml` file includes all required services, including Radicale as CalDAV server.

Follow these steps to get started:

## 1. Clone the Repository

```bash
git clone git@github.com:var-lab-it/opencal.git
cd opencal
```

## 2. Build the Containers

To build all images locally, run:

```bash
docker compose build
# or
make build
```

## 3. Install Dependencies

After building, you must reinstall dependencies because local folders are mounted as volumes in the Docker containers.
The dependencies for backend and frontend must exist outside the container.

Avoid using a locally installed Composer, as your PHP version may differ from the required version.

Install backend and frontend dependencies with:

```bash
make install
```

Alternatively:

```bash
make backend.install
make frontend.install
```

Or:

```
docker compose run --entrypoint="composer" php_backend install
docker compose run --entrypoint="npm" frontend install
```

## 4. Generate .ics Files for Radicale (CalDAV)

To populate Radicale with sample appointments, run:

```
./generate-ics.sh
```

This script generates 120 `.ics` files in `dev/caldav/data/collections/collection-root/dev/example`, which is mounted
into the Radicale container.

## 5. Start the Containers

To start the services:

```bash
docker compose up -d
# or
make up
```

When the development environment starts, backend fixtures - including a default user - are loaded.

To verify, try to login:

- URL: http://localhost/login
- User: `user@example.tld`
- Password: `password`

More users are defined in [UserFixtures](backend/src/DataFixtures/UserFixtures.php).
