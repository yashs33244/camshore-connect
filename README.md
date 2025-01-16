
---

# Camshore Connect - README

## Project Overview

Camshore Connect is an AI-powered surveillance platform, built with **React**, **PostgreSQL**, **Supabase**, and **TypeScript**. The application allows users to sign up, sign in, and manage their data, which is deployed and hosted on **AWS** for scalability and performance.

## Tech Stack

- **React**: A JavaScript library for building user interfaces, chosen for its flexibility and fast rendering capabilities.
- **PostgreSQL**: A powerful, open-source relational database to store and manage user data.
- **Supabase**: An open-source alternative to Firebase, providing authentication and real-time database services.
- **TypeScript**: A superset of JavaScript that offers static typing, which helps reduce bugs and improve code quality.
- **AWS**: Used for hosting the application, providing scalability, and securing the app with managed services like EC2, S3, and Route 53.
  
## Setup Guidelines

### 1. Clone the Repository
```bash
git clone <repository-url>
cd camshore-connect
```

### 2. Docker Setup (Recommended)
If you prefer using Docker, simply run the following command to start all necessary services (React frontend, PostgreSQL database, and other required containers):

```bash
docker-compose up -d
```

After the setup completes, visit your browser at [http://localhost:4173](http://localhost:4173) to start using the app.

### 3. Manual Setup (Without Docker)
If you prefer setting up manually, follow these steps:

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Build the app**:
    ```bash
    npm run build
    ```

3. **Run the preview**:
    ```bash
    npm run preview
    ```

Visit the application at [http://localhost:4173](http://localhost:4173) in your browser.

### 4. Accessing the App (Deployed on AWS)
- **DNS Propagation**: DNS A records usually take up to 48 hours to propagate. If you are accessing the app before the DNS resolves, use the following link:
  - [surv.yashprojects.online](http://surv.yashprojects.online)
- **Access without SSL**: If the SSL certificate is still propagating, you can use the IP address and port:
  - [http://13.61.18.55:4173](http://13.61.18.55:4173) – Sign up and sign in only using email/password (Gmail may not work due to SSL issues).

---

## Tech Stack Choice and Tradeoffs

### Why I Chose This Tech Stack:
1. **React**: 
   - Chosen for its component-based architecture, which makes the UI easier to develop, test, and maintain.
   - React’s large ecosystem and community support make it a great choice for building dynamic, interactive web applications.

2. **PostgreSQL**:
   - PostgreSQL is a robust, feature-rich database that offers ACID compliance, which ensures reliable transactions.
   - Its support for advanced features such as JSON data types, full-text search, and indexing gives it flexibility for various use cases.

3. **Supabase**:
   - Supabase provides real-time capabilities and authentication services out of the box, which reduces development time for features like user management and data syncing.
   - It's an open-source alternative to Firebase, giving us control over the database while offering similar ease of use.

4. **TypeScript**:
   - TypeScript’s static typing helps catch errors early in the development process, leading to better code quality and more reliable applications.
   - Its popularity in the React ecosystem makes it easy to find resources and support.

5. **AWS**:
   - AWS was chosen to host the application for its scalability and availability.
   - It offers a range of services like EC2 (compute), S3 (storage), Route 53 (DNS management), and RDS (managed PostgreSQL), which ensure that the app can scale and be maintained easily.

---

### Tradeoffs Between Different Implementation Options

1. **Docker vs Manual Setup**:
   - **Docker**: Provides a simple and consistent development environment, making it easier to manage dependencies and configurations. The main downside is that you need Docker installed on your machine.
   - **Manual Setup**: Gives you more control over the setup and the environment. However, it requires managing dependencies, version mismatches, and environment configurations manually.

2. **React vs Other Frontend Frameworks (Vue, Angular)**:
   - **React**: React's component-based architecture and hooks make it easier to manage state and re-render components efficiently. However, it can have a steeper learning curve for beginners compared to simpler frameworks like Vue.
   - **Vue**: Vue is more lightweight and offers a simpler learning curve but doesn’t have as large a community or as many third-party integrations as React.
   - **Angular**: Angular is a full-fledged framework with more opinionated structures but can be more complex and heavier for simpler projects.

3. **PostgreSQL vs NoSQL (MongoDB)**:
   - **PostgreSQL**: Best suited for applications that require strong consistency and complex queries. It's ideal for relational data and ensures data integrity with ACID properties. The downside is that it might not be as scalable horizontally as NoSQL databases like MongoDB.
   - **MongoDB**: Better suited for applications that require high scalability, especially for unstructured data. It’s flexible with its schema but lacks the complex querying capabilities and data integrity that PostgreSQL offers.

4. **Supabase vs Firebase**:
   - **Supabase**: Open-source and provides more control over the database and the backend while still offering authentication, real-time data syncing, and storage features similar to Firebase.
   - **Firebase**: A fully managed platform with a large number of services like Firestore, Firebase Authentication, and Firebase Functions. The tradeoff is that it can become expensive at scale and is less flexible than Supabase.

---

### Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to follow the existing coding style and include unit tests where necessary.

---

This concludes the README for Camshore Connect. If you have any questions, feel free to reach out!

--- 

Let me know if you need further adjustments or additions to this README!