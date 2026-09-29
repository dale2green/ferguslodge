document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Nav Toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-menu"); // FIXED

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

// Active link highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


  // 🔹 Officer List
  const officers = [
    { title: "Worshipful Master", name: "Dale Green" },
    { title: "Senior Warden", name: "Rufus Rogers" },
    { title: "Junior Warden", name: "Ryan Franklin" },
    { title: "Senior Deacon", name: "Bo Huff" },
    { title: "Junior Deacon", name: "Michael Kissel" },
    { title: "Senior Steward", name: "Zac Hinniant" },
    { title: "Junior Steward", name: "Mark Henson" },
    { title: "Tyler", name: "Steve Bowers" },
    { title: "Secretary", name: "Brad Johnson" },
    { title: "Treasurer", name: "Tony Keys" },
    { title: "Chaplain", name: "Cledus Jones" },
    { title: "Director of Work", name: "Jarrod Rowe" }
  ];

  const officerList = document.getElementById("officer-list");
  if (officerList) {
    officers.forEach(officer => {
      if (!officer.name) return;
      const li = document.createElement("li");
      li.className = "chairs";
      li.innerHTML = `<strong>${officer.title}</strong>: ${officer.name}`;
      officerList.appendChild(li);
    });
  }

  // 🔹 Auto-update footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


document.addEventListener("DOMContentLoaded", () => {

    const events = [
      {
            title: "BBQ and Stew Cooking",
            date: "October 24, 2026",
            time: "BBQ and Stew will be ready 12 noon",
            desc: [
                "Contact us to get your order placed.",
                "BBQ and Stew sell out quickly",
                "Orders have to be placed by October 19, 2026 "
            ],
            type: "light"
        },
        // {
        //     title: "Fish Fry",
        //     date: "July 18, 2026",
        //     time: "Plates served from 11:00 AM - 2:00 PM",
        //     desc: [
        //         "Come out and Support Country Kids Fund Raiser.",
        //         "Eat in or Take Out.",
        //         "Plates will consist of: Fish, Slaw, Fries, Hush Puppies, Drink"
        //     ],
        //     type: "light"
        // },
        {
            title: "Family Night Dinner",
            date: "August 15, 2026",
            time: "6:30 PM",
            desc: [
                "Join us for a night of fellowship, food, and family.",
                "All members and guests welcome."
            ],
            type: "blue"
        },
        {
            title: "Past Masters Night",
            date: "October 24, 2026",
            time: "6:00 PM",
            desc: [
                "A special evening honoring our Past Masters and their service to the lodge."
            ],
            type: "light"
        },
        {
            title: "Regular Communication Meeting",
            date: "1st and 3rd Thursday",
            time: "6:30 PM",
            desc: [
                "Regular stated meeting is the 1st and 3rd Thursday of the month.",
                "Supper: 6:30 PM", "Commincation: 7:30 PM"
            ],
            type: "blue"
        },
    ];

    const eventsContainer = document.getElementById("events-container");

    if (eventsContainer) {
        events.forEach(event => {

            const sectionClass =
                event.type === "blue"
                    ? "section section-blue events-section"
                    : "section section-light events-section";

            const descHTML = event.desc
                .map(line => `${line}<br>`)
                .join("");

            const eventHTML = `
                <section class="${sectionClass}">
                    <div class="events-inner">
                        <div class="event-block">
                            <h2>${event.title}</h2>
                            <p class="event-date">
                                <strong>Date:</strong> ${event.date}<br>
                                <strong>Time:</strong> ${event.time}
                            </p>
                            <p class="event-desc">${descHTML}</p>
                        </div>
                    </div>
                </section>
            `;

            eventsContainer.insertAdjacentHTML("beforeend", eventHTML);
        });
    }

});
