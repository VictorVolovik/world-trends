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
    published_at: "2025-01-20T09:45:18Z",
    tag: "Finland",
  },
  {
    title: "Sols 4437-4438: Coordinating our Dance Moves",
    url: "https://science.nasa.gov/blog/sols-4437-4438-coordinating-our-dance-moves/",
    image_url:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/msl/2025/curiosity-rover-updates/january/https___mars.nasa.gov_msl-raw-images_proj_msl_redops_ods_surface_sol_04435_opgs_edr_ncam_NLB_791212772EDR_F1122148NCAM00296M_.JPG",
    image_alt: "Mars landscape",
    summary:
      "Earth planning date: Monday, Jan. 27, 2025 I was Geology and Mineralogy (Geo) Science Team lead today, and my day started with a bang and a drum roll — delivered by a rare winter thunderstorm (rare here in England, at least).",
    published_at: "2025-01-19T09:26:21Z",
    tag: "England",
  },
  {
    title:
      "FAA optimistic launch companies will switch to new regulations by 2026 deadline",
    url: "https://spacenews.com/faa-optimistic-launch-companies-will-switch-to-new-regulations-by-2026-deadline/",
    image_url:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2025/01/ng1-liftoff-closeup.jpeg?fit=1024%2C565&quality=89&ssl=1",
    image_alt: "space rocket liftoff closeup",
    summary:
      "FAA officials say that are increasingly confident that they can move commercial launch licenses to a new set of regulations by a March 2026.The post FAA optimistic launch companies will switch to new regulations by 2026 deadline appeared first on SpaceNews.",
    published_at: "2025-01-19T08:26:48Z",
    tag: "U.S",
  },
  {
    title: "Trump, Musk Imply Changes to Butch and Suni’s Return",
    url: "https://spacepolicyonline.com/news/trump-musk-imply-changes-to-butch-and-sunis-return/",
    image_url:
      "https://spacepolicyonline.com/wp-content/uploads/2024/09/Butch-and-Suni-Sept-13-2024-300x204.png",
    image_alt: "2 austronauts in spacecraft",
    summary:
      "Posts on social media this evening by President Trump and Elon Musk are raising questions about whether changes are in the works for returning Butch Wilmore and Suni William.",
    published_at: "2025-01-19T04:34:11Z",
    tag: "U.S",
  },
  {
    title: "UK Government Backs Orbex with £20M Investment",
    url: "https://europeanspaceflight.com/uk-government-backs-orbex-with-20m-investment/",
    image_url:
      "https://europeanspaceflight.com/wp-content/uploads/2025/01/UK-Government-Backs-Orbex-with-20M-Investment.jpg",
    image_alt: "space rocket",
    summary:
      "The UK Government has announced a £20 million (€23,8 million) investment in Orbex to support the construction and launch of its first Prime rocket from SaxaVord Spaceport in Scotland later this year. Prime is a small two-stage rocket designed to be capable of delivering payloads of up to 180 kilograms into low Earth orbit. The post UK Government Backs Orbex with £20M Investment appeared first on European Spaceflight.",
    published_at: "2025-01-18T04:17:47Z",
    tag: "UK",
  },
  {
    title: "DoD says contracts continue amid confusion over White House order",
    url: "https://spacenews.com/dod-says-contracts-continue-amid-confusion-over-white-house-order/",
    image_url:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/11/the-white-house.png?fit=1024%2C464&quality=80&ssl=1",
    image_alt: "White House",
    summary:
      "An OMB memo on federal spending sparked chaos across the defense contracting world. The post DoD says contracts continue amid confusion over White House order appeared first on SpaceNews.",
    published_at: "2025-01-17T00:57:05Z",
    tag: "U.S.",
  },
  {
    title:
      "Space Force projects ULA to outpace SpaceX in 2025 national security missions",
    url: "https://spacenews.com/space-force-projects-ula-to-outpace-spacex-in-2025-national-security-missions/",
    image_url:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2025/01/IMG_2324-scaled.jpeg?fit=1024%2C768&quality=89&ssl=1",
    image_alt: "discussion at conference",
    summary:
      "Vulcan is scheduled to launch 11 national security missions in 2025, compared to seven for SpaceX\nThe post Space Force projects ULA to outpace SpaceX in 2025 national security missions appeared first on SpaceNews.",
    published_at: "2025-01-15T04:17:47Z",
    tag: "U.S",
  },
  {
    title: "Planet hunter Plato to fly on Ariane 6",
    url: "https://www.esa.int/Science_Exploration/Space_Science/Plato/Planet_hunter_Plato_to_fly_on_Ariane_6",
    image_url:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/05/artist_s_impression_of_plato/24085127-2-eng-GB/Artist_s_impression_of_Plato_card_full.jpg",
    image_alt: "mission Plato satellite",
    summary:
      "Today, the European Space Agency (ESA) Director of Science, Carole Mundell, ESA Director of Space Transportation, Toni Tolker-Nielsen, and Arianespace Chief Commercial Officer, Steven Rutgers, signed the launch agreement to fly ESA’s scientific mission Plato; the formal step took place at the European Space Conference in Brussels, Belgium.",
    published_at: "2025-01-14T04:17:47Z",
    tag: "Belgium",
  },
];

function timeAgo(publishedAt) {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffInHours = Math.floor((now - publishedDate) / (1000 * 60 * 60));

  if (diffInHours < 24) {
    return `${diffInHours} hr${diffInHours !== 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
}

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
  date.textContent = timeAgo(article.published_at);
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
