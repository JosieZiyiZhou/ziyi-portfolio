const mainText = "Hello, I'm Ziyi!";
    const subText = "This is my website.";

    let mainIndex = 0;
    let subIndex = 0;

    const typingText = document.getElementById("typing-text");
    const typingSubtext = document.getElementById("typing-subtext");

    function typeMainText() {
      if (mainIndex < mainText.length) {
        typingText.textContent += mainText.charAt(mainIndex);
        mainIndex++;
        setTimeout(typeMainText, 100);
      } else {
        setTimeout(typeSubText, 500);
      }
    }

    function typeSubText() {
      if (subIndex < subText.length) {
        typingSubtext.textContent += subText.charAt(subIndex);
        subIndex++;
        setTimeout(typeSubText, 100);
      } else {
        setTimeout(deleteText, 1500);
      }
    }


    window.onload = function () {
      typeMainText();
    };


    tsParticles.load("particles-container", {
      fullScreen: { enable: false },
      background: {
        color: { value: "#ffffff" } 
      },
      particles: {
        number: {
          value: 80,
          density: { enable: true, area: 800 }
        },
        color: { value: "#a0a0a0" }, 
        shape: { type: "circle" },
        opacity: {
          value: 0.3
        },
        size: {
          value: 2.5
        },
        move: {
          enable: true,
          speed: 0.6 
        },
        links: {
          enable: true,
          distance: 120,
          color: "#c0c0c0",
          opacity: 0.2,
          width: 0.8
        }
      },
      detectRetina: true
    });

    function updateClock() {
      const now = new Date();
    
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const date = now.getDate().toString().padStart(2, '0');
    
      const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const weekday = weekdayNames[now.getDay()];
    
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
    
      const formattedTime = `${year}-${month}-${date} (${weekday}) ${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = formattedTime;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
    