const programmingMentor = [
  {
    role: 'mentor',
    course: 'programming',
    salary: 35,
    courseLength: 5,
    name: '«Мидл фронтенд-разработчик»',
    description: [
      'имеете опыт работы программистом больше трех лет;',
      'знаете HTML, CSS;',
      'работали с JavaScript, React, TypeScript, Node.js;',
      'готовы посвящать проекту от 8 до 12 часов в неделю.'
    ],
  },
  {
    role: 'mentor',
    course: 'programming',
    salary: 50,
    courseLength: 4,
    name: '«Python-разработчик»',
    description: [
      'Бэкенд-разработчик на Python с опытом от 3-х лет;',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных;',
      'Работали с GIT, СУБД SQL, Docker.;',
      'Готовы посвящать проекту от 10 часов в неделю;',
      'Мы также ценим опыт преподавания и наставничества;'
    ],
  },
  {
    role: 'mentor',
    course: 'programming',
    salary: 55,
    courseLength: 4,
    name: '«Мидл Python-разработчик»',
    description: [
      'Бэкенд-разработчик на Python с опытом от 3-х лет;',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных;',
      'Работали с GIT, СУБД SQL, Docker;',
      'Готовы посвящать проекту от 10 часов в неделю;',
      'Мы также ценим опыт преподавания и наставничества;'
    ],
  },
  {
    role: 'mentor',
    course: 'programming',
    salary: 45,
    courseLength: 6,
    name: '«Разрабочик С++»',
    description: [
      'практикующий программист С++ middle-уровня и выше с опытом работы от трёх лет;',
      'готовы посвящать проекту около 15 часов в неделю;',
      'можете быть на связи ежедневно;',
      'любите делиться знаниями.'
    ],
  },
  {
    role: 'mentor',
    course: 'programming',
    salary: 50,
    courseLength: 6,
    name: '«Java-разработчик»',
    description: [
      'имеет опыт разработки на Java от двух лет;',
      'работали со Spring, Spring Boot, базами данных и Hibenate;',
      'знаете алгоритмы на базовом уровне;',
      'любите делиться знаниями;'
    ],
  },
  {
    role: 'mentor',
    course: 'programming',
    salary: 45,
    courseLength: 10,
    name: '«Go-разработчик»',
    description: [
      'Знания Go на уровне Senior, в том числе опыт профилирования и написания тестов;',
      'Знание алгоритмов/структур данных, паттернов проектирования, архитектурных подходов, операционных систем;',
      'Свободное владение базами данных SQL/NoSQL: например PostgreSQL и MongoDB, администрирование и язык запросов;',
      'Работа с брокерами сообщений: RabbitMQ/Apache Kafka/AWS/etc;',
      'Имеете опыт написания HTTP- и многопоточных приложений, опыт оптимизации приложений;',
      'Умеете доступно и последовательно объяснять сложные темы и задачи;'
    ],
  },
  {
    role: 'mentor',
    course: 'programming',
    salary: 45,
    courseLength: 6,
    name: '«Android-разработчик»',
    description: [
      'У вас есть опыт разработки мобильных приложения для Android от 3-х лет;',
      'Вы понимаете, что такое Git, Computer science, SOLID, Android SDK, Clean Architecture, Kotlin Coroutines, Firebase/Google APIs;',
      'Умеете объяснять сложное простым языком;'
    ],
  },
  {
    role: 'mentor',
    salary: 50,
    course: 'programming',
    courseLength: 6,
    name: '«iOS-разработчик»',
    description: [
      'У вас есть опыт разработки мобильных приложения для iOS от 3-х лет;',
      'Вы понимаете, что такое Git, Swift, FireBase, Atlassian Jira, Atlassian Confluence, Unit Testing, API;',
      'Умеете объяснять сложные вещи простым языком;'
    ],
  },
];

const analyticsMentor = [
  {
    role: 'mentor',
    course: 'analytics',
    salary: 30,
    courseLength: 7,
    name: '«Аналитик данных»',
    description: [
      'аналитик на Python с опытом работы от 2 лет;',
      'умеете работать с SQL и библиотеками Pandas, NumPy, Matplotlib, Seaborn и желательно Plotly;',
      'умеете проводить a/b-тесты;',
      'готовы посвящать проекту 10 часов в неделю;'
    ],
  },
  {
    role: 'mentor',
    course: 'analytics',
    salary: 40,
    courseLength: 8,
    name: '«Инженер данных»',
    description: [
      'имеете опыт работы программистом больше трех лет;',
      'знаете HTML, CSS;',
      'работали с JavaScript, React, TypeScript, Node.js;',
      'готовы посвящать проекту от 8 до 12 часов в неделю. Удобное для вас время будем рады обсудить лично.'
    ],
  },
  {
    role: 'mentor',
    course: 'analytics',
    salary: 30,
    courseLength: 6,
    name: '«Продуктовый аналитик»',
    description: [
      'Data Engineer с опытом работы от 3 лет;',
      'Умеете работать с Kafka, Spark, RabbitMQ, Docker, Kubernetes, Helm, AWS;',
      'Работаете с распределёнными хранилищами, нормализацией данных и настройкой потока данных;',
      'На продвинутом уровне знаете SQL и NoSQL;'
    ],
  },
];

const designMentor = [];

const managementMentor = [];

const marketingMentor = [];

const programmingReviewer = [
  {
    role: 'reviewer',
    course: 'programming',
    salary: 30,
    name: '«React-разработчик»',
    description: [
      'Веб-разработчик со стажем от двух лет, отлично владеете React, в курсе последних обновлений;',
      'Готовы посвящать от 8 часов в неделю на разбор кода студентов;',
      'Работали с React (и на классах, и на хуках), Redux, Redux Toolkit, React DnD, React Router, TypeScript, WebSocket;',
      'Знакомы с Jest, NextJS. Отлично, если имели опыт с GraphQL;'
    ],
  },
  {
    role: 'reviewer',
    course: 'programming',
    salary: 30,
    name: '«Мидл фронтенд-разработчик»',
    description: [
      'имеете опыт работы программистом больше трех лет;',
      'знаете HTML, CSS;',
      'работали с JavaScript, React, TypeScript, Node.js;',
      'готовы посвящать проекту от 8 до 12 часов в неделю.'
    ],
  },
  {
    role: 'reviewer',
    course: 'programming',
    salary: 50,
    name: '«Мидл Python-разработчик»',
    description: [
      'Бэкенд-разработчик на Python с опытом от 3-х лет;',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных;',
      'Работали с GIT, СУБД SQL, Docker.;',
      'Готовы посвящать проекту от 10 часов в неделю;',
      'Мы также ценим опыт преподавания и наставничества;'
    ],
  },
];

const analyticsReviewer = [
  {
    role: 'reviewer',
    course: 'analytics',
    salary: 30,
    name: '«Аналитик данных»',
    description: [
      'аналитик на Python с опытом работы от 2 лет;',
      'умеете работать с SQL и библиотеками Pandas, NumPy, Matplotlib, Seaborn и желательно Plotly;',
      'умеете проводить a/b-тесты;',
      'готовы посвящать проекту 10 часов в неделю;'
    ],
  },
  {
    role: 'reviewer',
    course: 'analytics',
    salary: 40,
    name: '«Инженер данных»',
    description: [
      'имеете опыт работы программистом больше трех лет;',
      'знаете HTML, CSS;',
      'работали с JavaScript, React, TypeScript, Node.js;',
      'готовы посвящать проекту от 8 до 12 часов в неделю. Удобное для вас время будем рады обсудить лично.'
    ],
  },
  {
    role: 'reviewer',
    course: 'analytics',
    salary: 30,
    name: '«Продуктовый аналитик»',
    description: [
      'Data Engineer с опытом работы от 3 лет;',
      'Умеете работать с Kafka, Spark, RabbitMQ, Docker, Kubernetes, Helm, AWS;',
      'Работаете с распределёнными хранилищами, нормализацией данных и настройкой потока данных;',
      'На продвинутом уровне знаете SQL и NoSQL;'
    ],
  },
];

const designReviewer = [];

const managementReviewer = [];

const marketingReviewer = [];

export const vacanciesData = {
  programming: {
    mentor: programmingMentor,
    reviewer: programmingReviewer,
  },
  analytics: {
    mentor: analyticsMentor,
    reviewer: analyticsReviewer,
  },
  design: {
    mentor: designMentor,
    reviewer: designReviewer,
  },
  marketing: {
    mentor: marketingMentor,
    reviewer: marketingReviewer,
  },
  management: {
    mentor: managementMentor,
    reviewer: managementReviewer,
  },
}