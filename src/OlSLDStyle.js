import {Style} from './Style';
import OLStyle from 'ol/style/style';
// import Fill from 'ol/style/fill';
// import Stroke from 'ol/style/stroke';

/**
 * The OlSLDStyle class is the entry point for openlayers users.
 */
class OlSLDStyle extends Style {

  /**
   * An ol.styleFunction
   * @param {ol.Feature} feature openlayers feature to style
   * @param {number} resolution views resolution
   * @return {ol.style.Style} openlayers style
   */
  styleFunction(feature, resolution) {
    return new OLStyle({

    });
  }

}


export {OlSLDStyle};


 /**
  * Openlayers stylefunction
  * @external ol.StyleFunction
  * @see {@link http://openlayers.org/en/latest/apidoc/ol.html#.StyleFunction}
  */
