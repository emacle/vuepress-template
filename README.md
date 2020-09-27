# [vuepress-demo](http://172.93.43.131:12000)

# 使用说明

``` 
npm install
```

``` 
npm run dev # 预览
```

``` 
npm run build # 构建
```

使用 Apache 以Alias方式部署网站时,需要在 `.vuepress/config.js` 指定base, 否则会出现 `assets/ 404 Not Found` 错误
```
 /**
   * Apache以Alias方式部署网站时,需要指定base
   * 如果你打算发布到 https://example.com/，则可以省略这一步，因为 base 默认即是 "/"。
   * 如果你打算发布到 https://example.com/vuepress，则将 base 设置为 "/vuepress/"。
   * Apache2 配置如下
   * Alias /vuepress "/var/www/vuepress/dist"
   * <Directory /var/www/vuepress/dist>
   *   Options +FollowSymlinks
   *   AllowOverride all
   *   Require all granted
   * </Directory>
   */
  base: '/vuepress/',
  ```