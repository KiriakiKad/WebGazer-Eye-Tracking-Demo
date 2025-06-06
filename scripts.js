let gazePoints = []; // Store recent gaze points for smoothing

// Start tracking
document.getElementById("startButton").addEventListener("click", () => {
    webgazer.begin(); // Start WebGazer
    document.getElementById("status").innerText = "Status: Tracking";
    console.log("Tracking started.");

    const videoFeed = document.getElementById("webgazerVideoFeed");
    videoFeed.style.display = "block";
    webgazer.showVideo(true); // Show webcam
    webgazer.showPredictionPoints(true); // Show gaze prediction points
});

// Stop tracking
document.getElementById("stopButton").addEventListener("click", () => {
    webgazer.end(); // Stop WebGazer
    document.getElementById("status").innerText = "Status: Not Tracking";
    console.log("Tracking stopped.");

    const videoFeed = document.getElementById("webgazerVideoFeed");
    videoFeed.style.display = "none";
    webgazer.showVideo(false);
    webgazer.showPredictionPoints(false);
});

// Smooth gaze data and log average
webgazer.setGazeListener((data, elapsedTime) => {
    if (data) {
        gazePoints.push(data);
        if (gazePoints.length > 10) {
            gazePoints.shift(); // Keep last 10 points
        }

        const avgX = gazePoints.reduce((sum, point) => sum + point.x, 0) / gazePoints.length;
        const avgY = gazePoints.reduce((sum, point) => sum + point.y, 0) / gazePoints.length;

        console.log(`Average Gaze: x=${avgX}, y=${avgY}`);
    }
});

// Calibration function: show points on screen for user to look at
function startCalibration() {
    const points = [
        { x: 100, y: 100 },
        { x: window.innerWidth - 100, y: 100 },
        { x: 100, y: window.innerHeight - 100 },
        { x: window.innerWidth - 100, y: window.innerHeight - 100 },
        { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    ];

    let i = 0;
    const calibrationInterval = setInterval(() => {
        if (i >= points.length) {
            clearInterval(calibrationInterval);
            alert("Calibration completed!");
            return;
        }

        const point = points[i];
        const calibrationPoint = document.createElement("div");
        calibrationPoint.style.position = "absolute";
        calibrationPoint.style.width = "20px";
        calibrationPoint.style.height = "20px";
        calibrationPoint.style.backgroundColor = "red";
        calibrationPoint.style.borderRadius = "50%";
        calibrationPoint.style.left = `${point.x}px`;
        calibrationPoint.style.top = `${point.y}px`;
        document.body.appendChild(calibrationPoint);

        setTimeout(() => {
            document.body.removeChild(calibrationPoint);
            i++;
        }, 1000);
    }, 1500);
}

document.getElementById("calibrateButton").addEventListener("click", startCalibration);
