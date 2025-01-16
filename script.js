document.addEventListener("DOMContentLoaded", () => {
  const experienceChart = document.getElementById('experienceChart');

  new Chart(experienceChart, {
    type: 'bar',
    data: {
      labels: ['HTML', 'JavaScript', 'Python', 'Node.js', 'Express.js', 'CSS'],
      datasets: [{
        label: 'Experience',
        data: [90, 95, 20, 85, 69, 20],
        backgroundColor: [
          'rgba(243, 114, 44, 1)',
          'rgba(249, 132, 74, 1)',
          'rgba(249, 199, 79, 1)',
          'rgba(144, 190, 109, 1)',
          'rgba(39, 125, 161, 1)',
          'rgba(87, 117, 144, 1)',
        ],
        borderWidth: 0,
        borderRadius: 10,
      }]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  const toggleSwitch = document.getElementById('switch');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = localStorage.getItem("theme");

  const applyTheme = (theme, withTransition = true) => {
    if (!withTransition) {
      document.body.classList.add("no-transition");
    }
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
    } else {
      document.body.classList.remove("dark-mode");
      toggleSwitch.checked = false;
    }
    localStorage.setItem("theme", theme);
    if (!withTransition) {
      setTimeout(() => {
        document.body.classList.remove("no-transition");
      }, 0);
    }
  };

  if (currentTheme) {
    applyTheme(currentTheme, false);
  } else if (prefersDarkScheme.matches) {
    applyTheme("dark", false);
  } else {
    applyTheme("light", false);
  }

  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  });

  if (prefersDarkScheme) {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    toggleSwitch.checked = false;
    localStorage.setItem("theme", "light");
  }

  const elementsToLoad = document.querySelectorAll('.container > *, .body-text > *, .profile, .header, hr');
  elementsToLoad.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('loaded');
    }, index * 100); // Adjust the delay here
  });
});
