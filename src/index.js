import { deprecate } from 'util';
import softdelete from './soft-delete';

export default deprecate(
  app => app.loopback.modelBuilder.mixins.define('SoftDelete', softdelete)
);
