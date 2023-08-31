var theme = {

  version: '1.0.0',

  // Variáveis globais
  vars: {

    initApp: true,

    gameplayInit: true,

    currentQuestion: 0,

    score: 0,

    wrongAnswer: false,
    wrongAnswers: 2,

    endGame: false,

    pageOverlayShow: false,
    globalOverlayShow: false

  },

  audios: {
    bg: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/bg-sound.mp3'], loop: true, volume: 0.4, onend: function() { }}),
    click: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/click.mp3'], loop: false, volume: 0.2, onend: function() { }}),
    overlayOpen: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/overlay-open.mp3'], loop: false, volume: 1, onend: function() { }}),
    lauraJump: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/laura-jump.mp3'], loop: false, volume: 0.4, onend: function() { }}),
    correctAnswer: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/correct-answer.mp3'], loop: false, volume: 0.6, onend: function() { }}),
    incorrectAnswer: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/incorrect-answer.mp3'], loop: false, volume: 0.6, onend: function() { }}),
    endGameSuccess: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/end-game-success.mp3'], loop: false, volume: 1, onend: function() { }}),
    endGameFailed: new Howl({ src: ['soft-theme/grupo-positivo/assets/medias/end-game-failed.mp3'], loop: false, volume: 1, onend: function() { }})
  },

  // Método inicial
  init: function() {
  },

  // Método para exibir o preloader
  // ** NÃO ALTERAR **
  showLoader: function() {

    $('body#soft > main').append('<div id="soft-loader"><div></div></div></main>');
    gsap.to($('body#soft > main > #soft-loader'), { duration: 0.5, delay: 0, autoAlpha: 1, ease: 'power4.out', onComplete:function() { }});

  },

  // Método útil para ações comuns em todas ou na maioria das telas
  default: function() {

    $('#soft main #soft-pages .soft-current-page *').each(function() {
      if ($(this).attr('soft-global-content') != undefined) {
        if ($(this).attr('soft-global-content') == 'title') {
          $(this).html(softContent[soft.languageIndex].contentTitle);
          $(this).val(softContent[soft.languageIndex].contentTitle);
        }
      }
      if ($(this).attr('soft-page-content') != undefined) {
        $(this).html(soft.pageContent[$(this).attr('soft-page-content')]);
        $(this).val(soft.pageContent[$(this).attr('soft-page-content')]);
      }
    });

    // Caso a hash mude pra qualquer outra página
    $(window).on('hashchange', function() {
      if (theme.vars.pageOverlayShow == true) theme.pageOverlay('hide');
      if (theme.vars.globalOverlayShow == true) theme.globalOverlay('hide');
    });

    gsap.to($('#soft main #soft-pages .soft-current-page'), { delay: 1, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});

  },

  // Método útil para ações após o final das transições de telas e elementos
  endTransition: function() {

    soft.blockAll(false);

    $('body#soft > main > #soft-loader').remove();

    $('#soft main .btn').addClass('ease');

    // Click dos botões
    $(document).off('click', '#soft main .btn').on('click', '#soft main .btn', function() {
      if (theme.vars.initApp == false) theme.audios.click.play();
    });

  },

  // Método para avançar telas
  nextPage: function() {

    soft.blockAll(true);

    gsap.to($('#soft main #soft-pages .soft-page'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 2, ease: 'expo.out', onComplete: function() {
      soft.nextPage();
    }});

  },

  // Método para voltar telas
  prevPage: function() {

    soft.blockAll(true);

    gsap.to($('#soft main #soft-pages .soft-page'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 2, ease: 'expo.out', onComplete: function() {
      soft.prevPage();
    }});

  },

  // Método para ir à uma tela específica
  goToPage: function(id) {

    soft.blockAll(true);

    gsap.to($('#soft main #soft-pages .soft-page'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 2, ease: 'expo.out', onComplete: function() {
      soft.goToPage(id);
    }});

  },

  // Método da tela SplashScreen
  splashScreen: function() {

    theme.default();

    gsap.to($('#soft main #soft-pages #splash-screen .logo-aprende-brasil'), { delay: 1, duration: 0.8, scale: 1, ease: 'expo.out', onComplete: function() {}});
    gsap.to($('#soft main #soft-pages #splash-screen .logo-aprende-brasil'), { delay: 2, duration: 0.8, autoAlpha: 0, scale: 2, ease: 'expo.out', onComplete: function() {
      soft.nextPage();
    }});

  },

  // Método da tela Início
  start: function() {

    theme.default();

    if (theme.vars.initApp == true) $('#soft main #soft-pages #start #top-buttons').css('display', 'none');

    gsap.to($('#soft main #soft-pages #start h1'), { delay: 1, duration: 1, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});
    gsap.to($('#soft main #soft-pages #start .btn-start'), { delay: 1.4, duration: 1, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {
      theme.endTransition();
    }});

    $(document).off('click', '#soft main #soft-pages #start .btn-start').on('click', '#soft main #soft-pages #start .btn-start', function() {
      //soft.fullScreen('on');
      theme.goToPage('gameplay');
      if (theme.vars.initApp == true) {
        theme.vars.initApp = false;
        theme.audios.bg.play();
      }
    });
    
  },

  // Método da tela Gameplay
  gameplay: function() {

    theme.resetVars();

    theme.default();

    gsap.to($('#soft main #soft-pages #gameplay .board'), { delay: 1.1, duration: 1, bottom: 0, autoAlpha: 1, ease: 'expo.out', onComplete: function() {}});
    gsap.to($('#soft main #soft-pages #gameplay h1'), { delay: 1.2, duration: 1, scale: 1, autoAlpha: 1, ease: 'expo.out', onComplete: function() {
      theme.endTransition();
      if (theme.vars.gameplayInit == true) {
        theme.vars.gameplayInit = false;
        theme.pageOverlay('show', 0, 'left');
      }
      else {
        gsap.to($('#soft main #soft-pages #gameplay .board .laura'), { delay: 1, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {
          theme.lauraMove();
        }});
      }
    }});
    
  },

  lauraMove: function() {

    theme.audios.lauraJump.play();

    gsap.to($(document), { delay: 1, duration: 0, onComplete: function() {
      $('#soft main #soft-pages #gameplay .board .laura').removeAttr('class').addClass('laura ice-block-' + (theme.vars.currentQuestion + 1) + ' laura-' + (Math.floor(Math.random() * 2) + 1));
      gsap.to($('#soft main #soft-pages #gameplay .board .laura div'), { delay: 0, duration: 0.1, autoAlpha: 0, ease: 'none', onComplete: function() {}});
      gsap.to($('#soft main #soft-pages #gameplay .board .laura .laura-jump'), { delay: 0, duration: 0.1, autoAlpha: 1, ease: 'none', onComplete: function() {}});
    }});
    
    gsap.to($('#soft main #soft-pages #gameplay .board .laura'), { delay: 1, duration: 1, left: pageGameplay.iceBlocksPositions[theme.vars.currentQuestion].left, top: pageGameplay.iceBlocksPositions[theme.vars.currentQuestion].top, height: pageGameplay.iceBlocksPositions[theme.vars.currentQuestion].height, ease: 'expo.out', onComplete: function() {}});
    
    gsap.to($(document), { delay: 1.6, duration: 0, onComplete: function() {
      gsap.to($('#soft main #soft-pages #gameplay .board .laura div'), { delay: 0, duration: 0.1, autoAlpha: 0, ease: 'none', onComplete: function() {}});
      gsap.to($('#soft main #soft-pages #gameplay .board .laura .laura-stop'), { delay: 0, duration: 0.1, autoAlpha: 1, ease: 'none', onComplete: function() {}});
    }});
    
    gsap.to($('#soft main #soft-pages #gameplay .board .laura div'), { delay: 1, duration: 0.3, top: '-30%', ease: 'power2.out', onComplete: function() {
      gsap.to($('#soft main #soft-pages #gameplay .board .laura div'), { delay: 0, duration: 0.3, top: 0, ease: 'power2.in', onComplete: function() {}});
    }});

    gsap.to($(document), { delay: 2.5, duration: 0, onComplete: function() {
      if (theme.vars.currentQuestion < 11) {
        theme.pageOverlay('show', theme.vars.currentQuestion, 'question');
      }
      else {
        gsap.to($('#soft main #soft-pages #gameplay .board .laura'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.out', onComplete: function() {}});
        theme.pageOverlay('show', 3, 'right');
        $('#soft main #soft-pages .soft-current-page .overlay.overlay-3 p strong').html(theme.vars.score + ' pontos');
        theme.audios.endGameSuccess.play();
      }
    }});

  },

  // Método da tela final de Texto e desenho
  textDraw: function() {

    theme.default();

    gsap.to($('#soft main #soft-pages #text-draw .logo'), { delay: 1, duration: 1, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {
      theme.endTransition();
      theme.pageOverlay('show', 0, 'right');
    }});

    theme.draw();
    
  },

  draw: function() {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    let isDrawing = false;
    let currentPath = { points: [], lineWidth: 5, color: '#000000' };
    let layers = [[]];
    let currentLayerIndex = 0;

    let penColor = '#000000';

    function start(x, y) {
      isDrawing = true;
      currentPath = { points: [{ x, y }], lineWidth: document.getElementById('thickness').value, color: penColor };
    }

    function changeBackground() {
      const backgroundColor = document.getElementById('background-color').value;
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
        
      layers.forEach((layer, index) => {
        layer.forEach(path => {
            context.beginPath();
            context.moveTo(path.points[0].x, path.points[0].y);
            context.lineWidth = path.lineWidth;
            context.strokeStyle = path.color;

            for (const point of path.points.slice(1)) {
                context.lineTo(point.x, point.y);
            }

            context.stroke();
            });
        });
    }

    function draw(x, y) {
        if (!isDrawing) return;

        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = currentPath.lineWidth;
        context.strokeStyle = currentPath.color;

        const lastPoint = currentPath.points[currentPath.points.length - 1];
        const distance = Math.sqrt(Math.pow(lastPoint.x - x, 2) + Math.pow(lastPoint.y - y, 2));

        context.beginPath(); // adicionado para evitar sobreposição de traços

        if (distance > 1) {
            // Calcula um ponto intermediário entre o último ponto e o novo ponto
            const controlPointX = (lastPoint.x + x) / 2;
            const controlPointY = (lastPoint.y + y) / 2;

            // Desenha uma curva suave entre o último ponto, o ponto intermediário e o novo ponto
            context.quadraticCurveTo(lastPoint.x, lastPoint.y, controlPointX, controlPointY);
            context.quadraticCurveTo(controlPointX, controlPointY, x, y);
            context.stroke();

            // Adiciona apenas os dois novos pontos ao caminho atual
            currentPath.points.push({ x: controlPointX, y: controlPointY });
            currentPath.points.push({ x, y });
        } else {
            context.lineTo(x, y);
            context.stroke();
            currentPath.points.push({ x, y });
        }
    }

    function stop() {
        if (!isDrawing) return;
        isDrawing = false;
        layers[currentLayerIndex].push(currentPath);
    }

    function undo() {
      if (layers[currentLayerIndex].length === 0 && currentLayerIndex > 0) {
        currentLayerIndex--;
      }
    
      if (layers[currentLayerIndex].length === 0) return;
    
      layers[currentLayerIndex].pop();
    
      // Limpa o canvas com a cor branca
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      layers.forEach((layer, index) => {
        if (index <= currentLayerIndex) {
          layer.forEach((path) => {
            context.beginPath();
            context.moveTo(path.points[0].x, path.points[0].y);
            context.lineWidth = path.lineWidth;
            context.strokeStyle = path.color;
    
            for (const point of path.points.slice(1)) {
              context.lineTo(point.x, point.y);
            }
    
            context.stroke();
          });
        }
      });
    }    

    function download() {
        const link = document.createElement('a');
        link.download = 'desenho.png';
        link.href = canvas.toDataURL();
        link.click();
    }

    function clearCanvas() {
        // Limpa o canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Recria a matriz de camadas
        layers = [[]];
        currentLayerIndex = 0;

        // Define a cor de fundo padrão
        context.fillStyle = '#FFFFFF';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', (event) => {
        start(event.offsetX, event.offsetY);
    });

    canvas.addEventListener('mousemove', (event) => {
        draw(event.offsetX, event.offsetY);
    });

    canvas.addEventListener('mouseup', () => {
        stop();
    });

    canvas.addEventListener('touchstart', (event) => {
        // Obter a posição do canvas na página
        const canvasRect = canvas.getBoundingClientRect();
        const canvasX = canvasRect.left;
        const canvasY = canvasRect.top;
        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;
    
        // Adicionar os deslocamentos do evento de toque
        const touchX = (event.touches[0].pageX - canvasX) * scaleX;
        const touchY = (event.touches[0].pageY - canvasY) * scaleY;
        start(touchX, touchY);
    });
    
    canvas.addEventListener('touchmove', (event) => {
        event.preventDefault();
        // Obter a posição do canvas na página
        const canvasRect = canvas.getBoundingClientRect();
        const canvasX = canvasRect.left;
        const canvasY = canvasRect.top;
        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;
    
        // Adicionar os deslocamentos do evento de toque
        const touchX = (event.touches[0].pageX - canvasX) * scaleX;
        const touchY = (event.touches[0].pageY - canvasY) * scaleY;
        draw(touchX, touchY);
    });
    
    canvas.addEventListener('touchend', () => {
        stop();
    });

    document.getElementById('download-btn').addEventListener('click', function() {
        
    });

    function dataURLtoFile(dataURL, filename) {
        console.log(filename); // Verificar o valor da variável filename
        var arr = dataURL.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    function saveAs(file) {
        var blob = new Blob([file], { type: 'image/png' });
        saveAs(blob, 'screenshot.png');
    }

    function saveAs(blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        } else {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = 'display: none';
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    }

    $(document).off('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-undo').on('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-undo', function() {
      undo();
    });

    $(document).off('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-pen-color').on('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-pen-color', function(event) {
      event.stopPropagation();
      $(this).addClass('active');
    });

    $(document).off('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-pen-color .pen-colors .btn').on('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-pen-color .pen-colors .btn', function(event) {
      event.stopPropagation();
      penColor = $(this).attr('color');
      $(this).parent().find('.btn').removeClass('selected');
      $(this).addClass('selected');
      $(this).parent().parent().removeClass('active');
    });

    $(document).off('click', 'body').on('click', 'body', function() {
      $('#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-pen-color').removeClass('active');
    });

    $(document).off('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-download').on('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-download', function() {
      // Captura de tela da div específica
      /*var div = document.getElementById('text-draw-wrap');
      html2canvas(div).then(function(canvas) {
          // Converte o canvas em um arquivo PNG
          var imgData = canvas.toDataURL('image/png');
          var filename = 'screenshot.png';
          
          // Cria um elemento <a> com o link para a imagem
          var link = document.getElementById('download-link');
          link.href = imgData;
          link.download = filename;
          
          // Clica no elemento para iniciar o download
          link.click();
      });*/
      download();
    });

    $(document).off('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-print').on('click', '#soft main #soft-pages #text-draw .draw-box .buttons-tools .btn-print', function() {
      window.print();
    });

  },

  // Método do Overlay da página
  pageOverlay: function(action, pageOverlayIndex, laura) {

    theme.vars.pageOverlayShow = true;

    theme.audios.overlayOpen.play();

    if (action == 'show') {

      if (laura == 'question') {
        
        $('#soft main #soft-pages .soft-current-page').append('\
          <div class="overlay overlay-question overlay-question-' + pageOverlayIndex + '">\
            <div class="wrap-scaled soft-scaled" initial-width="1920" initial-height="1080">\
              <div class="content-box">\
                <h2 soft-page-content="title">Questão ' + (pageOverlayIndex + 1) + '</h2>\
                <div soft-page-content="text"><div class="photos"></div><p>' + pageGameplay.iceBlocksPositions[pageOverlayIndex].question + '</p></div>\
                <div class="buttons">\
                  <div class="soft-btn btn alternative-btn ease"><div class="bg"></div><p>por que</p></div>\
                  <div class="soft-btn btn alternative-btn ease"><div class="bg"></div><p>porque</p></div>\
                  <div class="soft-btn btn alternative-btn ease"><div class="bg"></div><p>porquê</p></div>\
                  <div class="soft-btn btn alternative-btn ease"><div class="bg"></div><p>por quê</p></div>\
                  <div class="soft-btn btn-next btn ease inactive"><div class="bg"></div><p>' + soft.pageOverlayContent[0].btnNext + '</p></div>\
                </div>\
              </div>\
            </div>\
            <div class="laura-ice-block soft-scaled question" initial-width="1400" initial-height="1000">\
              <div class="laura"></div>\
            </div>\
          </div>\
        ');

        for (var i=0; i < pageGameplay.iceBlocksPositions[pageOverlayIndex].photos.length; i++) {
          $('#soft main #soft-pages .soft-current-page .overlay-question .photos').append('<div class="photo btn ease"><img src="soft-theme/grupo-positivo/assets/img/gameplay/photos/' + pageGameplay.iceBlocksPositions[pageOverlayIndex].photos[i] + '"></div>');
        }

        gsap.to($('#soft main #soft-pages .soft-current-page .overlay-question-' + pageOverlayIndex), { delay: 0, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});

        $('#soft main #soft-pages .soft-current-page .overlay-question .alternative-btn').eq(pageGameplay.iceBlocksPositions[pageOverlayIndex].correctAnswer).addClass('correct-answer');

        theme.vars.currentQuestion++;

      }
      else if (laura == 'photo') {

        $('#soft main #soft-pages .soft-current-page').append('\
          <div class="overlay overlay-photo-' + pageOverlayIndex + ' photo-zoom">\
            <div class="wrap-scaled soft-scaled" initial-width="1920" initial-height="1080">\
              <div class="content-box">\
                <img src="soft-theme/grupo-positivo/assets/img/gameplay/photos/' + pageGameplay.iceBlocksPositions[theme.vars.currentQuestion-1].photos[pageOverlayIndex] + '">\
                <div class="buttons">\
                  <div class="soft-btn btn-prev btn ease"><div class="bg"></div><p>Fechar</p></div>\
                </div>\
              </div>\
            </div>\
          </div>\
        ');
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay-photo-' + pageOverlayIndex), { delay: 0, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});

      }
      else {

        $('#soft main #soft-pages .soft-current-page').append('\
          <div class="overlay overlay-' + pageOverlayIndex + '">\
            <div class="wrap-scaled soft-scaled" initial-width="1920" initial-height="1080">\
              <div class="content-box">\
                <h2 soft-page-content="title">' + soft.pageOverlayContent[pageOverlayIndex].title + '</h2>\
                <div soft-page-content="text">' + soft.pageOverlayContent[pageOverlayIndex].text + '</div>\
                <div class="buttons">\
                  <div class="soft-btn btn-prev btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[pageOverlayIndex].btnPrev + '</p></div>\
                  <div class="soft-btn btn-next btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[pageOverlayIndex].btnNext + '</p></div>\
                </div>\
              </div>\
            </div>\
            <div class="laura-ice-block soft-scaled ' + laura + '" initial-width="1400" initial-height="1000">\
              <div class="laura"></div>\
              <div class="ice-block"></div>\
            </div>\
          </div>\
        ');
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay-' + pageOverlayIndex), { delay: 0, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});

      }

      soft.toScale();

      if (laura == 'left') {
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay .laura-ice-block.left .laura'), { delay: 0.2, duration: 0.5, left: '-1%', bottom: '10%', ease: 'expo.out', onComplete: function() {}});
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay .laura-ice-block.left .ice-block'), { delay: 0.2, duration: 0.5, left: '-32%', bottom: '-2%', ease: 'expo.out', onComplete: function() {}});
      }
      else if (laura == 'right') {
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay .laura-ice-block.right .laura'), { delay: 0.2, duration: 0.5, right: '-1%', bottom: '10%', ease: 'expo.out', onComplete: function() {}});
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay .laura-ice-block.right .ice-block'), { delay: 0.2, duration: 0.5, right: '-14%', bottom: '-5%', ease: 'expo.out', onComplete: function() {}});
      }
      else if (laura == 'question') {
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay .laura-ice-block.question .laura'), { delay: 0.2, duration: 0.5, left: '-13%', bottom: 0, ease: 'expo.out', onComplete: function() {}});
      }
    }
    else if (action == 'hide') {
      if (pageOverlayIndex == undefined) {
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.in', onComplete: function() {
          $('#soft main #soft-pages .soft-current-page .overlay').remove();
          theme.vars.pageOverlayShow = false;
        }});
      }
      else {
        gsap.to($('#soft main #soft-pages .soft-current-page .overlay-' + pageOverlayIndex), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.in', onComplete: function() {
          $('#soft main #soft-pages .soft-current-page .overlay-' + pageOverlayIndex).remove();
          theme.vars.pageOverlayShow = false;
        }});
      }
    }

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-0 .btn-next, #soft main #soft-pages #gameplay .overlay.overlay-2 .btn-prev').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-0 .btn-next, #soft main #soft-pages #gameplay .overlay.overlay-2 .btn-prev', function() {
      theme.audios.overlayOpen.play();
      gsap.to($('#soft main #soft-pages #gameplay .overlay .content-box'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.in', onComplete: function() {
        $('#soft main #soft-pages #gameplay .overlay').removeAttr('class').addClass('overlay overlay-1');
        $('#soft main #soft-pages #gameplay .overlay .content-box').html('\
          <h2 soft-page-content="title">' + soft.pageOverlayContent[1].title + '</h2>\
          <div soft-page-content="text">' + soft.pageOverlayContent[1].text + '</div>\
          <div class="buttons">\
            <div class="soft-btn btn-prev btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[1].btnPrev + '</p></div>\
            <div class="soft-btn btn-next btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[1].btnNext + '</p></div>\
          </div>');
      }});
      gsap.to($('#soft main #soft-pages #gameplay .overlay .content-box'), { delay: 0.5, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-1 .btn-prev').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-1 .btn-prev', function() {
      theme.audios.overlayOpen.play();
      gsap.to($('#soft main #soft-pages #gameplay .overlay .content-box'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.in', onComplete: function() {
        $('#soft main #soft-pages #gameplay .overlay').removeAttr('class').addClass('overlay overlay-0');
        $('#soft main #soft-pages #gameplay .overlay .content-box').html('\
          <h2 soft-page-content="title">' + soft.pageOverlayContent[0].title + '</h2>\
          <div soft-page-content="text">' + soft.pageOverlayContent[0].text + '</div>\
          <div class="buttons">\
            <div class="soft-btn btn-next btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[0].btnNext + '</p></div>\
          </div>');
      }});
      gsap.to($('#soft main #soft-pages #gameplay .overlay .content-box'), { delay: 0.5, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-1 .btn-next').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-1 .btn-next', function() {
      theme.audios.overlayOpen.play();
      gsap.to($('#soft main #soft-pages #gameplay .overlay .content-box'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.in', onComplete: function() {
        $('#soft main #soft-pages #gameplay .overlay').removeAttr('class').addClass('overlay overlay-2');
        $('#soft main #soft-pages #gameplay .overlay .content-box').html('\
          <h2 soft-page-content="title">' + soft.pageOverlayContent[2].title + '</h2>\
          <div soft-page-content="text">' + soft.pageOverlayContent[2].text + '</div>\
          <div class="buttons">\
            <div class="soft-btn btn-prev btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[2].btnPrev + '</p></div>\
            <div class="soft-btn btn-next btn ease"><div class="bg"></div><p>' + soft.pageOverlayContent[2].btnNext + '</p></div>\
          </div>');
      }});
      gsap.to($('#soft main #soft-pages #gameplay .overlay .content-box'), { delay: 0.5, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-2 .btn-next').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-2 .btn-next', function() {
      theme.pageOverlay('hide', $(this).parent().parent().parent().parent().attr('class').split('-')[1]);
      gsap.to($('#soft main #soft-pages #gameplay .board .laura'), { delay: 1, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {
        theme.lauraMove();
      }});
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay-question .photos .photo.btn').on('click', '#soft main #soft-pages #gameplay .overlay-question .photos .photo.btn', function() {
      theme.pageOverlay('show', $(this).index(), 'photo');
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.photo-zoom .btn-prev').on('click', '#soft main #soft-pages #gameplay .overlay.photo-zoom .btn-prev', function() {
      theme.pageOverlay('hide', 'photo-' + $(this).parent().parent().parent().parent().attr('class').split('-')[2].split(' ')[0]);
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay-question .alternative-btn').on('click', '#soft main #soft-pages #gameplay .overlay-question .alternative-btn', function() {
      $('#soft main #soft-pages #gameplay .overlay-question .alternative-btn').addClass('inactive');
      if ($(this).hasClass('correct-answer')) {
        theme.audios.correctAnswer.play();
        $(this).addClass('correct-active');
        $('#soft main #soft-pages #gameplay .overlay-question .content-box p span').html($('p', this).html()).addClass('correct');
      }
      else {
        theme.audios.incorrectAnswer.play();
        theme.vars.wrongAnswer = true;
        $(this).addClass('incorrect-active');
        $('#soft main #soft-pages #gameplay .overlay-question .alternative-btn.correct-answer').addClass('correct');
        $('#soft main #soft-pages #gameplay .overlay-question .content-box p span').html($('#soft main #soft-pages #gameplay .overlay-question .alternative-btn.correct-answer p').html()).addClass('incorrect');
      }
      $('#soft main #soft-pages #gameplay .overlay-question .btn-next').removeClass('inactive');
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay-question .btn-next').on('click', '#soft main #soft-pages #gameplay .overlay-question .btn-next', function() {
      theme.pageOverlay('hide');
      if (theme.vars.wrongAnswer == true) {
        theme.vars.wrongAnswer = false;
        gsap.to($('#soft main #soft-pages #gameplay .stars ul li').eq(theme.vars.wrongAnswers).find('i'), { delay: 1, duration: 0.5, autoAlpha: 0, scale: 2, ease: 'expo.out', onComplete: function() {
          theme.vars.wrongAnswers--;
          if (theme.vars.wrongAnswers < 0) {
            theme.pageOverlay('show', 4, 'left');
            theme.audios.endGameFailed.play();
          }
          else theme.lauraMove();
        }});
      }
      else {
        gsap.to($(document), { delay: 1, duration: 0, onComplete: function() {
          theme.vars.score = theme.vars.score + 50;
          $('#soft main #soft-pages #gameplay .laura-score .score').html(theme.vars.score);
          theme.lauraMove();
        }});
      }
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-3 .btn-prev').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-3 .btn-prev', function() {
      theme.pageOverlay('hide', $(this).parent().parent().parent().parent().attr('class').split('-')[1]);
      theme.resetVars();
      theme.goToPage('start');
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-3 .btn-next').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-3 .btn-next', function() {
      theme.pageOverlay('hide', $(this).parent().parent().parent().parent().attr('class').split('-')[1]);
      theme.goToPage('text-draw');
    });

    $(document).off('click', '#soft main #soft-pages #gameplay .overlay.overlay-4 .btn-prev').on('click', '#soft main #soft-pages #gameplay .overlay.overlay-4 .btn-prev', function() {
      theme.pageOverlay('hide', $(this).parent().parent().parent().parent().attr('class').split('-')[1]);
      theme.resetVars();
      theme.goToPage('start');
    });

    $(document).off('click', '#soft main #soft-pages #text-draw .overlay.overlay-0 .btn-next').on('click', '#soft main #soft-pages #text-draw .overlay.overlay-0 .btn-next', function() {
      theme.pageOverlay('hide');
    });

  },

  // Método do Overlay global
  globalOverlay: function(action, globalOverlayIndex) {

    theme.vars.globalOverlayShow = true;

    theme.audios.overlayOpen.play();

    if (action == 'show') {
      $('#soft main').append('\
        <div id="' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayId + '" class="overlay">\
          <div class="wrap-scaled soft-scaled" initial-width="1920" initial-height="1080">\
            <div class="content-box">\
              <h2 soft-page-content="title">' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayContent.title + '</h2>\
              <div soft-page-content="text">' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayContent.text + '</div>\
              <div class="buttons">\
                <div class="soft-btn btn-prev btn ease"><div class="bg"></div><p>' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayContent.btnPrev + '</p></div>\
                <div class="soft-btn btn-next btn ease"><div class="bg"></div><p>' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayContent.btnNext + '</p></div>\
              </div>\
            </div>\
          </div>\
        </div>\
      ');

      soft.toScale();

      gsap.to($('#soft > main > #' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayId), { delay: 0, duration: 0.5, autoAlpha: 1, scale: 1, ease: 'expo.out', onComplete: function() {}});
    }
    else if (action == 'hide') {
      if (globalOverlayIndex == undefined) {
        gsap.to($('#soft > main > .overlay'), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.in', onComplete: function() {
          $('#soft > main > .overlay').remove();
          theme.vars.globalOverlayShow = false;
        }});
      }
      else {
        gsap.to($('#soft > main > #' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayId), { delay: 0, duration: 0.5, autoAlpha: 0, scale: 1.5, ease: 'expo.out', onComplete: function() {
          $('#soft > main > #' + softContent[soft.languageIndex].contentGlobal.overlays[globalOverlayIndex].overlayId).remove();
          theme.vars.globalOverlayShow = false;
        }});
      }
    }

    $(document).off('click', '#soft > main > .overlay .btn-prev').on('click', '#soft > main > .overlay .btn-prev', function() {
      theme.globalOverlay('hide');
    });

    $(document).off('click', '#soft > main > .overlay .btn-next').on('click', '#soft > main > .overlay .btn-next', function() {
      theme.resetVars();
      theme.globalOverlay('hide');
      gsap.to($(document), { delay: 0.5, duration: 0, onComplete: function() {
        theme.goToPage('start');
      }});
    });

  },

  resetVars: function() {

    theme.vars.currentQuestion = 0;

    theme.vars.score = 0;

    theme.vars.wrongAnswer = false;
    theme.vars.wrongAnswers = 2;

    theme.vars.endGame = false;

  }

}

$(document).on('ready', function() {
  theme.init();
});

// Botão Home/Sair
$(document).off('click', '#soft .btn-home').on('click', '#soft .btn-home', function() {
  theme.globalOverlay('show', 0);
});

// Botão Créditos
$(document).off('click', '#soft .btn-credits').on('click', '#soft .btn-credits', function() {
  theme.globalOverlay('show', 1);
});

// Botão Som
$(document).off('click', '#soft .btn-sound').on('click', '#soft .btn-sound', function() {
  if (Howler._muted == false) {
    $(this).removeClass('sound-on').addClass('sound-off');
    Howler.mute(true);
  }
  else {
    $(this).removeClass('sound-off').addClass('sound-on');
    Howler.mute(false);
  }
});

// Botão Fullscreen
$(document).off('click', '#soft .btn-fullscreen').on('click', '#soft .btn-fullscreen', function() {
  if ($('body').hasClass('fullscreen')) soft.fullScreen('off');
  else soft.fullScreen('on');
});