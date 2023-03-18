jssor_4_slider_init = function() {

            var jssor_4_options = {
              $AutoPlay: 1,
              $FillMode: 4,
              $PauseOnHover: 3,
			  $Idle: 8000,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_4_slider = new $JssorSlider$("jssor_4", jssor_4_options);

            //make sure to clear margin of the slider container element
            jssor_4_slider.$Elmt.style.margin = "";

            /*#region responsive code begin*/

            /*
                parameters to scale jssor slider to fill parent container

                MAX_WIDTH
                    prevent slider from scaling too wide
                MAX_HEIGHT
                    prevent slider from scaling too high, default value is original height
                MAX_BLEEDING
                    prevent slider from bleeding outside too much, default value is 1
                    0: contain mode, allow up to 0% to bleed outside, the slider will be all inside parent container
                    1: cover mode, allow up to 100% to bleed outside, the slider will cover full area of parent container
                    0.1: flex mode, allow up to 10% to bleed outside, this is better way to make full window slider, especially for mobile devices
            */

            var MAX_WIDTH = 3000;
            var MAX_HEIGHT = 310;
            var MAX_BLEEDING = 0.128;

            function ScaleSlider() {
                var containerElement = jssor_4_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var originalWidth = jssor_4_slider.$OriginalWidth();
                    var originalHeight = jssor_4_slider.$OriginalHeight();

                    var containerHeight = containerElement.clientHeight || originalHeight;

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                    var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

                    //constrain bullets, arrows inside slider area, it's optional, remove it if not necessary
                    if (MAX_BLEEDING >= 0 && MAX_BLEEDING < 1) {
                        var widthRatio = expectedWidth / originalWidth;
                        var heightRatio = expectedHeight / originalHeight;
                        var maxScaleRatio = Math.max(widthRatio, heightRatio);
                        var minScaleRatio = Math.min(widthRatio, heightRatio);

                        maxScaleRatio = Math.min(maxScaleRatio / minScaleRatio, 1 / (1 - MAX_BLEEDING)) * minScaleRatio;
                        expectedWidth = Math.min(expectedWidth, originalWidth * maxScaleRatio);
                        expectedHeight = Math.min(expectedHeight, originalHeight * maxScaleRatio);
                    }

                    //scale the slider to expected size
                    jssor_4_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

                    //position slider at center in vertical orientation
                    jssor_4_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";

                    //position slider at center in horizontal orientation
                    jssor_4_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
jssor_1_slider_init = function() {

            var jssor_1_options = {
              $AutoPlay: 1,
			  $Idle: 8000,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 3000;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
  jssor_2_slider_init = function() {

            var jssor_2_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

             var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_2_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_2_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_2_slider.$ScaleSize(expectedWidth, jssor_2_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };

jssor_3_slider_init = function() {

            var jssor_3_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

            var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_3_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_3_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_3_slider.$ScaleSize(expectedWidth, jssor_3_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };
		
jssor_covid_slider_init = function() {

            var jssor_covid_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
              $Class: $JssorArrowNavigator$,
              $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

            var jssor_covid_slider = new $JssorSlider$("jssor_covid", jssor_covid_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_covid_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_covid_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_covid_slider.$ScaleSize(expectedWidth, jssor_covid_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };	
		
		
jssor_edenta_slider_init = function() {

            var jssor_edenta_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

             var jssor_edenta_slider = new $JssorSlider$("jssor_edenta", jssor_edenta_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_edenta_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_edenta_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_edenta_slider.$ScaleSize(expectedWidth, jssor_edenta_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };
		
		
		
jssor_leone_slider_init = function() {

            var jssor_leone_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

             var jssor_leone_slider = new $JssorSlider$("jssor_leone", jssor_leone_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_leone_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_leone_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_leone_slider.$ScaleSize(expectedWidth, jssor_leone_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };
		
		
jssor_intensiv_slider_init = function() {

            var jssor_intensiv_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

             var jssor_intensiv_slider = new $JssorSlider$("jssor_intensiv", jssor_intensiv_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_intensiv_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_intensiv_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_intensiv_slider.$ScaleSize(expectedWidth, jssor_intensiv_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };
		
		
jssor_major_slider_init = function() {

            var jssor_major_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

             var jssor_major_slider = new $JssorSlider$("jssor_major", jssor_major_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_major_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_major_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_major_slider.$ScaleSize(expectedWidth, jssor_major_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };
		
		
jssor_microbrush_slider_init = function() {

            var jssor_microbrush_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 250,
              $SlideHeight: 250,
              $SlideSpacing: 30,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 30
              }
            };

             var jssor_microbrush_slider = new $JssorSlider$("jssor_microbrush", jssor_microbrush_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = jssor_microbrush_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, jssor_microbrush_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    jssor_microbrush_slider.$ScaleSize(expectedWidth, jssor_microbrush_slider.$OriginalHeight());

                    /*jssor_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
                }
                else {
                    window.setTimeout(ScaleSlider, 120);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //#endregion responsive code end
        };
		