# weather-app-top-hb

A modular, responsive weather application built as part of *The Odin Project* JavaScript course.  
This project retrieves real-time weather data and weather-related GIFs using external APIs and displays them through a dynamic UI powered by JavaScript and Webpack.

---

## 🌦️ Overview

The **Weather App (TOP HB)** allows users to:
- Search for any location in the world.
- View up-to-date weather data including temperature, humidity, sunrise/sunset times, and general conditions.
- See a relevant animated GIF representing the current weather.
- Switch seamlessly between locations without page reloads.

This version of the project is a **secure, production-oriented reinterpretation** of the original assignment proposed by *The Odin Project (TOP)*.

---

## 🧠 Motivation and Design Rationale

The original *The Odin Project* assignment suggested directly consuming the **Visual Crossing Weather API** from the frontend, embedding the API key in the JavaScript code. While this approach simplifies the learning experience, it introduces a **serious security flaw** — the API key becomes publicly exposed in the repository or browser network tab.  

Exposing API keys is **never safe or professional practice**, regardless of project scale. API keys uniquely identify an account, and unauthorized use can result in **rate-limit exhaustion, data abuse, or even financial charges** if the API provider bills excess usage.

To solve this responsibly, I expanded the project architecture by creating a **dedicated backend service** called [**Nexus Server**](https://github.com/beto0077/nexus-server).  
This backend acts as a secure intermediary between the frontend and external APIs, managing API keys through environment variables (`.env`) and server-side requests.  

Key advantages of this approach:
- 🔒 **Security:** The API keys never leave the server or appear in public repositories.  
- ⚙️ **Scalability:** The same backend can handle multiple API integrations beyond weather data (e.g., Giphy, other data sources).  
- 🧩 **Modularity:** The frontend focuses solely on UI and data presentation, while all API communication and authentication occur server-side.  
- 🚀 **Realism:** This mirrors modern full-stack application practices where frontend and backend responsibilities are properly separated.

Although this design goes beyond the requirements of the original TOP project, it reflects **real-world development standards** and reinforces the importance of secure data handling in web applications.

---

## 🧱 Project Structure
```markdown
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- README.md
|-- src
|   |-- assets
|   |   `-- images
|   |       `-- hb-logo-black.png
|   |-- controller.js
|   |-- display.js
|   |-- index.js
|   |-- styles.css
|   |-- template.html
|   `-- ui
|       |-- giphy-image.js
|       |-- loader-circle.js
|       `-- weather-card.js
`-- webpack.config.js
```

The application’s logic is divided into clear, maintainable modules:
- `controller.js` handles communication between the UI and the backend API.  
- `display.js` manages DOM updates and rendering logic.  
- The `ui/` folder contains reusable UI components (weather card, GIF display, and loader animation).  
- Webpack handles asset bundling and dependency management.

---

## 🔗 APIs and Backend Integration

This frontend communicates exclusively with **Nexus Server**, a backend service deployed on Render.  
Nexus Server securely handles the following APIs:
- **Visual Crossing Weather API** — for weather forecasts and current conditions.  
- **Giphy API** — for contextual location-related GIFs.

The frontend never interacts directly with external APIs, ensuring that sensitive credentials remain fully protected.

---

## 🧰 Technologies Used

- **JavaScript (ES6 Modules)**
- **Webpack** for module bundling and asset management
- **HTML5 & CSS3**
- **Nexus Server (Express.js)** for secure API handling
- **Render & GitHub Pages** for deployment

---

## 🙌 Acknowledgments

- **The Odin Project** — for providing the original project framework and learning path.  
- **Visual Crossing** and **Giphy** — for their excellent public APIs.  
- **Nexus Server** — custom backend developed specifically for this project’s secure data handling.

---

## Author

**Gilberto Gazo aka Haakon Beck**  
Developed as part of The Odin Project curriculum.  
Feedback and contributions are welcome via GitHub.