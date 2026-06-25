const data = {
  Chest: {
    desc: "Chest muscles help push your arms forward and inward.",
    exercises: ["Bench Press", "Push-Ups", "Incline Press", "Cable Flys"]
  },
  Shoulders: {
    desc: "Shoulders help lift and rotate your arms.",
    exercises: ["Overhead Press", "Lateral Raises", "Front Raises"]
  },
  Biceps: {
    desc: "Biceps bend your elbow and help pull movements.",
    exercises: ["Curls", "Hammer Curls", "Chin-Ups"]
  },
  Triceps: {
    desc: "Triceps straighten your arm and support pushing.",
    exercises: ["Dips", "Tricep Pushdowns", "Close Grip Bench"]
  },
  Abs: {
    desc: "Abs stabilize your core and help with posture.",
    exercises: ["Crunches", "Planks", "Leg Raises"]
  },
  Back: {
    desc: "Back muscles help pull and stabilize your posture.",
    exercises: ["Pull-Ups", "Rows", "Lat Pulldown"]
  },
  Glutes: {
    desc: "Glutes power hip movement and lower body strength.",
    exercises: ["Hip Thrusts", "Squats", "Lunges"]
  },
  Quadriceps: {
    desc: "Quads help extend your knee and support running.",
    exercises: ["Squats", "Leg Press", "Lunges"]
  },
  Hamstrings: {
    desc: "Hamstrings help bend your knees and hip movement.",
    exercises: ["Deadlifts", "Leg Curls", "RDLs"]
  },
  Calves: {
    desc: "Calves help with jumping and walking stability.",
    exercises: ["Calf Raises", "Jump Rope", "Sprints"]
  }
};

function showMuscle(name) {
  document.getElementById("muscleTitle").innerText = name;
  document.getElementById("muscleDescription").innerText = data[name].desc;

  const list = document.getElementById("exerciseList");
  list.innerHTML = "";

  data[name].exercises.forEach(ex => {
    const li = document.createElement("li");
    li.textContent = ex;
    list.appendChild(li);
  });
}

// FRONT / BACK SWITCH
document.getElementById("frontBtn").onclick = () => {
  document.getElementById("bodyImage").src = "body-front.png";
};

document.getElementById("backBtn").onclick = () => {
  document.getElementById("bodyImage").src = "body-back.png";
};

// clickable hotspots
document.querySelectorAll(".muscle").forEach(btn => {
  btn.addEventListener("click", () => {
    showMuscle(btn.dataset.muscle);
  });
});