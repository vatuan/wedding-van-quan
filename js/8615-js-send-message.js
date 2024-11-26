const form = document.getElementById("form-send-message");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = new URLSearchParams();
  for (const pair of formData) {
    data.append(pair[0], pair[1]);
  }

  console.log({ data, formData });

  fetch(
    "https://script.google.com/macros/s/AKfycbzMZmaQ1I4GufWkzh1k7DzqqMXs13wX_9oGep7VRquWzXyt-SY2sQGDHFSgSOd41dvYwg/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((result) => {
      alert(result); // Show success message
      form.reset(); // Optionally reset the form after submission
    })
    .catch((error) => console.error("Error:", error));
});
