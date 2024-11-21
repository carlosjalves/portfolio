const projectsData = [
  {
    id: 1,
    slug: "design-contest-winner",
    link: "",
    acf: {
      title: "Design Contest Winner",
      text: "Winning proposal in the Design of the \"University Impact Rankings\" Disclosure Wall contest. An initiative of the University of Coimbra's Rectorate that sought to encourage creativity and the creation of value through the talent of the university's student community.\n\nThis work was exhibited on the left side wall of the Mathematics Department of the Faculty of Science and Technology of the University of Coimbra, at Polo I.\n\nFor this project, I decided that green and white should be the dominant colors because, in my opinion, they give the project an environmental/sustainable meaning. To represent the University of Coimbra, I made an illustration of the University Tower and a student in academic costume. To portray the importance of sustainability for the University, I decided to surround the letters and illustrations with the leaves of the background image, which in my opinion strengthened the meaning of the message.",
      keywords: "University Impact Rankings, Sustainability, Visual Communication, Creativity",
      tools: "Adobe Illustrator, Adobe Photoshop",
      date: "20210621",
      tags: ['Graphic Design', 'Typography'],
      banner: require('../../assets/img/design-contest-winner/banner.jpg'),
      images: [
        { id: "img2", url: require('../../assets/img/design-contest-winner/img2.jpeg') },
        { id: "img3", url: require('../../assets/img/design-contest-winner/img3.jpg') },
        { id: "img1", url: require('../../assets/img/design-contest-winner/img1.jpg') }
      ]
    }
  },
  {
    id: 2,
    slug: "matthew-carter",
    link: "",
    acf: {
      title: "Matthew Carter, The Most Widely Read Man In The World",
      text: "The result of this work is a book, A5 format, with 16 pages (including the front and back covers), made up of texts and images. The texts are my own, based on research about the type designer and his work.\n\nIt was a very enriching piece of work, combining theoretical and practical knowledge of typography and exploring the relationship between typography and other elements of graphic design.",
      keywords: "Matthew Carter, Type Design, Typography, Graphic Design, Book Design, Typographic Layout",
      tools: "Adobe Indesign, Adobe Photoshop",
      date: "20200615",
      tags: ['Graphic Design', 'Typography', 'Editorial Design'],
      banner: require('../../assets/img/matthew-carter/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/matthew-carter/img1.jpg') },
        { id: "img2", url: require('../../assets/img/matthew-carter/img2.jpg') },
        { id: "img3", url: require('../../assets/img/matthew-carter/img3.jpg') },
        { id: "img4", url: require('../../assets/img/matthew-carter/img4.jpg') }
      ]
    }
  },
  {
    id: 3,
    slug: "book-pagination",
    link: "",
    acf: {
      title: "Book Pagination",
      text: "The aim of this academic work was to present the pagination of a book. I took into account aspects such as expressiveness and readability according to the medium and type of reading. I focused on presenting a work with a well-proportioned page and margins, good organization and hierarchy of the different components of each text. I worked on aspects such as constructing a layout grid, choosing the typeface, size and weight of the font, spacing, columns, baseline, etc., always with the aim of the final look resulting in graphically appealing pages that invite reading.",
      keywords: "Book Layout, Typography, Typeface, Expressiveness, Readability, Grid",
      tools: "Adobe Indesign",
      date: "20200423",
      tags: ['Graphic Design', 'Typography', 'Editorial Design'],
      banner: require('../../assets/img/book-pagination/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/book-pagination/img1.jpg') },
        { id: "img2", url: require('../../assets/img/book-pagination/img2.jpg') },
        { id: "img3", url: require('../../assets/img/book-pagination/img3.jpg') },
        { id: "img4", url: require('../../assets/img/book-pagination/img4.jpg') }
      ]
    }
  },
  {
    id: 4,
    slug: "magazine-pagination",
    link: "",
    acf: {
      title: "Magazine Pagination",
      text: "The aim of this academic work was to present the pagination of a magazine. I took into account aspects such as expressiveness and legibility according to the medium and type of reading. I focused on presenting a work with a well-proportioned page and margins, good organization and hierarchy of the different components of each text. I worked on aspects such as constructing a layout grid, choosing the typeface, size and weight of the font, spacing, columns, baseline, etc., always with the aim of the final look resulting in graphically appealing pages that invite reading.",
      keywords: "Magazine Layout, Typography, Typeface, Expressiveness, Readability, Grid, Type Designer Interview, Print Media",
      tools: "Adobe Indesign, Adobe Photoshop",
      date: "20200423",
      tags: ['Graphic Design', 'Typography', 'Editorial Design'],
      banner: require('../../assets/img/magazine-pagination/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/magazine-pagination/img1.jpg') },
        { id: "img2", url: require('../../assets/img/magazine-pagination/img2.jpg') },
        { id: "img3", url: require('../../assets/img/magazine-pagination/img3.jpg') }
      ]
    }
  },
  {
    id: 5,
    slug: "breath-in-draw-out",
    link: "https://github.com/carlosjalves/BreathInDrawOut",
    acf: {
      title: "Breath in, Draw out",
      text: "This installation is a way in which corporal expression is combined with creative expression, exploring the capacity and limits of the program. It is a space for reflection on computer art and “human” art, and where the line between the two intersects.\n\nThe projection consists of a “brush” created with lines through the user's movement, the view of the camera, discreetly in the background, and two indicators of the drawing's classification. The user's movement is captured by the camera using nose position tracking. The fact that the user can see their silhouette behind the drawing makes them part of it and aware of the movement of their body, which gives the project expressiveness and intimacy. When no one is present, the machine tries to imitate human behavior by drawing (autonomous drawing) even if the body is no longer present.\n\nThe program classifies the drawing, whether it is made by a human or a computer, trying to understand what is being drawn and giving a value for the confidence with which it makes this classification. This humanization is completed when the computer says what it thinks the drawing is, using various voices and accents in an attempt, often unsuccessful, to reach human capabilities.\n\nThe sound is also an exploration of this humanization of the machine, originally recordings of lung auscultations that were later distorted and synthesized to become the breathing of the machine itself. The design has an impact on the playback speed, which affects the pitch and gives the installation a sense of change of pace and emotion. This installation allows up to two users at the same time, which we consider an essential factor because the dynamic changes from a bodily expression to a collective composition in which total control is lost.\n\nWe want this project to show that the machine often can't replicate human behavior, nor the human the behavior of the machine, but that the symbiosis of the two makes it possible to create art.",
      keywords: "Interactive Art Installation, Corporal Expression, Creative Expression, Human-Computer Interaction, Movement Tracking, Machine Learning",
      tools: "JavaScript, p5.js, p5.speech, ml5.js Posenet, ml5.js Doodlenet",
      date: "20220518",
      tags: ['Front-end', 'Computational Design'],
      banner: require('../../assets/img/breath-in-draw-out/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/breath-in-draw-out/img1.jpg') },
        { id: "img2", url: require('../../assets/img/breath-in-draw-out/img2.jpg') },
        { id: "img3", url: require('../../assets/img/breath-in-draw-out/img3.jpg') },
        { id: "img4", url: require('../../assets/img/breath-in-draw-out/img4.jpg') },
        { id: "img5", url: require('../../assets/img/breath-in-draw-out/img5.jpg') }
      ]
    }
  },
  {
    id: 6,
    slug: "transmediation-editorial",
    link: "",
    acf: {
      title: "Max Aub: Editorial Transmediation",
      text: "This project seeks an alternative exploration of the relationship between reader and book, using a selection of texts from Max Aub's work Crímenes Ejemplares.\n\nA thorough initial reading allowed us to establish a well-founded basis for our approach, aiming to maintain coherence in our interpretation of the texts. We were inspired by two main points of departure: the first stems from our interpretation of the texts, focusing on the representation of so-called confession letters, typically written by murderers; the second takes inspiration from the chronological context of the book's first edition in 1957, when letters were a common means of communication.\n\nThe concept of confession letters is associated with a universe of crime, secrecy, and mystery. This realm of imagination is also linked to objects potentially used by criminals to conceal their illicit activities, such as safes and travel trunks. The realization of these ideas materializes in the experience of handling the book and its format: a closed box, whose mystery is the confession of various crimes presented in the initial booklet.\n\nThe project involved creating illustrations for each short story. We drew inspiration from illustrators like Jean-Jacques Grandville and David Roberts, who are adept at depicting dark atmospheres through cross-hatching, a technique we also applied. Additionally, the illustrations incorporated reference photographs, which were assembled in a cinematic style.\n\nTo emphasize the themes of crime, secrecy, and mystery, we sought to create an interaction between the letters and the illustrations: the letters within the box complete the text and illustrations that the readers initially encounter as incomplete in the first booklet. The way they are completed varies for each illustration, reinforcing the aforementioned themes while offering readers a sense of criminal investigation.",
      keywords: "Max Aub, Transmediation, Editorial Design, Crímenes Ejemplares, Interactive Reading, Visual Storytelling, Puzzle-based Narrative",
      tools: "Adobe Illustrator, Adobe Indesign",
      date: "20211110",
      tags: ['Graphic Design', 'Editorial Design'],
      banner: require('../../assets/img/transmediation-editorial/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/transmediation-editorial/img1.jpg') },
        { id: "img2", url: require('../../assets/img/transmediation-editorial/img2.jpg') },
        { id: "img3", url: require('../../assets/img/transmediation-editorial/img3.jpg') },
        { id: "img4", url: require('../../assets/img/transmediation-editorial/img4.jpg') }
      ]
    }
  },
  {
    id: 7,
    slug: "transmediation-multimedia",
    link: "https://github.com/carlosjalves/MaxAubSoundscapes",
    acf: {
      title: "Max Aub: Multimedia Transmediation",
      text: "The multimedia adaptation of this project is a website where the user explores a soundscape by navigating with the mouse cursor, listening to different binaural audio clips. This experience aims to transport the user through sound into the atmosphere of a crime scene, allowing them to experience the sounds leading up to the moment of the murder.",
      keywords: "Multimedia Adaptation, Interactive Website, Soundscape Exploration, User Interaction",
      tools: "Adobe Illustrator, HTML, CSS, JavaScript, p5.js, Audacity, Sound Particles",
      date: "20220113",
      tags: ['UX/UI Design', 'Front-end', 'Web/App Design'],
      banner: require('../../assets/img/transmediation-multimedia/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/transmediation-multimedia/img1.jpg') },
        { id: "img2", url: require('../../assets/img/transmediation-multimedia/img2.jpg') },
        { id: "img3", url: require('../../assets/img/transmediation-multimedia/img3.jpg') },
        { id: "img4", url: require('../../assets/img/transmediation-multimedia/img4.jpg') }
      ]
    }
  },
  {
    id: 8,
    slug: "mnmc",
    link: "https://github.com/carlosjalves/MNMC",
    acf: {
      title: "MNMC Website",
      text: "The main objective of this project was the practical application of knowledge and skills related to the technologies necessary for website development.\n\nOne of the features of this project is that it is an institutional website, and we chose a museum—specifically, the Museu Nacional de Machado de Castro. We decided it would be interesting to create a website for this type of institution, and during our research, we identified some shortcomings in the current website of the Museu Nacional de Machado de Castro that could be improved visually and in terms of clarity, making it simpler and more intuitive.\n\nIn fact, the most relevant information for a museum includes its location, history and mission, collections, exhibitions, pricing, opening hours, and the ability for users to communicate with museum staff. Therefore, these will be the key elements highlighted on the website.",
      keywords: "Web Development, Institutional Website, Responsive Design, Digital Communication, User Experience, User Interface",
      tools: "HTML, CSS, JavaScript, Adobe Photoshop",
      date: "20201223",
      tags: ['UX/UI Design', 'Front-end', 'Web/App Design'],
      banner: require('../../assets/img/mnmc/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/mnmc/img1.jpg') },
        { id: "img2", url: require('../../assets/img/mnmc/img2.jpg') },
        { id: "img3", url: require('../../assets/img/mnmc/img3.jpg') },
        { id: "img4", url: require('../../assets/img/mnmc/img4.jpg') }
      ]
    }
  },
  {
    id: 9,
    slug: "artican",
    link: "",
    acf: {
      title: "Artican",
      text: "The main goal of this project was the practical application of concepts, tools, and processes related to Interaction Design. It involved the creation of a prototype for a mobile application centered on the theme of \"Europeana\", either contributing to or reusing content from the Europeana repository.\n\nTo introduce a new dynamic among people and foster healthy, fun, and friendly relationships where users can spend quality time together, we decided to create a game called \"Artican\". In this game, users are challenged to recreate artworks using their bodies and take photos, which are then analyzed by a scanning system that evaluates the compatibility between the player’s photo and the original artwork.\n\nThis application showcases a variety of artworks—sculptures, drawings, and paintings—from the Europeana website. In addition to entertaining users, it stimulates their curiosity about different artworks and develops analytical and synthesis skills in a lighthearted and fun way, providing enjoyable group moments and encouraging a spirit of healthy competition.",
      keywords: "Interaction Design, Prototype, User Experience, User Interface, Art Recreation Challenge, Usability Testing, User Experience Questionnaire",
      tools: "Figma, Adobe Illustrator",
      date: "20220604",
      tags: ['UX/UI Design', 'Web/App Design'],
      banner: require('../../assets/img/artican/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/artican/img1.jpg') },
        { id: "img2", url: require('../../assets/img/artican/img2.jpg') },
        { id: "img3", url: require('../../assets/img/artican/img3.jpg') },
        { id: "img4", url: require('../../assets/img/artican/img4.jpg') }
      ]
    }
  },
  {
    id: 10,
    slug: "hyundai-contest",
    link: "",
    acf: {
      title: "\"Dá Cor ao Hyundai i20 R5\" Contest",
      text: "Work carried out as part of the \"Dá Cor ao Hyundai i20 R5\" contest (Hyundai Portugal), which involved designing the livery for the team’s rally cars.",
      keywords: "Car Livery Design, Motorsport Design, Graphic Design Contest",
      tools: "CorelDRAW",
      date: "20190627",
      tags: ['Graphic Design'],
      banner: require('../../assets/img/hyundai-contest/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/hyundai-contest/img1.jpg') },
        { id: "img2", url: require('../../assets/img/hyundai-contest/img2.jpg') }
      ]
    }
  },
  {
    id: 11,
    slug: "iv-vocabulary",
    link: "https://github.com/carlosjalves/Wordbank",
    acf: {
      title: "Children's Vocabulary Development Data Visualization",
      text: "For this project, we were challenged to create a visualization that would allow users to explore and analyze the information we chose to represent, which in our case was the relationship between the number of words learned (produced through speech) by children aged 16 to 36 months and the educational level of the caregiver, by language.",
      keywords: "Data Visualization, Information Visualization, Interactive Visualization, Visual Analytics, Child Development, Caregiver Education, Comparative Analysis, User Interaction",
      tools: "HTML, CSS, JavaScript, D3.js",
      date: "20221211",
      tags: ['UX/UI Design', 'Front-end', 'Computational Design', 'Web/App Design'],
      banner: require('../../assets/img/iv-vocabulary/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/iv-vocabulary/img1.jpg') },
        { id: "img2", url: require('../../assets/img/iv-vocabulary/img2.jpg') },
        { id: "img3", url: require('../../assets/img/iv-vocabulary/img3.jpg') },
        { id: "img4", url: require('../../assets/img/iv-vocabulary/img4.jpg') }
      ]
    }
  },
  {
    id: 12,
    slug: "iv-titanic-passengers",
    link: "https://github.com/carlosjalves/TitanicPassengers",
    acf: {
      title: "Titanic Passengers Data Visualization",
      text: "For this project, we were tasked with developing a visualization model that would simplify the communication of information about a specific concept or idea. Our project demonstrates, in an attractive yet simple way, the relationship between the number of survivors and fatalities in the Titanic shipwreck, organized by class and age group. We represented this using a stacked bar chart, as it proved to be effective for comparison and analysis.\n\nOur objective was to show the relationship between the number of deaths and survivors in each class, organizing the data by age group. These data could be indicative of the social discrimination that existed at the beginning of the 20th century. Another goal was for the visualization to be appealing to the public, capturing their interest rather than repelling it.\n\nWith this visualization, the discrimination between social classes during this period in history (early 20th century) became evident. We state this because, based on the visualization derived from the data provided, it is clear that the death toll increased in the graph corresponding to the third class (the least privileged class at that time). In other words, this chart effectively highlights the relationship between the number of survivors and fatalities in each class, organized by age group.",
      keywords: "Data Visualization, Information Visualization, Stacked Bar Chart, Visual Storytelling, Comparative Analysis",
      tools: "HTML, CSS, JavaScript, D3.js",
      date: "20221023",
      tags: ['UX/UI Design', 'Front-end', 'Computational Design', 'Web/App Design'],
      banner: require('../../assets/img/iv-titanic-passengers/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/iv-titanic-passengers/img1.jpg') }
      ]
    }
  },
  {
    id: 13,
    slug: "personal-website",
    link: "https://github.com/carlosjalves/PersonalWebsite",
    acf: {
      title: "Personal Website",
      text: "For this academic exercise, I was tasked with creating a personal presentation website with the goal of developing programming skills with a high level of aesthetic rigor and an experimental character. I began by researching and analyzing some personal portfolio websites, primarily on hoverstat.es. I selected a few that served as references for the creation of my website, following the model I had envisioned: a simple website but with interactive elements for user engagement.\n\nMy personal website includes three pages: Homepage, About, and Work.\n\nI decided it was important to include a personal touch on the homepage, so I created a p5.js script that reveals an image of my face as the user moves the cursor across the screen. It's a simple feature, but it engages the user and already offers a glimpse of who I am.\n\nOn the About page, I created a “game” where the user must complete a text about me to unlock access to my social media profiles. The text has five blanks and five words scattered on the screen; the user needs to drag the words to the correct spaces. If they get it wrong, the game resets. This ensures that visitors to my personal website will indeed learn something more about me.\n\nRegarding the Work page, it showcases some of my projects and includes an interaction representing the beginning of each project—essentially, a blank sheet of paper and a pencil/marker for sketching initial ideas. The background of the page represents white paper, and the cursor's position acts as the pencil/marker, drawing as the user moves the cursor across the screen. When hovering over each project image, a description of the project appears.",
      keywords: "Personal Website, User Interaction, Web Development, Responsive Design",
      tools: "HTML, CSS, JavaScript, P5.js",
      date: "20221230",
      tags: ['UX/UI Design', 'Front-end', 'Web/App Design'],
      banner: require('../../assets/img/personal-website/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/personal-website/img1.jpg') },
        { id: "img2", url: require('../../assets/img/personal-website/img2.jpg') },
        { id: "img3", url: require('../../assets/img/personal-website/img3.jpg') }
      ]
    }
  },
  {
    id: 14,
    slug: "invisible-health-hazard",
    link: "https://github.com/carlosjalves/invisible-health-hazard",
    acf: {
      title: "Invisible Health Hazard",
      text: "This project explores the evolution of the relationship between air pollution and the number of deaths attributed to this problem over the years through a data visualization, providing a more tangible demonstration of the impact of air quality on health.",
      keywords: "Data Visualization, Information Visualization, Data-Driven Insights, Air Pollution Impact, Interactive Visualization, Timeline, Health Risk Communication",
      tools: "HTML, CSS, JavaScript, P5.js",
      date: "20240129",
      tags: ['UX/UI Design', 'Front-end', 'Computational Design', 'Web/App Design'],
      banner: require('../../assets/img/invisible-health-hazard/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/invisible-health-hazard/img1.jpg') },
        { id: "img2", url: require('../../assets/img/invisible-health-hazard/img2.jpg') },
        { id: "img3", url: require('../../assets/img/invisible-health-hazard/img3.jpg') },
        { id: "img4", url: require('../../assets/img/invisible-health-hazard/img4.jpg') }
      ]
    }
  },
  {
    id: 15,
    slug: "msc-thesis",
    link: "https://github.com/carlosjalves/samma-app",
    acf: {
      title: "Master's Thesis: Interactive Visualization for Monitoring and Analysis of Satellite Maneuvers in Space",
      text: "My master's thesis focuses on the development of an analytical application for the visualization of satellite data, addressing challenges in interpreting and managing the growing complexity of space activities.\n\nThe field of information visualization plays a pivotal role in transforming large and abstract datasets into intuitive and comprehensible visual representations, an increasingly critical need in the digital age. This is particularly relevant in the space sector, where the exponential growth of satellites in orbit—driven by the demand for space-based services—has resulted in a significant increase in space debris, posing threats to the sustainability and safety of space operations.\n\nGiven these challenges, my research explores innovative approaches to visualizing and interacting with satellite-related data, focusing on enabling effective monitoring and analysis of the complex dynamics between active satellites and debris. The project involved:\n\n- Prototyping various visualization models, tailored to the multidimensional and dynamic nature of satellite data.\n\n- Developing and integrating these prototypes into a fully functional analytical application.\n\n- Conducting a usability and user experience evaluation in a real-world context to refine the application and ensure it meets user needs.\n\nThis thesis highlights how data visualization can serve as a critical tool for navigating the complexities of satellite operations, contributing to safer and more sustainable space activities.",
      keywords: "Information Visualization, Multivariate Data Visualization, Satellite Data Visualization, Data Glyphs, Analytical Application",
      tools: "HTML, CSS, JavaScript, React, Node.js, D3.js, Material UI, Figma",
      date: "20240906",
      tags: ['UX/UI Design', 'Front-end', 'Computational Design', 'Web/App Design'],
      banner: require('../../assets/img/msc-thesis/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/msc-thesis/img1.jpg') },
        { id: "img2", url: require('../../assets/img/msc-thesis/img2.jpg') },
        { id: "img3", url: require('../../assets/img/msc-thesis/img3.jpg') },
        { id: "img4", url: require('../../assets/img/msc-thesis/img4.jpg') },
        { id: "img5", url: require('../../assets/img/msc-thesis/img5.jpg') },
        { id: "img6", url: require('../../assets/img/msc-thesis/img6.jpg') },
        { id: "img7", url: require('../../assets/img/msc-thesis/img7.jpg') },
        { id: "img8", url: require('../../assets/img/msc-thesis/img8.jpg') },
        { id: "img9", url: require('../../assets/img/msc-thesis/img9.jpg') },
        { id: "img10", url: require('../../assets/img/msc-thesis/img10.jpg') },
        { id: "img11", url: require('../../assets/img/msc-thesis/img11.jpg') }
      ]
    }
  },
  {
    id: 16,
    slug: "altabaixa-website",
    link: "https://github.com/carlosjalves/AltaBaixa",
    acf: {
      title: "ALTAbaixa - Website",
      text: "The Alta Baixa project involves the creation of the first issue of a magazine dedicated to typographic culture, available in both print and digital formats. The initiative explores typography in all its dimensions, from the history and evolution of typefaces to reflections on contemporary design and composition.\n\nWith an eclectic and multidisciplinary approach, the magazine combines historical and contemporary articles from academic and journalistic sources, creating a platform that values both academic depth and editorial accessibility. Alta Baixa seeks to emphasize the importance of aligning visual design with content, utilizing a flexible structure and grid system that adapts to various formats and types of material.\n\nThis project is also a practical exercise in the organization and presentation of editorial content, fostering the development of technical and creative skills in typography, composition, and editorial design. Additionally, the web version explores digital-specific techniques, such as interactive design, responsive layouts, and web typography, enhancing the project’s scope and adaptability to modern media.",
      keywords: "Web Typography, Interactive Design, User Experience (UX), User Interface (UI), Digital Publishing",
      tools: "Adobe Photoshop, HTML, CSS, JavaScript, P5.js",
      date: "20230118",
      tags: ['UX/UI Design', 'Front-end', 'Web/App Design', 'Graphic Design', 'Typography'],
      banner: require('../../assets/img/altabaixa-website/banner.jpg'),
      images: [
        { id: "img1", url: require('../../assets/img/altabaixa-website/img1.jpg') },
        { id: "img2", url: require('../../assets/img/altabaixa-website/img2.jpg') },
        { id: "img3", url: require('../../assets/img/altabaixa-website/img3.jpg') },
        { id: "img4", url: require('../../assets/img/altabaixa-website/img4.jpg') },
        { id: "img5", url: require('../../assets/img/altabaixa-website/img5.jpg') },
        { id: "img6", url: require('../../assets/img/altabaixa-website/img6.jpg') }
      ]
    }
  },
];

export default projectsData;
