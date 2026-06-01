export type Language = "sr" | "en";

export interface Content {
  nav: {
    home: string;
    about: string;
    actions: string;
    news: string;
    contact: string;
    volunteer: string;
    partners: string;
    team: string;
    gallery: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    founded: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    values: string[];
  };
  timeline: {
    title: string;
    subtitle: string;
    items: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  goals: {
    title: string;
    quote: string;
    quoteAuthor: string;
    cards: {
      title: string;
      description: string;
    }[];
    progressTitle: string;
    raised: string;
    goal: string;
    percent: number;
  };
  impact: {
    title: string;
    subtitle: string;
    items: {
      value: string;
      label: string;
      icon: string;
    }[];
  };
  actions: {
    title: string;
    events: {
      date: string;
      location: string;
      needed: string;
      title: string;
      description: string;
    }[];
  };
  team: {
    title: string;
    subtitle: string;
    members: {
      name: string;
      role: string;
      bio: string;
      initials: string;
    }[];
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: string[];
    items: {
      title: string;
      category: string;
      description: string;
      color: string;
    }[];
  };
  partners: {
    title: string;
    subtitle: string;
    becomeTitle: string;
    becomeText: string;
    benefits: string[];
    cta: string;
    logos: { name: string; placeholder: string }[];
  };
  volunteer: {
    title: string;
    sponsorTitle: string;
    sponsorDescription: string;
    volunteerTitle: string;
    volunteerDescription: string;
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  help: {
    title: string;
    description: string;
    question: string;
    cta: string;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    success: string;
    subjects: string[];
  };
  news: {
    title: string;
    items: {
      title: string;
      excerpt: string;
    }[];
  };
  stats: {
    donations: string;
    volunteers: string;
    families: string;
    cities: string;
  };
  footer: {
    copyright: string;
    description: string;
    socialTitle: string;
    quickLinks: string;
    contactTitle: string;
  };
}

export const content: Record<Language, Content> = {
  sr: {
    nav: {
      home: "НАСЛОВНА",
      about: "О НАМА",
      actions: "ХУМАНИТАРНЕ АКЦИЈЕ",
      news: "НОВОСТИ",
      contact: "КОНТАКТ",
      volunteer: "ВОЛОНТЕРСТВО",
      partners: "ПАРТНЕРИ",
      team: "ТИМ",
      gallery: "ГАЛЕРИЈА",
      faq: "ЧПП",
    },
    hero: {
      title: "Срце на Длану",
      subtitle: "Добродошли на волонтерство и хуманитарне акције",
      cta: "Придружите нам се",
      ctaSecondary: "Сазнајте више",
    },
    about: {
      title: "О Нама",
      description:
        'Удружење је добровољна, нестраначка, неполитичка, невладина, непрофитабилна организација на добровољној бази, а ради остваривања заједничког и општег интереса и чија основна сврха није стицање добити. Наш први састанак Удружења грађана "Срце на длану" Бања Лука догодио се 07.09.2013. године, када се млада група људи скупила у једној просторији, са једним те истим циљем, тј. да имамо Удружење које може и помоћи људима којима је помоћ неопходна, потом да вршимо процјене наших корисница/коросника и да вршимо едукације за такву циљну групу.',
      founded: "Основано 2013",
      mission: "Наша Мисија",
      missionText:
        "Пружити хуманитарну помоћ и подршку најугроженијим категоријама становништва, промовисати волонтеризам и активно учешће грађана у заједници, те доприносити бољем друштву за све.",
      vision: "Наша Визија",
      visionText:
        "Друштво у којем сваки појединац има подршку која му је потребна, у којем солидарност и брига за друге нису изузетак него правило, и у којем заједница функционише као једна велика породица.",
      values: [
        "Солидарност и емпатија",
        "Транспарентност и одговорност",
        "Добровољност и посвећеност",
        "Једнакост и поштовање",
        "Иновативност у хуманитарном раду",
      ],
    },
    timeline: {
      title: "Наша Историја",
      subtitle: "Кључни тренуци који су обликовали наше удружење",
      items: [
        {
          year: "2013",
          title: "Оснивање удружења",
          description:
            "Млада група људи окупила се у Бањалуци и основала Удружење грађана \u201EСрце на длану\u201C са циљем да помаже људима у нужди.",
        },
        {
          year: "2014",
          title: "Прва хуманитарна акција",
          description:
            "Спровели смо нашу прву велик хуманитарну акцију помоћи породицама које су погођене поплавама у региону.",
        },
        {
          year: "2016",
          title: "Проширили смо се на 5 градова",
          description:
            "Наша мрежа волонтера проширила се на пет градова у Босни и Херцеговини, омогућавајући већи досег помоћи.",
        },
        {
          year: "2018",
          title: "Награда за хуманитарни рад",
          description:
            "Примили смо прву јавну награду за наш рад у области хуманитарних акција и волонтиризма.",
        },
        {
          year: "2020",
          title: "Пандемија - поjaчан рад",
          description:
            "Током пандемије COVID-19, интензивирали смо наше активности и помогли стотинама породица у нужди.",
        },
        {
          year: "2023",
          title: "10 година постојања",
          description:
            "Обиљежили смо десет година постојања са преко 500 спроведених хуманитарних акција и 120+ активних волонтера.",
        },
        {
          year: "2025",
          title: "Републичка награда",
          description:
            "Наше удружење је добило Републичку награду за изузетан допринос хуманитарном раду и волонтиризму.",
        },
      ],
    },
    goals: {
      title: "Наши Циљеви",
      quote:
        "Кад нам срећа затвори једна врата, често нам отвори и друга, али ми понекад знамо предуго гледати у она затворена и не видимо отворена.",
      quoteAuthor: "— Хелен Келер",
      cards: [
        {
          title: "Помажеш другима",
          description:
            "Помажеш другима и осјећаш се добро због тога, добијеш искрен осмијех, хвала и слично. Зато немој да чекаш сутра, већ данас можеш неког да усрећиш и да јој/му помогнеш, довољно је само да нам се обратите/обратиш.",
        },
        {
          title: "Хуманитарне Акције",
          description:
            "Имамо много урађених хуманитарних акција иза себе. Без помоћи добрих људи не бисмо могли да спроведемо нити једну хуманитарну акцију. Придружите нам се, издвојите своје драгоцијено вријеме и помозите некоме.",
        },
        {
          title: "Буди Спонзор",
          description:
            "Одувијек сте жељели да помогнете неком ко вам не може узвратити дату помоћ?! Оно што можете да урадите без потешкоћа јесте да постанете наша/наш спонзорка/спонзор и да нам помогнете на било који начин.",
        },
        {
          title: "Постани Волонтер",
          description:
            "Ово савршена прилика да нам се придружите и помогнете нам, да будемо још јачи и да наша хуманост превазиђе границе, јер заједно можемо много тога, с тога, будите дио нашег тима јер волонтирање храни срце, а не его!",
        },
      ],
      progressTitle: "Добра дјела не штете",
      raised: "Сакупљено",
      goal: "Циљ",
      percent: 10,
    },
    impact: {
      title: "Наш Утицај",
      subtitle: "Бројке које говоре више од ријечи - заједно стварамо промјене",
      items: [
        { value: "500+", label: "Помоћних пакета подијељено", icon: "📦" },
        { value: "120+", label: "Активних волонтера", icon: "🙋" },
        { value: "85+", label: "Породица помагати", icon: "👨‍👩‍👧‍👦" },
        { value: "10+", label: "Градова у регији", icon: "🏙" },
        { value: "12", label: "Година искуства", icon: "📅" },
        { value: "KM 150K+", label: "Сакупљених средстава", icon: "💰" },
      ],
    },
    actions: {
      title: "Хуманитарне Акције",
      events: [
        {
          date: "Март 01, 2020",
          location: "Бањалука",
          needed: "Потребно 5,300 KM",
          title: "ПОМОЗИМО ДЈЕЧАКУ ВЛАДИМИРУ ОБОЉЕЛОМ ОД ЦЕРЕБРАЛНЕ ПАРАЛИЗЕ",
          description:
            "Деветогодишњи дјечак Владимир Ђурић из Бања Луке оболио је од церебралне парализе. Због његовог здравственог стања готово цијело вријеме проводи у лежећем или полусједећем положају. Овакав положај тијела доводи до отежаног рада унутрашњих органа и пријети да дође до атрофије мишића унутрашњих органа чиме би дијете било доведено у непосредну животну опасност. Ова патња по Владино здравље је РЈЕШИВА. Потребно је купити ОРТОПЕДСКО ПОМАГАЛО ВЕРТИКАЛИЗАТОР, које би дјечаку омогућило да дио дана проводи у усправном положају.",
        },
        {
          date: "Мај 01, 2020",
          location: "Београд",
          needed: "2 милиона и 100 хиљада долара",
          title: "Софија Маркуљевић",
          description:
            "Дјевојчица Софија Маркуљевић је рођена 25.05.2019. године, у Београду. Болује од изузетно прогресивне и смртоносне неуромишићне болести - Спинална мишићна атрофија, тип 1. Дјеца са овом дијагнозом живе најдуже до двије године старости, а болест се манифестује прогресивном атрофијом мишића и губитком основних животних функција, као што су: ходање, гутање, дисање...",
        },
      ],
    },
    team: {
      title: "Наш Тим",
      subtitle: "Људи који стоје иза свих наших акција - посвећени волонтери и стручњаци",
      members: [
        {
          name: "Марко Петровић",
          role: "Предсједник",
          bio: "Социолог по образовању, волонтер од 2013. године. Посвећен хуманитарном раду и помоћи заједници.",
          initials: "МП",
        },
        {
          name: "Јелена Милетић",
          role: "Потпредсједница",
          bio: "Правница са искуством у НВО сектору. Координише нашим главним пројектима и кампањама.",
          initials: "ЈМ",
        },
        {
          name: "Стефан Дабић",
          role: "Координатор волонтера",
          bio: "Студент социологије, волонтер већ 5 година. Организује и води тимове волонтера на терену.",
          initials: "СД",
        },
        {
          name: "Ана Јовановић",
          role: "PR и комуникације",
          bio: "Новинарка по позиву, бави се промоцијом нашег рада и комуникацијом са јавношћу и медијима.",
          initials: "АЈ",
        },
        {
          name: "Немања Кораћ",
          role: "Финансијски директор",
          bio: "Економиста који води бригу о финансијској транспарентности и правилном кориштењу средстава.",
          initials: "НК",
        },
        {
          name: "Мила Стојановић",
          role: "Координатор помоћи",
          bio: "Социјална радница која процијењуе потребе корисника и координише испоруку помоћи на терену.",
          initials: "МС",
        },
      ],
    },
    gallery: {
      title: "Галерија",
      subtitle: "Тренуци који говоре више од ријечи - погледајте наш рад на дјелу",
      categories: ["Све", "Акције", "Волонтери", "Догађаји", "Помоћ"],
      items: [
        { title: "Подјела пакета", category: "Акције", description: "Подјела хуманитарних пакета породицама у Бањалуци", color: "#c0392b" },
        { title: "Волонтерски дан", category: "Волонтери", description: "Наш тим волонтера на заједничком дружењу", color: "#2c3e50" },
        { title: "Нова година", category: "Догађаји", description: "Новогодишња акција за дјецу без родитељске бриге", color: "#e67e22" },
        { title: "Школски пакети", category: "Помоћ", description: "Дјеца добијају школске потрепштине за нову школску годину", color: "#27ae60" },
        { title: "Великдан", category: "Догађаји", description: "Забава за дјецу поводом Великдана", color: "#8e44ad" },
        { title: "Зимска помоћ", category: "Акције", description: "Подијела дрва за гrijanje породицама у нужди", color: "#2980b9" },
        { title: "Тимски састанак", category: "Волонтери", description: "Планирање нових акција и пројеката", color: "#16a085" },
        { title: "Браниоци", category: "Помоћ", description: "Помоћ старим и изнемоглим особама", color: "#d35400" },
      ],
    },
    partners: {
      title: "Наши Партнери",
      subtitle: "Поносни смо на нашу мрежу партнера који дијеле нашу визију",
      becomeTitle: "Постаните наш Партнер",
      becomeText:
        "Тражимо предузећа, установе и појединце који желе да подрже наш рад кроз финансијску или логистичку помоћ, добровољно ангажовање или заједничке пројекте. Сваки партер нам омогућава да будемо бољи и да помогнемо више људи.",
      benefits: [
        "Видљивост вашег брендa на нашим кампањама",
        "Прилика за корпоративно волонтирање",
        "Сарадња на хуманитарним пројектима",
        "Јавно признање и захвала",
        "Могућност заједничких пројеката",
      ],
      cta: "Постаните партер",
      logos: [
        { name: "Catalist", placeholder: "C" },
        { name: "Министарство", placeholder: "M" },
        { name: "Град Бањалука", placeholder: "ГБ" },
        { name: "Радио", placeholder: "R" },
        { name: "Банка", placeholder: "B" },
        { name: "ТВ Канал", placeholder: "ТВ" },
      ],
    },
    volunteer: {
      title: "ПРИДРУЖИТЕ НАМ СЕ",
      sponsorTitle: "Буди Спонзор",
      sponsorDescription:
        "Одувијек сте жељели да помогнете неком ко вам не може узвратити дату помоћ?! Оно што можете да урадите без потешкоћа јесте да постанете наша/наш спонзорка/спонзор и да нам помогнете на било који начин.",
      volunteerTitle: "Постани Волонтер",
      volunteerDescription:
        "Ово савршена прилика да нам се придружите и помогнете нам, да будемо још јачи и да наша хуманост превазиђе границе, јер заједно можемо много тога, с тога, будите дио нашег тима јер волонтирање храни срце, а не его!",
      cta: "Придружите нам се",
    },
    testimonials: {
      title: "Шта кажу о нама",
      subtitle: "Гласови из заједнице - људи којима смо помогли и партнери који нам вјерују",
      items: [
        {
          quote:
            "Срце на длану нам је пружило помоћ када нам је најтеже било. Без њих не бисмо успјели. Од срца им хвала на свему што су учинили за нашу породицу.",
          author: "Марија М.",
          role: "Корисница помоћи",
        },
        {
          quote:
            "Као компанија, препознали смо изузетан рад овог удружења. Њихова посвећеност и транспарентност су разлог зашто смо постали њихови партнери. Свака препорука.",
          author: "Драган С.",
          role: "Партнер компаније",
        },
        {
          quote:
            "Волонтирање са Срцем на Длану ми је промијенило живот. Научио сам да мали чинови доброте могу направити велику разлику. Ово је више од удружења - ово је породица.",
          author: "Никола В.",
          role: "Волонтер 3+ године",
        },
      ],
    },
    faq: {
      title: "Често Постављана Питања",
      subtitle: "Одговори на најчешћа питања о нашем раду и како можете учествовати",
      items: [
        {
          question: "Како могу постати волонтер?",
          answer:
            "Довољно је да нас контактирате преко формулара на сајту или путем е-поште. Организујемо састанке за нове волонтере сваког првог понедељка у мјесецу, где ћете сазнати све о нашим активностима и како можете учествовати.",
        },
        {
          question: "Како могу донирати?",
          answer:
            "Можете донирати новчана средства на наш жиро рачун, помоћ у виду хране, одјежде или других потрепштина. Такође можете организовати хуманитарну акцију у вашој компанији или заједници у сарадњи са nama.",
        },
        {
          question: "Да ли је свка помоћ добродошла?",
          answer:
            "Апсолутно! Свака помоћ, без обзира на износ или облик, нам омогућава да помогнемо више људи. Примамо новчане донације, храну, одјећу, обућу, школски прибор, играчке и све оно што може користити нашим корисницима.",
        },
        {
          question: "Како你們 garantujete транспарентност?",
          answer:
            "Сваку донацију евидентирамо и објављујемо извјештаје о кориштењу средстава на нашем сајту и друштвеним мрежама. Имамо годишњи ревидорски извјештај и отворени смо за сва питања грађана.",
        },
        {
          question: "У којим градовима делујете?",
          answer:
            "Тренутно делујемо у 10+ градова у Босни и Херцеговини, са централном базом у Бањалуци. Планови за проширење укључују нове градове у региону током наредне године.",
        },
        {
          question: "Да ли организујете донације за предузећа?",
          answer:
            "Да! Имамо посебан програм за корпоративне партнере који укључује организацију хуманитарних акција у оквиру ваше компаније, тимбилдинг кроз волонтирање и заједничке пројекте.",
        },
      ],
    },
    help: {
      title: "Помозите нам да будемо још јачи",
      description:
        "Помажеш другима и осјећаш се добро због тога, добијеш искрен осмијех, хвала и слично. Зато немој да чекаш сутра, већ данас можеш неког да усрећиш и да јој/му помогнеш, довољно је само да нам се обратите/обратиш.",
      question: "Требате нашу помоћ или познајете некога коме је неопходна?",
      cta: "Контактирајте нас",
    },
    cta: {
      title: "Спремни сте да направите разлику?",
      subtitle:
        "Свака донација, свако волонтирање, сваки диојелен пост промјена за некога. Придружите се данас.",
      primaryCta: "Постаните партер",
      secondaryCta: "Пријавите се као волонтер",
    },
    newsletter: {
      title: "Будите у току",
      subtitle: "Пријавите се на наш newsletter и будите први који ће сазнати за нове акције и пројекте",
      placeholder: "Унесите вашу е-mail адресу",
      button: "Пријави се",
      success: "Успјешно сте се пријавили! Хвала вам.",
    },
    contactForm: {
      title: "Контактирајте нас",
      subtitle: "Испуните формулар и одговорићемо вам у року од 24 сата",
      name: "Ваше име и prezime",
      email: "Е-mail адреса",
      phone: "Број телефона",
      subject: "Тема",
      message: "Ваша порука",
      send: "Пошаљи поруку",
      success: "Порука је успјешно послата! Одговорићемо вам у што краћем року.",
      subjects: [
        "Потребна ми је помоћ",
        "Желим да постанем волонтер",
        "Интересује ме партнерство",
        "Имам питање",
        "Друго",
      ],
    },
    news: {
      title: "Новости",
      items: [
        {
          title: "Захваљујемо се од срца",
          excerpt:
            'Захваљујемо се од срца "Catalist" што су препознали наш рад',
        },
        {
          title: 'Републичка награда за Удружење грађана \u201EСрце на длану\u201C Бања Лука',
          excerpt:
            'Републичка награда за Удружење грађана \u201EСрце на длану\u201C Бања Лука',
        },
        {
          title: "Захваљујемо се од срца Урошу М. на поклоњеној пјесми нашем Удружењу",
          excerpt:
            "Захваљујемо се од срца Урошу М. на поклоњеној пјесми нашем Удружењу",
        },
      ],
    },
    stats: {
      donations: "KM Донација",
      volunteers: "Волонтера",
      families: "Породица",
      cities: "Градова",
    },
    footer: {
      copyright: "УГ Срце на Длану 2026. Сва права задржана.",
      description: "Удружење грађана Срце на Длану Бања Лука",
      socialTitle: "Пратите нас",
      quickLinks: "Брзи линкови",
      contactTitle: "Контакт",
    },
  },
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT US",
      actions: "HUMANITARIAN ACTIONS",
      news: "NEWS",
      contact: "CONTACT",
      volunteer: "VOLUNTEER",
      partners: "PARTNERS",
      team: "TEAM",
      gallery: "GALLERY",
      faq: "FAQ",
    },
    hero: {
      title: "Heart in Your Palm",
      subtitle: "Welcome to volunteering and humanitarian actions",
      cta: "Join Us",
      ctaSecondary: "Learn More",
    },
    about: {
      title: "About Us",
      description:
        'The association is a voluntary, non-partisan, non-political, non-governmental, non-profit organization operating on a voluntary basis, aimed at achieving common and general interests, whose primary purpose is not profit-making. Our first meeting of the Citizens\' Association "Srce na dlanu" Banja Luka took place on 07.09.2013, when a young group of people gathered in a room, with one and the same goal - to have an Association that can help people in need, then to assess our users and to provide education for such a target group.',
      founded: "Founded 2013",
      mission: "Our Mission",
      missionText:
        "To provide humanitarian aid and support to the most vulnerable categories of the population, promote volunteering and active citizen participation in the community, and contribute to a better society for all.",
      vision: "Our Vision",
      visionText:
        "A society where every individual has the support they need, where solidarity and care for others are the norm rather than the exception, and where the community functions as one big family.",
      values: [
        "Solidarity and empathy",
        "Transparency and accountability",
        "Voluntary engagement and dedication",
        "Equality and respect",
        "Innovation in humanitarian work",
      ],
    },
    timeline: {
      title: "Our History",
      subtitle: "Key moments that shaped our association",
      items: [
        {
          year: "2013",
          title: "Association founded",
          description:
            "A young group of people gathered in Banja Luka and founded the Citizens' Association \u201EHeart in Your Palm\u201C with the goal of helping people in need.",
        },
        {
          year: "2014",
          title: "First humanitarian action",
          description:
            "We carried out our first major humanitarian action helping families affected by floods in the region.",
        },
        {
          year: "2016",
          title: "Expanded to 5 cities",
          description:
            "Our volunteer network expanded to five cities in Bosnia and Herzegovina, enabling a greater reach of aid.",
        },
        {
          year: "2018",
          title: "Humanitarian work award",
          description:
            "We received our first public award for our work in humanitarian actions and volunteering.",
        },
        {
          year: "2020",
          title: "Pandemic - intensified work",
          description:
            "During the COVID-19 pandemic, we intensified our activities and helped hundreds of families in need.",
        },
        {
          year: "2023",
          title: "10 years of existence",
          description:
            "We marked ten years of existence with over 500 completed humanitarian actions and 120+ active volunteers.",
        },
        {
          year: "2025",
          title: "Republic Award",
          description:
            "Our association received the Republic Award for exceptional contribution to humanitarian work and volunteering.",
        },
      ],
    },
    goals: {
      title: "Our Goals",
      quote:
        "When luck closes one door for us, it often opens another, but sometimes we tend to stare too long at the closed ones and don't see the open ones.",
      quoteAuthor: "— Helen Keller",
      cards: [
        {
          title: "Helping Others",
          description:
            "You help others and feel good about it, you get a sincere smile, gratitude and more. So don't wait for tomorrow, today you can make someone happy and help them - all you need to do is reach out to us.",
        },
        {
          title: "Humanitarian Actions",
          description:
            "We have many completed humanitarian actions behind us. Without the help of good people, we wouldn't be able to carry out a single humanitarian action. Join us, dedicate your precious time and help someone in need.",
        },
        {
          title: "Become a Sponsor",
          description:
            "Have you always wanted to help someone who cannot return the favor?! What you can do without difficulty is become our sponsor and help us in any way you can.",
        },
        {
          title: "Become a Volunteer",
          description:
            "This is the perfect opportunity to join us and help us become stronger and let our humanity transcend borders, because together we can do so much. Be part of our team because volunteering feeds the heart, not the ego!",
        },
      ],
      progressTitle: "Good Deeds Don't Hurt",
      raised: "Raised",
      goal: "Goal",
      percent: 10,
    },
    impact: {
      title: "Our Impact",
      subtitle: "Numbers that speak louder than words - together we create change",
      items: [
        { value: "500+", label: "Aid packages distributed", icon: "📦" },
        { value: "120+", label: "Active volunteers", icon: "🙋" },
        { value: "85+", label: "Families helped", icon: "👨‍👩‍👧‍👦" },
        { value: "10+", label: "Cities in the region", icon: "🏙" },
        { value: "12", label: "Years of experience", icon: "📅" },
        { value: "KM 150K+", label: "Funds raised", icon: "💰" },
      ],
    },
    actions: {
      title: "Humanitarian Actions",
      events: [
        {
          date: "March 01, 2020",
          location: "Banja Luka",
          needed: "Needed 5,300 KM",
          title: "HELP BOY VLADIMIR SUFFERING FROM CEREBRAL PALSY",
          description:
            "Nine-year-old boy Vladimir Djuric from Banja Luka has fallen ill with cerebral palsy. Due to his health condition, he spends almost all of his time in a lying or semi-seated position. This body position leads to impaired function of internal organs and threatens muscle atrophy of internal organs, which would put the child in immediate danger. This suffering for Vlad's health is SOLVABLE. It is necessary to purchase an ORTHOPEDIC DEVICE - VERTICALIZER, which would allow the boy to spend part of the day in an upright position.",
        },
        {
          date: "May 01, 2020",
          location: "Belgrade",
          needed: "2 million and 100 thousand dollars",
          title: "Sofija Markuljevic",
          description:
            "Little girl Sofija Markuljevic was born on 25.05.2019 in Belgrade. She suffers from an extremely progressive and fatal neuromuscular disease - Spinal Muscular Atrophy, type 1. Children with this diagnosis live up to two years at most, and the disease manifests as progressive muscle atrophy and loss of basic life functions such as: walking, swallowing, breathing...",
        },
      ],
    },
    team: {
      title: "Our Team",
      subtitle: "The people behind all our actions - dedicated volunteers and professionals",
      members: [
        {
          name: "Marko Petrovic",
          role: "President",
          bio: "Sociologist by education, volunteer since 2013. Dedicated to humanitarian work and community support.",
          initials: "MP",
        },
        {
          name: "Jelena Miletic",
          role: "Vice President",
          bio: "Lawyer with experience in the NGO sector. Coordinates our main projects and campaigns.",
          initials: "JM",
        },
        {
          name: "Stefan Dabic",
          role: "Volunteer Coordinator",
          bio: "Sociology student, volunteer for 5 years. Organizes and leads volunteer teams in the field.",
          initials: "SD",
        },
        {
          name: "Ana Jovanovic",
          role: "PR and Communications",
          bio: "Journalist by profession, handles the promotion of our work and communication with the public and media.",
          initials: "AJ",
        },
        {
          name: "Nemanja Korac",
          role: "Financial Director",
          bio: "Economist who takes care of financial transparency and proper use of funds.",
          initials: "NK",
        },
        {
          name: "Mila Stojanovic",
          role: "Aid Coordinator",
          bio: "Social worker who assesses user needs and coordinates aid delivery in the field.",
          initials: "MS",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Moments that speak louder than words - see our work in action",
      categories: ["All", "Actions", "Volunteers", "Events", "Aid"],
      items: [
        { title: "Package Distribution", category: "Actions", description: "Distributing humanitarian packages to families in Banja Luka", color: "#c0392b" },
        { title: "Volunteer Day", category: "Volunteers", description: "Our volunteer team enjoying time together", color: "#2c3e50" },
        { title: "New Year", category: "Events", description: "New Year's action for children without parental care", color: "#e67e22" },
        { title: "School Packages", category: "Aid", description: "Children receiving school supplies for the new school year", color: "#27ae60" },
        { title: "Easter", category: "Events", description: "Children's Easter celebration and entertainment", color: "#8e44ad" },
        { title: "Winter Aid", category: "Actions", description: "Distributing firewood to families in need during winter", color: "#2980b9" },
        { title: "Team Meeting", category: "Volunteers", description: "Planning new actions and projects", color: "#16a085" },
        { title: "Helping Elderly", category: "Aid", description: "Assistance to elderly and vulnerable people", color: "#d35400" },
      ],
    },
    partners: {
      title: "Our Partners",
      subtitle: "We are proud of our network of partners who share our vision",
      becomeTitle: "Become Our Partner",
      becomeText:
        "We are looking for companies, institutions and individuals who want to support our work through financial or logistical assistance, voluntary engagement or joint projects. Every partner enables us to be better and help more people.",
      benefits: [
        "Visibility of your brand at our campaigns",
        "Opportunity for corporate volunteering",
        "Collaboration on humanitarian projects",
        "Public recognition and appreciation",
        "Opportunity for joint projects",
      ],
      cta: "Become a partner",
      logos: [
        { name: "Catalist", placeholder: "C" },
        { name: "Ministry", placeholder: "M" },
        { name: "City of Banja Luka", placeholder: "BL" },
        { name: "Radio", placeholder: "R" },
        { name: "Bank", placeholder: "B" },
        { name: "TV Channel", placeholder: "TV" },
      ],
    },
    volunteer: {
      title: "JOIN US",
      sponsorTitle: "Become a Sponsor",
      sponsorDescription:
        "Have you always wanted to help someone who cannot return the favor?! What you can do without difficulty is become our sponsor and help us in any way you can.",
      volunteerTitle: "Become a Volunteer",
      volunteerDescription:
        "This is the perfect opportunity to join us and help us become stronger and let our humanity transcend borders, because together we can do so much. Be part of our team because volunteering feeds the heart, not the ego!",
      cta: "Join Us",
    },
    testimonials: {
      title: "What They Say About Us",
      subtitle: "Voices from the community - people we helped and partners who trust us",
      items: [
        {
          quote:
            "Heart in Your Palm provided us with help when we needed it most. Without them, we wouldn't have succeeded. We are truly grateful for everything they have done for our family.",
          author: "Marija M.",
          role: "Aid recipient",
        },
        {
          quote:
            "As a company, we recognized the exceptional work of this association. Their dedication and transparency are the reasons why we became their partners. Highly recommended.",
          author: "Dragan S.",
          role: "Partner company",
        },
        {
          quote:
            "Volunteering with Heart in Your Palm changed my life. I learned that small acts of kindness can make a big difference. This is more than an association - it's a family.",
          author: "Nikola V.",
          role: "Volunteer 3+ years",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our work and how you can participate",
      items: [
        {
          question: "How can I become a volunteer?",
          answer:
            "All you need to do is contact us through the form on our website or via email. We organize meetings for new volunteers every first Monday of the month, where you'll learn all about our activities and how you can participate.",
        },
        {
          question: "How can I donate?",
          answer:
            "You can donate financial funds to our bank account, aid in the form of food, clothing or other necessities. You can also organize a humanitarian action at your company or community in cooperation with us.",
        },
        {
          question: "Is all help welcome?",
          answer:
            "Absolutely! Every donation, regardless of the amount or form, enables us to help more people. We accept monetary donations, food, clothing, shoes, school supplies, toys and anything that can be useful to our users.",
        },
        {
          question: "How do you guarantee transparency?",
          answer:
            "We record every donation and publish reports on the use of funds on our website and social media. We have an annual audit report and are open to all questions from citizens.",
        },
        {
          question: "In which cities do you operate?",
          answer:
            "Currently we operate in 10+ cities in Bosnia and Herzegovina, with a central base in Banja Luka. Plans for expansion include new cities in the region during the next year.",
        },
        {
          question: "Do you organize corporate donations?",
          answer:
            "Yes! We have a special program for corporate partners that includes organizing humanitarian actions within your company, team building through volunteering, and joint projects.",
        },
      ],
    },
    help: {
      title: "Help Us Become Even Stronger",
      description:
        "You help others and feel good about it, you get a sincere smile, gratitude and more. So don't wait for tomorrow, today you can make someone happy and help them - all you need to do is reach out to us.",
      question: "Need our help or know someone who does?",
      cta: "Contact Us",
    },
    cta: {
      title: "Ready to Make a Difference?",
      subtitle:
        "Every donation, every volunteer hour, every shared post is a change for someone. Join us today.",
      primaryCta: "Become a Partner",
      secondaryCta: "Sign Up as Volunteer",
    },
    newsletter: {
      title: "Stay Updated",
      subtitle: "Subscribe to our newsletter and be the first to know about new actions and projects",
      placeholder: "Enter your email address",
      button: "Subscribe",
      success: "You have successfully subscribed! Thank you.",
    },
    contactForm: {
      title: "Contact Us",
      subtitle: "Fill out the form and we will respond within 24 hours",
      name: "Your full name",
      email: "Email address",
      phone: "Phone number",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      success: "Message sent successfully! We will respond as soon as possible.",
      subjects: [
        "I need help",
        "I want to become a volunteer",
        "I'm interested in partnership",
        "I have a question",
        "Other",
      ],
    },
    news: {
      title: "News",
      items: [
        {
          title: "Heartfelt Thanks",
          excerpt:
            'We sincerely thank "Catalist" for recognizing our work',
        },
        {
          title: 'Republic Award for Citizens\' Association "Srce na dlanu" Banja Luka',
          excerpt:
            'Republic Award for Citizens\' Association "Srce na dlanu" Banja Luka',
        },
        {
          title: "Heartfelt thanks to Uros M. for the poem dedicated to our Association",
          excerpt:
            "Heartfelt thanks to Uros M. for the poem dedicated to our Association",
        },
      ],
    },
    stats: {
      donations: "KM Donations",
      volunteers: "Volunteers",
      families: "Families",
      cities: "Cities",
    },
    footer: {
      copyright: "Citizens Association Heart in Your Palm 2026. All rights reserved.",
      description: "Citizens Association Heart in Your Palm Banja Luka",
      socialTitle: "Follow Us",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
    },
  },
};
