import LocalizedStrings from "react-localization";

import conditionsTable from "./content/conditionsTable.json";
import lendingServicesLinks from "./content/lendingServicesLinks.json";
import navLinks from "./content/navLinks.json";
import newClient from "./content/newClient.json";
import regularClient from "./content/regularClient.json";
import repayOnline from "./content/repayOnline.json";
import reviews from "./content/reviews.json";
import takeOnline from "./content/takeOnline.json";
import usefulLinks from "./content/usefulLinks.json";
import aboutService from "./content/aboutService.json";
import about from "./content/about.json";

import conditionsTableRu from "./content/ru/conditionsTable.json";
import lendingServicesLinksRu from "./content/ru/lendingServicesLinks.json";
import navLinksRu from "./content/ru/navLinks.json";
import newClientRu from "./content/ru/newClient.json";
import regularClientRu from "./content/ru/regularClient.json";
import repayOnlineRu from "./content/ru/repayOnline.json";
import reviewsRu from "./content/ru/reviews.json";
import takeOnlineRu from "./content/ru/takeOnline.json";
import usefulLinksRu from "./content/ru/usefulLinks.json";
import aboutServiceRu from "./content/ru/aboutService.json";
import aboutRu from "./content/ru/about.json";

const locales = new LocalizedStrings({
  uk: {
    navbar: {
      enter: "Увійти",
      navLinks: navLinks,
    },
    benefits: {
      heading: "Наші переваги",
      regularClient: regularClient,
      newClient: newClient,
      tabHeading1: "Новим клієнтам",
      tabHeading2: "Постійним клієнтам",
    },
    burgerMenu: {
      heading1: "Довідкова інформація",
      heading2: "Контактна інформація",
      navLinks: navLinks,
      proceeding: "Обробка заявок на кредит — цілодобово без вихідних",
      recallMe: "Передзвоніть мені",
      weekendSchedule: "Сб-Нд: 9:00 - 21:00",
      weekdaysSchedule: "Пн-Пт: 8:00 - 23:00",
      lang: "Мова:",
    },
    calculator: {
      sum: "Cума:",
      shortCurrency: "грн",
      paymentTerm: "Строк платежу:",
      days: "днів",
      take: "Берете",
      percentages: "Відсотки",
      repayTo: "Віддаєте до",
      getMoney: "Отримати гроші",
      invalidPromoCode: "Зазначений промокод не знайдений або не дійсний",
      usedPromoCode: "Промокод застосовано",
      havePromoCode: "Маю промокод",
      usePromoCode: "Застосувати",
      promoCode: "Промокод",
    },
    conditions: {
      heading: "Умови кредитного продукту",
      conditionsTable: conditionsTable,
    },
    creditInfo: {
      heading1: "Як взяти кредит онлайн",
      heading2: "Як повернути кредит онлайн",
      takeOnline: takeOnline,
      repayOnline: repayOnline,
    },
    footer: {
      workingHours: "Пн-Пт: 8:00 - 23:00, Сб-Нд: 9:00 - 21:00",
      complaint: "З'явилися скарги на сервіс?",
      writeUs: "Напишіть нам",
      useApp: "Керуйте кредитом через додаток CreditPlus",
      socials: "Ексклюзивні промокоди, розіграші та акції в соцмережах:",
      usefulLinks: usefulLinks,
      documents: [
        "Згода на обробку даних",
        "Правила",
        "Конфіденційність",
        "Публічна інформація",
        "Типовий договір",
      ],
      legal1:
        "«АВЕНТУС УКРАЇНА» ЄДРПОУ 41078230. 03062, м. Київ, проспект Перемоги, 90-А",
      legal2:
        "Свідоцтво про реєстрацію Фінансової установи серія ФК №870 від 28.02.2017 Ліцензія № 756 НКФП від 28.03.2017 Ліцензія № 1860 НКФП від 24.09.2019",
    },
    lendingServices: {
      heading: "Послуги кредитування",
      lendingServicesLinks: lendingServicesLinks,
      showMore: "Показати більше",
      showLess: "Показати менше",
    },
    partners: {
      heading: "Наші партнери",
    },
    phoneInfo: {
      freeAcrossUrkaine: "безкоштовно по Україні",
    },
    testimonials: {
      heading: "Відгуки наших клієнтів",
      reviews: reviews,
    },
    notFound: {
      heading:
        "Сторінка не знайдена або контент на цій сторінці поки відсутній",
      mainPage: "Головна сторінка",
    },
    aboutService: {
      heading: "Про сервіс онлайн-кредитування CreditPlus",
      content: aboutService,
    },
    about: about,
  },
  ru: {
    navbar: {
      enter: "Войти",
      navLinks: navLinksRu,
    },
    benefits: {
      heading: "Наши преимущества",
      regularClient: regularClientRu,
      newClient: newClientRu,
      tabHeading1: "Новым клиентам",
      tabHeading2: "Постоянным клиентам",
    },
    burgerMenu: {
      heading1: "Справочная информация",
      heading2: "Контактная информация",
      navLinks: navLinksRu,
      proceeding: "Обработка заявок на кредит - круглосуточно без выходных",
      recallMe: "Перезвоните мне",
      weekendSchedule: "Сб-Вс: 9:00 - 21:00",
      weekdaysSchedule: "Пн-Пт: 8:00 - 23:00",
      lang: "Язык:",
    },
    calculator: {
      sum: "Cумма:",
      shortCurrency: "грн",
      paymentTerm: "Срок платежа:",
      days: "дней",
      take: "Берете",
      percentages: "Проценты",
      repayTo: "Отдаете до",
      getMoney: "Получить деньги",
      invalidPromoCode: "Указанный промокод не найден или недействителен",
      usedPromoCode: "Промокд применен",
      havePromoCode: "У меня есть промокод",
      usePromoCode: "Применить",
      promoCode: "Промокод",
    },
    conditions: {
      heading: "Условия кредитного продукта",
      conditionsTable: conditionsTableRu,
    },
    creditInfo: {
      heading1: "Как взять кредит онлайн",
      heading2: "Как вернуть кредит онлайн",
      takeOnline: takeOnlineRu,
      repayOnline: repayOnlineRu,
    },
    footer: {
      workingHours: "Пн-Пт: 8:00 - 23:00, Сб-Вс: 9:00 - 21:00",
      complaint: "Появились жалобы на сервис?",
      writeUs: "Напишите нам",
      useApp: "Управляйте кредитом через приложение CreditPlus",
      socials: "Эксклюзивные промокоды, розыгрыши и акции в соцсетях:",
      usefulLinks: usefulLinksRu,
      documents: [
        "Согласие на обработку данных",
        "Правила",
        "Конфиденциальность",
        "Публичная информация",
        "Типовой договор",
      ],
      legal1:
        "«АВЕНТУС УКРАИНА» ЄГРПОУ 41078230. 03062, г. Киев, проспект Победы, 90-А",
      legal2:
        "Свидетельство о регистрации финансового учреждения серия ФК №870 от 28.02.2017 Лицензия № 756 НКФП от 28.03.2017 Лицензия № 1860 НКФП от 24.09.2019",
    },
    lendingServices: {
      heading: "Услуги кредитования",
      lendingServicesLinks: lendingServicesLinksRu,
      showMore: "Показать больше",
      showLess: "Показать меньше",
    },
    partners: {
      heading: "Наши партнеры",
    },
    phoneInfo: {
      freeAcrossUrkaine: "бесплатно по Украине",
    },
    testimonials: {
      heading: "Отзывы наших клиентов",
      reviews: reviewsRu,
    },
    notFound: {
      heading:
        "Страница не найдена или контент на этой странице пока отсутствует",
      mainPage: "Главная страница",
    },
    aboutService: {
      heading: "О сервисе онлайн-кредитования CreditPlus",
      content: aboutServiceRu,
    },
    about: aboutRu,
  },
});

export default locales;
