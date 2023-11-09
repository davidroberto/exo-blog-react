import Header from "./Header";
import Footer from "./Footer";

function Home() {
  const articles = [
    {
      title: "Article 1",
      price: 10,
      isPublished: true,
    },

    {
      title: "Article 2",
      price: 20,
      isPublished: false,
    },

    {
      title: "Article 3",
      price: 30,
      isPublished: true,
    },

    {
      title: "Article 4",
      price: 40,
      isPublished: false,
    },

    {
      title: "Article 5",
      price: 50,
      isPublished: true,
    },

    {
      title: "Article 6",
      price: 60,
      isPublished: false,
    },

    {
      title: "Article 7",
      price: 70,
      isPublished: true,
    },

    {
      title: "Article 8",
      price: 80,
      isPublished: false,
    },

    {
      title: "Article 9",
      price: 90,
      isPublished: true,
    },

    {
      title: "Article 10",
      price: 100,
      isPublished: false,
    },
  ];

  const publishedArticles = articles.filter((article) => {
    return article.isPublished === true;
  });

  const lastThreePublishedArticles = publishedArticles.slice(-3);

  return (
    <>
      <Header />
      <main>
        <h2>Les trois derniers articles : </h2>
        {lastThreePublishedArticles.map((article) => {
          return (
            <article>
              <h2>{article.title}</h2>
              <h3>{article.price}e</h3>
            </article>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default Home;
