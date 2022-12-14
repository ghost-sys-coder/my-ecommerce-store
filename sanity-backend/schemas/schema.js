// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
import product from './product';
import banner from './banner';

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    product,
    banner
  ]),
})
