document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const username = document.getElementById("username").value;

      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        }),
      });
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        Toastify({
          text: `${data.username}, you have successfully sent a message!`,
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
            background: "rgb(22, 163, 74)",
          },
          callback: function () {
            //redirect to the page that is given via the response from the /contact response
            window.location.href = data.redirect;
          },
        }).showToast();
      }
    } catch (error) {
      console.error("Error:", error);
      Toastify({
        text: "Oops, An error occurred!",
        duration: 3000,
        style: {
          background: "rgb(220, 38, 38)",
        },
      }).showToast();
    }
  });
