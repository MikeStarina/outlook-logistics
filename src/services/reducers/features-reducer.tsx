import React from "react";
import { TFeaturesActions } from "../actions/features-actions";

type TItem =
  | {
      slug: string;
      serviceType: string;
      name: string;
      title: string;
      description?: string[];
      truck_params?: {
        size?: string;
        weight?: string;
        volume?: string;
        capacity?: string;
      };
      metaTitle: string;
      metaDescription: string;
      metaKeywords: string;
    }
  | undefined;

type TInitialState = Array<TItem | undefined>;

const initialState: TInitialState = [
  {
    slug: "20-tonn",
    serviceType: "avtomobilnye-perevozki",
    name: "АВТОПЕРЕВОЗКИ 20 ТОНН",
    title: "Автоперевозки 20 тонн",
    description: [
      "Компания Outlook Logistics предлагает профессиональные автоперевозки грузов весом 20 тонн. Мы специализируемся на организации грузоперевозок с использованием современных фур, обеспечивая надежную и эффективную доставку по всей территории Санкт-Петербурга и за его пределами.",
      "Наша логистическая компания предлагает широкий спектр услуг, связанных с автоперевозками 20 тонн. Мы понимаем, что каждый клиент имеет уникальные потребности, поэтому мы готовы предложить индивидуальный подход к каждому заказу. Независимо от того, требуется ли вам одноразовая перевозка или регулярные доставки, мы готовы взять на себя ответственность за ваш груз и обеспечить его безопасность и своевременную доставку.",
      "Преимущества автоперевозок 20 тонн с компанией Outlook Logistics:",
      "Одним из ключевых преимуществ работы с нами является прозрачная система ценообразования. Мы предлагаем конкурентоспособные цены на автоперевозки 20 тонн,  а также готовы рассчитать стоимость перевозки в соответствии с вашими требованиями. Наша команда профессионалов учтет все особенности вашего груза, маршрута и сроков доставки, чтобы предложить вам наилучшее решение по цене и качеству.",
      "Мы понимаем, что надежность и безопасность являются ключевыми факторами при выборе логистической компании. Поэтому мы работаем только с опытными водителями, которые обладают необходимыми навыками и знаниями для обеспечения безопасной перевозки вашего груза. Кроме того, наши фуры оснащены современными системами отслеживания, что позволяет нам контролировать перемещение груза на каждом этапе доставки.",
      "Если вам требуется автоперевозка 20 тонн, обратитесь в компанию Outlook Logistics. Мы гарантируем высокое качество услуг, конкурентоспособные цены и надежную доставку вашего груза. Свяжитесь с нами прямо сейчас, чтобы рассчитать стоимость перевозки и организовать безопасную и эффективную доставку вашего груза.",
    ],
    truck_params: {
      size: "ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 13,62 х 2,48 х 2,73",
      weight: "ГРУЗОПОДЬЕМНОСТЬ: 20 ТОНН",
      volume: "ОБЪЕМ: 90 м3",
      capacity: "ВМЕСТИМОСТЬ: 33 ЕВРОПАЛЛЕТ",
    },
    metaTitle:
      "Грузоперевозки 20 тонн фурами в Санкт-Петербурге цены в логистической компании outlook-logistics",
    metaDescription:
      "Грузоперевозки 20 тонн фурами по Санкт-Петербургу и России цены в логистической компании Outlook. Автоперевозка 20 тонн рассчитать стоимость услуги вы можете на сайте компании.",
    metaKeywords:
      "грузоперевозки 20 тонн, фурами, автоперевозки 20 тонн, санкт-петербург, услуга, цена, рассчитать, стоимость, логистическая компания",
  },
  {
    slug: "5-tonn",
    serviceType: "avtomobilnye-perevozki",
    name: "АВТОПЕРЕВОЗКИ 5 ТОНН",
    title: "Автоперевозки 5 тонн",
    description: [
        "Компания Outlook Logistics предлагает надежные и эффективные автоперевозки грузов весом до 5 тонн в Санкт-Петербурге и других регионах. Мы являемся логистической компанией с богатым опытом в организации перевозок различных грузов, и наша команда готова предложить вам высококачественные услуги по доставке вашего груза.",
        "Преимущества автоперевозок весом 5 тонн с компанией Outlook Logistics:",
        "Одним из ключевых преимуществ работы с нами является конкурентоспособная цена на наши услуги. Мы стремимся предоставить нашим клиентам оптимальное соотношение цены и качества, чтобы удовлетворить их потребности в перевозке грузов весом до 5 тонн. Наша компания имеет широкую сеть партнеров и ресурсов, что позволяет нам предложить вам доступные и гибкие тарифы.",
        "Заказать автоперевозку груза весом до 5 тонн с нами - это просто и удобно. Вы можете связаться с нашими специалистами по логистике, которые помогут вам подобрать оптимальный транспорт и рассчитать стоимость перевозки. Мы учтем все ваши требования и особенности груза, чтобы обеспечить его безопасную и своевременную доставку.",
        "Наша компания осуществляет перевозки различных видов грузов: от малогабаритных товаров до крупногабаритных. Мы предлагаем широкий выбор транспортных средств, включая грузовики с различной грузоподъемностью, что позволяет нам эффективно организовывать перевозки грузов весом до 5 тонн.",
        "Мы придерживаемся высоких стандартов качества и безопасности при выполнении каждой автоперевозки. Наши водители - профессионалы с большим опытом работы, которые строго соблюдают правила дорожного движения и заботятся о сохранности вашего груза. Мы также оснащаем наши грузовики современными системами слежения, что позволяет нам отслеживать перемещение груза в режиме реального времени.",
        "Если вам необходима надежная и профессиональная компания для перевозки грузов весом до 5 тонн, обратитесь к нам. Мы гарантируем высокое качество обслуживания, конкурентоспособные цены и своевременную доставку вашего груза. Наша команда с удовольствием поможет вам организовать перевозку и ответит на все ваши вопросы."
    ],
    truck_params: {
      size: "ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 6,2 х 2,48 х 2,73",
      weight: "ГРУЗОПОДЬЕМНОСТЬ: 5 ТОНН",
      volume: "ОБЪЕМ: 30 м3",
      capacity: "ВМЕСТИМОСТЬ: 15 ЕВРОПАЛЛЕТ",
    },
    metaTitle:
      "Грузоперевозки 5 тонн в Санкт-Петербурге цены в логистической компании outlook-logistics",
    metaDescription:
      "Грузоперевозки 5 тонн по России и Санкт-Петербургу цены в логистической компании Outlook. Заказать грузоперевозку 5 тонн вы можете на сайте транспортной компании.",
    metaKeywords:
      "грузоперевозки 5 тонн, санкт-петербург, цена, логистическая компания, заказать, автоперевозка, перевозка, 5 т",
  },
  {
    slug: "1-5-tonn",
    serviceType: "avtomobilnye-perevozki",
    name: "АВТОПЕРЕВОЗКИ 1,5 ТОНН",
    title: "Автоперевозки 1.5 тонны",
    description: [
        "Компания Outlook Logistics предлагает надежные и эффективные автоперевозки грузов весом до 1.5 тонн в Санкт-Петербурге и близлежащих регионах. Мы являемся логистической компанией с многолетним опытом работы в сфере грузоперевозок, и наша цель - обеспечить клиентам качественное и своевременное выполнение перевозок.",
        "Одной из наших основных специализаций являются грузоперевозки весом до 1.5 тонн. Мы понимаем, что каждый груз имеет свои уникальные требования и особенности, поэтому мы предлагаем индивидуальный подход к каждому заказу. Наша команда профессионалов заботится о том, чтобы ваш груз был доставлен в целости и сохранности.",
        "Цена на автоперевозки 1.5 тонны зависит от различных факторов, таких как расстояние перевозки, характер груза, срочность доставки и другие дополнительные услуги. Мы стремимся предложить конкурентоспособные цены, а также гибкую систему тарифов, чтобы удовлетворить потребности наших клиентов.",
        "Преимущества автоперевозок 1.5 тонны с компанией Outlook Logistics:",
        "Заказать автоперевозку 1.5 тонны с нами - это просто и удобно. Вы можете связаться с нашими специалистами по логистике, которые помогут вам определить оптимальный маршрут и предложат наилучший вариант перевозки. Мы обеспечиваем полную прозрачность и информирование на каждом этапе доставки, чтобы вы могли быть уверены в надежности наших услуг.",
        "Наша компания оснащена современным автопарком, состоящим из надежных и безопасных транспортных средств, что позволяет нам гарантировать качество и надежность наших перевозок. Мы также предлагаем дополнительные услуги, такие как страхование груза, складские услуги и другие, чтобы удовлетворить все потребности клиента.",
        "Если вам требуется надежная и профессиональная компания для автоперевозки грузов весом до 1.5 тонн, обратитесь к нам. Мы готовы предложить вам высококачественные услуги по перевозке вашего груза в Санкт-Петербурге и за его пределами. Наша команда сделает все возможное, чтобы ваш груз был доставлен вовремя и безопасно.",
    ],
    truck_params: {
      size: "ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 3 х 1,9 х 2",
      weight: "ГРУЗОПОДЬЕМНОСТЬ: 1,5 ТОННы",
      volume: "ОБЪЕМ: 9 м3",
      capacity: "ВМЕСТИМОСТЬ: 4 ЕВРОПАЛЛЕТ",
    },
    metaTitle:
      "Грузоперевозки 1.5 тонны в Санкт-Петербурге цены в логистической компании outlook-logistics",
    metaDescription:
      "Перевозка 1.5 тонн по России и Санкт-Петербургу цены в логистической компании Outlook. Заказать грузоперевозку 1.5 тонн недорого вы можете на сайте транспортной компании.",
    metaKeywords:
      "грузоперевозки 1.5 тонн, санкт-петербург, цена, логистическая компания, заказать, автоперевозка, перевозка, 1.5 т",
  },
  {
    slug: "negabaritnye",
    serviceType: "avtomobilnye-perevozki",
    name: "НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ",
    title: "Негабаритные перевозки",
    description: [
        "Ищете надежную логистическую компанию для автомобильных негабаритных перевозок в Санкт-Петербурге и по всей России? Outlook Logistics - ваш надежный партнер, готовый предложить вам высококачественные услуги по конкурентоспособной цене.",
        "Мы специализируемся на организации и выполнении негабаритных автомобильных перевозок, обеспечивая безопасную и эффективную доставку грузов любого размера и веса. Наша команда профессионалов в области логистики имеет богатый опыт и экспертизу, чтобы гарантировать успешное выполнение каждого заказа.",
        "Преимущества автомобильных негабаритных перевозок с компанией Outlook Logistics:",
        "Outlook Logistics понимает, что время и деньги - важные ресурсы для наших клиентов. Поэтому мы предлагаем конкурентоспособные цены на негабаритные перевозки автомобильным транспортом и гибкие условия сотрудничества. Мы стремимся удовлетворить потребности каждого клиента, разрабатывая индивидуальные решения, которые соответствуют вашим требованиям и бюджету.",
        "Наша логистическая компания оснащена современными транспортными средствами, специализированными для автомобильных негабаритных перевозок. Мы гарантируем безопасность и надежность доставки вашего груза, обеспечивая его защиту на протяжении всего пути.",
        "Заказать негабаритные перевозки с Outlook Logistics - это легко и удобно. Наша команда экспертов поможет вам разработать оптимальное решение для вашего груза и организовать его доставку в кратчайшие сроки. Мы предлагаем полный спектр услуг, включая планирование маршрута, оформление необходимых разрешений и документации, а также надежную охрану груза.",
        "Не упускайте возможность воспользоваться профессиональными услугами Outlook Logistics для ваших автомобильных негабаритных перевозок. Мы гарантируем безопасность, надежность и высокое качество обслуживания. Сделайте заказ прямо сейчас и доверьте свой груз опытным специалистам Outlook Logistics."
    ],
    truck_params: {
      size: "АВТОМАШИНЫ 20 ТОНН",
      capacity: "ГАРАНТИЯ СОХРАННОСТИ ГРУЗА",
    },
    metaTitle:
      "Перевозка негабаритных грузов автотранспортом в Санкт-Петербурге цены в компании outlook-logistics",
    metaDescription:
      "Автомобильные негабаритные перевозки в Санкт-Петербурге цена в транспортной компании Outlook Logistics. Авто перевозки негабаритных грузов заказать услугу недорого на сайте компании.",
    metaKeywords:
      "негабаритные перевозки, санкт-петербург, цена, россия, заказать, логистическая компания, автомобильные, авто перевозки",
  },
  {
    slug: "refrizheratornye",
    serviceType: "avtomobilnye-perevozki",
    name: "РЕФРИЖЕРАТОРНЫЕ ПЕРЕВОЗКИ",
    title: "Рефрижераторные перевозки",
    description: [
        "Рефрижераторные перевозки являются важной услугой для многих компаний, особенно тех, которые занимаются продуктами питания или другими товарными группами, требующими специальных условий хранения и транспортировки. Если вы ищете надежную логистическую компанию, предоставляющую рефрижераторные перевозки в Санкт-Петербурге, то Outlook Logistics - ваш идеальный партнер.",
        "Outlook Logistics - это профессиональная логистическая компания, специализирующаяся на грузоперевозках и предоставлении широкого спектра услуг, включая рефрижераторные перевозки. Мы понимаем важность сохранности и качества ваших товаров во время транспортировки, поэтому мы обеспечиваем надежное и безопасное хранение и доставку.",
        "Преимущества рефрижераторных перевозок с компанией Outlook Logistics:",
        "Одним из ключевых преимуществ Outlook Logistics является наш опыт и экспертиза в области рефрижераторных перевозок. Мы располагаем современным парком специализированных рефрижераторных автомобилей, оснащенных передовыми системами контроля температуры. Это позволяет нам обеспечивать оптимальные условия хранения и транспортировки вашего груза в любое время года.",
        "Цены на рефрижераторные перевозки весьма конкурентоспособны и зависят от различных факторов, таких как расстояние, объем груза и требования к температурному режиму. Мы предлагаем гибкую систему тарифов, чтобы удовлетворить потребности всех клиентов. Вы можете быть уверены, что сотрудничество с Outlook Logistics будет экономически выгодным для вашего бизнеса.",
        "Заказать рефрижераторные перевозки с нами очень просто. Вы можете связаться с нашей командой по телефону или через нашу форму заявки. Наши специалисты помогут вам выбрать оптимальное решение для ваших потребностей и ответят на все ваши вопросы. Мы также предоставляем возможность отслеживания груза в режиме реального времени, чтобы вы всегда были в курсе его местоположения и состояния.",
        "Outlook Logistics - это надежный партнер для рефрижераторных перевозок в Санкт-Петербурге. Компания предлагает высокое качество услуг, конкурентоспособные цены и профессиональный подход к каждому заказу. Если вам требуются рефрижераторные перевозки, вы можете положиться на Outlook Logistics для надежной и эффективной доставки ваших грузов."
    ],
    truck_params: {
      size: "АВТОМАШИНЫ 1,5, 5 ИЛИ 20 ТОНН",
      weight: "ТЕМПЕРАТУРНЫЙ РЕЖИМ ОТ -20 ДО +20 ГРАДУСОВ",
      volume: "АВТОНОМНАЯ РЕЗЕРВНАЯ СИСТЕМА",
      capacity: "ГАРАНТИЯ СОХРАННОСТИ ГРУЗА",
    },
    metaTitle:
      "Рефрижераторные перевозки в Санкт-Петербурге цены в логистической компании outlook-logistics",
    metaDescription:
      "Рефрижераторные грузоперевозки по России и Санкт-Петербургу цены в транспортной компании Outlook Logistics. Заказать перевозки рефрижератором вы можете на сайте логистической компании.",
    metaKeywords:
      "рефрижераторные перевозки, санкт-петербург, цены, услуга, грузоперевозки, заказать, логистическая компания",
  },
  {
    slug: "kontejnernye",
    serviceType: "zheleznodorozhnye-perevozki",
    name: "КОНТЕЙНЕРНЫЕ ПЕРЕВОЗКИ",
    title: "Контейнерные перевозки (железнодорожные)",
    description: [
        "Контейнерные железнодорожные перевозки от логистической компании Outlook Logistics - надежное и эффективное решение для вашего бизнеса! Мы предлагаем широкий спектр услуг по организации контейнерных жд перевозок, обеспечивая быструю и безопасную доставку грузов по всей России, включая Санкт-Петербург.",
        "Особенности контейнерных железнодорожных перевозок:",
        "Контейнерные жд перевозки являются одним из наиболее популярных и экономически выгодных способов транспортировки грузов. Они позволяют существенно сократить время доставки и снизить затраты на логистику. Благодаря использованию железнодорожного транспорта, мы можем доставить ваш груз в любую точку страны, обеспечивая надежность и сохранность товара.",
        "Outlook Logistics предлагает конкурентные цены на контейнерные жд перевозки. Мы осуществляем расчет стоимости перевозки в соответствии с объемом и характеристиками груза, а также выбранной жд трассой. Наша команда профессионалов поможет вам рассчитать оптимальный маршрут и предложит наилучшие условия для вашего бизнеса.",
        "Заказать контейнерные жд перевозки у Outlook Logistics - значит выбрать надежного партнера, обеспечит вам высокое качество обслуживания и оперативность доставки. Мы работаем с ведущими железнодорожными операторами, что позволяет нам гарантировать своевременное выполнение заказов и минимизацию рисков.",
        "Outlook Logistics - это не просто транспортная компания, мы предлагаем комплексный подход к организации перевозок. Мы заботимся о каждом этапе доставки, начиная от планирования и оформления документов, до мониторинга груза и информирования клиента о его статусе. Наша цель - обеспечить вам комфорт и уверенность в надежности наших услуг.",
        "Если вам требуются контейнерные жд перевозки в Санкт-Петербурге или в любой другой регион России, обратитесь к нам! Мы готовы предложить вам оптимальные решения, учитывая особенности вашего груза и требования вашего бизнеса. Наша компания имеет богатый опыт в сфере логистики и готова стать надежным партнером для вашего успеха.",
        "Не откладывайте - заказывайте контейнерные жд перевозки у Outlook Logistics уже сегодня! Мы гарантируем высокое качество обслуживания, конкурентные цены и оперативность доставки. Обратитесь к нам и убедитесь в преимуществах работы с профессионалами!"
    ],
    truck_params: {
      size: "",
      weight: "",
      volume: "",
      capacity: "ГАРАНТИЯ СОХРАННОСТИ ГРУЗА",
    },
    metaTitle:
      "Контейнерные ЖД перевозки цены в Санкт-Петеребурге в транспортной компании outlook-logistics",
    metaDescription:
      "Контейнерные РЖД перевозки грузов в Санкт-Петербурге цены в логистической компании Outlook Logistics. Заказать контейнерные перевозки ЖД транспортом рассчитать услугу на сайте.",
    metaKeywords:
      "контейнерные жд перевозки, контейнерные ржд перевозки, санкт-петербург, цены, рассчитать, жд траспорт, заказать, услуга, транспортная компания",
  },
  {
    slug: "perevozka-avtomobilei",
    serviceType: "zheleznodorozhnye-perevozki",
    name: "ПЕРЕВОЗКА АВТОМОБИЛЕЙ",
    title: "Перевозка автомобилей",
    description: [
        'Транспортная компания "Outlook Logistics" – ваш надежный партнер в сфере перевозки автомобилей. Мы специализируемся на организации безопасной и эффективной перевозки автомобилей различных типов, как внутри страны, так и за ее пределами. Наш опыт и профессионализм позволяют нам предложить вам высококачественные услуги по железнодорожной перевозке автомобилей.',
        'Преимущества перевозки автомобилей с компанией Outlook Logistics:',
        'Одной из наших основных преимуществ является использование железнодорожного транспорта. Перевозка автомобилей поездом обеспечивает оптимальное соотношение цены и качества. Железнодорожные пути пролегают практически через всю страну, что позволяет доставлять автомобили в самые удаленные уголки России. Благодаря этому, мы можем предложить вам широкий охват территории и гибкость в выборе пунктов отправления и назначения.',
        'Команда профессионалов "Outlook Logistics" тщательно планирует каждую перевозку. Мы заботимся о том, чтобы ваш автомобиль был надежно зафиксирован и защищен во время перевозки. Наш опытный персонал обеспечивает надежную фиксацию автомобилей на железнодорожных платформах, что минимизирует риски повреждений в процессе транспортировки.',
        'Одним из ключевых аспектов нашей работы является прозрачная ценовая политика. Мы понимаем, что для вас важно знать точную стоимость услуги. Мы предоставляем возможность рассчитать стоимость перевозки автомобиля заранее, что поможет вам спланировать бюджет и принять обдуманное решение. Цена на наши услуги всегда остается конкурентоспособной, при этом качество обслуживания остается на самом высоком уровне.',
        'Если вам требуется перевозка автомобиля из или в Санкт-Петербург, мы готовы предоставить вам выгодное решение. Санкт-Петербург – один из ключевых пунктов в нашей логистической сети, и мы имеем богатый опыт организации перевозок в этом направлении. Независимо от типа автомобиля и его характеристик, мы подберем оптимальный маршрут и способ перевозки.',
        'Путешествие вашего автомобиля с "Outlook Logistics" – это гарантированный путь к сохранности и надежной доставке. Мы ценим каждого клиента и гарантируем индивидуальный подход к вашим потребностям. Наша компания предоставляет полный комплекс услуг, начиная от организации перевозки до оформления необходимой документации.',
        'Если вы ищете надежного партнера для перевозки автомобилей, обращайтесь в "Outlook Logistics". Наша компания сочетает в себе опыт, профессионализм и индивидуальный подход, чтобы обеспечить вам высококачественные услуги по перевозке автомобилей железнодорожным транспортом. Мы готовы взять на себя заботу о вашем автомобиле и обеспечить его безопасную и своевременную доставку в любую точку страны.'
    ],
    truck_params: {
      size: "",
      weight: "",
      volume: "",
      capacity: "ГАРАНТИЯ СОХРАННОСТИ ГРУЗА",
    },
    metaTitle:
      "Перевозка авто ЖД транспортом цена в Санкт-Петербурге в компании outlook-logistics",
    metaDescription:
      "Перевозка автомобилей ЖД транспортом цена в Санкт-Петербурге в логистической компании Outlook Logistics. Перевозка автомобиля поездом рассчитать услугу на сайте транспортной компании.",
    metaKeywords:
      "перевозка авто, жд транспорт, поезд, перевозка автомобилей, цена, санкт-петербург, рассчитать, услуга, транспортная компания",
  },
  {
    slug: "perevozka-spectehniki",
    serviceType: "zheleznodorozhnye-perevozki",
    name: "ПЕРЕВОЗКА СПЕЦТЕХНИКИ",
    title: "Перевозка спецтехники",
    description: [
        'Перевозка спецтехники – это сложный и ответственный процесс, требующий специализированного оборудования и опытных профессионалов. Компания Outlook Logistics обладает всем необходимым для безопасной и эффективной транспортировки самой разнообразной спецтехники: от строительных машин до сельскохозяйственных агрегатов.',
        'Особенности перевозки спецтехники:',
        'Одной из важных составляющих любой перевозки является цена за километр. Здесь Outlook Logistics также предлагает гибкую и прозрачную систему расчетов. Стоимость перевозки спецтехники зависит от многих факторов, включая тип техники, расстояние между пунктами отправления и назначения, а также особенности маршрута. Клиенты могут рассчитать предварительную стоимость перевозки, обратившись к специалистам компании.',
        'Одним из важных аспектов грузоперевозок спецтехники является выбор подходящего транспортного средства. В этом контексте трал – это незаменимое средство для перевозки крупногабаритных и тяжелых машин. Компания Outlook Logistics предоставляет услуги по перевозке спецтехники на тралах, обеспечивая надежную фиксацию груза и минимизацию рисков в процессе транспортировки.',
        'Особенное внимание следует уделить профессионализму сотрудников компании Outlook Logistics. Опытные водители и логисты знают, как обеспечить безопасность груза на протяжении всего пути следования. Они следят за каждым этапом перевозки, гарантируя сохранность спецтехники и соблюдение сроков доставки.',
        'Еще одним преимуществом сотрудничества с Outlook Logistics является возможность получить комплексный подход к организации перевозки спецтехники. Компания предоставляет услуги по планированию маршрута, оформлению необходимых разрешений и сопровождению груза на всем пути следования.',
        'Таким образом, перевозка спецтехники с транспортной компанией Outlook Logistics – это надежное решение для тех, кто ценит профессионализм, безопасность и качество обслуживания. Гибкая ценовая политика, опытные специалисты и современное оборудование делают компанию надежным партнером в области грузоперевозок спецтехники в Санкт-Петербурге и за его пределами.'
    ],
    truck_params: {
      size: "",
      weight: "",
      volume: "",
      capacity: "ГАРАНТИЯ СОХРАННОСТИ ГРУЗА",
    },
    metaTitle:
      "Перевозка спецтехники цена в Санкт-Петербурге в транспортной компании outlook-logistics",
    metaDescription:
      "Грузовые перевозки спецтехники цена в Санкт-Петербурге в логистической компании Outlook Logistics. Услугу перевозки спецтехники рассчитать за км вы можете на сайте компании.",
    metaKeywords:
      "перевозка спецтехники, грузовые перевозки спецтехники, цена, санкт-петербург, услуга, цена за км, рассчитать, трал",
  },
  {
    slug: "perevozka-opasnih-gruzov",
    serviceType: "avtomobilnye-perevozki",
    name: "ПЕРЕВОЗКА ОПАСНЫХ ГРУЗОВ",
    title: "Опасные грузы",
    description: [
        'Перевозка опасных грузов – это сложный и ответственный процесс, требующий высочайшей осторожности и соблюдения строгих стандартов безопасности. Outlook Logistics полностью осознает важность этой задачи и вкладывает в нее максимум ресурсов, опыта и знаний.',
        'Преимущества автоперевозок опасных грузов с компанией Outlook Logistics:',
        'Компания предлагает широкий спектр услуг по автомобильным перевозкам опасных грузов, включая консультирование клиентов, разработку индивидуальных планов доставки, организацию безопасной погрузки и выгрузки, а также строгое соблюдение всех законодательных требований. Каждый этап процесса тщательно проработан и контролируется опытными специалистами.',
        'Одной из ключевых особенностей Outlook Logistics является тщательный подбор квалифицированных водителей и использование современного транспортного оборудования, специально адаптированного для перевозки опасных грузов. Это позволяет минимизировать риски и обеспечивать высший уровень безопасности на всех этапах доставки.',
        'Однако помимо безопасности, компания также уделяет внимание аспекту стоимости услуг. Outlook Logistics понимает, что цена играет важную роль для клиентов, и поэтому предлагает конкурентоспособные тарифы на свои услуги по перевозке опасных грузов. Точная цена зависит от ряда факторов, таких как характер груза, маршрут доставки, объем перевозок и другие параметры.',
        'Если вы заинтересованы в перевозке опасных грузов, компания Outlook Logistics предоставляет возможность рассчитать предварительную стоимость услуг. Для этого вы можете связаться с нашими специалистами, предоставив необходимую информацию о грузе и требованиях к доставке. Мы гарантируем оперативный и профессиональный расчет стоимости, учитывая все особенности заказа.',
        'Автоперевозки опасных грузов – это сложное и важное направление деятельности, в котором компания Outlook Logistics проявляет себя как надежный и опытный партнер. Сочетание высоких стандартов безопасности, качественного оборудования, опытных специалистов и конкурентоспособных цен делает нас идеальным выбором для тех, кто ценит надежность и профессионализм в автомобильных перевозках опасных грузов.'
    ],
    truck_params: {
      size: "",
      weight: "",
      volume: "",
      capacity: "ГАРАНТИЯ СОХРАННОСТИ ГРУЗА",
    },
    metaTitle:
      "Перевозка опасных грузов в Санкт-Петербурге цена в транспортной компании outlook-logistics",
    metaDescription:
      "Перевозка опасных грузов в Санкт-Петербурге цена доставки в транспортной компании Outlook Logistics. Рассчитать услугу перевозки опасных грузов вы можете на сайте компании.",
    metaKeywords:
      "опасные грузы, перевозка опасных грузов, санкт-петербург, цена, услуга, рассчитать, доставка, транспортная компания",
  },
];

export const featuresReducer = (
  state = initialState,
  action: TFeaturesActions
) => {
  switch (action) {
    default:
      return state;
  }
};
