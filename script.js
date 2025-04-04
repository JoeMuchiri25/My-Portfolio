
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("falling-lights");
  
    function createLight() {
        const light = document.createElement("div");
        light.classList.add("light");
        
        // Random position & animation speed
        light.style.left = Math.random() * window.innerWidth + "px";
        light.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        container.appendChild(light);
  
        // Remove light after animation completes
        setTimeout(() => {
            light.remove();
        }, 5000);
    }
  
    // Generate lights continuously
    setInterval(createLight, 300);
  });
  document.querySelector(".glow-circle").addEventListener("mouseover", function() {
    this.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.9)";
  });
  
  document.querySelector(".glow-circle").addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
  });