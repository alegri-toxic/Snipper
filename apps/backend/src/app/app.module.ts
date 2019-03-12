import { Module } from '@nestjs/common';

import { SnippetController } from './controllers/snippet.controller';

@Module({
  imports: [],
  controllers: [
    SnippetController
  ],
  providers: [

  ],
})
export class AppModule {}
