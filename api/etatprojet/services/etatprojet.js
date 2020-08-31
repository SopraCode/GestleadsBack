'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    /**
     * Promise to count record
     *
     * @return {Promise}
     */
  
    count(params) {
      return strapi.query('etatprojet').count(params);
    },
  };
