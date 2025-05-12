(function() {
    var promiseObj = WebSquare.startApplication();
    promiseObj.then(function(resolve, reject) {
        // to do
    });
})();


(async function() {
    var module = await import( /* webpackIgnore: true */ "./websquareModule.js");
    window.WebSquare = module.WebSquare;
    await WebSquare._loadModuleDynamic("engine.wUnit");
    await WebSquare.startApplication();
})();