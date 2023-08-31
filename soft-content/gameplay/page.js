var pageGameplay = {

    pageLoader: {
        loaderShowMethod: 'theme.showLoader()',
        loaderFiles: {
            files: []
        }
    },

    pageHtml: '\
        <div class="wrap-scaled soft-scaled" initial-width="1500" initial-height="768">\
            <div class="board">\
                <div class="left-ice-block"></div>\
                <div class="right-ice-block"></div>\
                <div class="laura laura-2">\
                    <div class="laura-stop"></div>\
                    <div class="laura-jump"></div>\
                </div>\
            </div>\
        </div>\
        <h1 soft-global-content="title"></h1>\
        <div class="laura-score">\
            <p>Laura</p>\
            <div class="score">0</div>\
        </div>\
        <div class="stars">\
            <ul>\
                <li><i></i></li>\
                <li><i></i></li>\
                <li><i></i></li>\
            </ul>\
        </div>',

    pageTemplate: 'no-template',

    pageIncludes: [
        {
            includeId: 'top-buttons',
            includeHandler: '',
            includeClass: ''
        }
    ],

    pageShowMethod: 'theme.gameplay()',
    pageHideMethod: '',

    iceBlocksPositions: [
        {
            left: 105, top: 243, height: 330, jumpDirection: 'right',
            photos: [],
            question: 'Nós escolhemos conhecer a Antártica <span>___________</span> é um lugar incrível, onde há muitos animais diferentes.',
            correctAnswer: 1
        },
        {
            left: 52, top: 228, height: 250, jumpDirection: 'left',
            photos: ['photo-q2.jpg'],
            question: 'Eu tirei muitas fotos durante a viagem. Você sabe <span>___________</span>?',
            correctAnswer: 3
        },
        {
            left: 125, top: 205, height: 210, jumpDirection: 'right',
            photos: [],
            question: 'Tirei várias fotos, <span>___________</span> queria registrar todos os momentos.',
            correctAnswer: 1
        },
        {
            left: 280, top: 205, height: 180, jumpDirection: 'right',
            photos: ['photo-q4.jpg'],
            question: 'Durante nossa viagem, cruzamos com um animal muito curioso: a foca-de-pelo. É preciso ficar atento a esses animais... Logo explico o <span>___________</span>.',
            correctAnswer: 2
        },
        {
            left: 458, top: 205, height: 170, jumpDirection: 'right',
            photos: [],
            question: 'A foca-de-pelo exige cuidado <span>___________</span> ela é rápida e pode nos morder.',
            correctAnswer: 1
        },
        {
            left: 575, top: 203, height: 190, jumpDirection: 'right',
            photos: ['photo-q6-1.jpg', 'photo-q6-2.jpg'],
            question: 'Sabia que muitas espécies de aves nos acompanharam durante a viagem? Eu estranhei e fiquei me perguntando o <span>___________</span>!',
            correctAnswer: 2
        },
        {
            left: 705, top: 205, height: 160, jumpDirection: 'right',
            photos: [],
            question: 'Meu pai me explicou o <span>___________</span>. As aves sobrevoam o barco em busca de alimento.',
            correctAnswer: 2
        },
        {
            left: 870, top: 215, height: 185, jumpDirection: 'right',
            photos: [],
            question: 'Aprendemos muitas coisas viajando para a Antártica. Uma delas é sobre os albatrozes, que fazem seus ninhos no alto de penhascos. Você sabe <span>___________</span>?',
            correctAnswer: 3
        },
        {
            left: 968, top: 270, height: 215, jumpDirection: 'right',
            photos: [],
            question: 'Os ninhos ficam no alto <span>___________</span> os filhotes precisam de proteção até estarem preparados para voar sozinhos.',
            correctAnswer: 1
        },
        {
            left: 1125, top: 275, height: 255, jumpDirection: 'right',
            photos: ['photo-q10.jpg'],
            question: 'Nossa viagem foi incrível... Durante o trajeto, além dos animais, avistamos alguns icebergs! <span>___________</span> eles são tão grandes?',
            correctAnswer: 0
        },
        {
            left: 1070, top: 307, height: 300, jumpDirection: 'left',
            photos: [],
            question: 'Legal, não? Aposto que ficou com vontade de viajar também! Que lugar você gostaria de conhecer? <span>___________</span>?',
            correctAnswer: 3
        },
        {
            left: 1160, top: 255, height: 440, jumpDirection: 'right',
        }
    ]

}