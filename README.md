# 📊 Advanced GitHub Ecosystem Visualizer

An enterprise-grade, fully interactive analytics dashboard that transforms raw profile metrics and repository data into high-fidelity visual diagrams. This platform is built using a highly decoupled **Modular Monolith architecture** to strictly enforce the **Separation of Concerns pattern** across network operations, data science pipelines, and interface rendering layers.

## 🏗️ System Architecture & Engineering Highlights

Unlike monolithic student scripts, this application's core logic engine is split into specialized, single-responsibility modern **ES6 JavaScript Modules**:

* **`index.html` (The Central Controller):** Coordinates data orchestration pipelines, listens for UI hooks, and securely routes subset data packages between downstream modules.
* **`api.js` (The Defensive Network Layer):** Isolates all asynchronous I/O fetch configurations. Built with a **bulletproof rate-limit interception layer** that monitors hidden HTTP response headers to defend against API throttling.
* **`metrics.js` (The Data Science Engine):** Executes custom timestamp comparisons and data reduction matrices to compute behavioral developer diagnostics.
* **`charts.js` (The Canvas Graphics Engine):** Dynamically allocates and releases browser RAM memory resources by auditing and destroying stale Chart.js instances before repainting fresh visual canvases.

---

## 🛠️ Key Production-Grade Features

### 🛡️ 1. Rate-Limit Security Armor
To prevent application crashes or frozen UI loaders when hitting strict public API thresholds (60 requests/hour), the system intercepts **HTTP 403 Forbidden** server flags. It dynamically extracts the absolute **Unix Epoch time** value from the `x-ratelimit-reset` header, calculates the high-precision delta time gap against the local system clock, and initializes a double-digit padded (`MM:SS`) warning timer overlay to preserve an empathetic user experience.

### 🔍 2. Multi-Criteria State Filtering
Engineered with a synchronized memory caching mechanism (`globalRepositoriesCache`) to support live data intersections. By binding interactive text hooks (`oninput`) with selection dropdown events (`onchange`), the system processes high-order array reduction algorithms to pinpoint matching string patterns inside repository titles *while simultaneously* enforcing strict programming language criteria validations.

### 📈 3. Advanced Behavioral Diagnostics
Moves beyond vanity totals by processing deep repository telemetry markers to deliver actionable coder profiles:
* **Code Originality Rate:** Evaluates strict boolean indicators (`repo.fork`) across historical project payloads to calculate the precise ratio of self-made software architectures versus cloned templates.
* **Code Abandonment Rate:** Parses structural ISO text timestamps (`repo.pushed_at`) into raw millisecond deltas against a live time-matrix clock to compute the exact percentage of codebases untouched for over 365 calendar days.

---

## 🚀 Technical Stack & Tools

* **Language:** Core Modern ECMAScript (ES6+)
* **Architecture:** Decoupled Modular Monoliths (`import` / `export` syntax)
* **Visualization Engine:** Chart.js Canvas Vector Graphics API
* **Styling & Layout Grid:** CSS Custom Flexbox & Grid System Matrix
* **Hosting Environment:** GitHub Pages Deployment Infrastructure
