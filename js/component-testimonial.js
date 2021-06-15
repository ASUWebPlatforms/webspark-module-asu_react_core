(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.testimonial = {
    attach: function (context, settings) {
      var componentLoaded = typeof AsuWebCore !== "undefined" && typeof AsuWebCore.initTestimonial !== "undefined";
      var cardExist = typeof settings.asu !== "undefined" && typeof settings.asu.components !== "undefined" && typeof settings.asu.components.testimonialblock !== "undefined";

      if (!cardExist || !componentLoaded) {
        return;
      }
			testimonialData = Object.values(settings.asu.components.testimonialblock)[0];
			testimonialId = testimonialData.items[0];
			testimonial = settings.asu.components.testimonial[testimonialId];

      // Setup and initialize testimonial options.
      AsuWebCore.initTestimonial({
        targetSelector: '#testimonial-' + testimonialId,
        props: {
					quote: {
	          title: testimonial.quote.title,
	          content:testimonial.quote.content,
	          cite: {
              name: testimonial.quote.cite.name,
              description: testimonial.quote.cite.description,
            },
	        },
	        imageSource: testimonial.imageSource,
	        altText: testimonialData.altText,
	        itemStyle: {
	          containerCssClass: testimonialData.style,
	          titleCssClass: testimonialData.itemTitleCssClass,
	        },
        },
      });
    }
  };
})(jQuery, Drupal, drupalSettings);