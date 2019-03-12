import { Controller, Get, Query } from '@nestjs/common';

@Controller('labels')
export class LabelController {

  constructor() {}

  @Get()
  getLabels(@Query('query') query): any {
    return {
      type: 'getLabels',
      query
    };
  }
}
