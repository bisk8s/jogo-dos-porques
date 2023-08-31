var pageTextDraw = {

    pageLoader: {
        loaderShowMethod: 'theme.showLoader()',
        loaderFiles: {
            files: [
                
            ]
        }
    },

    pageHtml: '\
        <h1><img src="soft-theme/grupo-positivo/assets/img/logo.png" /></h1>\
        <div class="laura-score">\
            <img src="soft-theme/grupo-positivo/assets/img/text-draw/laura-text.png" />\
            <p>Laura</p>\
            <div soft-page-content="lauraText" class="text"></div>\
        </div>\
        <div id="text-draw-wrap" class="wrap-scaled soft-scaled" initial-width="1920" initial-height="1080">\
            <img src="soft-theme/grupo-positivo/assets/img/text-draw/bg.jpg" class="bg" />\
            <div class="text-box">\
                <img src="soft-theme/grupo-positivo/assets/img/text-draw/text-box-bg.png" />\
                <h2 soft-page-content="textBoxTitle"></h2>\
                <textarea maxlength="500"></textarea>\
            </div>\
            <div class="draw-box">\
                <img src="soft-theme/grupo-positivo/assets/img/text-draw/draw-box-bg.png" />\
                <h2 soft-page-content="drawBoxTitle"></h2>\
                <canvas id="canvas" width="980" height="550"></canvas>\
                <div class="buttons-tools">\
                    <div class="soft-btn btn-undo btn"><div class="bg"></div></div>\
                    <div class="soft-btn btn-bg-color btn"><div class="bg"></div></div>\
                    <div class="soft-btn btn-pen-color btn"><div class="bg"></div>\
                        <div class="pen-colors">\
                            <div class="btn btn-black selected" color="#000000"></div>\
                            <div class="btn btn-grey" color="#777777"></div>\
                            <div class="btn btn-brown" color="#8E4700"></div>\
                            <div class="btn btn-red" color="#FF0000"></div>\
                            <div class="btn btn-orange" color="#FFA500"></div>\
                            <div class="btn btn-yellow" color="#FFFF00"></div>\
                            <div class="btn btn-green" color="#00FF00"></div>\
                            <div class="btn btn-blue" color="#0000FF"></div>\
                            <div class="btn btn-pink" color="#F367A3"></div>\
                        </div>\
                    </div>\
                    <div class="soft-btn pen-width-stroke-btn btn"><div class="bg"></div></div>\
                    <div class="soft-btn btn-download btn"><div class="bg"></div></div>\
                    <div class="soft-btn btn-print btn"><div class="bg"></div></div>\
                </div>\
                <div style="display:none">\
                    <input type="color" id="color">\
                    <input type="range" id="thickness" min="1" max="50" value="5">\
                    <button onclick="theme.drawUndo()">Desfazer</button>\
                    <button onclick="download()">Download</button>\
                    \
                    <input type="color" id="background-color">\
                    <button onclick="changeBackground()">Mudar Fundo</button>\
                    <button onclick="clearCanvas()">Limpar</button>\
                    \
                    <button id="download-btn">Baixar imagem</button>\
                    <a id="download-link" style="display: none;"></a>\
                </div>\
            </div>\
        </div>\
    ',

    pageTemplate: 'no-template',

    pageIncludes: [
        {
            includeId: 'top-buttons',
            includeHandler: '',
            includeClass: ''
        }
    ],

    pageShowMethod: 'theme.textDraw()',
    pageHideMethod: ''

}