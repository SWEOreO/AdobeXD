const API_URL = 'http://localhost:3000/patients'; 

async function getJessicaTaylorData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    const jessica = data.find(p => p.firstName === "Jessica" && p.lastName === "Taylor");
    if (!jessica) throw new Error("Jessica Taylor not found.");

    displayPatientInfo(jessica);
    renderBloodPressureChart(jessica.diagnosisHistory);

  } catch (error) {
    console.error("Error fetching patient data:", error);
  }
}

function displayPatientInfo(patient) {
  const infoDiv = document.getElementById('patient-info');
  infoDiv.innerHTML = `
    <p><strong>Name:</strong> ${patient.firstName} ${patient.lastName}</p>
    <p><strong>Age:</strong> ${patient.age}</p>
    <p><strong>Gender:</strong> ${patient.gender}</p>
    <p><strong>Phone:</strong> ${patient.phoneNumber}</p>
  `;
}

function renderBloodPressureChart(diagnosisHistory) {
  const years = diagnosisHistory.map(entry => entry.year);
  const systolic = diagnosisHistory.map(entry => entry.bloodPressure.systolic);
  const diastolic = diagnosisHistory.map(entry => entry.bloodPressure.diastolic);

  const ctx = document.getElementById('bloodPressureChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Systolic',
          data: systolic,
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Diastolic',
          data: diastolic,
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false,
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Blood Pressure Over Time'
        }
      }
    }
  });
}

getJessicaTaylorData();
