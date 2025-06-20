import Link from "next/link";
import Image from "next/image";

import Button from "../../shared/Button";

const articles = [
  {
    img: "/assets/images/img-article-1.png",
    label: "Почему стоит заказать проект дизайна интерьера?",
    text: "Дизайн-проект позволяет проработать и рассмотреть все возможные варианты и пожелания на бумаге, выбрав наиболее оптимальный именно для вас..",
    date: "12.03.2024",
    href: "/",
  },
  {
    img: "/assets/images/img-article-2.png",
    label: "Необычные решения для лестниц в доме",
    text: "Сделайте свой интерьер дома более ярким с помощью этих прекрасных идей лестницы, включая вдохновение для новых полетов..",
    date: "12.03.2024",
    href: "/",
  },
  {
    img: "/assets/images/img-article-3.png",
    label: "Окна на мансарде: плюсы и минусы",
    text: "Главная задача устройства остекления заключается в организации естественного освещения. Преимуществом при этом будет..",
    date: "8.03.2024",
    href: "/",
  },
  {
    img: "/assets/images/img-article-4.png",
    label: "Стильная мебель для общепита?",
    text: "ДПитание вне дома давно стало не роскошью, а привычным элементом жизни людей. Даже в непростые экономические времена в стране..",
    date: "15.02.2024",
    href: "/",
  },
];

export default function OutArticles({ title }) {
  return (
    <section className="section-top-padding">
      <div className="container section-space">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-30px">
          <h2 className="sm:whitespace-nowrap">{title}</h2>
          <Button
            variant="darkOutline"
            className="w-full sm:w-auto h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-6"
          >
            Все статьи
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 sm:w-auto fill-brand-dark group-hover:fill-brand-dark/50 transition-all duration-300"
            >
              <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
            </svg>
          </Button>
        </div>

        {/* Articles */}
        <div className="no-scroll flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-5 overflow-auto">
          {articles.map((article, idx) => (
            <Link
              key={idx}
              href={article.href}
              className={`relative flex flex-col min-w-60 md:min-w-full w-full `}
            >
              <Image
                src={article.img}
                alt={article.label}
                width={700}
                height={700}
                className="h-1/2 xl:h-[45%] 3xl:h-3/5 object-cover"
              />
              <div className="h-1/2 xl:h-[55%] 3xl:h-2/5 flex flex-col justify-between p-5">
                <div className="space-y-2.5 xl:space-y-3">
                  <h5 className="font-normal">{article.label}</h5>
                  <p className="text-brand-dark/80 text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-4 sm:leading-[17px] xl:leading-[18.2px] 3xl:leading-6">
                    {article.text}
                  </p>
                </div>

                <p className="text-brand-dark/50 text-xs 3xl:text-sm leading-4 3xl:leading-[18.2px]">
                  {article.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
