skidinc.buy = {};
skidinc.buy.categories = ['autoscript', 'script', 'server'];
skidinc.buy.categoriesList = ['skidinc.autoscript.list', 'skidinc.script.listBuy', 'skidinc.server.list'];
skidinc.buy.categoriesDesc = [
    'buy autoscripts to automatize script execution.',
    'buy new, more powerful scripts.',
    'upgrade your servers to maximize your income.'
];

skidinc.buy.help = function() {
    var str = '<y>BUY HELP</y> buy new scripts, auto-scripts and upgrade servers:<br>' +
        '<b>-</b> <b>buy</b> command require <b>2 arguments</b> of type <b>string</b>.<br>' +
        '<b>-</b> first argument is the <b>category</b> of the thing you want to buy.<br>' +
        '<b>-</b> second argument is the <b>name</b> of the thing you want to buy.<br>' +
        '<b>-</b> get a list of all the things you can buy with <b>buy -l/-list</b>.';
    
    return skidinc.console.print(str);
};

skidinc.buy.list = function() {
    var str = '<y>BUY LIST</y>:<br>';
    
    for (var i = 0; i < skidinc.buy.categories.length; i++) {
        var category = skidinc.buy.categories[i],
            categoryList = skidinc.buy.categoriesList[i],
            categoryDesc = skidinc.buy.categoriesDesc[i];
        
        str += '<b>-</b> <z>' + category + '</z>: ' + categoryDesc + '<br><p class="text-bullet">' + eval(categoryList)() + '</p>';
    };
    
    return skidinc.console.print(str);
};

skidinc.buy.execute = function(args) {
    var exists = false,
        c;

    for (var category in skidinc.buy.categories) {
        var i = category,
            category = skidinc.buy.categories[i];
        
        if (args[0] == category) {
            exists = true;
            c = category;
        };
    };
    
    if (!exists)
        return skidinc.console.print('<x>ERR</x> <b>' + args[0] + '</b> is not valid category.');
    
    if (exists && args.length == 2) {
        var item = args[1];
        
        switch(c) {
            case 'autoscript':
                skidinc.autoscript.buy(item);
                break;
            
            case 'script':
                skidinc.script.buy(item);
                break;
            
            case 'server':
                skidinc.server.buy(item);
                break;
        };
    };
};