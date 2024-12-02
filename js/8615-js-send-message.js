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
    "https://script.google.com/macros/s/AKfycbxAmEIkFeBzt6A8Iuj43wTfC-_DNCMxGGHTtzJFnDH-z48SUk0HxIIJqJ5QZBb0jQ4X/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((result) => {
      form.reset(); // Optionally reset the form after submission
    })
    .catch((error) => console.error("Error:", error));
});
