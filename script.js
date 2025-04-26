const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active to the clicked tab
    tab.classList.add("active");

    // Hide all contents
    contents.forEach((c) => c.classList.remove("active"));

    // Show the correct one
    const target = tab.getAttribute("data-target");
    document.getElementById("content-" + target).classList.add("active");
  });
});
