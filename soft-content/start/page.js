var pageStart = {

    pageLoader: {
        loaderShowMethod: 'theme.showLoader()',
        loaderFiles: {
            files: []
        }
    },

    pageHtml: '\
        <div class="left-ice-block"></div>\
        <div class="right-ice-block"></div>\
        <div class="right-ice-block-2"></div>\
        <h1 soft-global-content="title"></h1>\
        <div class="soft-btn btn-start btn"><div class="bg"></div><p soft-page-content="btnStart"></p></div>',

    pageTemplate: 'no-template',

    pageIncludes: [
        {
            includeId: 'top-buttons',
            includeHandler: '',
            includeClass: ''
        }
    ],

    pageShowMethod: 'theme.start()',
    pageHideMethod: ''

}