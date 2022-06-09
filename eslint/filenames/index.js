/**
 * @type { import('eslint').Linter.Config }
 */
 module.exports = {
  extends: [
    'plugin:import/recommended'
  ],
  plugins: [
    'check-file'
  ],
  rules:{
    // "check-file/folder-match-with-fex":[
    //    "error",
    //    {
    //       "*.test.{js,jsx,ts,tsx}":"**/__tests__/",
    //       "*.styled.{jsx,tsx}":"**/pages/"
    //    }
    // ],
    "check-file/filename-naming-convention":[
      "error",
      {
        "*.{js,ts}":"CAMEL_CASE",
        "*.{jsx,tsx}":"PASCAL_CASE",
         "*.{vue}": "PASCAL_CASE"
      }
   ],
    // "check-file/no-index":"warning",
    "check-file/folder-naming-convention":[
       "error",
       {
          "src/**/":"CAMEL_CASE",
       }
    ]
 }
};
