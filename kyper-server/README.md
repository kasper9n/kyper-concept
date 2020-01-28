# Kyber Server
*This setup is just a starting point, nothing final*

# Dev instructions

### Getting started
1. Install [Docker](https://docs.docker.com/install/)
2. If Docker didn't come with [Docker Compose](https://docs.docker.com/compose/install/), install that too
3. Create a `secrets.env` file that looks like this:
```
# When starting 
APP_DB_ADMIN_PASSWORD=securepassword
```

### Commands
Start in development mode:
```
APP_ENV=dev docker-compose up
```

Start in production mode:
```
docker-compose up
// OR
APP_ENV=prod docker-compose up
```

Rebuild the Docker images (e.g for when Dockerfiles or npm dependencies change):
```
docker-compose build
```
