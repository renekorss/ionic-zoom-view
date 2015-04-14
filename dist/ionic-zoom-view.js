"use strict";

(function () {

    "use strict";

    var zoomView = function ($compile, $ionicModal) {
        return {

            restrict: "A",

            link: function link(scope, elem, attr) {

                elem.attr("ng-click", "showZoomView()");
                elem.removeAttr("zoom-view");
                $compile(elem)(scope);

                var zoomViewTemplate = "\n                    <ion-modal-view>\n                        <ion-header-bar>\n                            <h1 class=\"title\"></h1>\n                            <button ng-click=\"closeZoomView()\" class=\"button button-clear button-positive\">Done</button>\n                        </ion-header-bar>\n                        <ion-content class=\"s-login-changelogContent\">\n                            <ion-scroll zooming=\"true\" direction=\"xy\" style=\"width: 100%; height: 500px;\">\n                                <div style=\"width: 500px; height: 500px; background: url('{{ngSrc}}') no-repeat\"></div>\n                            </ion-scroll>\n                        </ion-content>\n                    </ion-modal-view>\n                ";

                scope.zoomViewModal = $ionicModal.fromTemplate(zoomViewTemplate, {
                    scope: scope,
                    animation: "slide-in-up"
                });

                scope.showZoomView = function () {
                    scope.zoomViewModal.show();
                    scope.ngSrc = attr.ngSrc;
                };

                scope.closeZoomView = function () {
                    scope.zoomViewModal.hide();
                };
            } };
    };

    angular.module("ion-zoom-view", []).directive("zoomView", zoomView);
})();