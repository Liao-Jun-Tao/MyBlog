module.exports = {
  singleQuote: true,          // 在字符串中使用单引号而不是双引号
  trailingComma: 'none',      // 对象和数组最后一个元素不加逗号
  tabWidth: 2,                // 缩进使用的空格数
  semi: false,                // 不在语句末尾添加分号
  printWidth: 100,            // 一行的最大字符数
  arrowParens: 'always',      // 箭头函数参数始终使用括号
  endOfLine: 'auto',          // 根据文件类型决定换行符风格，"lf"（Unix 风格）或 "crlf"（Windows 风格）
  vueIndentScriptAndStyle: true, // 在 .vue 文件中缩进 <script> 和 <style> 部分
  embeddedLanguageFormatting: 'auto', // 自动格式化嵌入式语言（如 <template> 中的 HTML）
};
