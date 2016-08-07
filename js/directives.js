angular.module("MyApp.directives", [])
    .directive("activeClass", ['$location', function($location) {
        return {
            scope: {class: '@activeClass'},
            link: function(scope, element, attrs, controller, transcludeFn) {
                scope.$on('$locationChangeSuccess', function() {
                    element.toggleClass(scope.class,
                            $location.path().startsWith(
                                attrs.href.replace(/^#/, '')));
                });
            }
        };
    }])