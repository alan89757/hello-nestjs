## nestjs入门

#### 全局安装@nestjs/cli

```js
$ npm i -g @nestjs/cli
$ nest new project-name
```

#### @nest/cli创建控制器
```js
$ nest g controller cats
```

#### 新增路由
```js
@Controller('cats')   // 新增路由cats
export class CatsController {
  @Get()
  findAll(): string {
    return 'this action return all cats';
  }
}
```

### 配置http
```js
// 新增路由cats
@Controller('cats')
export class CatsController {
  @Get('ab*d')    // 路由正则匹配
  @HttpCode(200)    // 状态码
  @Header('Cache-control', 'no-cache')  //设置response header
  // @Redirect('https://www.baidu.com', 302) // 重定向
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'this action return all cats2';
  }
  @Get('docs')
  @Redirect('https://www.baidu.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://www.baidu.com' };
    }
  }
}
```

#### 路由参数
```js
@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params);
    return `return a ${params.id} cat`;
  }
}
```

#### 