/* ng-surprise v0.2.0
** (c)2015 Rafael Camargo
** http://rafaelcamargo.github.io/ng-surprise
** License: MIT
*/
angular.module('ngSurprise',[]).controller('surpriseController',['$scope',function(a){function b(b){a.sequence.push(b.keyCode.toString()),c(),d()}function c(){var b=a.surpriseTrigger.split(',').length;a.sequence.length>b&&a.sequence.shift()}function d(){e()&&a.surprise()}function e(){for(var b=a.surpriseTrigger.split(','),c=0;c<b.length;c++)if(b[c]!==a.sequence[c])return!1;return!0}function f(){document.removeEventListener('keydown',b)}a.sequence=[],document.addEventListener('keydown',b),a.$on('$destroy',f)}]).directive('surprise',function(){return { restrict:'A',controller:'surpriseController',scope: { surprise:'=',surpriseTrigger:'@' } }});
