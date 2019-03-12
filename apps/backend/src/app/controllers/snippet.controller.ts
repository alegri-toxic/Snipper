import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('snippets')
export class SnippetController {

  constructor() {}

  @Get()
  getSnippets(@Query('query') query): any {
    return {
      type: 'getSnippets',
      query: query || '{snippets{id,title,description}}'
    };
  }

  @Get(':id')
  getSnippet(@Query('query') query, @Param('id') id): any {
    return {
      type: 'getSnippet',
      id,
      query: query || `{snippets(id:${id}){title,description,text}}`
    };
  }

  @Get('user/:id')
  getSnippetByUser(@Query('query') query, @Param('id') id): any {
    return {
      type: 'getSnippetByUser',
      userID: id,
      query: query || `{snippets(userID:${id}){title,description,text}}`
    };
  }

  @Get('tag/:id')
  getSnippetByTag(@Query('query') query, @Param('id') id): any {
    return {
      type: 'getSnippetByTag',
      tag: id,
      query
    };
  }

  @Post()
  createSnippet(@Body() body): any {
    return {
      type: 'createSnippet',
      data: body
    };
  }

  @Put(':id')
  updateSnippet(@Param('id') id, @Body() body): any {
    return {
      type: 'updateSnippet',
      data: body
    };
  }

  @Delete(':id')
  deleteSnippet(@Param('id') id): any {
    return {
      type: 'deleteSnippet',
      id
    };
  }

}
