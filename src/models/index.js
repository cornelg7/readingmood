// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Testimony } = initSchema(schema);

export {
  Testimony
};