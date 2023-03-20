carousel_promo_1_slider_init = function() {

            var carousel_promo_1_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 0,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 0,
              $SlideWidth: 260,
              $SlideHeight: 0,
              $SlideSpacing: 4,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
				$arrowBottomOffset: 0,
                $Steps: 5
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingY: 0
              }
            };

            var carousel_promo_1_slider = new $JssorSlider$("carousel_promo_1", carousel_promo_1_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = carousel_promo_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, carousel_promo_1_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    carousel_promo_1_slider.$ScaleSize(expectedWidth, carousel_promo_1_slider.$OriginalHeight());

                    /*carousel_promo_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
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

carousel_promo_2_slider_init = function() {

            var carousel_promo_2_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 5,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 3,
              $SlideWidth: 260,
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

             var carousel_promo_2_slider = new $JssorSlider$("carousel_promo_2", carousel_promo_2_options);

           //#region responsive code begin
            //the following code is to place slider in the center of parent container with no scale
            function ScaleSlider() {

                var containerElement = carousel_promo_2_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var expectedWidth = Math.min(containerWidth, carousel_promo_2_slider.$OriginalWidth());

                    //scale the slider to original height with no change
                    carousel_promo_2_slider.$ScaleSize(expectedWidth, carousel_promo_2_slider.$OriginalHeight());

                    /*carousel_promo_2_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 0) + "px";*/
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


		
		

		
		
		

		
		

		

		

		
		
		


		
		