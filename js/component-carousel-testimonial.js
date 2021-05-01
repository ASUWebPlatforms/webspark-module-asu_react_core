(function ($, Drupal, drupalSettings) {


  Drupal.behaviors.testimonialCarousel = {
    attach: function (context, settings) {
      var componentLoaded = typeof AsuWebcarousel !== "undefined" && typeof AsuWebcarousel.initTestimonialCarousel !== "undefined";
      var testimonialExist = typeof settings.asu !== "undefined" && typeof settings.asu.components !== "undefined" && typeof settings.asu.components.testimonial_carousel !== "undefined";

      if (!testimonialExist || !componentLoaded) {
        return;
      }

      for (var testimonialId in settings.asu.components.testimonial_carousel) {
        var carouselData = settings.asu.components.testimonial_carousel[testimonialId];

        var testimonials = [];
        carouselData.items.forEach(function(item) {
          testimonials.push(settings.asu.components.testimonial[item]);
        });

        var testimonialItems = {
          testimonialItems: testimonials,
          hasNavButtons: true,
          hasPositionIndicators: true,
          maxWidth: "500px",
          itemStyle: {
            itemCssClass: carouselData.style,
            itemTitleCssClass: carouselData.itemTitleCssClass,
          }
        };

        AsuWebcarousel.initTestimonialCarousel(testimonialItems);

        delete settings.asu.components.testimonial_carousel[testimonialId];
      }

    }
  };


})(jQuery, Drupal, drupalSettings);