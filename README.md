# WebGazer Eye Tracking Demo

This is a beginner-friendly demo project that showcases basic eye-tracking capabilities using the [WebGazer.js](https://webgazer.cs.brown.edu/) library via CDN.

## 💡 What It Does

- Tracks the user's gaze position on the screen using their webcam.
- Displays the live camera feed and prediction points.
- Includes a basic calibration system with a few fixed points.
- Smooths gaze data by averaging the last few prediction points.

## ⚠️ Disclaimer on Accuracy

This demo is **not highly accurate** in tracking eye movements and should **not be used for critical applications**.  
It is a simple, experimental implementation intended for educational or exploratory purposes only.

However, it has **potential for improvement** through:
- better calibration strategies,
- user feedback collection,
- machine learning model training and personalization.

## 🛠️ How to Use

1. Clone or download the repository.
2. Open the `index.html` file in your browser.
3. Click **"Start Tracking"** to begin eye tracking.
4. You can optionally run the **"Calibrate"** function to display points for gaze alignment.
5. Click **"Stop Tracking"** to stop the camera and tracking.

> Note: Your browser might ask for permission to use the webcam.

## 📁 Files

- `index.html` – main HTML structure and script loading.
- `scripts.js` – contains all JavaScript logic (tracking, calibration, etc.).
- `style.css` – handles all visual styling.

## ✅ Requirements

- A modern browser (Chrome, Firefox, Edge).
- Webcam access enabled.

## 📚 Based On

This project uses the [WebGazer.js](https://webgazer.cs.brown.edu/) open-source library for gaze estimation.

## 📌 Author Notes

This is a personal project built as a **first step** into the world of eye tracking and browser-based interaction.  
Feedback and ideas for improvements are very welcome!

---

