import { DbService } from './db.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [DbService],
  exports: [DbService],
})
export class SharedModule {}
