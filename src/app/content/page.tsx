import Image from "next/image";
import OutArticles from "../components/pages/shared/OutArticles";
import ShallWeGoOnTour from "../components/pages/shared/ShallWeGoOnTour";

export default function page() {
  return (
    <>
      <div>
        <div className="container space-y-30px sm:space-y-10 3xl:space-y-[70px]">
          {/* 1. Path */}
          <div className="flex items-center gap-2.5 flex-wrap text-xs sm:text-sm xl:text-base 3xl:text-lg pt-32 sm:pt-36 xl:pt-44 3xl:pt-52">
            <span className="text-brand-dark/50 whitespace-nowrap">
              Главная
            </span>
            <span className="text-brand-dark/50 whitespace-nowrap">/</span>
            <span className="text-brand-dark/50 whitespace-nowrap">Блог</span>
            <span className="text-brand-dark/50 whitespace-nowrap">/</span>
            <span>Изучение ландшафта мебельных магазинов в Китае</span>
          </div>

          {/* 2. Page Main Title & Text */}
          <div className="max-w-[1400px] space-y-5 sm:space-y-8 3xl:space-y-10">
            <h2>
              Изучение ландшафта мебельных магазинов <br />
              <span className="text-brand-red">в Китае (H1)</span>
            </h2>
            <p className="text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
              Рынок мебели Китая претерпел значительные изменения за последние
              несколько десятилетий, параллельно с быстрым экономическим ростом
              и урбанизацией страны. В результате Китай стал одним из крупнейших
              мебельных рынков в мире. От традиционного мастерства до
              современных дизайнерских инноваций, разнообразие предложений
              мебели отражает как культурное наследие региона, так и современные
              потребности его населения.
            </p>
          </div>

          {/* 3. */}
          <div className="flex flex-col 3xl:flex-row gap-30px xl:gap-10 3xl:gap-[89px]">
            <div className="flex-1 space-y-5 sm:space-y-8 3xl:space-y-10">
              <h3>
                Эволюция мебельных магазинов{" "}
                <span className="text-brand-red">(H2)</span>
              </h3>

              <div className="space-y-3 3xl:space-y-4 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
                <p>
                  Исторически мебель в Китае изготавливалась вручную опытными
                  мастерами с использованием проверенных временем методов, часто
                  демонстрируя замысловатые узоры и богатую символику, связанную
                  с китайской культурой. Традиционная мебель, как правило,
                  изготавливалась из высококачественных материалов, таких как
                  твердая древесина, с такими предметами, как классические стили
                  династий Мин и Цин, которые пользуются большим спросом у
                  коллекционеров.
                </p>
                <p>
                  Однако, поскольку предпочтения потребителей начали смещаться в
                  сторону современной эстетики и функциональности, мебельные
                  магазины в Китае адаптировались к этим изменениям. С приходом
                  глобализации на рынке наблюдается рост современных дизайнов
                  мебели, включающих минималистский стиль, экологически чистые
                  материалы и инновационные производственные процессы. За
                  последние два десятилетия мы стали свидетелями бума как
                  отечественных, так и международных мебельных брендов,
                  удовлетворяющих разнообразные вкусы китайских потребителей.
                </p>
                <p>
                  За последние два десятилетия мы стали свидетелями бума как
                  отечественных, так и международных мебельных брендов,
                  удовлетворяющих разнообразные вкусы китайских потребителей.
                </p>
              </div>
            </div>

            <div className="3xl:max-w-[850px] flex flex-col justify-end space-y-5">
              <Image
                src="/assets/images/img-content-1.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="aspect-video xl:w-full 3xl:h-[500px] object-cover"
              />

              <p className="text-center text-brand-dark/60 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
                Интерьер с акцентами на растительность
              </p>
            </div>
          </div>

          {/* 4. */}
          <div className="max-w-[1251px] flex items-center gap-8">
            <div className="h-[114px] w-1 bg-brand-red"></div>
            <div className="text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-7">
              <p>
                Исторически мебель в Китае изготавливалась вручную опытными
                мастерами с использованием проверенных временем методов, часто
                демонстрируя замысловатые узоры и богатую символику, связанную с
                китайской культурой.
              </p>

              <p className="mt-5 3xl:mt-30px text-brand-dark/50">
                Дмитрий Журавлев, директор Mebel.tours
              </p>
            </div>
          </div>

          {/* 5. */}
          <div className="max-w-[1430px] space-y-5 xl:space-y-7 3xl:space-y-10">
            <h4>
              Основные игроки на китайском рынке мебели{" "}
              <span className="text-brand-red">(H3)</span>
            </h4>

            <ul className="space-y-4 3xl:space-y-5 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
              <li className="flex gap-3">
                <span className="text-brand-red">1.</span>
                <p>
                  <span className="text-brand-red">IKEA</span> — шведский
                  мебельный гигант создал значительное присутствие в Китае,
                  сочетая доступность с современным дизайном и
                  функциональностью. Успех IKEA объясняется его способностью
                  удовлетворять потребности городских жителей, которые часто
                  сталкиваются с ограниченным пространством, предлагая умные
                  решения для компактных жилых помещений.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-red">2.</span>
                <p>
                  <span className="text-brand-red">Red Star </span>
                  Macalline — этот ведущий китайский розничный продавец мебели
                  управляет многочисленными крупными выставочными залами по всей
                  стране, предлагая широкий спектр стилей от люксовых брендов до
                  доступных вариантов. Бизнес-модель Red Star Macalline включает
                  партнерские отношения с различными производителями, что
                  позволяет потребителям выбирать из широкого ассортимента
                  продукции.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-red">3.</span>
                <p>
                  <span className="text-brand-red">HuaHuang</span> — Известный
                  своим акцентом на высококачественных материалах и
                  исключительном мастерстве, HuaHuang — это местный бренд,
                  который обслуживает премиальный сегмент рынка. Он подчеркивает
                  традиционный китайский стиль, привлекая потребителей, которые
                  ценят сочетание наследия и современной функциональности.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-red">4.</span>
                <p>
                  <span className="text-brand-red">Lazboy</span> — Этот
                  американский бренд завоевал популярность в Китае благодаря
                  своим удобным креслам-реклайнерам и диванам. Интеграция
                  технологий Lazboy в свою продукцию, например, механических
                  механизмов откидывания, хорошо находит отклик у технически
                  подкованного молодого поколения.
                </p>
              </li>
            </ul>
          </div>

          {/* 6. */}
          <Image
            src="/assets/images/img-content-2.jpg"
            alt="Image"
            width={1000}
            height={800}
            className="w-full h-64 sm:h-96 xl:h-[500px] 3xl:h-[750px] object-cover"
          />

          {/* 7. */}
          <div className="space-y-5 xl:space-y-7 3xl:space-y-10">
            <h5>
              Тенденции, формирующие ландшафт розничной торговли мебелью{" "}
              <span className="text-brand-red">(H4)</span>
            </h5>
            <ul className="grid sm:grid-cols-2 gap-5 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
              <li className="flex gap-3">
                <span className="size-[5px] shrink-0 bg-brand-red rounded-full mt-2"></span>
                <p>
                  <span className="text-brand-red">Устойчивость:</span> рост
                  осведомленности об экологических проблемах привел к спросу на
                  экологичные варианты мебели. Многие производители используют
                  экологически чистые материалы и методы, привлекая растущий
                  сегмент потребителей, заботящихся об окружающей среде.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="size-[5px] shrink-0 bg-brand-red rounded-full mt-2"></span>
                <p>
                  <span className="text-brand-red">Умная мебель:</span>
                  технологические достижения способствовали росту
                  интеллектуальной мебели с интегрированными технологиями,
                  такими как встроенные зарядные устройства, регулируемые
                  размеры и даже мебель, которая адаптируется к различным видам
                  использования в течение дня.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="size-[5px] shrink-0 bg-brand-red rounded-full mt-2"></span>
                <p>
                  <span className="text-brand-red">Кастомизация:</span>
                  стремление к персонализированным решениям привело к тому, что
                  мебельные магазины предлагают настраиваемые продукты, позволяя
                  потребителям выбирать размеры, цвета и материалы, которые
                  соответствуют их конкретным потребностям и вкусам.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="size-[5px] shrink-0 bg-brand-red rounded-full mt-2"></span>
                <p>
                  <span className="text-brand-red">
                    Экспериментальная розничная торговля:
                  </span>
                  многие мебельные магазины трансформируют свои планировки в
                  захватывающие пространства, где клиенты могут испытать
                  различные стили дизайна интерьера. Эта тенденция направлена
                  ​​на то, чтобы объединить шопинг с образом жизни, позволяя
                  потребителям представить, как предметы мебели впишутся в их
                  дома.
                </p>
              </li>
            </ul>
          </div>

          {/* 8. */}
          <div className="space-y-5 xl:space-y-7 3xl:space-y-10">
            <h5>
              Тенденции, формирующие ландшафт розничной торговли мебелью{" "}
              <span className="text-brand-red">(H4)</span>
            </h5>
            <table className="max-w-5xl table table-auto text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-brand-dark/20 pb-4">
                    Тенденция
                  </th>
                  <th className="border-b border-brand-dark/20 pb-4">
                    Описание
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Устойчивость
                  </td>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Рост осведомленности об экологических проблемах привел к
                    спросу на экологичные варианты мебели. Многие производители
                    используют экологически чистые материалы и методы, привлекая
                    растущий сегмент потребителей, заботящихся об окружающей
                    среде.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Кастомизация
                  </td>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Стремление к персонализированным решениям привело к тому,
                    что мебельные магазины предлагают настраиваемые продукты,
                    позволяя потребителям выбирать размеры, цвета и материалы,
                    которые соответствуют их конкретным потребностям и вкусам.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Умная мебель
                  </td>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Технологические достижения способствовали росту
                    интеллектуальной мебели с интегрированными технологиями,
                    такими как встроенные зарядные устройства, регулируемые
                    размеры и даже мебель, которая адаптируется к различным
                    видам использования в течение дня.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Экспериментальная розничная торговля
                  </td>
                  <td className="border-b border-brand-dark/20 py-4 pr-5">
                    Многие мебельные магазины трансформируют свои планировки в
                    захватывающие пространства, где клиенты могут испытать
                    различные стили дизайна интерьера. Эта тенденция направлена
                    ​​на то, чтобы объединить шопинг с образом жизни, позволяя
                    потребителям представить, как предметы мебели впишутся в их
                    дома.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 9. */}
          <p className="max-w-[1430px] text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
            Ландшафт мебельных магазинов в Китае постоянно меняется под
            воздействием меняющихся предпочтений потребителей, быстрой
            урбанизации и технологических достижений. Сочетание традиционного
            мастерства и современной функциональности удовлетворяет широкий
            спектр потребностей и стилей, делая Китай динамичным центром
            розничной торговли мебелью. Поскольку устойчивость и кастомизация
            продолжают формировать потребительский спрос, будущее рынка мебели в
            Китае выглядит ярким, обещая инновационные решения как для
            домовладельцев, так и для энтузиастов дизайна интерьера.
          </p>

          {/* 10. */}
          <div className="h-px border border-brand-dark/20"></div>

          {/* 11. */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
            <p>Автор статьи: Дмитрий Журавлев</p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between xl:justify-start gap-5 sm:gap-10">
              <p className="font-semibold">
                Поделитесь статьей в социальных сетях:
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 3xl:gap-4">
                {/* Vkontakt */}
                <a
                  href="#"
                  className="size-10 3xl:size-14 shrink-0 border border-brand-red grid place-content-center group hover:border-brand-dark transition-all duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 3xl:size-auto shrink-0 fill-brand-red group-hover:fill-brand-dark transition-all duration-300"
                  >
                    <g clipPath="url(#clip0_1108_2136)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5417 4.9565C19.68 4.5015 19.5417 4.1665 18.8792 4.1665H16.6917C16.135 4.1665 15.8783 4.45567 15.7392 4.77484C15.7392 4.77484 14.6267 7.43817 13.0508 9.16817C12.5408 9.66984 12.3092 9.829 12.0308 9.829C11.8917 9.829 11.6825 9.66984 11.6825 9.214V4.9565C11.6825 4.40984 11.5292 4.1665 11.0658 4.1665H7.62583C7.27833 4.1665 7.06917 4.41984 7.06917 4.66067C7.06917 5.17817 7.8575 5.29817 7.93833 6.75484V9.91984C7.93833 10.614 7.81083 10.7398 7.5325 10.7398C6.79083 10.7398 4.98667 8.064 3.91583 5.00234C3.70833 4.4065 3.49833 4.1665 2.93917 4.1665H0.75C0.125 4.1665 0 4.45567 0 4.77484C0 5.34317 0.741667 8.1665 3.45417 11.9007C5.2625 14.4507 7.80833 15.8332 10.1275 15.8332C11.5183 15.8332 11.69 15.5265 11.69 14.9973V13.0698C11.69 12.4557 11.8217 12.3332 12.2625 12.3332C12.5875 12.3332 13.1433 12.4932 14.4417 13.7223C15.925 15.1798 16.1692 15.8332 17.0042 15.8332H19.1917C19.8167 15.8332 20.13 15.5265 19.95 14.9198C19.7517 14.3165 19.0433 13.4407 18.1042 12.4015C17.5942 11.8098 16.8292 11.1723 16.5967 10.8532C16.2725 10.444 16.365 10.2615 16.5967 9.89734C16.5967 9.89734 19.2633 6.209 19.5408 4.9565"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1108_2136">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* Telegram */}
                <a
                  href="#"
                  className="size-10 3xl:size-14 shrink-0 border border-brand-red grid place-content-center group hover:border-brand-dark transition-all duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 3xl:size-auto shrink-0 fill-brand-red group-hover:fill-brand-dark transition-all duration-300"
                  >
                    <g clipPath="url(#clip0_1108_2138)">
                      <path d="M18.3764 1.77434L0.657315 8.64254C-0.0557314 8.96238 -0.296903 9.60289 0.484972 9.95051L5.03067 11.4026L16.0216 4.57484C16.6217 4.14621 17.2361 4.26051 16.7074 4.73203L7.26771 13.3232L6.97118 16.959C7.24583 17.5204 7.74872 17.523 8.0695 17.244L10.6811 14.76L15.154 18.1267C16.1929 18.7449 16.7581 18.346 16.9817 17.2129L19.9154 3.24922C20.22 1.85449 19.7006 1.23996 18.3764 1.77434Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1108_2138">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="size-10 3xl:size-14 shrink-0 border border-brand-red grid place-content-center group hover:border-brand-dark transition-all duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 3xl:size-auto shrink-0 fill-brand-red group-hover:fill-brand-dark transition-all duration-300"
                  >
                    <path d="M11.6668 11.2498H13.7502L14.5835 7.9165H11.6668V6.24984C11.6668 5.3915 11.6668 4.58317 13.3335 4.58317H14.5835V1.78317C14.3118 1.74734 13.286 1.6665 12.2027 1.6665C9.94016 1.6665 8.3335 3.04734 8.3335 5.58317V7.9165H5.8335V11.2498H8.3335V18.3332H11.6668V11.2498Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <OutArticles title={"Похожие статьи"} />
        <ShallWeGoOnTour />
      </div>
    </>
  );
}
