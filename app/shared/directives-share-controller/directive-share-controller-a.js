angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerA', function(){
        return {
            restrict: 'A',
            scope: {},
            template: '{{:: ctrl.person.name}} {{ctrl.person.food}} {{ctrl.person.drink}}',
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerA");
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });