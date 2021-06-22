<?php


namespace Drupal\asu_react_core;


class ComponentFactory {

  /**
   * @param $id
   * @param $variables
   * @return ReactComponent
   */
  static public function load($id, $variables) {
    $types = [
      'card_and_image' => '\Drupal\asu_react_core\ReactComponentCardAndImage',
      'card_image_and_content' => '\Drupal\asu_react_core\ReactComponentCardAndImage',
      'testimonial' => '\Drupal\asu_react_core\ReactComponentTestimonial',
      'card_arrangement' => '\Drupal\asu_react_core\ReactComponentCardArrangement',
      'card_carousel' => '\Drupal\asu_react_core\ReactComponentCardCarousel',
      'testimonial_carousel' => '\Drupal\asu_react_core\ReactComponentTestimonialCarousel',
      'carousel_image' => '\Drupal\asu_react_core\ReactComponentCarouselImage',
      'gallery' => '\Drupal\asu_react_core\ReactComponentImageGallery'

    ];

    $classname =  $types[$id];
    if ($classname) {
      return new $classname($variables);
    }
  }
}
