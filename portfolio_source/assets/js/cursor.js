document.addEventListener('DOMContentLoaded', () => {
  const cursorInner = document.getElementById("cursor-inner");
  const cursorOuter = document.getElementById("cursor-outer");
  const links = document.querySelectorAll("a,label,button");

  let mouseX = 100;
  let mouseY = 100;
  let outerX = 150;
  let outerY = 150;

  let prevMouseX = 100;
  let prevMouseY = 100;

  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Calculate movement vector
    const deltaX = mouseX - prevMouseX;
    const deltaY = mouseY - prevMouseY;

    // Calculate dynamic offset for inner cursor based on movement direction and magnitude
    const maxOffset = 20;
    const offsetX = Math.max(Math.min(-deltaX, maxOffset), -maxOffset);
    const offsetY = Math.max(Math.min(-deltaY, maxOffset), -maxOffset);

    cursorInner.style.left = `${mouseX + offsetX}px`;
    cursorInner.style.top = `${mouseY + offsetY}px`;

    outerX = lerp(outerX, mouseX, 0.98); // maximized lerp amount for smoothest and fastest movement
    outerY = lerp(outerY, mouseY, 0.98);

    cursorOuter.style.left = `${outerX}px`;
    cursorOuter.style.top = `${outerY}px`;

    prevMouseX = mouseX;
    prevMouseY = mouseY;
  });

  // Ensure cursor inner does not block pointer events
  cursorInner.style.pointerEvents = "none";
  cursorOuter.style.pointerEvents = "none";

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursorInner.classList.add("hover");
      cursorOuter.classList.add("hover");
      cursorInner.style.backgroundColor = "black"; // change color to black on hover
      cursorOuter.style.borderColor = "black";
    });
    link.addEventListener("mouseleave", () => {
      cursorInner.classList.remove("hover");
      cursorOuter.classList.remove("hover");
      cursorInner.style.backgroundColor = "black"; // keep color black when not hovered as well
      cursorOuter.style.borderColor = "black";
    });
  });

  console.log("Custom cursor script loaded and running");
});
