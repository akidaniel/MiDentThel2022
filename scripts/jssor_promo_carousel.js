carousel_promo_1_slider_init = function() {

            var carousel_promo_1_options = {
              $AutoPlay: 0,
              $AutoPlaySteps: 0,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 0,
              $SlideWidth: 220,
              $SlideHeight: 370,
              $SlideSpacing: 18,
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
			
// CAMBIOS PARA PANTALLAS DE MOVILES
// Check the device screen size and modify the options accordingly
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth <= 800) {
    // For mobile devices, modify the options
carousel_promo_1_options.$SlideSpacing = 30,
carousel_promo_1_options.$SlideWidth = 228,
    carousel_promo_1_options.$ArrowNavigatorOptions.$Steps = 1;
	
}

// Initialize the Jssor Slider with the modified options
var carousel_promo_1_slider = new $JssorSlider$("carousel_promo_1", carousel_promo_1_options);
//FIN CAMBIOS PARA PANTALLAS DE MOVILES
			
// Check the device screen size and modify the options accordingly
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


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
              $AutoPlaySteps: 0,
              $SlideDuration: 250,
              $FillMode: 4,
              $PauseOnHover: 0,
              $SlideWidth: 220,
              $SlideHeight: 370,
              $SlideSpacing: 18,
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


// CAMBIOS PARA PANTALLAS DE MOVILES
// Check the device screen size and modify the options accordingly
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth <= 800) {
// For mobile devices, modify the options
carousel_promo_2_options.$SlideSpacing = 30,
carousel_promo_2_options.$SlideWidth = 228,
carousel_promo_2_options.$ArrowNavigatorOptions.$Steps = 1;
	
}

// Initialize the Jssor Slider with the modified options
var carousel_promo_2_slider = new $JssorSlider$("carousel_promo_2", carousel_promo_2_options);
//FIN CAMBIOS PARA PANTALLAS DE MOVILES

			
// Check the device screen size and modify the options accordingly
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


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


		
		

		
		
		

		
		

		

		

		
		
		


		
		