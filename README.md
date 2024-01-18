# tinymce-plugin-kityformula

公式编辑器的tinymce插件

## 安装

1. 下载右侧发行版本
2. 解压
3. **使用import加载tinymce用户**，请自行放到自己项目并使用import载入项目使用。
4. **使用html懒加载的tinymce用户**，请把解压包放置到`tinymce/plugins`目录下。

## 使用

```sh
tinymce.init({
    selector: '#tinydemo',
    plugins: "code kityformula-editor",
    toolbar: "code kityformula-editor",
});
```

## 交互说明

支持的功能方式包括：

- 工具栏点击【公式】按钮插入新公式
- 选中公式图片后，双击编辑公式
- 选中公式图片后，点击工具栏【公式】按钮编辑公式

## 来源说明

> 插件作者：HGC
> 支持版本：5+
> 源码来源至：http://tinymce.ax-z.cn/more-plugins/kityformula-editor.php

此仓库在此代码上做了小幅改动。
