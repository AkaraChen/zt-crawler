function getImage(content: string): string {
  let imgReg = /<img.*?(?:>|\/>)/gi;
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  let arr = content.match(imgReg);
  if (!arr) {
    return "https://some.image"
  }
  let src = arr[0].match(srcReg);
  return src[0].slice(5, src[0].length - 1);
}

console.log(
  getImage(
    '<figure class="aligncenter size-full">="lazy" width="520" height="409" "CyberPanel面板一键部署及建站体验OpenLiteSpeed服务" class="wp-image-28149"/></figure></div>\n\n\n\n<h2>'
  )
);
