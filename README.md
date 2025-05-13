# Jessica Taylor - Patient Dashboard

A simple web-based patient dashboard to visualize Jessica Taylor's medical history. This project fetches mock patient data and displays it, along with a chart showing her blood pressure over the years.

## Project Overview

This project consists of two parts:

1. **Frontend (Client-Side)**:
   - Displays patient information, including name, age, gender, and phone number.
   - Renders a line chart of Jessica's blood pressure over time using Chart.js.

2. **Backend (Server-Side)**:
   - A Node.js server that serves mock patient data from a local `mockData.json` file.
   - The server exposes a `/patients` endpoint that returns the patient data in JSON format.

## Features

- Fetch and display patient data from the backend.
- Visualize Jessica Taylor's blood pressure readings over the years.
- Easy to set up and run locally.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Chart.js
- **Backend**: Node.js, Express, Cors, Mock Data (JSON)
- **Package Manager**: npm

## Setup Instructions

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which comes with npm)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

### Backend Setup

1. Clone or download the project.
2. Navigate to the project directory.
3. Install dependencies for the backend:

   ```bash
   npm install
