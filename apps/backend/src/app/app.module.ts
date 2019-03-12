import { Module } from '@nestjs/common';

import { SnippetController, LabelController } from './controllers';

@Module({
  imports: [],
  controllers: [
    SnippetController,
    LabelController
  ],
  providers: [

  ],
})
export class AppModule {}
