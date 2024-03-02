function calculateSnowLoad() {
  let choice = parseInt(document.getElementById("choice").value);
  let region = parseInt(document.getElementById("region").value);

  let delta_k = 0.0;

  switch (choice) {
    case 1:
      const region1Values = { 1: 0.45, 2: 0.45, 3: 0.55, 4: 0.55, 5: 0.65, 6: 0.65, 7: 0.90, 8: 1.40 };
      delta_k = region1Values[region];
      break;
    case 2:
      const region2Values = { 1: 0, 2: 1.00, 3: 1.00, 4: 1.35, 5: 0, 6: 1.35, 7: 1.80, 8: 0 };
      delta_k = region2Values[region];
      break;
    case 3:
      let exactValue = parseFloat(document.getElementById("exactValue").value);
      if (isNaN(exactValue)) {
        alert("Please enter a valid number for the exact value.");
        return;
      }

      const region3Values = {
        1: { a: 0.45, b: 0.55 },
        2: { a: 0.45, b: 0.55 },
        3: { a: 0.55, b: 0.55 },
        4: { a: 0.55, b: 0.55 },
        5: { a: 0.65, b: 0.65 },
        6: { a: 0.65, b: 0.65 },
        7: { a: 0.90, b: 0.90 },
        8: { a: 1.40, b: 1.40 }
      };

      const regionValues = region3Values[region];
      if (exactValue >= 200 && exactValue <= 500) {
        delta_k = exactValue / 1000 - 0.20 + regionValues.a;
      } else if (exactValue >= 500 && exactValue <= 1000) {
        delta_k = 1.5 * exactValue / 1000 - 0.45 + regionValues.a;
      } else if (exactValue >= 1000 && exactValue <= 2000) {
        delta_k = 3.5 * exactValue / 1000 - 2.45 + regionValues.a;
      } else {
        alert("Error");
        return;
      }
      break;
  }

  document.getElementById("resultContainer").innerText = "The value of delta k: " + delta_k;
}

document.getElementById("calculateBtn").addEventListener("click", calculateSnowLoad);
