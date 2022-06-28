import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

// 新增路由cats
@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'this is create new cat';
  }
  @Get('ab*d')
  @HttpCode(200)
  @Header('Cache-control', 'no-cache')
  // @Redirect('https://www.baidu.com')
  findAll(@Req() request: Request): string {
    // console.log(request);
    return 'this action return all cats2';
  }
  @Get('docs')
  // @Redirect('https://www.baidu.com', 302)
  getDocs(@Query('version') version) {
    // console.log(version);
    if (version && version === '5') {
      return { url: 'https://www.baidu.com' };
    }
  }
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params);
    return `return a ${params.id} cat`;
  }
}
