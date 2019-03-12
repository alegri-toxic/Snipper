import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('snippets')
export class SnippetController {

  constructor() {}

  @Get()
  getSnippets(@Query('query') query): any {
    console.error(query);
    return {
      type: 'getSnippets',
      query
    };
  }

  @Get(':id')
  getSnippet(@Query('query') query, @Param('id') id): any {
    console.error(id, query);
    return {
      type: 'getSnippet',
      id,
      query
    };
  }

  @Get('user/:id')
  getSnippetByUser(@Query('query') query, @Param('id') id): any {
    console.error(id, query);
    return {
      type: 'getSnippetByUser',
      userID: id,
      query
    };
  }

  @Get('tag/:id')
  getSnippetByTag(@Query('query') query, @Param('id') id): any {
    console.error(id, query);
    return {
      type: 'getSnippetByTag',
      tag: id,
      query
    };
  }

  @Post()
  createSnippet(@Body() body): any {
    console.error(body);
    return {
      type: 'createSnippet',
      data: body
    };
  }

  @Put(':id')
  updateSnippet(@Param('id') id, @Body() body): any {
    console.error(id, body);
    return {
      type: 'updateSnippet',
      data: body
    };
  }

  @Delete(':id')
  deleteSnippet(@Param('id') id): any {
    console.error(id);
    return {
      type: 'deleteSnippet',
      id
    };
  }

}
