import * as sprinkleFunction from '@vanilla-extract/sprinkles';

const plainProperties = sprinkleFunction.defineProperties({
  properties: {
    background: {test: 'red'},
  },
});

export const sprinkles = sprinkleFunction.createSprinkles(plainProperties);
