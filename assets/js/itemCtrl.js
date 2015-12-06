var app = angular.module("itemApp", []);
        app.controller("itemCtrl", function ($scope) {
            $scope.master = {};
            $scope.user = {};
            $scope.email = {};
            $scope.card = [
                { paperType: 'Classic Crest White 100lb', printStyle: '1 sided print, no UV coating', quantity: 50, size: '3.5 x 2 in.', frontSide: 'assets/img/business_card.png', backSide: 'assets/img/business_card_back.png', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus euismod nunc sed suscipit. Integer eget pellentesque nisl. Etiam ultricies porttitor dolor a bibendum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet mi lorem. Pellentesque finibus est eget neque dictum ultricies. Nullam dignissim ligula eu est sollicitudin dapibus. Morbi id finibus urna, eu ullamcorper lacus.' }
            ];
            $scope.update = function (user) {
                $scope.master = angular.copy(user);
                console.log(user);
                if (!jQuery.isEmptyObject(user)) {
                    $('#save-alert.alert').show();
                    setTimeout(function () {
                        $('#save-alert.alert').fadeOut('fast');
                    }, 1000);
                }
                
            };
            $scope.reset = function (clicked) {
                $scope.user = angular.copy($scope.master);
                console.log("reset called");
                if (clicked) {
                    $('#reset-alert.alert').show();
                    setTimeout(function () {
                        $('#reset-alert.alert').fadeOut('fast');
                    }, 1000);
                }
            };
            $scope.reset();
            $scope.phoneInputs = [1];
            $scope.emailInputs = [1];
            $scope.addPhoneField = function () {
                $scope.phoneInputs.push({})
            }
            $scope.addEmailField = function () {
                $scope.emailInputs.push({})
            }
            $scope.add = function (card, user) {
                localStorage.clear();
                localStorage.setItem('Saved Card', JSON.stringify(card));
                localStorage.setItem('Saved User', JSON.stringify(user));
                //console.log(card);
                //console.log(user);
                console.log(user.fullName);
                if (user.fullName == undefined || user.fullName == 'undefined') {
                    return false;
                }
                else {
                    window.location = "cart-detail.html";
                }
            };
            $scope.zoom = function () {
                zoom.to({
                    element: document.querySelector('#card-preview')
                });
            }
            $scope.toggleCropMarks = function () {
                if ($('#cropMarks').prop("checked")) {
                    //console.log("checked");
                    $scope.safeApply(function() {
                        $('.preview-area').css("background", "");
                    });
                }
                else {
                    console.log("unchecked")
                    $('.preview-area').css("background", "url('assets/img/crop_area_clean.jpg') no-repeat center");
                }
            }
            $scope.flip = function (side) {
                console.log("Flip occured: " + side);
                if (side == 'front') {
                    $('#card-preview').attr("src", "assets/img/business_card.png");
                    $('#card-front').addClass('active');
                    $('#card-back').removeClass('active');
                }
                else {
                    $('#card-preview').attr("src", "assets/img/business_card_back.png");
                    $('#card-back').addClass('active');
                    $('#card-front').removeClass('active');
                }
            }
            $scope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };
        });
        app.filter('isUploaded', function () {
            return function (url) {
                if (url != '' || url != 'undefined') return 'uploaded';
                else return 'not uploaded';
            }
        });