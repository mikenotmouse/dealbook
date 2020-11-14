import Vue from "vue"; 
import VueI18n from "vue-i18n"; 

Vue.use(VueI18n); 
export const i18n = new VueI18n({
    locale: localStorage.localization ? localStorage.localization : "EN", 
    fallbackLocale : "РУ",
    messages: {
        EN: {
            navbar_home: "Home", 
            navbar_about: "About", 
            navbar_problem: "Problem", 
            navbar_roadmap: "Roadmap", 
            navbar_subscribe: "Subscribe", 
            navbar_team: "Team", 
            home_title: "Deal Book", 
            home_motto: "Trader's personal diary",
            about_title: "About", 
            about_cardFirstTitle: "Have you ever thought of: “Why have I opened/closed the deal too early/late?”",
            about_cardFirstSubtitle: "Yes, you did it.",
            about_cardSecondTitle: "Have you ever searched for some tools which can help you to analyze when and why you have to open and close the deal?",
            about_cardSecondSubtitle: "And the answer is “yes”",
            about_cardThirdTitle: "Deal Book - is a completely unique service, which does not have any similar analogues",
            about_cardThirdSubtitle: "You will be able to analyze the reason why your result was not 100% achieved",
            problem_title: "What problem do we solve?",
            problem_argument1: "You will have the opportunity to thoroughly analyze completed transactions",
            problem_argument2: "Ability to keep detailed records of your trades",
            problem_argument3: "You will have the opportunity to thoroughly analyze completed transactions",
            problem_argument4: "Ability to keep detailed records of your trades",
            roadmap_title: "Roadmap", 
            roadmap_creation: "Creation of the idea", 
            roadmap_gatheringTeam: "Gathering of the volunteer team of developers", 
            roadmap_estimatedProject: "Estimated launch of Product MVP", 
            roadmap_integrationOfExchanhe: "Integration of exchnage API", 
            roadmap_commingSoon: "Coming soon",
            roadmap_quater3: "Q3 2020", 
            roadmap_quater4: "Q4 2020", 
            roadmap_quater14: "Q1-Q4 2021", 
            roadmap_quater214: "Q1-Q4 2022", 
            roadmap_warningRoadmap: "Updating the platform with constant adding new features",

            subscribe_letSubscribe: "Subscribe to our newsletter to always be updated about the progress",
            subscribe_thanks: "Thank you for your subscription",
            subscribe_emailForFeedback : "Your email is required solely for feedback",
            subscribe_answer : "When the project is released, we will definitely contact you",
            subscribe_enterEmail : "Enter your email",
            subscribe_button: "Subscribe",

            donate_title : "Donate",
            donate_description : "Donations are completely free-will and are non-obligatory, but they will help us to develop further and faster.",
            donate_select : "Select a method and indicate the amount of donation",
            donate_method : "Donat method",
            donate_copy : "Copy",
            donate_button : "Donate",
            donate_copied: "Copied",

            team_teammate1 : "Yevhenii Hryshchuk",
            team_teammate2 : "Andrii Fedunin",
            team_teammate3 : "Ilya Lopatko",
            team_teammate4 : "Mykhailo Hurin",
            team_teammate5 : "Borys Rohulia",
            team_teammate6 : "Oleksandr Klimenko",
            team_teammate7 : "Irina Volokhatiuk",
            team_teammate8 : "Artem Hunevich",
            team_teammate1position : "CEO, Senior UI/UX Designer",
            team_teammate2position : "PM, Community Manager",
            team_teammate3position : "CTO, Senior Full-Stack Software Engineer",
            team_teammate4position : "PO, Middle Front-End Engineer",
            team_teammate5position : "Middle Front-End Engineer",
            team_teammate6position : "Digital Marketing Manager",
            team_teammate7position : "Trainee UI/UX Designer, Team assistant",
            team_teammate8position : "QA Engineer, Team assistant",
            team_warning: "The team consists of volunteers and fans of the idea",

            footer_footerText:'Donations are completely free-will and are non-obligatory, but they will help us to develop further and  faster. <u>The team consists of volunteers and fans of the idea.</u>',
        }, 
        РУ: {
            navbar_home: "Главная",
            navbar_about: "О нас",
            navbar_problem: "Актуальность",
            navbar_roadmap: "Roadmap",
            navbar_subscribe: "Подписаться",
            navbar_team: "Команда",
            home_title: "Deal Book",
            home_motto: "Личный дневник трейдера",
            about_title: "О проекте",
            about_cardFirstTitle: "Вы когда-нибудь задумывались: «Почему я открыл / закрыл сделку слишком рано / поздно?”",
            about_cardFirstSubtitle: "Да, вы это делали.",
            about_cardSecondTitle: "Вы когда-нибудь искали инструменты, которые помогут проанализировать, когда и почему вам нужно открывать и закрывать сделку?",
            about_cardSecondSubtitle: 'И ответ "да"',
            about_cardThirdTitle: "Deal Book - это совершенно уникальный сервис, не имеющий аналогов.",
            about_cardThirdSubtitle: "Вы сможете проанализировать причину, по которой Ваш результат не был достигнут на 100%",
            problem_title: "Какую проблему мы решаем?",
            problem_argument1: "У вас будет возможность тщательно проанализировать совершенные транзакции",
            problem_argument2: "Возможность вести подробный учет Ваших сделок",
            problem_argument3: "У вас будет возможность тщательно проанализировать совершенные транзакции",
            problem_argument4: "Возможность вести подробный учет Ваших сделок",
            roadmap_title: "Дорожная карта",
            roadmap_creation: "Создание идеи",
            roadmap_gatheringTeam: "Сбор волонтёрской команды",
            roadmap_estimatedProject: "Приблизительный запуск MVP проекта",
            roadmap_integrationOfExchanhe: "Интеграция биржевых API",
            roadmap_commingSoon: "Скоро...",
            roadmap_quater3: "Q3 2020",
            roadmap_quater4: "Q4 2020",
            roadmap_quater14: "Q1-Q4 2021",
            roadmap_quater214: "Q1-Q4 2022",
            roadmap_warningRoadmap: "Обновление платформы с постоянным расширением функционала",

            subscribe_letSubscribe: "Подпишитесь на нашу рассылку, чтобы всегда быть в курсе прогресса",
            subscribe_thanks: "Спасибо за Вашу подписку!",
            subscribe_emailForFeedback : "Ваш адрес электронной почты необходим исключительно для обратной связи",
            subscribe_answer : "Когда проект будет запущен, мы обязательно с вами свяжемся",
            subscribe_enterEmail : "введите Ваш email",
            subscribe_button: "Подписаться",

            donate_title : "Донат",
            donate_description : "Донат является совершенно добровольным и необязательным, но он поможет нам развиваться дальше и быстрее.",
            donate_select : "Выберите способ и укажите сумму доната",
            donate_method : "Метод платежа",
            donate_copy : "Скопировать",
            donate_button : "Донат",
            donate_copied: "Скопировано",

            team_teammate1 : "Yevhenii Hryshchuk",
            team_teammate2 : "Andrii Fedunin",
            team_teammate3 : "Ilya Lopatko",
            team_teammate4 : "Mykhailo Hurin",
            team_teammate5 : "Borys Rohulia",
            team_teammate6 : "Oleksandr Klimenko",
            team_teammate7 : "Irina Volokhatiuk",
            team_teammate8 : "Artem Hunevich",
            team_teammate1position : "CEO, Senior UI/UX Designer",
            team_teammate2position : "Community Manager, PM",
            team_teammate3position : "CTO, Senior Full-Stack Software Engineer",
            team_teammate4position : "PO, Middle Front-End Engineer",
            team_teammate5position : "Middle Front-End Engineer",
            team_teammate6position : "Digital Marketing Manager",
            team_teammate7position : "Team assistant, Trainee UI/UX Designer",
            team_teammate8position : "QA Engineer, Team assistant",
            team_warning: "Команда состоит из волонтеров и поклонников идеи.",

            footer_footerText:'Донат является совершенно добровольным и необязательным, но он поможет нам развиваться дальше и быстрее. <u>Команда состоит из волонтеров и поклонников идеи.</u>'
        },
        УКР: {
            navbar_home: "Головна", 
            navbar_about: "Про нас", 
            navbar_problem: "Актуальність", 
            navbar_roadmap: "Roadmap", 
            navbar_subscribe: "Підписатись", 
            navbar_team: "Команда", 
            home_title: "Deal Book", 
            home_motto: "Особистий щоденник трейдера",
            about_title: "Про проєкт", 
            about_cardFirstTitle: "Ви коли-небудь задумувались: «Чому я відкрив / закрив угоду занадто рано / пізно?”",
            about_cardFirstSubtitle: "Так, ви це робили",
            about_cardSecondTitle: "Ви коли-небудь шукали інструменти, які допоможуть вам проаналізувати, коли і чому вам доводиться відкривати та закривати угоду?",
            about_cardSecondSubtitle: 'І відповідь: "так"',
            about_cardThirdTitle: "Deal Book - це абсолютно унікальна послуга, яка не має аналогічних аналогів",
            about_cardThirdSubtitle: "Ви зможете проаналізувати причину, через яку Ваш результат не був досягнутий на 100%",
            problem_title: "Яку проблему ми вирішуємо?",
            problem_argument1: "Ви матимете можливість ретельно проаналізувати завершені операції",
            problem_argument2: "Можливість вести детальний облік своїх торгів",
            problem_argument3: "Ви матимете можливість ретельно проаналізувати завершені операції",
            problem_argument4: "Можливість вести детальний облік своїх торгів",
            roadmap_title: "Roadmap", 
            roadmap_creation: "Стоврення ідеї", 
            roadmap_gatheringTeam: "Збір волонтерської команди розробників", 
            roadmap_estimatedProject: "Передбачуваний запуск MVP продукту", 
            roadmap_integrationOfExchanhe: "Інтеграція біржових<br>АРІ", 
            roadmap_commingSoon: "Скоро...",
            roadmap_quater3: "Q3 2020", 
            roadmap_quater4: "Q4 2020", 
            roadmap_quater14: "Q1-Q4 2021", 
            roadmap_quater214: "Q1-Q4 2022", 
            roadmap_warningRoadmap: "Оновлення платформи з постійним додаванням нових функцій",

            subscribe_letSubscribe: "Підпишіться на нашу розсилку, щоб завжди отримувати інформацію про прогрес",
            subscribe_thanks: "Дякуємо за підписку",
            subscribe_emailForFeedback : "Ваша електронна адреса потрібна виключно для зворотного зв’язку",
            subscribe_answer : "Коли проект вийде, ми обов’язково зв’яжемося з вами",
            subscribe_enterEmail : "Введіть Ваш email",
            subscribe_button: "Підписатись",

            donate_title : "Донат",
            donate_description : "Донати є абсолютно вільними та необов’язковими, але вони допоможуть нам розвиватися далі та швидше.",
            donate_select : "Виберіть метод і вкажіть суму донату",
            donate_method : "Метод донату",
            donate_copy : "Скопіювати",
            donate_button : "Донат",
            donate_copied: "Скопійовано",

            team_teammate1 : "Yevhenii Hryshchuk",
            team_teammate2 : "Andrii Fedunin",
            team_teammate3 : "Ilya Lopatko",
            team_teammate4 : "Mykhailo Hurin",
            team_teammate5 : "Borys Rohulia",
            team_teammate6 : "Oleksandr Klimenko",
            team_teammate7 : "Irina Volokhatiuk",
            team_teammate8 : "Artem Hunevich",
            team_teammate1position : "CEO, Senior UI/UX Designer",
            team_teammate2position : "Community Manager, PM",
            team_teammate3position : "CTO, Senior Full-Stack Software Engineer",
            team_teammate4position : "PO, Middle Front-End Engineer",
            team_teammate5position : "Middle Front-End Engineer",
            team_teammate6position : "Digital Marketing Manager",
            team_teammate7position : "Team assistant, Trainee UI/UX Designer",
            team_teammate8position : "QA Engineer, Team assistant",
            team_warning: "The team consists of volunteers and fans of the idea",

            footer_footerText:'Donations are completely free-will and are non-obligatory, but they will help us to develop further and  faster. <u>The team consists of volunteers and fans of the idea.</u>',
        }
    }
})
