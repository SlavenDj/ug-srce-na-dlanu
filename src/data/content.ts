export type Language = "sr" | "sr-latin" | "en";

export interface Content {
  nav: {
    home: string;
    about: string;
    actions: string;
    news: string;
    contact: string;
    volunteer: string;
    donate: string;
    bazar: string;
    requestHelp: string;
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
    slides: {
      title: string;
      subtitle: string;
      cta: string;
      bgColor: string;
    }[];
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
    foundingStory: string;
    timeline: {
      year: string;
      title: string;
      description: string;
    }[];
    team: {
      name: string;
      role: string;
      bio: string;
      initials: string;
    }[];
    partnersSection: {
      title: string;
      subtitle: string;
      becomeTitle: string;
      becomeText: string;
      benefits: string[];
      cta: string;
      logos: { name: string; placeholder: string }[];
    };
    memberships: {
      title: string;
      items: { name: string; description: string }[];
    };
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
  volunteer: {
    title: string;
    sponsorTitle: string;
    sponsorDescription: string;
    volunteerTitle: string;
    volunteerDescription: string;
    cta: string;
    profilesTitle: string;
    alumniTitle: string;
    whyVolunteer: {
      title: string;
      items: { icon: string; heading: string; text: string }[];
    };
    howToVolunteer: {
      title: string;
      steps: { number: number; title: string; description: string }[];
    };
    corporate: {
      title: string;
      description: string;
      benefits: string[];
      cta: string;
    };
    profiles: {
      name: string;
      age: string;
      role: string;
      quote: string;
      color: string;
      initials: string;
    }[];
    alumni: {
      name: string;
      yearsActive: string;
      currentRole: string;
      quote: string;
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
  ctaCards: {
    title: string;
    subtitle: string;
    cards: { icon: string; title: string; desc: string; href: string; color: string }[];
  };
  featuredStories: {
    title: string;
    subtitle: string;
    items: { name: string; quote: string; color: string; initials: string }[];
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
    items: { title: string; excerpt: string }[];
    announcementsTitle: string;
    announcements: { title: string; date: string; excerpt: string }[];
    articlesTitle: string;
    articles: { title: string; date: string; excerpt: string }[];
    blogTitle: string;
    blog: { title: string; date: string; excerpt: string; author: string }[];
  };
  stats: {
    donations: string;
    volunteers: string;
    families: string;
    cities: string;
  };
  donate: {
    title: string;
    subtitle: string;
    online: { title: string; description: string; methods: string[] };
    foreign: { title: string; description: string; iban: string; swift: string; bank: string; purpose: string };
    domestic: { title: string; description: string; accountNumber: string; bank: string };
    goods: { title: string; description: string; items: string[] };
    services: { title: string; description: string; items: string[] };
  };
  bazar: {
    title: string;
    subtitle: string;
    auctions: { title: string; description: string; currentBid: string; color: string }[];
    shop: { title: string; description: string; price: string; color: string }[];
    liveAuction: { title: string; description: string; schedule: string };
    donateItem: { title: string; description: string; cta: string };
  };
  trebam: {
    title: string;
    subtitle: string;
    help: { title: string; description: string };
    certificate: { title: string; description: string };
    recommendation: { title: string; description: string };
    excuse: { title: string; description: string };
    cooperation: { title: string; description: string };
    partnership: { title: string; description: string };
    membership: { title: string; description: string };
  };
  contactInfo: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    social: { facebook: string; instagram: string; youtube: string; linkedin: string };
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
      actions: "АКЦИЈЕ",
      news: "НОВОСТИ",
      contact: "КОНТАКТ",
      volunteer: "ВОЛОНТИРАЈ",
      donate: "ДОНИРАЈ",
      bazar: "БАЗАР",
      requestHelp: "ТРЕБАМ...",
      partners: "ПАРТНЕРИ",
      team: "ТИМ",
      gallery: "ГАЛЕРИЈА",
      faq: "ЧПП",
    },
    hero: {
      title: "Срце на Длану",
      subtitle: "Волонтирање и хуманитарне акције за боље сутра",
      cta: "Придружите нам се",
      ctaSecondary: "Сазнајте више",
      slides: [
        {
          title: "Заједно чинимо разлику",
          subtitle: "Помозите онима којима је помоћ најпотребнија",
          cta: "Постани волонтер",
          bgColor: "#c0392b",
        },
        {
          title: "Свака донација значи",
          subtitle: "Ваша подршка мијења животе",
          cta: "Донирај сада",
          bgColor: "#e67e22",
        },
        {
          title: "Буди дио промјене",
          subtitle: "Придружи се нашој заједници хуманих људи",
          cta: "Укључи се",
          bgColor: "#2c3e50",
        },
      ],
    },
    about: {
      title: "О Нама",
      description:
        'Удружење грађана "Срце на длану" из Бања Луке је добровољна, нестраначка, неполитичка, невладина, непрофитабилна организација. Основано је 2013. године са циљем пружања хуманитарне помоћи и подршке најугроженијим категоријама становништва. Наш први састанак одржан је 07.09.2013. године, када се млада група људи окупила са једним циљем - да створимо удружење које може да помогне људима у невољи.',
      founded: "Основано 2013.",
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
      foundingStory:
        "Наша прича почиње 7. септембра 2013. године у Бања Луци. Група младих људи, различитих професија и позадина, окупила се у скромној просторији са жељом да помјене свијет набоље. Свако од нас је већ волонтирао или помагао на свој начин, али осјећали смо да заједно можемо више. Тако је рођена идеја о Удружењу грађана \"Срце на длану\". Од прве акције прикупљања помоћи за породице погођене поплавама 2014. године, до републичке награде 2025. године, сваки корак нас је водио ка истом циљу - да будемо некоме ослонац и подршка у најтежим тренуцима.",
      timeline: [
        {
          year: "2013",
          title: "Оснивање удружења",
          description:
            "Млада група људи окупила се у Бањалуци и основала Удружење грађана \"Срце на длану\" са циљем да помаже људима у нужди.",
        },
        {
          year: "2014",
          title: "Прва хуманитарна акција",
          description:
            "Спровели смо нашу прву велику хуманитарну акцију помоћи породицама погођеним катастрофалним поплавама у региону.",
        },
        {
          year: "2016",
          title: "Проширење на 5 градова",
          description:
            "Наша мрежа волонтера проширила се на пет градова у Босни и Херцеговини, омогућавајући већи досег помоћи.",
        },
        {
          year: "2018",
          title: "Награда за хуманитарни рад",
          description:
            "Примили смо прву јавну награду за наш рад у области хуманитарних акција и волонтеризма.",
        },
        {
          year: "2020",
          title: "Појачан рад током пандемије",
          description:
            "Током пандемије COVID-19, интензивирали смо активности и помогли стотинама породица у невољи, организујући доставе хране и лијекова.",
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
            "Удружење је добило Републичку награду за изузетан допринос хуманитарном раду и волонтеризму.",
        },
      ],
      team: [
        {
          name: "Марко Петровић",
          role: "Предсједник",
          bio: "Дипломирани социолог, волонтер од 2013. године. Посвећен хуманитарном раду и развоју заједнице.",
          initials: "МП",
        },
        {
          name: "Јелена Милетић",
          role: "Потпредсједница",
          bio: "Дипломирана правница са искуством у НВО сектору. Координише главним пројектима и кампањама.",
          initials: "ЈМ",
        },
        {
          name: "Стефан Дабић",
          role: "Координатор волонтера",
          bio: "Студент социологије, активан волонтер 5+ година. Организује и води тимове волонтера на терену.",
          initials: "СД",
        },
        {
          name: "Ана Јовановић",
          role: "ПР и комуникације",
          bio: "Новинарка по професији, бави се промоцијом рада удружења и комуникацијом са јавношћу.",
          initials: "АЈ",
        },
        {
          name: "Немања Кораћ",
          role: "Финансијски директор",
          bio: "Дипломирани економиста, води бригу о финансијској транспарентности и правилном кориштењу средстава.",
          initials: "НК",
        },
        {
          name: "Мила Стојановић",
          role: "Координатор помоћи",
          bio: "Социјална радница која процјењује потребе корисника и координише испоруку помоћи на терену.",
          initials: "МС",
        },
      ],
      partnersSection: {
        title: "Наши Партнери",
        subtitle: "Поносни смо на сарадњу са организацијама које дијеле наше вриједности",
        becomeTitle: "Постаните партнер",
        becomeText:
          "Позивамо предузећа, институције и појединце да подрже наш рад кроз финансијску или логистичку подршку, волонтерски ангажман или заједничке пројекте.",
        benefits: [
          "Видљивост бренда на нашим кампањама",
          "Могућност корпоративног волонтирања",
          "Сарадња на хуманитарним пројектима",
          "Јавно признање и захвалница",
          "Заједнички наступ у медијима",
        ],
        cta: "Постаните партнер",
        logos: [
          { name: "Catalist", placeholder: "C" },
          { name: "Министарство", placeholder: "М" },
          { name: "Град Бања Лука", placeholder: "БЛ" },
          { name: "Радио", placeholder: "Р" },
          { name: "Банка", placeholder: "Б" },
          { name: "ТВ Канал", placeholder: "ТВ" },
        ],
      },
      memberships: {
        title: "Чланства и сертификати",
        items: [
          { name: "Републичка награда 2025", description: "За изузетан допринос хуманитарном раду" },
          { name: "Сертификат Министарства", description: "Сертификована организација за рад са осјетљивим групама" },
          { name: "Члан мреже НВО", description: "Активни члан мреже невладиних организација Републике Српске" },
        ],
      },
    },
    impact: {
      title: "Наш Утицај",
      subtitle: "Бројке које говоре више од ријечи",
      items: [
        { value: "500+", label: "Помоћних пакета", icon: "📦" },
        { value: "120+", label: "Активних волонтера", icon: "🙋" },
        { value: "85+", label: "Породица помогнуто", icon: "👨‍👩‍👧‍👦" },
        { value: "10+", label: "Градова у регији", icon: "🏙" },
        { value: "12", label: "Година искуства", icon: "📅" },
        { value: "150K+", label: "KM прикупљено", icon: "💰" },
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
            "Помажеш другима и осјећаш се добро због тога. Не чекај сутра, данас можеш неког да усрећиш - довољно је да нам се обратиш.",
        },
        {
          title: "Хуманитарне акције",
          description:
            "Иза нас су бројне успјешне акције. Без помоћи добрих људи не бисмо могли ништа. Придружите нам се и помозите некоме.",
        },
        {
          title: "Буди спонзор",
          description:
            "Одувијек желите да помогнете некоме ко вам не може узвратити? Постаните наш спонзор и помозите на начин који вама одговара.",
        },
        {
          title: "Постани волонтер",
          description:
            "Савршена прилика да нам се придружиш. Волонтирање храни срце, а не его. Буди дио нашег тима и помози нам да будемо још јачи.",
        },
      ],
      progressTitle: "Добра дјела не штете",
      raised: "Прикупљено",
      goal: "Циљ",
      percent: 10,
    },
    actions: {
      title: "Хуманитарне акције",
      events: [
        {
          date: "Март 2020",
          location: "Бања Лука",
          needed: "5.300 KM",
          title: "Помозимо дјечаку Владимиру",
          description:
            "Деветогодишњи Владимир Ђурић оболио је од церебралне парализе. Због болести проводи вријеме у лежећем положају. Потребан му је вертикализатор за усправан положај.",
        },
        {
          date: "Мај 2020",
          location: "Београд",
          needed: "2.1 милион $",
          title: "Софија Маркуљевић",
          description:
            "Дјевојчица Софија болује од спиналне мишићне атрофије типа 1. Потребна јој је најскупља терапија на свијету за спасавање живота.",
        },
        {
          date: "Новембар 2023",
          location: "Бања Лука",
          needed: "2.000 KM",
          title: "Зимска акција гријења",
          description:
            "Прикупљали смо средства за огрев за пет породица из социјално угрожених категорија у Бања Луци и околини.",
        },
      ],
    },
    volunteer: {
      title: "Придружите нам се",
      sponsorTitle: "Буди спонзор",
      sponsorDescription:
        "Одувијек желите да помогнете некоме ко вам не може узвратити? Постаните наш спонзор и помозите на начин који вама највише одговара.",
      volunteerTitle: "Постани волонтер",
      volunteerDescription:
        "Ово је савршена прилика да нам се придружиш. Волонтирање храни душу, не его. Буди дио нашег тима.",
      cta: "Придружите нам се",
      profilesTitle: "Наши волонтери",
      alumniTitle: "Бивши волонтери",
      whyVolunteer: {
        title: "Зашто волонтирати?",
        items: [
          {
            icon: "❤️",
            heading: "Помози другима",
            text: "Твоја помоћ некоме значи више него што можеш замислити. Један осмијех, једна донација, један сат - све то мијења животе.",
          },
          {
            icon: "🤝",
            heading: "Стекни пријатеље",
            text: "У нашем тиму ћеш упознати дивне људе сличних интереса и вриједности, са којима дијелиш исту страст - помагање другима.",
          },
          {
            icon: "📚",
            heading: "Научи ново",
            text: "Кроз рад са нама стећи ћеш нова знања и вјештине - од организације догађаја до рада са рањивим групама.",
          },
          {
            icon: "🌟",
            heading: "Буди промјена",
            text: "Не чекај да неко други промијени свијет. Буди та промјена већ данас. Твој допринос је вриједан.",
          },
        ],
      },
      howToVolunteer: {
        title: "Како постати волонтер?",
        steps: [
          {
            number: 1,
            title: "Контактирај нас",
            description: "Пошаљи нам поруку преко нашег формулара или нам се јави на емаил. Договорићемо се за упознавање.",
          },
          {
            number: 2,
            title: "Упознај тим",
            description: "Дођи на наш информативни састанак сваког првог понедјељка у мјесецу. Упознаћеш тим и сазнати о активностима.",
          },
          {
            number: 3,
            title: "Укључи се",
            description: "Изабери активност у којој желиш учествовати и почни да волонтираш. Ми смо ту да те подржимо на сваком кораку.",
          },
        ],
      },
      corporate: {
        title: "Корпоративно волонтирање",
        description:
          "Ваша компанија жели да се укључи у хуманитарни рад? Организујемо различите програме корпоративног волонтирања - од тимбилдинга кроз хуманитарне акције до дугорочних партнерстава.",
        benefits: [
          "Тимбилдинг кроз хуманитарни рад",
          "Позитиван имидж компаније",
          "Укључивање запослених у друштвено одговорне пројекте",
          "Медијска покривеност кампања",
          "Пореске олакшице за донације",
        ],
        cta: "Постаните партнер",
      },
      profiles: [
        {
          name: "Анастасија Ћоровић",
          age: "22",
          role: "Волонтерка",
          quote: "Сваки тренутак проведен помажући другима је тренутак који обогаћује и мене. Кроз волонтирање сам пронашла себе.",
          color: "#c0392b",
          initials: "АЋ",
        },
        {
          name: "Катарина Митић",
          age: "20",
          role: "Волонтерка",
          quote: "Када видиш осмијех на лицу некога коме си помогао, схватиш да си на правом мјесту. Срце на длану је моја друга породица.",
          color: "#27ae60",
          initials: "КМ",
        },
        {
          name: "Ивана Дракул",
          age: "25",
          role: "Волонтерка",
          quote: "Волонтирање ме научило да мале ствари чине велику разлику. Заједно можемо све.",
          color: "#e67e22",
          initials: "ИД",
        },
        {
          name: "Александар-Раде Ћоровић",
          age: "19",
          role: "Волонтер",
          quote: "Желим да будем дио промјене. Сваки пут када помогнем некоме, осјећам да имам сврху.",
          color: "#2980b9",
          initials: "АЋ",
        },
      ],
      alumni: [
        {
          name: "Марија Лукић",
          yearsActive: "2016-2022",
          currentRole: "Ради у Црвеном крсту",
          quote: "Срце на длану ме научило шта значи права солидарност. Данас примјењујем те вриједности у свом раду.",
        },
        {
          name: "Милош Гаврић",
          yearsActive: "2014-2021",
          currentRole: "Оснивач сопствене НВО",
          quote: "Све што знам о хуманитарном раду научио сам кроз волонтирање. Ово удружење је мој темељ.",
        },
      ],
    },
    gallery: {
      title: "Галерија",
      subtitle: "Тренуци који говоре више од ријечи",
      categories: ["Све", "Акције", "Волонтери", "Догађаји", "Помоћ"],
      items: [
        { title: "Подјела пакета", category: "Акције", description: "Подјела хуманитарних пакета у Бања Луци", color: "#c0392b" },
        { title: "Волонтерски дан", category: "Волонтери", description: "Наш тим на заједничком дружењу", color: "#2c3e50" },
        { title: "Новогодишња акција", category: "Догађаји", description: "Новогодишњи поклони за дјецу без родитељског старања", color: "#e67e22" },
        { title: "Школски пакети", category: "Помоћ", description: "Опремa ђака за нову школску годину", color: "#27ae60" },
        { title: "Васкршња забава", category: "Догађаји", description: "Дружење са дјецом поводом Васкрса", color: "#8e44ad" },
        { title: "Зимска помоћ", category: "Акције", description: "Подјела огрева за зиму", color: "#2980b9" },
        { title: "Тимски састанак", category: "Волонтери", description: "Планирање нових пројеката", color: "#16a085" },
        { title: "Помоћ старима", category: "Помоћ", description: "Редовне посјете и помоћ старијим суграђанима", color: "#d35400" },
      ],
    },
    partners: {
      title: "Наши партнери",
      subtitle: "Поносни на сарадњу са организацијама које дијеле наше вриједности",
      becomeTitle: "Постаните партнер",
      becomeText:
        "Тражимо предузећа, установе и појединце који желе подржати наш рад. Сваки партнер нам омогућава да будемо бољи и да помогнемо више људи.",
      benefits: [
        "Видљивост бренда на нашим кампањама",
        "Могућност корпоративног волонтирања",
        "Сарадња на хуманитарним пројектима",
        "Јавно признање и захвалница",
        "Заједнички пројекти",
      ],
      cta: "Постаните партнер",
      logos: [
        { name: "Catalist", placeholder: "C" },
        { name: "Министарство", placeholder: "М" },
        { name: "Град Бања Лука", placeholder: "БЛ" },
        { name: "Радио", placeholder: "Р" },
        { name: "Банка", placeholder: "Б" },
        { name: "ТВ", placeholder: "ТВ" },
      ],
    },
    testimonials: {
      title: "Шта кажу о нама",
      subtitle: "Гласови из заједнице",
      items: [
        {
          quote:
            "Срце на длану нам је пружило помоћ када нам је најтеже било. Без њих не бисмо успјели. Од срца им хвала.",
          author: "Марија М.",
          role: "Корисница помоћи",
        },
        {
          quote:
            "Препознали смо изузетан рад овог удружења. Њихова транспарентност је разлог зашто смо партнери. Свака препорука.",
          author: "Драган С.",
          role: "Партнер",
        },
        {
          quote:
            "Волонтирање ми је промијенило живот. Научио сам да мали чинови доброте могу направити велику разлику. Ово је породица.",
          author: "Никола В.",
          role: "Волонтер 3+ године",
        },
      ],
    },
    faq: {
      title: "Често постављана питања",
      subtitle: "Одговори на најчешћа питања",
      items: [
        {
          question: "Како могу постати волонтер?",
          answer:
            "Контактирајте нас преко формулара или емаила. Састанке за нове волонтере организујемо сваког првог понедјељка у мјесецу.",
        },
        {
          question: "Како могу донирати?",
          answer:
            "Можете донирати на наш жиро рачун, или у виду хране, одјеће и других потрепштина. Такође можете организовати акцију у вашој компанији.",
        },
        {
          question: "Да ли је свака помоћ добродошла?",
          answer:
            "Апсолутно! Свака помоћ нам омогућава да помогнемо више људи. Примамо новчане донације, храну, одјећу, обућу, школски прибор и играчке.",
        },
        {
          question: "Како гарантујете транспарентност?",
          answer:
            "Сваку донацију евидентирамо и објављујемо извјештаје на сајту. Имамо годишњи ревизорски извјештај.",
        },
        {
          question: "У којим градовима дјелујете?",
          answer:
            "Дјелујемо у 10+ градова у Босни и Херцеговини, са сједиштем у Бања Луци. Планирамо проширење у региону.",
        },
        {
          question: "Да ли организујете корпоративна волонтирања?",
          answer:
            "Да! Имамо програм за корпоративне партнере који укључује хуманитарне акције и тимбилдинг кроз волонтирање.",
        },
      ],
    },
    help: {
      title: "Требаш помоћ?",
      description:
        "Ту смо за тебе. Ако ти или неко кога познајеш треба помоћ, обрати нам се. Заједно можемо све.",
      question: "Требате нашу помоћ или познајете некога коме је потребна?",
      cta: "Контактирајте нас",
    },
    ctaCards: {
      title: "Укључи се сада",
      subtitle: "На начин који ти одговара",
      cards: [
        { icon: "❤️", title: "Донирај", desc: "Јер свака марка помаже", href: "/donate", color: "#c0392b" },
        { icon: "✋", title: "Волонтирај", desc: "Јер твоје вријеме значи", href: "/volunteering", color: "#2c3e50" },
        { icon: "🔗", title: "Постани партнер", desc: "Јер заједно можемо више", href: "/about#partners", color: "#27ae60" },
        { icon: "🧾", title: "Затражи помоћ", desc: "Јер ниси сам/а", href: "/request-help", color: "#e67e22" },
      ],
    },
    featuredStories: {
      title: "Истакнуте приче",
      subtitle: "Људи који су дио наше приче",
      items: [
        { name: "Лејла, 16", quote: "Волонтирањем сам пронашла своје мјесто у свијету. Помогала сам, учила, путовала - и схватила да сам корисна.", color: "#c0392b", initials: "Л" },
        { name: "Ања, 22", quote: "На ботаничком кампу први пут сам се осјећала као научница. Данас радим праксу у националном парку.", color: "#27ae60", initials: "А" },
        { name: "Базар солидарности", quote: "Мајица са цртежом из дома у Приједору донијела је гријање једној породици. Хвала што сте купили - промијенили сте зиму.", color: "#e67e22", initials: "Б" },
      ],
    },
    cta: {
      title: "Спремни сте да направите разлику?",
      subtitle: "Свака донација, сваки сат волонтирања, сваки подијељен пост је промјена за некога.",
      primaryCta: "Постаните партнер",
      secondaryCta: "Пријави се као волонтер",
    },
    newsletter: {
      title: "Будите у току",
      subtitle: "Пријавите се на наш newsletter за најновије вијести и акције",
      placeholder: "Ваша емаил адреса",
      button: "Пријави се",
      success: "Успјешно сте се пријавили! Хвала вам.",
    },
    contactForm: {
      title: "Контактирајте нас",
      subtitle: "Испуните формулар и одговорићемо у року од 24 сата",
      name: "Ваше име и презиме",
      email: "Емаил адреса",
      phone: "Број телефона",
      subject: "Тема",
      message: "Ваша порука",
      send: "Пошаљи поруку",
      success: "Порука је успјешно послата! Одговорићемо вам у најкраћем року.",
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
            title: "Захваљујемо се Catalist-у",
            excerpt: "Захваљујемо се компанији Catalist што су препознали наш рад и подржали наше акције.",
          },
          {
            title: "Републичка награда за Срце на длану",
            excerpt: "Наше удружење добило је Републичку награду за изузетан допринос хуманитарном раду.",
          },
          {
            title: "Нова зимска акција",
            excerpt: "Покрећемо нову акцију прикупљања помоћи за најугроженије породице пред зиму.",
          },
        ],
        announcementsTitle: "Објаве",
        announcements: [
        { title: "Конкурс за нове волонтере", date: "15.03.2026", excerpt: "Отворен конкурс за нове волонтере за прољећне акције." },
        { title: "Хуманитарни базар", date: "10.04.2026", excerpt: "Пријавите се за учешће на хуманитарном базару." },
        { title: "Обука за волонтере", date: "20.02.2026", excerpt: "Нова обука за волонтере почиње у марту. Пријаве су отворене." },
      ],
      articlesTitle: "Чланци",
      articles: [
        { title: "Утицај волонтирања на заједницу", date: "05.02.2026", excerpt: "Анализа позитивних ефеката волонтирања на друштвену заједницу." },
        { title: "Извјештај за 2025. годину", date: "15.01.2026", excerpt: "Преглед свих активности и финансијски извјештај за претходну годину." },
        { title: "Разговор са оснивачима", date: "20.12.2025", excerpt: "Интервју са оснивачима удружења о почецима и будућим плановима." },
      ],
      blogTitle: "Блог",
      blog: [
        { title: "Моје прво волонтирање", date: "01.03.2026", excerpt: "Лично искуство младе волонтерке кроз њен први дан на терену.", author: "Анастасија" },
        { title: "Зашто донирати?", date: "10.02.2026", excerpt: "Разлози зашто је важно давати и како донације мијењају животе.", author: "Марко" },
        { title: "Волонтирање током празника", date: "25.12.2025", excerpt: "Како смо провели празнике са корисницима нашег удружења.", author: "Катарина" },
      ],
    },
    stats: {
      donations: "KM донација",
      volunteers: "Волонтера",
      families: "Породица",
      cities: "Градова",
    },
    donate: {
      title: "Донирајте",
      subtitle: "Ваша подршка мијења животе. Свака донација је важна.",
      online: {
        title: "Онлине донације",
        description: "Донирајте брзо и сигурно путем PayPal-а или кредитне картице.",
        methods: ["PayPal", "Кредитна картица", "Кеш"],
      },
      foreign: {
        title: "Донације из иностранства",
        description: "За уплате из иностранства користите сљедеће банковне податке:",
        iban: "BA39 1540 0000 0000 1234 56",
        swift: "SABRBA22",
        bank: "Raiffeisen Bank d.d. Bosna i Hercegovina",
        purpose: "Донација за хуманитарни рад",
      },
      domestic: {
        title: "Домаће донације",
        description: "За уплате из Босне и Херцеговине користите сљедеће податке:",
        accountNumber: "154-000-1234567-89",
        bank: "Raiffeisen Bank d.d. Banja Luka",
      },
      goods: {
        title: "Донације у роби",
        description: "Примамо сљедеће врсте робе:",
        items: [
          "Храна са дугим роком трајања",
          "Хигијенски производи",
          "Школски прибор",
          "Одјећа и обућа (нова или очувана)",
          "Играчке и књиге",
          "Средства за чишћење",
        ],
      },
      services: {
        title: "Донације у услугама",
        description: "Добродошле су и сљедеће услуге:",
        items: [
          "Превоз робе и људи",
          "Правно савјетовање",
          "Медицинске услуге",
          "Психолошка подршка",
          "Информатичке услуге",
          "Медијска подршка",
        ],
      },
    },
    bazar: {
      title: "Хуманитарни базар",
      subtitle: "Купите уникатне предмете и подржите наш рад",
      auctions: [
        { title: "Урамљена фотографија Бања Луке", description: "Ручно рађена урамљена фотографија старог града", currentBid: "50 KM", color: "#c0392b" },
        { title: "Слика уље на платну", description: "Оригинална слика локалног умјетника", currentBid: "120 KM", color: "#2c3e50" },
        { title: "Ручно рађени накит", description: "Сребрна огрлица са ћилибаром", currentBid: "80 KM", color: "#e67e22" },
        { title: "Викенд пакет у Бања Луци", description: "Ноћење са доручком за двије особе", currentBid: "200 KM", color: "#27ae60" },
      ],
      shop: [
        { title: "Мајица Срце на длану", description: "Памучна мајица са нашим логом", price: "25 KM", color: "#c0392b" },
        { title: "Шоља са логом", description: "Керамичка шоља од 300мл", price: "15 KM", color: "#2c3e50" },
        { title: "Торба за куповину", description: "Платињена торба са логом", price: "20 KM", color: "#27ae60" },
        { title: "Записник", description: "Ручно рађена биљежница од рециклираног папира", price: "10 KM", color: "#e67e22" },
      ],
      liveAuction: {
        title: "Лицитација уживо",
        description: "Придружите се нашој сљедећој лицитацији уживо и лицитирајте за уникатне предмете.",
        schedule: "Сваки први викенд у мјесецу у 18х",
      },
      donateItem: {
        title: "Донирајте предмет за базар",
        description: "Имате предмет који бисте донирали за наш базар? Јавите нам се и ми ћемо га укључити у понуду.",
        cta: "Донирај предмет",
      },
    },
    trebam: {
      title: "Требам...",
      subtitle: "Изаберите врсту помоћи која вам је потребна",
      help: {
        title: "Требам помоћ",
        description: "Ако се суочаваш са тешком животном ситуацијом и потребна ти је хуманитарна помоћ, ту смо за тебе.",
      },
      certificate: {
        title: "Требам потврду",
        description: "Потврда о волонтирању или сарадњи са нашим удружењем за потребе факултета, послодавца или других институција.",
      },
      recommendation: {
        title: "Требам препоруку",
        description: "Препорука за посао, праксу или даље образовање на основу волонтерског искуства у нашем удружењу.",
      },
      excuse: {
        title: "Требам оправдање",
        description: "Оправдање за изостанак са факултета или посла због учешћа у хуманитарним акцијама.",
      },
      cooperation: {
        title: "Требам сарадњу",
        description: "Предлажем сарадњу на заједничком пројекту, истраживању или иницијативи у области хуманитарног рада.",
      },
      partnership: {
        title: "Требам партнерство",
        description: "Заинтересован сам за дугорочно партнерство са удружењем у области хуманитарног рада.",
      },
      membership: {
        title: "Требам чланство",
        description: "Желим постати члан/чланица Удружења грађана Срце на длану и активно доприносити нашим циљевима.",
      },
    },
    contactInfo: {
      title: "Контакт информације",
      subtitle: "Ту смо за сва питања и приједлоге",
      address: "Краља Петра I 50, 78000 Бања Лука",
      phone: "+387 65 123 456",
      email: "info@srceanadlanu.org",
      workingHours: "Пон - Пет: 08:00 - 16:00",
      social: {
        facebook: "https://facebook.com/srceanadlanu",
        instagram: "https://instagram.com/srceanadlanu",
        youtube: "https://youtube.com/@srceanadlanu",
        linkedin: "https://linkedin.com/company/srceanadlanu",
      },
    },
    footer: {
      copyright: "УГ Срце на Длану 2026. Сва права задржана.",
      description: "Удружење грађана Срце на Длану Бања Лука",
      socialTitle: "Пратите нас",
      quickLinks: "Брзи линкови",
      contactTitle: "Контакт",
    },
  },
  "sr-latin": {
    nav: {
      home: "NASLOVNA",
      about: "O NAMA",
      actions: "AKCIJE",
      news: "NOVOSTI",
      contact: "KONTAKT",
      volunteer: "VOLONTIRAJ",
      donate: "DONIRAJ",
      bazar: "BAZAR",
      requestHelp: "TREBAM...",
      partners: "PARTNERI",
      team: "TIM",
      gallery: "GALERIJA",
      faq: "ČPP",
    },
    hero: {
      title: "Srce na Dlanu",
      subtitle: "Volontiranje i humanitarne akcije za bolje sutra",
      cta: "Pridružite nam se",
      ctaSecondary: "Saznajte više",
      slides: [
        {
          title: "Zajedno činimo razliku",
          subtitle: "Pomozite onima kojima je pomoć najpotrebnija",
          cta: "Postani volonter",
          bgColor: "#c0392b",
        },
        {
          title: "Svaka donacija znači",
          subtitle: "Vaša podrška menja živote",
          cta: "Doniraj sada",
          bgColor: "#e67e22",
        },
        {
          title: "Budi deo promene",
          subtitle: "Pridruži se našoj zajednici humanih ljudi",
          cta: "Uključi se",
          bgColor: "#2c3e50",
        },
      ],
    },
    about: {
      title: "O Nama",
      description:
        'Udruženje građana "Srce na dlanu" iz Banja Luke je dobrovoljna, nestranačka, nepolitička, nevladina, neprofitna organizacija. Osnovano je 2013. godine sa ciljem pružanja humanitarne pomoći i podrške najugroženijim kategorijama stanovništva. Naš prvi sastanak održan je 07.09.2013. godine, kada se mlada grupa ljudi okupila sa jednim ciljem - da stvorimo udruženje koje može da pomogne ljudima u nevolji.',
      founded: "Osnovano 2013.",
      mission: "Naša Misija",
      missionText:
        "Pružiti humanitarnu pomoć i podršku najugroženijim kategorijama stanovništva, promovisati volonterizam i aktivno učešće građana u zajednici, te doprinositi boljem društvu za sve.",
      vision: "Naša Vizija",
      visionText:
        "Društvo u kojem svaki pojedinac ima podršku koja mu je potrebna, u kojem solidarnost i briga za druge nisu izuzetak nego pravilo, i u kojem zajednica funkcioniše kao jedna velika porodica.",
      values: [
        "Solidarnost i empatija",
        "Transparentnost i odgovornost",
        "Dobrovoljnost i posvećenost",
        "Jednakost i poštovanje",
        "Inovativnost u humanitarnom radu",
      ],
      foundingStory:
        "Naša priča počinje 7. septembra 2013. godine u Banja Luci. Grupa mladih ljudi, različitih profesija i pozadina, okupila se u skromnoj prostoriji sa željom da promene svet nabolje. Svako od nas je već volontirao ili pomagao na svoj način, ali osećali smo da zajedno možemo više. Tako je rođena ideja o Udruženju građana \"Srce na dlanu\". Od prve akcije prikupljanja pomoći za porodice pogođene poplavama 2014. godine, do republičke nagrade 2025. godine, svaki korak nas je vodio ka istom cilju - da budemo nekome oslonac i podrška u najtežim trenucima.",
      timeline: [
        {
          year: "2013",
          title: "Osnivanje udruženja",
          description:
            "Mlada grupa ljudi okupila se u Banjaluci i osnovala Udruženje građana \"Srce na dlanu\" sa ciljem da pomaže ljudima u nevolji.",
        },
        {
          year: "2014",
          title: "Prva humanitarna akcija",
          description:
            "Sproveli smo našu prvu veliku humanitarnu akciju pomoći porodicama pogođenim katastrofalnim poplavama u regionu.",
        },
        {
          year: "2016",
          title: "Proširenje na 5 gradova",
          description:
            "Naša mreža volontera proširila se na pet gradova u Bosni i Hercegovini, omogućavajući veći doseg pomoći.",
        },
        {
          year: "2018",
          title: "Nagrada za humanitarni rad",
          description:
            "Primili smo prvu javnu nagradu za naš rad u oblasti humanitarnih akcija i volonterizma.",
        },
        {
          year: "2020",
          title: "Pojačan rad tokom pandemije",
          description:
            "Tokom pandemije COVID-19, intenzivirali smo aktivnosti i pomogli stotinama porodica u nevolji, organizujući dostave hrane i lekova.",
        },
        {
          year: "2023",
          title: "10 godina postojanja",
          description:
            "Obeležili smo deset godina postojanja sa preko 500 sprovedenih humanitarnih akcija i 120+ aktivnih volontera.",
        },
        {
          year: "2025",
          title: "Republička nagrada",
          description:
            "Udruženje je dobilo Republičku nagradu za izuzetan doprinos humanitarnom radu i volonterizmu.",
        },
      ],
      team: [
        {
          name: "Marko Petrović",
          role: "Predsednik",
          bio: "Diplomirani sociolog, volonter od 2013. godine. Posvećen humanitarnom radu i razvoju zajednice.",
          initials: "MP",
        },
        {
          name: "Jelena Miletić",
          role: "Potpredsednica",
          bio: "Diplomirani pravnik sa iskustvom u NVO sektoru. Koordiniše glavnim projektima i kampanjama.",
          initials: "JM",
        },
        {
          name: "Stefan Dabić",
          role: "Koordinator volontera",
          bio: "Student sociologije, aktivan volonter 5+ godina. Organizuje i vodi timove volontera na terenu.",
          initials: "SD",
        },
        {
          name: "Ana Jovanović",
          role: "PR i komunikacije",
          bio: "Novinarka po profesiji, bavi se promocijom rada udruženja i komunikacijom sa javnošću.",
          initials: "AJ",
        },
        {
          name: "Nemanja Korać",
          role: "Finansijski direktor",
          bio: "Diplomirani ekonomista, vodi brigu o finansijskoj transparentnosti i pravilnom korišćenju sredstava.",
          initials: "NK",
        },
        {
          name: "Mila Stojanović",
          role: "Koordinator pomoći",
          bio: "Socijalna radnica koja procenjuje potrebe korisnika i koordiniše isporuku pomoći na terenu.",
          initials: "MS",
        },
      ],
      partnersSection: {
        title: "Naši Partneri",
        subtitle: "Ponosni smo na saradnju sa organizacijama koje dele naše vrednosti",
        becomeTitle: "Postanite partner",
        becomeText:
          "Pozivamo preduzeća, institucije i pojedince da podrže naš rad kroz finansijsku ili logističku podršku, volonterski angažman ili zajedničke projekte.",
        benefits: [
          "Vidljivost brenda na našim kampanjama",
          "Mogućnost korporativnog volontiranja",
          "Saradnja na humanitarnim projektima",
          "Javno priznanje i zahvalnica",
          "Zajednički nastup u medijima",
        ],
        cta: "Postanite partner",
        logos: [
          { name: "Catalist", placeholder: "C" },
          { name: "Ministarstvo", placeholder: "M" },
          { name: "Grad Banja Luka", placeholder: "BL" },
          { name: "Radio", placeholder: "R" },
          { name: "Banka", placeholder: "B" },
          { name: "TV Kanal", placeholder: "TV" },
        ],
      },
      memberships: {
        title: "Članstva i sertifikati",
        items: [
          { name: "Republička nagrada 2025", description: "Za izuzetan doprinos humanitarnom radu" },
          { name: "Sertifikat Ministarstva", description: "Sertifikovana organizacija za rad sa osetljivim grupama" },
          { name: "Član mreže NVO", description: "Aktivni član mreže nevladinih organizacija Republike Srpske" },
        ],
      },
    },
    impact: {
      title: "Naš Uticaj",
      subtitle: "Brojke koje govore više od reči",
      items: [
        { value: "500+", label: "Pomoćnih paketa", icon: "📦" },
        { value: "120+", label: "Aktivnih volontera", icon: "🙋" },
        { value: "85+", label: "Porodica pomognuto", icon: "👨‍👩‍👧‍👦" },
        { value: "10+", label: "Gradova u regiji", icon: "🏙" },
        { value: "12", label: "Godina iskustva", icon: "📅" },
        { value: "150K+", label: "KM prikupljeno", icon: "💰" },
      ],
    },
    goals: {
      title: "Naši Ciljevi",
      quote:
        "Kad nam sreća zatvori jedna vrata, često nam otvori i druga, ali mi ponekad znamo predugo gledati u ona zatvorena i ne vidimo otvorena.",
      quoteAuthor: "— Helen Keler",
      cards: [
        {
          title: "Pomažeš drugima",
          description:
            "Pomažeš drugima i osećaš se dobro zbog toga. Ne čekaj sutra, danas možeš nekog da usrećiš - dovoljno je da nam se obratiš.",
        },
        {
          title: "Humanitarne akcije",
          description:
            "Iza nas su brojne uspešne akcije. Bez pomoći dobrih ljudi ne bismo mogli ništa. Pridružite nam se i pomozite nekome.",
        },
        {
          title: "Budi sponzor",
          description:
            "Oduvek želite da pomognete nekome ko vam ne može uzvratiti? Postanite naš sponzor i pomozite na način koji vama odgovara.",
        },
        {
          title: "Postani volonter",
          description:
            "Savršena prilika da nam se pridružiš. Volontiranje hrani srce, a ne ego. Budi deo našeg tima i pomozi nam da budemo još jači.",
        },
      ],
      progressTitle: "Dobra dela ne štete",
      raised: "Prikupljeno",
      goal: "Cilj",
      percent: 10,
    },
    actions: {
      title: "Humanitarne akcije",
      events: [
        {
          date: "Mart 2020",
          location: "Banja Luka",
          needed: "5.300 KM",
          title: "Pomozimo dečaku Vladimiru",
          description:
            "Devetogodišnji Vladimir Đurić oboleo je od cerebralne paralize. Zbog bolesti provodi vreme u ležećem položaju. Potreban mu je vertikalizator za uspravan položaj.",
        },
        {
          date: "Maj 2020",
          location: "Beograd",
          needed: "2.1 milion $",
          title: "Sofija Markuljević",
          description:
            "Devojčica Sofija boluje od spinalne mišićne atrofije tipa 1. Potrebna joj je najskuplja terapija na svetu za spasavanje života.",
        },
        {
          date: "Novembar 2023",
          location: "Banja Luka",
          needed: "2.000 KM",
          title: "Zimska akcija grejanja",
          description:
            "Prikupljali smo sredstva za ogrev za pet porodica iz socijalno ugroženih kategorija u Banja Luci i okolini.",
        },
      ],
    },
    volunteer: {
      title: "Pridružite nam se",
      sponsorTitle: "Budi sponzor",
      sponsorDescription:
        "Oduvek želite da pomognete nekome ko vam ne može uzvratiti? Postanite naš sponzor i pomozite na način koji vama najviše odgovara.",
      volunteerTitle: "Postani volonter",
      volunteerDescription:
        "Ovo je savršena prilika da nam se pridružiš. Volontiranje hrani dušu, ne ego. Budi deo našeg tima.",
      cta: "Pridružite nam se",
      profilesTitle: "Naši volonteri",
      alumniTitle: "Bivši volonteri",
      whyVolunteer: {
        title: "Zašto volontirati?",
        items: [
          {
            icon: "❤️",
            heading: "Pomozi drugima",
            text: "Tvoja pomoć nekome znači više nego što možeš zamisliti. Jedan osmeh, jedna donacija, jedan sat - sve to menja živote.",
          },
          {
            icon: "🤝",
            heading: "Stekni prijatelje",
            text: "U našem timu ćeš upoznati divne ljude sličnih interesa i vrednosti, sa kojima deliš istu strast - pomaganje drugima.",
          },
          {
            icon: "📚",
            heading: "Nauči novo",
            text: "Kroz rad sa nama steći ćeš nova znanja i veštine - od organizacije događaja do rada sa ranjivim grupama.",
          },
          {
            icon: "🌟",
            heading: "Budi promena",
            text: "Ne čekaj da neko drugi promeni svet. Budi ta promena već danas. Tvoj doprinos je vredan.",
          },
        ],
      },
      howToVolunteer: {
        title: "Kako postati volonter?",
        steps: [
          {
            number: 1,
            title: "Kontaktiraj nas",
            description: "Pošalji nam poruku preko našeg formulara ili nam se javi na email. Dogovorićemo se za upoznavanje.",
          },
          {
            number: 2,
            title: "Upoznaj tim",
            description: "Dođi na naš informativni sastanak svakog prvog ponedeljka u mesecu. Upoznaćeš tim i saznati o aktivnostima.",
          },
          {
            number: 3,
            title: "Uključi se",
            description: "Izaberi aktivnost u kojoj želiš učestvovati i počni da volontiraš. Mi smo tu da te podržimo na svakom koraku.",
          },
        ],
      },
      corporate: {
        title: "Korporativno volontiranje",
        description:
          "Vaša kompanija želi da se uključi u humanitarni rad? Organizujemo različite programe korporativnog volontiranja - od timbuildinga kroz humanitarne akcije do dugoročnih partnerstava.",
        benefits: [
          "Timbuilding kroz humanitarni rad",
          "Pozitivan imidž kompanije",
          "Uključivanje zaposlenih u društveno odgovorne projekte",
          "Medijska pokrivenost kampanja",
          "Poreske olakšice za donacije",
        ],
        cta: "Postanite partner",
      },
      profiles: [
        {
          name: "Anastasija Ćorović",
          age: "22",
          role: "Volonterka",
          quote: "Svaki trenutak proveden pomažući drugima je trenutak koji obogaćuje i mene. Kroz volontiranje sam pronašla sebe.",
          color: "#c0392b",
          initials: "AĆ",
        },
        {
          name: "Katarina Mitić",
          age: "20",
          role: "Volonterka",
          quote: "Kada vidiš osmeh na licu nekoga kome si pomogao, shvatiš da si na pravom mestu. Srce na dlanu je moja druga porodica.",
          color: "#27ae60",
          initials: "KM",
        },
        {
          name: "Ivana Drakul",
          age: "25",
          role: "Volonterka",
          quote: "Volontiranje me naučilo da male stvari čine veliku razliku. Zajedno možemo sve.",
          color: "#e67e22",
          initials: "ID",
        },
        {
          name: "Aleksandar-Rade Ćorović",
          age: "19",
          role: "Volonter",
          quote: "Želim da budem deo promene. Svaki put kada pomognem nekome, osećam da imam svrhu.",
          color: "#2980b9",
          initials: "AĆ",
        },
      ],
      alumni: [
        {
          name: "Marija Lukić",
          yearsActive: "2016-2022",
          currentRole: "Radi u Crvenom krstu",
          quote: "Srce na dlanu me naučilo šta znači prava solidarnost. Danas primenjujem te vrednosti u svom radu.",
        },
        {
          name: "Miloš Gavrić",
          yearsActive: "2014-2021",
          currentRole: "Osnivač sopstvene NVO",
          quote: "Sve što znam o humanitarnom radu naučio sam kroz volontiranje. Ovo udruženje je moj temelj.",
        },
      ],
    },
    gallery: {
      title: "Galerija",
      subtitle: "Trenuci koji govore više od reči",
      categories: ["Sve", "Akcije", "Volonteri", "Događaji", "Pomoć"],
      items: [
        { title: "Podela paketa", category: "Akcije", description: "Podela humanitarnih paketa u Banja Luci", color: "#c0392b" },
        { title: "Volonterski dan", category: "Volonteri", description: "Naš tim na zajedničkom druženju", color: "#2c3e50" },
        { title: "Novogodišnja akcija", category: "Događaji", description: "Novogodišnji pokloni za decu bez roditeljskog staranja", color: "#e67e22" },
        { title: "Školski paketi", category: "Pomoć", description: "Oprema đaka za novu školsku godinu", color: "#27ae60" },
        { title: "Uskršnja zabava", category: "Događaji", description: "Druženje sa decom povodom Uskrsa", color: "#8e44ad" },
        { title: "Zimska pomoć", category: "Akcije", description: "Podela ogreva za zimu", color: "#2980b9" },
        { title: "Timski sastanak", category: "Volonteri", description: "Planiranje novih projekata", color: "#16a085" },
        { title: "Pomoć starima", category: "Pomoć", description: "Redovne posete i pomoć starijim sugrađanima", color: "#d35400" },
      ],
    },
    partners: {
      title: "Naši partneri",
      subtitle: "Ponosni na saradnju sa organizacijama koje dele naše vrednosti",
      becomeTitle: "Postanite partner",
      becomeText:
        "Tražimo preduzeća, ustanove i pojedince koji žele podržati naš rad. Svaki partner nam omogućava da budemo bolji i da pomognemo više ljudi.",
      benefits: [
        "Vidljivost brenda na našim kampanjama",
        "Mogućnost korporativnog volontiranja",
        "Saradnja na humanitarnim projektima",
        "Javno priznanje i zahvalnica",
        "Zajednički projekti",
      ],
      cta: "Postanite partner",
      logos: [
        { name: "Catalist", placeholder: "C" },
        { name: "Ministarstvo", placeholder: "M" },
        { name: "Grad Banja Luka", placeholder: "BL" },
        { name: "Radio", placeholder: "R" },
        { name: "Banka", placeholder: "B" },
        { name: "TV", placeholder: "TV" },
      ],
    },
    testimonials: {
      title: "Šta kažu o nama",
      subtitle: "Glasovi iz zajednice",
      items: [
        {
          quote:
            "Srce na dlanu nam je pružilo pomoć kada nam je najteže bilo. Bez njih ne bismo uspeli. Od srca im hvala.",
          author: "Marija M.",
          role: "Korisnica pomoći",
        },
        {
          quote:
            "Prepoznali smo izuzetan rad ovog udruženja. Njihova transparentnost je razlog zašto smo partneri. Svaka preporuka.",
          author: "Dragan S.",
          role: "Partner",
        },
        {
          quote:
            "Volontiranje mi je promenilo život. Naučio sam da mali čini dobrote mogu napraviti veliku razliku. Ovo je porodica.",
          author: "Nikola V.",
          role: "Volonter 3+ godine",
        },
      ],
    },
    faq: {
      title: "Često postavljana pitanja",
      subtitle: "Odgovori na najčešća pitanja",
      items: [
        {
          question: "Kako mogu postati volonter?",
          answer:
            "Kontaktirajte nas preko formulara ili emaila. Sastanke za nove volontere organizujemo svakog prvog ponedeljka u mesecu.",
        },
        {
          question: "Kako mogu donirati?",
          answer:
            "Možete donirati na naš žiro račun, ili u vidu hrane, odeće i drugih potrepština. Takođe možete organizovati akciju u vašoj kompaniji.",
        },
        {
          question: "Da li je svaka pomoć dobrodošla?",
          answer:
            "Apsolutno! Svaka pomoć nam omogućava da pomognemo više ljudi. Primamo novčane donacije, hranu, odeću, obuću, školski pribor i igračke.",
        },
        {
          question: "Kako garantujete transparentnost?",
          answer:
            "Svaku donaciju evidentiramo i objavljujemo izveštaje na sajtu. Imamo godišnji revizorski izveštaj.",
        },
        {
          question: "U kojim gradovima delujete?",
          answer:
            "Delujemo u 10+ gradova u Bosni i Hercegovini, sa sedištem u Banja Luci. Planiramo proširenje u regionu.",
        },
        {
          question: "Da li organizujete korporativna volontiranja?",
          answer:
            "Da! Imamo program za korporativne partnere koji uključuje humanitarne akcije i timbuilding kroz volontiranje.",
        },
      ],
    },
    help: {
      title: "Trebaš pomoć?",
      description:
        "Tu smo za tebe. Ako ti ili neko koga poznaješ treba pomoć, obrati nam se. Zajedno možemo sve.",
      question: "Trebate našu pomoć ili poznajete nekoga kome je potrebna?",
      cta: "Kontaktirajte nas",
    },
    ctaCards: {
      title: "Uključi se sada",
      subtitle: "Na način koji ti odgovara",
      cards: [
        { icon: "❤️", title: "Doniraj", desc: "Jer svaka marka pomaže", href: "/donate", color: "#c0392b" },
        { icon: "✋", title: "Volontiraj", desc: "Jer tvoje vreme znači", href: "/volunteering", color: "#2c3e50" },
        { icon: "🔗", title: "Postani partner", desc: "Jer zajedno možemo više", href: "/about#partners", color: "#27ae60" },
        { icon: "🧾", title: "Zatraži pomoć", desc: "Jer nisi sam/a", href: "/request-help", color: "#e67e22" },
      ],
    },
    featuredStories: {
      title: "Istaknute priče",
      subtitle: "Ljudi koji su deo naše priče",
      items: [
        { name: "Lejla, 16", quote: "Volontiranjem sam pronašla svoje mesto u svetu. Pomagala sam, učila, putovala - i shvatila da sam korisna.", color: "#c0392b", initials: "L" },
        { name: "Anja, 22", quote: "Na botaničkom kampu prvi put sam se osećala kao naučnica. Danas radim praksu u nacionalnom parku.", color: "#27ae60", initials: "A" },
        { name: "Bazar solidarnosti", quote: "Majica sa crtežom iz doma u Prijedoru donela je grejanje jednoj porodici. Hvala što ste kupili - promenili ste zimu.", color: "#e67e22", initials: "B" },
      ],
    },
    cta: {
      title: "Spremni ste da napravite razliku?",
      subtitle: "Svaka donacija, svaki sat volontiranja, svaki podeljen post je promena za nekoga.",
      primaryCta: "Postanite partner",
      secondaryCta: "Prijavi se kao volonter",
    },
    newsletter: {
      title: "Budite u toku",
      subtitle: "Prijavite se na naš newsletter za najnovije vesti i akcije",
      placeholder: "Vaša email adresa",
      button: "Prijavi se",
      success: "Uspešno ste se prijavili! Hvala vam.",
    },
    contactForm: {
      title: "Kontaktirajte nas",
      subtitle: "Ispunite formular i odgovorićemo u roku od 24 sata",
      name: "Vaše ime i prezime",
      email: "Email adresa",
      phone: "Broj telefona",
      subject: "Tema",
      message: "Vaša poruka",
      send: "Pošalji poruku",
      success: "Poruka je uspešno poslata! Odgovorićemo vam u najkraćem roku.",
      subjects: [
        "Potrebna mi je pomoć",
        "Želim da postanem volonter",
        "Interesuje me partnerstvo",
        "Imam pitanje",
        "Drugo",
      ],
    },
    news: {
      title: "Novosti",
      items: [
        {
          title: "Zahvaljujemo se Catalist-u",
          excerpt: "Zahvaljujemo se kompaniji Catalist što su prepoznali naš rad i podržali naše akcije.",
        },
        {
          title: "Republička nagrada za Srce na dlanu",
          excerpt: "Naše udruženje dobilo je Republičku nagradu za izuzetan doprinos humanitarnom radu.",
        },
        {
          title: "Nova zimska akcija",
          excerpt: "Pokrećemo novu akciju prikupljanja pomoći za najugroženije porodice pred zimu.",
        },
      ],
      announcementsTitle: "Obaveštenja",
      announcements: [
        { title: "Konkurs za nove volontere", date: "15.03.2026", excerpt: "Otvoren konkurs za nove volontere za prolećne akcije." },
        { title: "Humanitarni bazar", date: "10.04.2026", excerpt: "Prijavite se za učešće na humanitarnom bazaru." },
        { title: "Obuka za volonters", date: "20.02.2026", excerpt: "Nova obuka za volontere počinje u martu. Prijave su otvorene." },
      ],
      articlesTitle: "Članci",
      articles: [
        { title: "Uticaj volontiranja na zajednicu", date: "05.02.2026", excerpt: "Analiza pozitivnih efekata volontiranja na društvenu zajednicu." },
        { title: "Izveštaj za 2025. godinu", date: "15.01.2026", excerpt: "Pregled svih aktivnosti i finansijski izveštaj za prethodnu godinu." },
        { title: "Razgovor sa osnivačima", date: "20.12.2025", excerpt: "Intervju sa osnivačima udruženja o počecima i budućim planovima." },
      ],
      blogTitle: "Blog",
      blog: [
        { title: "Moje prvo volontiranje", date: "01.03.2026", excerpt: "Lično iskustvo mlade volonterke kroz njen prvi dan na terenu.", author: "Anastasija" },
        { title: "Zašto donirati?", date: "10.02.2026", excerpt: "Razlozi zašto je važno davati i kako donacije menjaju živote.", author: "Marko" },
        { title: "Volontiranje tokom praznika", date: "25.12.2025", excerpt: "Kako smo proveli praznike sa korisnicima našeg udruženja.", author: "Katarina" },
      ],
    },
    stats: {
      donations: "KM donacija",
      volunteers: "Volontera",
      families: "Porodica",
      cities: "Gradova",
    },
    donate: {
      title: "Donirajte",
      subtitle: "Vaša podrška menja živote. Svaka donacija je važna.",
      online: {
        title: "Online donacije",
        description: "Donirajte brzo i sigurno putem PayPal-a ili kreditne kartice.",
        methods: ["PayPal", "Kreditna kartica", "Keš"],
      },
      foreign: {
        title: "Donacije iz inostranstva",
        description: "Za uplate iz inostranstva koristite sledeće bankovne podatke:",
        iban: "BA39 1540 0000 0000 1234 56",
        swift: "SABRBA22",
        bank: "Raiffeisen Bank d.d. Bosna i Hercegovina",
        purpose: "Donacija za humanitarni rad",
      },
      domestic: {
        title: "Domaće donacije",
        description: "Za uplate iz Bosne i Hercegovine koristite sledeće podatke:",
        accountNumber: "154-000-1234567-89",
        bank: "Raiffeisen Bank d.d. Banja Luka",
      },
      goods: {
        title: "Donacije u robi",
        description: "Primamo sledeće vrste robe:",
        items: [
          "Hrana sa dugim rokom trajanja",
          "Higijenski proizvodi",
          "Školski pribor",
          "Odeća i obuća (nova ili očuvana)",
          "Igračke i knjige",
          "Sredstva za čišćenje",
        ],
      },
      services: {
        title: "Donacije u uslugama",
        description: "Dobrodošle su i sledeće usluge:",
        items: [
          "Prevoz robe i ljudi",
          "Pravno savetovanje",
          "Medicinske usluge",
          "Psihološka podrška",
          "Informatičke usluge",
          "Medijska podrška",
        ],
      },
    },
    bazar: {
      title: "Humanitarni bazar",
      subtitle: "Kupite unikatne predmete i podržite naš rad",
      auctions: [
        { title: "Uramljena fotografija Banja Luke", description: "Ručno rađena uramljena fotografija starog grada", currentBid: "50 KM", color: "#c0392b" },
        { title: "Slika ulje na platnu", description: "Originalna slika lokalnog umetnika", currentBid: "120 KM", color: "#2c3e50" },
        { title: "Ručno rađeni nakit", description: "Srebrna ogrlica sa ćilibarom", currentBid: "80 KM", color: "#e67e22" },
        { title: "Vikend paket u Banja Luci", description: "Noćenje sa doručkom za dve osobe", currentBid: "200 KM", color: "#27ae60" },
      ],
      shop: [
        { title: "Majica Srce na dlanu", description: "Pamučna majica sa našim logom", price: "25 KM", color: "#c0392b" },
        { title: "Šolja sa logom", description: "Keramička šolja od 300ml", price: "15 KM", color: "#2c3e50" },
        { title: "Torba za kupovinu", description: "Platnena torba sa logom", price: "20 KM", color: "#27ae60" },
        { title: "Zapisnik", description: "Ručno rađena beležnica od recikliranog papira", price: "10 KM", color: "#e67e22" },
      ],
      liveAuction: {
        title: "Licitacija uživo",
        description: "Pridružite se našoj sledećoj licitaciji uživo i licitirajte za unikatne predmete.",
        schedule: "Svaki prvi vikend u mesecu u 18h",
      },
      donateItem: {
        title: "Donirajte predmet za bazar",
        description: "Imate predmet koji biste donirali za naš bazar? Javite nam se i mi ćemo ga uključiti u ponudu.",
        cta: "Doniraj predmet",
      },
    },
    trebam: {
      title: "Trebam...",
      subtitle: "Izaberite vrstu pomoći koja vam je potrebna",
      help: {
        title: "Trebam pomoć",
        description: "Ako se suočavaš sa teškom životnom situacijom i potrebna ti je humanitarna pomoć, tu smo za tebe.",
      },
      certificate: {
        title: "Trebam potvrdu",
        description: "Potvrda o volontiranju ili saradnji sa našim udruženjem za potrebe fakulteta, poslodavca ili drugih institucija.",
      },
      recommendation: {
        title: "Trebam preporuku",
        description: "Preporuka za posao, praksu ili dalje obrazovanje na osnovu volonterskog iskustva u našem udruženju.",
      },
      excuse: {
        title: "Trebam opravdanje",
        description: "Opravdanje za izostanak sa fakulteta ili posla zbog učešća u humanitarnim akcijama.",
      },
      cooperation: {
        title: "Trebam saradnju",
        description: "Predlažem saradnju na zajedničkom projektu, istraživanju ili inicijativi u oblasti humanitarnog rada.",
      },
      partnership: {
        title: "Trebam partnerstvo",
        description: "Zainteresovan sam za dugoročno partnerstvo sa udruženjem u oblasti humanitarnog rada.",
      },
      membership: {
        title: "Trebam članstvo",
        description: "Želim postati član/članica Udruženja građana Srce na dlanu i aktivno doprinositi našim ciljevima.",
      },
    },
    contactInfo: {
      title: "Kontakt informacije",
      subtitle: "Tu smo za sva pitanja i predloge",
      address: "Kralja Petra I 50, 78000 Banja Luka",
      phone: "+387 65 123 456",
      email: "info@srceanadlanu.org",
      workingHours: "Pon - Pet: 08:00 - 16:00",
      social: {
        facebook: "https://facebook.com/srceanadlanu",
        instagram: "https://instagram.com/srceanadlanu",
        youtube: "https://youtube.com/@srceanadlanu",
        linkedin: "https://linkedin.com/company/srceanadlanu",
      },
    },
    footer: {
      copyright: "UG Srce na Dlanu 2026. Sva prava zadržana.",
      description: "Udruženje građana Srce na Dlanu Banja Luka",
      socialTitle: "Pratite nas",
      quickLinks: "Brzi linkovi",
      contactTitle: "Kontakt",
    },
  },
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT US",
      actions: "ACTIONS",
      news: "NEWS",
      contact: "CONTACT",
      volunteer: "VOLUNTEER",
      donate: "DONATE",
      bazar: "BAZAR",
      requestHelp: "NEED HELP...",
      partners: "PARTNERS",
      team: "TEAM",
      gallery: "GALLERY",
      faq: "FAQ",
    },
    hero: {
      title: "Heart in Your Palm",
      subtitle: "Volunteering and humanitarian actions for a better tomorrow",
      cta: "Join us",
      ctaSecondary: "Learn more",
      slides: [
        {
          title: "Together We Make a Difference",
          subtitle: "Help those who need it most",
          cta: "Become a volunteer",
          bgColor: "#c0392b",
        },
        {
          title: "Every Donation Matters",
          subtitle: "Your support changes lives",
          cta: "Donate now",
          bgColor: "#e67e22",
        },
        {
          title: "Be the Change",
          subtitle: "Join our community of kind people",
          cta: "Get involved",
          bgColor: "#2c3e50",
        },
      ],
    },
    about: {
      title: "About Us",
      description:
        'The Citizens\' Association "Heart in Your Palm" from Banja Luka is a voluntary, non-partisan, non-political, non-governmental, non-profit organization. It was founded in 2013 with the goal of providing humanitarian aid and support to the most vulnerable categories of the population. Our first meeting was held on September 7, 2013, when a young group of people gathered with one goal - to create an association that can help people in need.',
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
      foundingStory:
        'Our story begins on September 7, 2013 in Banja Luka. A group of young people, from different professions and backgrounds, gathered in a modest room with a desire to change the world for the better. Each of us was already volunteering or helping in our own way, but we felt that together we could do more. That is how the idea of the Citizens\' Association "Heart in Your Palm" was born. From the first relief effort for families affected by the 2014 floods to the Republic Award in 2025, every step has led us toward the same goal - to be someone\'s support in the most difficult moments.',
      timeline: [
        {
          year: "2013",
          title: "Association founded",
          description:
            "A young group of people gathered in Banja Luka and founded the Citizens' Association \"Heart in Your Palm\" with the goal of helping people in need.",
        },
        {
          year: "2014",
          title: "First humanitarian action",
          description:
            "We carried out our first major humanitarian action helping families affected by catastrophic floods in the region.",
        },
        {
          year: "2016",
          title: "Expansion to 5 cities",
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
          title: "Intensified work during pandemic",
          description:
            "During the COVID-19 pandemic, we intensified our activities and helped hundreds of families in need, organizing food and medicine deliveries.",
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
            "The association received the Republic Award for exceptional contribution to humanitarian work and volunteering.",
        },
      ],
      team: [
        {
          name: "Marko Petrovic",
          role: "President",
          bio: "Graduate sociologist, volunteer since 2013. Dedicated to humanitarian work and community development.",
          initials: "MP",
        },
        {
          name: "Jelena Miletic",
          role: "Vice President",
          bio: "Graduate lawyer with experience in the NGO sector. Coordinates main projects and campaigns.",
          initials: "JM",
        },
        {
          name: "Stefan Dabic",
          role: "Volunteer Coordinator",
          bio: "Sociology student, active volunteer for 5+ years. Organizes and leads volunteer teams in the field.",
          initials: "SD",
        },
        {
          name: "Ana Jovanovic",
          role: "PR and Communications",
          bio: "Journalist by profession, handles promotion of the association's work and public communication.",
          initials: "AJ",
        },
        {
          name: "Nemanja Korac",
          role: "Financial Director",
          bio: "Graduate economist, takes care of financial transparency and proper use of funds.",
          initials: "NK",
        },
        {
          name: "Mila Stojanovic",
          role: "Aid Coordinator",
          bio: "Social worker who assesses user needs and coordinates aid delivery in the field.",
          initials: "MS",
        },
      ],
      partnersSection: {
        title: "Our Partners",
        subtitle: "We are proud to collaborate with organizations that share our values",
        becomeTitle: "Become a partner",
        becomeText:
          "We invite companies, institutions and individuals to support our work through financial or logistical support, volunteer engagement or joint projects.",
        benefits: [
          "Brand visibility on our campaigns",
          "Corporate volunteering opportunities",
          "Collaboration on humanitarian projects",
          "Public recognition and certificate of appreciation",
          "Joint media presence",
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
      memberships: {
        title: "Memberships and Certifications",
        items: [
          { name: "Republic Award 2025", description: "For exceptional contribution to humanitarian work" },
          { name: "Ministry Certificate", description: "Certified organization for working with vulnerable groups" },
          { name: "NGO Network Member", description: "Active member of the non-governmental organization network of Republika Srpska" },
        ],
      },
    },
    impact: {
      title: "Our Impact",
      subtitle: "Numbers that speak louder than words",
      items: [
        { value: "500+", label: "Aid packages", icon: "📦" },
        { value: "120+", label: "Active volunteers", icon: "🙋" },
        { value: "85+", label: "Families helped", icon: "👨‍👩‍👧‍👦" },
        { value: "10+", label: "Cities in the region", icon: "🏙" },
        { value: "12", label: "Years of experience", icon: "📅" },
        { value: "150K+", label: "KM raised", icon: "💰" },
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
            "You help others and feel good about it. Don't wait for tomorrow, today you can make someone happy - just reach out to us.",
        },
        {
          title: "Humanitarian Actions",
          description:
            "We have many successful actions behind us. Without the help of good people, we couldn't do anything. Join us and help someone.",
        },
        {
          title: "Become a Sponsor",
          description:
            "Have you always wanted to help someone who cannot return the favor? Become our sponsor and help in a way that suits you.",
        },
        {
          title: "Become a Volunteer",
          description:
            "This is the perfect opportunity to join us. Volunteering feeds the heart, not the ego. Be part of our team.",
        },
      ],
      progressTitle: "Good Deeds Don't Hurt",
      raised: "Raised",
      goal: "Goal",
      percent: 10,
    },
    actions: {
      title: "Humanitarian Actions",
      events: [
        {
          date: "March 2020",
          location: "Banja Luka",
          needed: "5,300 KM",
          title: "Help Boy Vladimir",
          description:
            "Nine-year-old Vladimir Djuric has cerebral palsy. Due to his condition, he spends time lying down. He needs a verticalizer for an upright position.",
        },
        {
          date: "May 2020",
          location: "Belgrade",
          needed: "2.1 million $",
          title: "Sofija Markuljevic",
          description:
            "Little girl Sofija suffers from spinal muscular atrophy type 1. She needs the most expensive therapy in the world to save her life.",
        },
        {
          date: "November 2023",
          location: "Banja Luka",
          needed: "2,000 KM",
          title: "Winter Heating Drive",
          description:
            "We raised funds for heating supplies for five socially disadvantaged families in Banja Luka and the surrounding area.",
        },
      ],
    },
    volunteer: {
      title: "Join Us",
      sponsorTitle: "Become a Sponsor",
      sponsorDescription:
        "Have you always wanted to help someone who cannot return the favor? Become our sponsor and help in a way that works best for you.",
      volunteerTitle: "Become a Volunteer",
      volunteerDescription:
        "This is the perfect opportunity to join us. Volunteering feeds the heart, not the ego. Be part of our team.",
      cta: "Join Us",
      profilesTitle: "Our Volunteers",
      alumniTitle: "Alumni",
      whyVolunteer: {
        title: "Why Volunteer?",
        items: [
          {
            icon: "❤️",
            heading: "Help Others",
            text: "Your help means more to someone than you can imagine. One smile, one donation, one hour - all of it changes lives.",
          },
          {
            icon: "🤝",
            heading: "Make Friends",
            text: "In our team, you will meet wonderful people with similar interests and values, who share the same passion - helping others.",
          },
          {
            icon: "📚",
            heading: "Learn New Skills",
            text: "Through working with us, you will gain new knowledge and skills - from event organization to working with vulnerable groups.",
          },
          {
            icon: "🌟",
            heading: "Be the Change",
            text: "Don't wait for someone else to change the world. Be that change today. Your contribution matters.",
          },
        ],
      },
      howToVolunteer: {
        title: "How to Become a Volunteer?",
        steps: [
          {
            number: 1,
            title: "Contact Us",
            description: "Send us a message through our form or reach out via email. We'll arrange a meeting to get to know each other.",
          },
          {
            number: 2,
            title: "Meet the Team",
            description: "Come to our informational meeting every first Monday of the month. You'll meet the team and learn about activities.",
          },
          {
            number: 3,
            title: "Get Involved",
            description: "Choose an activity you'd like to participate in and start volunteering. We're here to support you every step of the way.",
          },
        ],
      },
      corporate: {
        title: "Corporate Volunteering",
        description:
          "Does your company want to get involved in humanitarian work? We organize various corporate volunteering programs - from team building through humanitarian actions to long-term partnerships.",
        benefits: [
          "Team building through humanitarian work",
          "Positive company image",
          "Employee engagement in socially responsible projects",
          "Media coverage of campaigns",
          "Tax benefits for donations",
        ],
        cta: "Become a Partner",
      },
      profiles: [
        {
          name: "Anastasija Corovic",
          age: "22",
          role: "Volunteer",
          quote: "Every moment spent helping others is a moment that enriches me too. Through volunteering, I found myself.",
          color: "#c0392b",
          initials: "AC",
        },
        {
          name: "Katarina Mitic",
          age: "20",
          role: "Volunteer",
          quote: "When you see a smile on the face of someone you've helped, you realize you're in the right place. Heart in Your Palm is my second family.",
          color: "#27ae60",
          initials: "KM",
        },
        {
          name: "Ivana Drakul",
          age: "25",
          role: "Volunteer",
          quote: "Volunteering taught me that small things make a big difference. Together we can do anything.",
          color: "#e67e22",
          initials: "ID",
        },
        {
          name: "Aleksandar-Rade Corovic",
          age: "19",
          role: "Volunteer",
          quote: "I want to be part of the change. Every time I help someone, I feel like I have a purpose.",
          color: "#2980b9",
          initials: "AC",
        },
      ],
      alumni: [
        {
          name: "Marija Lukic",
          yearsActive: "2016-2022",
          currentRole: "Works at Red Cross",
          quote: "Heart in Your Palm taught me what true solidarity means. Today I apply those values in my work.",
        },
        {
          name: "Milos Gavric",
          yearsActive: "2014-2021",
          currentRole: "Founder of own NGO",
          quote: "Everything I know about humanitarian work I learned through volunteering. This association is my foundation.",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Moments that speak louder than words",
      categories: ["All", "Actions", "Volunteers", "Events", "Aid"],
      items: [
        { title: "Package Distribution", category: "Actions", description: "Distributing humanitarian packages in Banja Luka", color: "#c0392b" },
        { title: "Volunteer Day", category: "Volunteers", description: "Our team enjoying time together", color: "#2c3e50" },
        { title: "New Year's Event", category: "Events", description: "New Year's gifts for children without parental care", color: "#e67e22" },
        { title: "School Packages", category: "Aid", description: "Equipping students for the new school year", color: "#27ae60" },
        { title: "Easter Fun", category: "Events", description: "Spending time with children for Easter", color: "#8e44ad" },
        { title: "Winter Aid", category: "Actions", description: "Distributing firewood for winter", color: "#2980b9" },
        { title: "Team Meeting", category: "Volunteers", description: "Planning new projects", color: "#16a085" },
        { title: "Helping the Elderly", category: "Aid", description: "Regular visits and help to elderly fellow citizens", color: "#d35400" },
      ],
    },
    partners: {
      title: "Our Partners",
      subtitle: "Proud to collaborate with organizations that share our values",
      becomeTitle: "Become a Partner",
      becomeText:
        "We are looking for companies, institutions and individuals who want to support our work. Every partner enables us to be better and help more people.",
      benefits: [
        "Brand visibility on our campaigns",
        "Corporate volunteering opportunities",
        "Collaboration on humanitarian projects",
        "Public recognition and certificate of appreciation",
        "Joint projects",
      ],
      cta: "Become a Partner",
      logos: [
        { name: "Catalist", placeholder: "C" },
        { name: "Ministry", placeholder: "M" },
        { name: "City of Banja Luka", placeholder: "BL" },
        { name: "Radio", placeholder: "R" },
        { name: "Bank", placeholder: "B" },
        { name: "TV", placeholder: "TV" },
      ],
    },
    testimonials: {
      title: "What They Say About Us",
      subtitle: "Voices from the community",
      items: [
        {
          quote:
            "Heart in Your Palm helped us when we needed it most. Without them, we wouldn't have made it. We are truly grateful.",
          author: "Marija M.",
          role: "Aid recipient",
        },
        {
          quote:
            "We recognized the exceptional work of this association. Their transparency is why we are partners. Highly recommended.",
          author: "Dragan S.",
          role: "Partner",
        },
        {
          quote:
            "Volunteering changed my life. I learned that small acts of kindness can make a big difference. This is family.",
          author: "Nikola V.",
          role: "Volunteer 3+ years",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions",
      items: [
        {
          question: "How can I become a volunteer?",
          answer:
            "Contact us through the form or email. We organize meetings for new volunteers every first Monday of the month.",
        },
        {
          question: "How can I donate?",
          answer:
            "You can donate to our bank account, or in the form of food, clothing and other necessities. You can also organize a drive at your company.",
        },
        {
          question: "Is all help welcome?",
          answer:
            "Absolutely! Every donation enables us to help more people. We accept monetary donations, food, clothing, shoes, school supplies and toys.",
        },
        {
          question: "How do you guarantee transparency?",
          answer:
            "We record every donation and publish reports on our website. We have an annual audit report.",
        },
        {
          question: "In which cities do you operate?",
          answer:
            "We operate in 10+ cities in Bosnia and Herzegovina, with headquarters in Banja Luka. We plan to expand in the region.",
        },
        {
          question: "Do you organize corporate volunteering?",
          answer:
            "Yes! We have a program for corporate partners that includes humanitarian actions and team building through volunteering.",
        },
      ],
    },
    help: {
      title: "Need Help?",
      description:
        "We are here for you. If you or someone you know needs help, reach out to us. Together we can do anything.",
      question: "Need our help or know someone who does?",
      cta: "Contact Us",
    },
    ctaCards: {
      title: "Get involved now",
      subtitle: "In a way that suits you",
      cards: [
        { icon: "❤️", title: "Donate", desc: "Because every mark helps", href: "/donate", color: "#c0392b" },
        { icon: "✋", title: "Volunteer", desc: "Because your time matters", href: "/volunteering", color: "#2c3e50" },
        { icon: "🔗", title: "Become a Partner", desc: "Because together we can do more", href: "/about#partners", color: "#27ae60" },
        { icon: "🧾", title: "Request Help", desc: "Because you are not alone", href: "/request-help", color: "#e67e22" },
      ],
    },
    featuredStories: {
      title: "Featured Stories",
      subtitle: "People who are part of our story",
      items: [
        { name: "Lejla, 16", quote: "Through volunteering I found my place in the world. I helped, learned, traveled - and realized I am useful.", color: "#c0392b", initials: "L" },
        { name: "Anja, 22", quote: "At the botanical camp I felt like a scientist for the first time. Today I'm doing an internship in a national park.", color: "#27ae60", initials: "A" },
        { name: "Solidarity Bazaar", quote: "A t-shirt with a drawing from a home in Prijedor brought heating to one family. Thank you for buying - you changed a winter.", color: "#e67e22", initials: "B" },
      ],
    },
    cta: {
      title: "Ready to Make a Difference?",
      subtitle: "Every donation, every hour of volunteering, every shared post is a change for someone.",
      primaryCta: "Become a Partner",
      secondaryCta: "Sign Up as Volunteer",
    },
    newsletter: {
      title: "Stay Updated",
      subtitle: "Subscribe to our newsletter for the latest news and actions",
      placeholder: "Your email address",
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
          title: "Thank You Catalist",
          excerpt: "We thank the company Catalist for recognizing our work and supporting our actions.",
        },
        {
          title: "Republic Award for Heart in Your Palm",
          excerpt: "Our association received the Republic Award for exceptional contribution to humanitarian work.",
        },
        {
          title: "New Winter Campaign",
          excerpt: "We are launching a new campaign to collect aid for the most vulnerable families ahead of winter.",
        },
      ],
      announcementsTitle: "Announcements",
      announcements: [
        { title: "Call for New Volunteers", date: "03/15/2026", excerpt: "Open call for new volunteers for spring campaigns." },
        { title: "Humanitarian Bazaar", date: "04/10/2026", excerpt: "Register to participate in the humanitarian bazaar." },
        { title: "Volunteer Training", date: "02/20/2026", excerpt: "New volunteer training starts in March. Applications are open." },
      ],
      articlesTitle: "Articles",
      articles: [
        { title: "Impact of Volunteering on Community", date: "02/05/2026", excerpt: "Analysis of the positive effects of volunteering on the social community." },
        { title: "Annual Report 2025", date: "01/15/2026", excerpt: "Overview of all activities and financial report for the previous year." },
        { title: "Interview with Founders", date: "12/20/2025", excerpt: "Interview with the association's founders about beginnings and future plans." },
      ],
      blogTitle: "Blog",
      blog: [
        { title: "My First Volunteering Experience", date: "03/01/2026", excerpt: "A young volunteer's personal experience through her first day in the field.", author: "Anastasija" },
        { title: "Why Donate?", date: "02/10/2026", excerpt: "Reasons why giving matters and how donations change lives.", author: "Marko" },
        { title: "Volunteering During Holidays", date: "12/25/2025", excerpt: "How we spent the holidays with our association's beneficiaries.", author: "Katarina" },
      ],
    },
    stats: {
      donations: "KM Donations",
      volunteers: "Volunteers",
      families: "Families",
      cities: "Cities",
    },
    donate: {
      title: "Donate",
      subtitle: "Your support changes lives. Every donation matters.",
      online: {
        title: "Online Donations",
        description: "Donate quickly and securely via PayPal or credit card.",
        methods: ["PayPal", "Credit Card", "Cash"],
      },
      foreign: {
        title: "International Donations",
        description: "For international transfers, use the following bank details:",
        iban: "BA39 1540 0000 0000 1234 56",
        swift: "SABRBA22",
        bank: "Raiffeisen Bank d.d. Bosnia and Herzegovina",
        purpose: "Donation for humanitarian work",
      },
      domestic: {
        title: "Domestic Donations",
        description: "For transfers from Bosnia and Herzegovina, use the following details:",
        accountNumber: "154-000-1234567-89",
        bank: "Raiffeisen Bank d.d. Banja Luka",
      },
      goods: {
        title: "Goods Donations",
        description: "We accept the following types of goods:",
        items: [
          "Non-perishable food items",
          "Hygiene products",
          "School supplies",
          "Clothing and shoes (new or gently used)",
          "Toys and books",
          "Cleaning supplies",
        ],
      },
      services: {
        title: "Service Donations",
        description: "The following services are also welcome:",
        items: [
          "Transport of goods and people",
          "Legal counseling",
          "Medical services",
          "Psychological support",
          "IT services",
          "Media support",
        ],
      },
    },
    bazar: {
      title: "Humanitarian Bazaar",
      subtitle: "Buy unique items and support our work",
      auctions: [
        { title: "Framed Photo of Banja Luka", description: "Handmade framed photo of the old town", currentBid: "50 KM", color: "#c0392b" },
        { title: "Oil Painting on Canvas", description: "Original painting by a local artist", currentBid: "120 KM", color: "#2c3e50" },
        { title: "Handmade Jewelry", description: "Silver necklace with amber", currentBid: "80 KM", color: "#e67e22" },
        { title: "Weekend Package in Banja Luka", description: "Bed and breakfast for two people", currentBid: "200 KM", color: "#27ae60" },
      ],
      shop: [
        { title: "Heart in Your Palm T-Shirt", description: "Cotton t-shirt with our logo", price: "25 KM", color: "#c0392b" },
        { title: "Logo Mug", description: "Ceramic mug 300ml", price: "15 KM", color: "#2c3e50" },
        { title: "Shopping Bag", description: "Canvas bag with logo", price: "20 KM", color: "#27ae60" },
        { title: "Notebook", description: "Handmade notebook from recycled paper", price: "10 KM", color: "#e67e22" },
      ],
      liveAuction: {
        title: "Live Auction",
        description: "Join our next live auction and bid on unique items.",
        schedule: "First weekend of every month at 6 PM",
      },
      donateItem: {
        title: "Donate an Item for the Bazaar",
        description: "Have an item you'd like to donate to our bazaar? Let us know and we'll include it in the offering.",
        cta: "Donate an Item",
      },
    },
    trebam: {
      title: "I Need...",
      subtitle: "Choose the type of help you need",
      help: {
        title: "I Need Help",
        description: "If you are facing a difficult life situation and need humanitarian aid, we are here for you.",
      },
      certificate: {
        title: "I Need a Certificate",
        description: "Certificate of volunteering or collaboration with our association for university, employer or other institutions.",
      },
      recommendation: {
        title: "I Need a Recommendation",
        description: "Recommendation for a job, internship or further education based on volunteer experience in our association.",
      },
      excuse: {
        title: "I Need an Excuse",
        description: "Excuse for absence from university or work due to participation in humanitarian actions.",
      },
      cooperation: {
        title: "I Need Cooperation",
        description: "I propose cooperation on a joint project, research or initiative in the field of humanitarian work.",
      },
      partnership: {
        title: "I Need a Partnership",
        description: "I am interested in a long-term partnership with the association in the field of humanitarian work.",
      },
      membership: {
        title: "I Need Membership",
        description: "I want to become a member of the Citizens' Association Heart in Your Palm and actively contribute to our goals.",
      },
    },
    contactInfo: {
      title: "Contact Information",
      subtitle: "We are here for all questions and suggestions",
      address: "Kralja Petra I 50, 78000 Banja Luka, Bosnia and Herzegovina",
      phone: "+387 65 123 456",
      email: "info@srceanadlanu.org",
      workingHours: "Mon - Fri: 08:00 - 16:00",
      social: {
        facebook: "https://facebook.com/srceanadlanu",
        instagram: "https://instagram.com/srceanadlanu",
        youtube: "https://youtube.com/@srceanadlanu",
        linkedin: "https://linkedin.com/company/srceanadlanu",
      },
    },
    footer: {
      copyright: "Heart in Your Palm 2026. All rights reserved.",
      description: "Citizens' Association Heart in Your Palm Banja Luka",
      socialTitle: "Follow Us",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
    },
  },
};
