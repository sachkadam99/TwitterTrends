var AppLoaders = angular.module('AppLoaders', []);

AppLoaders.service('AppFullPageLoader', [function () {

    this.overlay = null,
    this.create = function() {
        if(this.overlay) return;

        var _this = this;
        var loader = '<div class="app-loader" />';

        $('body').prepend(loader);

        this.overlay = $('body').find('.app-loader');
    },
    this.show= function() {
        this.overlay.css('display', 'block');
    },
    this.hide= function() {
        this.overlay.css('display', 'none');
    },
    this.remove= function() {
        this.overlay.remove();
        this.overlay = null;
    }

    this.create();

}]);
