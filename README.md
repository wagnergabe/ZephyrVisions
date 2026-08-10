# Zephyr Visions Website & Client Portal

**Live Website:** https://www.zephyrvisions.com  
**Project Type:** Full-Stack Web Application / Self-Hosted Infrastructure

<img width="1834" height="802" alt="image" src="https://github.com/user-attachments/assets/f173ce20-2b13-43d0-b7aa-564262e00a0d" />


Zephyr Visions is a full-stack web application developed to support my commercial drone services business. In addition to the public-facing website, the project includes a secure client delivery portal for managing clients, drone projects, and digital deliverables.

The project was built to solve a real operational need: replacing manual project delivery workflows with a centralized system where clients can securely access project information and download files associated with their account.

## Features

### Client Portal

<img width="1293" height="1095" alt="image" src="https://github.com/user-attachments/assets/33326e3f-16a0-42bb-9e40-18352eba6bb6" />


- Secure client authentication
- Personalized client dashboard
- Project status, flight date, and delivery date tracking
- Individual project detail pages
- Secure access to project deliverables
- Client-specific authorization preventing access to other clients' projects and files

### Administrative Dashboard

<img width="1176" height="1069" alt="image" src="https://github.com/user-attachments/assets/845547cf-f1a9-48ca-9236-067fb094e473" />

- Administrator authentication and protected routes
- Client creation and management
- Project creation and editing
- Project status tracking
- Deliverable upload and download functionality
- Dashboard statistics for clients, active projects, delivered projects, and uploaded files

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express
- REST API
- JWT authentication
- bcrypt password hashing
- Multer file handling

### Database

- PostgreSQL
- Relational client, user, project, and deliverable data
- Parameterized SQL queries

### Infrastructure

- Docker
- Docker Compose
- Linux
- Proxmox
- Environment-based application configuration
- Persistent storage

## Application Architecture

The application separates the frontend, backend API, database, and file storage layers.

```text
Client Browser
      |
      v
React / Vite Frontend
      |
      | HTTP / REST
      v
Node.js / Express API
      |
      +--------------------+
      |                    |
      v                    v
PostgreSQL             File Storage
      |
      v
Clients / Users /
Projects / Deliverables
```

This architecture allows the frontend and backend services to be configured independently between development and production environments.

## Authentication and Authorization

Authentication is implemented using JSON Web Tokens (JWT).

After authentication, protected API routes validate the user's token and role before allowing access to resources.

The application supports separate administrator and client permissions.

Administrators can manage clients, projects, and deliverables, while clients are restricted to projects and files associated with their own account.

Authorization is enforced by the backend rather than relying solely on frontend route protection.

During testing, requests attempting to access projects belonging to another client were rejected by the API.

## File Delivery

<img width="1666" height="744" alt="image" src="https://github.com/user-attachments/assets/1a41b021-db02-4819-8f7a-a00b506a8c4e" />


Administrators can upload project deliverables through the project management interface. File metadata is associated with the corresponding project in PostgreSQL while uploaded files are handled separately by the application storage layer.

Authenticated clients can then access and download deliverables associated with their projects.

The storage path is environment-configurable so development and production environments can use different storage locations.

## Local Development

PostgreSQL runs locally using Docker Compose.

```text
Docker Compose
      |
      v
PostgreSQL 17
      |
      v
Persistent Docker Volume
```

Environment variables are used for database credentials, JWT configuration, API endpoints, administrative credentials, and file-storage paths.

Sensitive environment files are excluded from Git source control.

## Troubleshooting & Technical Challenges

Development of the portal involved diagnosing issues across multiple layers of the application.

Examples included:

- Debugging frontend-to-API routing issues
- Diagnosing HTTP 404 and authorization responses
- Testing resource ownership restrictions
- Troubleshooting file-system paths between Windows development and Linux production environments
- Configuring environment-dependent API endpoints
- Debugging PostgreSQL and application connectivity
- Testing authenticated file upload and download workflows
- Using browser developer tools and backend logs to isolate application errors

## Security

Security controls implemented in the project include:

- bcrypt password hashing
- JWT authentication
- Role-based authorization
- Backend resource ownership validation
- Protected API routes
- Parameterized PostgreSQL queries
- Environment-based secret management
- Git exclusion of credentials and uploaded client files

## Future Development

The next phase of the project will expand the portal into a self-hosted large-file delivery platform for drone photography, RAW imagery, video, mapping, and inspection data.

Planned improvements include:

- Multi-file and folder uploads
- Resumable/chunked uploads for large drone datasets
- Upload progress monitoring
- Self-hosted high-capacity storage
- Improved file organization by client and project
- HTTPS and production reverse-proxy configuration
- Backup and recovery workflows
- Infrastructure monitoring
- Expanded production deployment documentation

## Real-World Use

Unlike a standalone demonstration project, Zephyr Visions is based on the workflow requirements of an operating commercial drone services business.

The portal is designed around actual requirements such as managing clients, scheduling projects, tracking project status, and securely delivering aerial photography, video, thermal imagery, reports, and other large digital deliverables.

## About Zephyr Visions

Zephyr Visions provides commercial drone photography, videography, thermal inspection, mapping, construction monitoring, and related UAV services in Minnesota.

More information and portfolio examples are available at:

https://www.zephyrvisions.com
