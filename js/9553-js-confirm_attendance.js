const formConfirmAttendance = document.getElementById("confirm-attendance");
formConfirmAttendance.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(formConfirmAttendance);
  const data = new URLSearchParams();
  for (const pair of formData) {
    data.append(pair[0], pair[1]);
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbzMZmaQ1I4GufWkzh1k7DzqqMXs13wX_9oGep7VRquWzXyt-SY2sQGDHFSgSOd41dvYwg/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((result) => {
      // alert(result);  // Show success message
      formConfirmAttendance.reset(); // Optionally reset the form after submission
    })
    .catch((error) => console.error("Error:", error));
});
F;
