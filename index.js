const projectTab = document.querySelector("#projects-container");
const year = document.querySelector("#year");
const projects = [
  {
    title: "James Website",
    url: "https://james-web.vercel.app/",
    snapshot: "./assets/portfolio.png",
    desc: "",
  },
  {
    title: "Unsplash Clone",
    url: "https://unsplash-clone-nu.vercel.app/",
    snapshot: "./assets/unsplash.png",
    desc: "",
  },
  {
    title: "Space Tourism Website",
    url: "https://space-tourism-website-eight.vercel.app/",
    snapshot: "./assets/space.png",
    desc: "",
  },
  {
    title: "Countries Stats",
    url: "https://rest-countries-api-roan.vercel.app/",
    snapshot: "./assets/country.png",
    desc: "",
  },
  {
    title: "E-Commerce Page",
    url: "https://e-commerce-page-ten.vercel.app/",
    snapshot: "./assets/e-comm.png",
    desc: "",
  },
  {
    title: "Ordel Landing Page",
    url: "https://ordel-project.vercel.app/",
    snapshot: "./assets/ordel.png",
    desc: "",
  },
  {
    title: "Crowdfunding page",
    url: "https://crowdfunding-product-page-ruddy.vercel.app/",
    snapshot: "./assets/crowdfunding.png",
    desc: "",
  },
];

projects.map(
  ({ title, url, snapshot, desc }) =>
    (projectTab.innerHTML += `<a href=${url} target="_blank" class='projects'>
    <img src=${snapshot} alt=${title} />
    <div>
    <h4>${title}</h4>
    <p>${desc}</p>
    </div>
</a>`)
);

year.innerHTML = new Date().getFullYear();
