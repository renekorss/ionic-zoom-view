(() => {

    'use strict';

    const zoomView = ($compile, $ionicModal) => {
        return {

            restrict: 'A',

            link(scope, elem, attr) {

                elem.attr('ng-click', 'showZoomView()');
                elem.removeAttr('zoom-view');
                $compile(elem)(scope);

                const zoomViewTemplate = `
                    <ion-modal-view>
                        <ion-header-bar>
                            <h1 class="title"></h1>
                            <button ng-click="closeZoomView()" class="button button-clear button-positive">Done</button>
                        </ion-header-bar>
                        <ion-content class="s-login-changelogContent">
                            <ion-scroll zooming="true" direction="xy" style="width: 100%; height: 500px;">
                                <div style="width: 500px; height: 500px; background: url('{{ngSrc}}') no-repeat"></div>
                            </ion-scroll>
                        </ion-content>
                    </ion-modal-view>
                `;

                scope.zoomViewModal = $ionicModal.fromTemplate(zoomViewTemplate, {
                    scope,
                    animation: 'slide-in-up'
                });

                scope.showZoomView = () => {
                    scope.zoomViewModal.show();
                    scope.ngSrc = attr.ngSrc;
                };

                scope.closeZoomView = function() {
                    scope.zoomViewModal.hide();
                };

            },

        };
    };

    angular.module('ion-zoom-view', []).directive('zoomView', zoomView);

}());
