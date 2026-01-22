# Deployment Guide

## Prerequisites

- Docker and Docker Compose installed on the EC2 server
- Port 80 and 443 open in security group

## Setup

1. Clone the repository on your EC2 server:
   ```bash
   git clone <repository-url>
   cd phitopolis-website/deploy
   ```

2. Generate self-signed SSL certificate:
   ```bash
   mkdir -p ssl
   openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
     -keyout ssl/key.pem \
     -out ssl/cert.pem \
     -subj "/CN=uat.phitopolis.io"
   ```

3. Build and start the container:
   ```bash
   docker compose build
   docker compose up -d
   ```

## Useful Commands

- View logs: `docker compose logs -f`
- Restart: `docker compose restart`
- Stop: `docker compose down`
- Rebuild: `docker compose build --no-cache && docker compose up -d`

## Renewing SSL Certificate

To renew the self-signed certificate:
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/key.pem \
  -out ssl/cert.pem \
  -subj "/CN=uat.phitopolis.io"
docker compose restart
```
