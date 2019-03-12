import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('snippets')
export class SnippetController {

  constructor() {}

  @Get()
  getSnippets(@Query('query') query): void {
    console.error(query);
  }

  @Get(':id')
  getSnippet(@Query('query') query, @Param('id') id): void {
    console.error(id, query);
  }

  @Get('user/:id')
  getSnippetByUser(@Query('query') query, @Param('id') id): void {
    console.error(id, query);
  }

}
