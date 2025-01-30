const SAMPLE_ARTICLES = [
  {
    title:
      "India’s first launch of 2025 sends NVS-02 navigation satellite into orbit",
    url: "https://spacenews.com/indias-first-launch-of-2025-sends-nvs-02-navigation-satellite-into-orbit/",
    image_url:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2025/01/GSLVF15NVS02-launch-29jan2025-ISRO.jpg?fit=1024%2C682&quality=89&ssl=1",
    image_alt: "space rocket launch",
    summary:
      "HELSINKI — India conducted its first launch of the year late Tuesday, sending a new-generation navigation satellite towards geostationary orbit. A Geosynchronous Satellite Launch Vehicle (GSLV) Mk II lifted off. The post India’s first launch of 2025 sends NVS-02 navigation satellite into orbit appeared first on SpaceNews.",
    published_at: "2025-01-29T09:45:18Z",
    tag: "Finland",
  },
  {
    title:
      "India’s first launch of 2025 sends NVS-02 navigation satellite into orbit",
    url: "https://spacenews.com/indias-first-launch-of-2025-sends-nvs-02-navigation-satellite-into-orbit/",
    image_url:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2025/01/GSLVF15NVS02-launch-29jan2025-ISRO.jpg?fit=1024%2C682&quality=89&ssl=1",
    image_alt: "space rocket launch",
    summary:
      "HELSINKI — India conducted its first launch of the year late Tuesday, sending a new-generation navigation satellite towards geostationary orbit. A Geosynchronous Satellite Launch Vehicle (GSLV) Mk II lifted off. The post India’s first launch of 2025 sends NVS-02 navigation satellite into orbit appeared first on SpaceNews.",
    published_at: "2025-01-29T09:45:18Z",
    tag: "Finland",
  },
  {
    title:
      "India’s first launch of 2025 sends NVS-02 navigation satellite into orbit",
    url: "https://spacenews.com/indias-first-launch-of-2025-sends-nvs-02-navigation-satellite-into-orbit/",
    image_url:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2025/01/GSLVF15NVS02-launch-29jan2025-ISRO.jpg?fit=1024%2C682&quality=89&ssl=1",
    image_alt: "space rocket launch",
    summary:
      "HELSINKI — India conducted its first launch of the year late Tuesday, sending a new-generation navigation satellite towards geostationary orbit. A Geosynchronous Satellite Launch Vehicle (GSLV) Mk II lifted off. The post India’s first launch of 2025 sends NVS-02 navigation satellite into orbit appeared first on SpaceNews.",
    published_at: "2025-01-29T09:45:18Z",
    tag: "Finland",
  },
];

async function fakeGetArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: async () => SAMPLE_ARTICLES,
      });
    }, 1000);
  });
}

function createArticleComponent(articleTemplate, article) {
  const articleComponent =
    articleTemplate.content.cloneNode(true).firstElementChild;

  const [link, img, heading, summary, date, tag] =
    articleComponent.querySelectorAll(
      ".articles__list-item-link, .articles__list-item-image, .articles__list-item-heading, .articles__list-item-summary, .article__info-date, .article__info-tag"
    );
  link.setAttribute("href", article.url);
  img.setAttribute("src", article.image_url);
  img.setAttribute("alt", article.image_alt);
  heading.textContent = article.title;
  summary.textContent = article.summary;
  date.textContent = article.published_at;
  tag.textContent = article.tag;

  return articleComponent;
}

function renderArticles(articles) {
  const articleTemplate = document.getElementById("article-template");
  const articlesList = document.querySelector(".articles__list");

  const fragment = document.createDocumentFragment();

  articles.forEach((article) => {
    const articleComponent = createArticleComponent(articleTemplate, article);
    fragment.appendChild(articleComponent);
  });

  articlesList.appendChild(fragment);
}

function setReadMoreStatus(readMoreButton, status) {
  if (status === "loading") {
    readMoreButton.disabled = true;
    readMoreButton.textContent = "";

    const spinner = document.createElement("span");
    spinner.classList.add("spinner");
    spinner.textContent = "🌀";
    readMoreButton.appendChild(spinner);

    readMoreButton.classList.add("read-more__button--loading");
  } else if (status === "initial") {
    readMoreButton.disabled = false;
    readMoreButton.textContent = "Read more";
    readMoreButton.classList.remove("read-more__button--loading");
  }
}

function main() {
  const readMoreButton = document.querySelector(".read-more__button");

  readMoreButton.addEventListener(
    "click",
    async function handleReadMoreClick() {
      setReadMoreStatus(readMoreButton, "loading");

      try {
        const articlesData = await fakeGetArticles();
        if (!articlesData.ok) throw new Error("Failed to fetch articles");

        const articles = await articlesData.json();
        renderArticles(articles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }

      setReadMoreStatus(readMoreButton, "initial");
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
