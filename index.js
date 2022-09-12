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
    snapshot: "",
    desc: "",
  },
  {
    title: "Space Tourism Website",
    url: "https://space-tourism-website-eight.vercel.app/",
    snapshot: "",
    desc: "",
  },
  {
    title: "Countries Stats",
    url: "https://rest-countries-api-roan.vercel.app/",
    snapshot: "",
    desc: "",
  },
  {
    title: "E-Commerce Page",
    url: "https://e-commerce-page-ten.vercel.app/",
    snapshot: "",
    desc: "",
  },
  {
    title: "Ordel Landing Page",
    url: "https://ordel-project.vercel.app/",
    snapshot: "",
    desc: "",
  },
  {
    title: "Crowdfunding page",
    url: "https://crowdfunding-product-page-ruddy.vercel.app/",
    snapshot: "",
    desc: "",
  },
];

const projectTab = document.querySelector("#projects-container");

projects.map(
  ({ title, url, snapshot, desc }) =>
    (projectTab.innerHTML += `<a href=${url} target="_blank" class='projects'>
    <img src=${snapshot} alt=${title} />
    <h4>${title}</h4>
    <p>${desc}</p>
</a>`)
);
