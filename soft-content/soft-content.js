var softContent = [

    {

        languageLabel: 'Pt-Br',
        languageClass: 'pt-br',

        contentTitle: 'Jogo dos porquês',
        
        contentPages: [

            {
                pageTitle: 'Splash Screen',
                pageId: 'splash-screen',
                pageClass: '',
                pageAttribute: '',
                pageFilePath: 'splash-screen/page.js',
                pageVarBase: 'pageSplashScreen',
                pageActive: true
            },

            {
                pageTitle: 'Início',
                pageId: 'start',
                pageClass: '',
                pageAttribute: '',
                pageFilePath: 'start/page.js',
                pageVarBase: 'pageStart',
                pageActive: true,
                pageContent: {
                    btnStart: 'Começar'
                }
            },

            {
                pageTitle: 'Gameplay',
                pageId: 'gameplay',
                pageClass: '',
                pageAttribute: '',
                pageFilePath: 'gameplay/page.js',
                pageVarBase: 'pageGameplay',
                pageActive: true,
                pageContent: {
                    prevBtn: 'Voltar',
                    nextBtn: 'Avançar'
                },
                pageOverlayContent: [
                    {
                        title: 'Olá!',
                        text: '\
                            <h3>Meu nome é <strong>Laura</strong>!</strong></h3>\
                            <p>Eu fiz uma viagem à Antártica com a minha família e vou contar um pouquinho sobre essa experiência pra você de uma maneira bem divertida!</p>\
                        ',
                        btnPrev: 'Voltar',
                        btnNext: 'Avançar'
                    },
                    {
                        title: '',
                        text: '\
                            <p>Vamos saltar sobre os blocos de gelo?</p>\
                            <img class="img-1" src="soft-theme/grupo-positivo/assets/img/gameplay/ice-blocks.png" width="80%"/>\
                            <p>Cada bloco possui uma pergunta e você terá de responder o "<strong>porquê</strong>" correto.</p>\
                            <img class="img-2" src="soft-theme/grupo-positivo/assets/img/gameplay/buttons-intro-1.png"/>\
                        ',
                        btnPrev: 'Voltar',
                        btnNext: 'Avançar'
                    },
                    {
                        title: '',
                        text: '\
                            <p>A cada resposta correta:</p>\
                            <img class="img-1" src="soft-theme/grupo-positivo/assets/img/gameplay/buttons-intro-2.png"/>\
                            <p>você ganha <strong><img class="coin" src="soft-theme/grupo-positivo/assets/img/gameplay/coin.png"/> 50 pontos</strong> e avança para o próximo bloco, mas se a resposta estiver errada:</p>\
                            <img class="img-2" src="soft-theme/grupo-positivo/assets/img/gameplay/buttons-intro-3.png"/>\
                            <p>você perde uma estrelinha:</p>\
                            <img src="soft-theme/grupo-positivo/assets/img/gameplay/stars-intro.png"/>\
                            <p>e se <strong>perder as 3</strong>, terá de começar tudo de novo.</p>\
                        ',
                        btnPrev: 'Voltar',
                        btnNext: 'Vamos lá!'
                    },
                    {
                        title: 'Parabéns!',
                        text: '<p>Você concluiu todo o caminho e ainda fez <strong>100 pontos</strong>!</p>',
                        btnPrev: 'Jogar de novo',
                        btnNext: 'Avançar'
                    },
                    {
                        title: 'Que pena!',
                        text: '<div class="stars">\
                                   <ul>\
                                       <li></li>\
                                       <li></li>\
                                       <li></li>\
                                   </ul>\
                               </div>\
                               <p>Suas estrelas de chances acabaram.<br/>Vamos começar de novo?</p>',
                        btnPrev: 'Jogar de novo'
                    }
                ]
            },

            {
                pageTitle: 'Texto e desenho',
                pageId: 'text-draw',
                pageClass: '',
                pageAttribute: '',
                pageFilePath: 'text-draw/page.js',
                pageVarBase: 'pageTextDraw',
                pageActive: true,
                pageContent: {
                    lauraText: 'Vamos lá! Não deixe nenhum detalhe para trás!',
                    textBoxTitle: 'Seu texto aqui',
                    drawBoxTitle: 'Seu desenho aqui'
                },
                pageOverlayContent: [
                    {
                        title: 'Agora é a sua vez!',
                        text: '<p>Férias, feriado prolongado, fim de semana, folga, passeios... tudo isso combina com o quê? Viagem, claro! Recorde-se desses momentos que você já viveu para fazer um relato de viagem. Na tela a seguir, digite seu texto e ilustre o lugar que você visitou. Você poderá salvar ou imprimir sua produção!</p>',
                        btnPrev: 'Voltar',
                        btnNext: 'Avançar'
                    }
                ]
            },
    
        ],

        // Templates
        contentTemplates: [

            {
                templateLabel: '',
                templateId: '',
                templateHtml: ''
            }
        
        ],

        // Includes
        contentIncludes: [
            {
                includeLabel: 'Top buttons',
                includeId: 'top-buttons',
                includeHtml: '\
                    <div class="buttons">\
                        <div title="Voltar ao início" class="soft-btn btn btn-home"><div class="bg"></div></div>\
                        <div title="Créditos" class="soft-btn btn btn-credits"><div class="bg"></div></div>\
                        <div title="Ligar/Desligar som" class="soft-btn btn btn-sound sound-on"><div class="bg"></div></div>\
                        <div title="Ativar/Desativar tela cheia" class="soft-btn btn btn-fullscreen"><div class="bg"></div></div>\
                    </div>'
            }
        ],

        contentGlobal: {

            template: '',

            includes: [
                {
                    includeLabel: 'Device Rotate',
                    includeId: 'device-rotate',
                    includeClass: '',
                    includeHtml: ''
                },
                {
                    includeLabel: 'Snow',
                    includeId: 'snow',
                    includeClass: '',
                    includeHtml: ''
                }
            ],

            overlays: [
                {
                    overlayLabel: 'Sair e Capa',
                    overlayId: 'exit-home',
                    overlayClass: '',
                    overlayContent: {
                        title: 'Sair do jogo?',
                        text: '<p>Se sair agora, sua jornada será perdida.<br/><strong>O que deseja fazer?</strong></p>',
                        btnPrev: 'Continuar',
                        btnNext: 'Sair'
                    }
                },
                {
                    overlayLabel: 'Créditos',
                    overlayId: 'credits',
                    overlayClass: '',
                    overlayContent: {
                        title: 'Créditos',
                        text: '<p></p>',
                        btnPrev: 'Fechar'
                    }
                }
            ],

            paginationSeparator: '/',

            messages: {

                pageNotFound: 'Erro 404. Página não encontrada.',

                pageInactive: 'Acesso negado à página.',

                languageNotFound: 'Idioma não encontrado.'

            }

        }

    }

]