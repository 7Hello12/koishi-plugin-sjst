import { Context, Schema } from 'koishi';
export declare const name = "\u83B7\u53D6\u4E00\u5F20\u968F\u673A\u6DA9\u56FE\u63D2\u4EF6";
export declare const reusable = true;
export interface Config {
}
export declare const Config: Schema<Config>;
export declare const usage = "\n  <style>\n    #image {\n      width: 100%;\n      height: auto;\n      border-radius: 8px;\n    }\n  </style>\n  <img id=\"image\" src=\"https://img0.baidu.com/it/u=4028584811,3634572531&fm=253&fmt=auto?w=1366&h=800\"></img>\n  <p>\u968F\u673A\u83B7\u53D6\u4E00\u5F20\u6DA9\u56FE\u5E76\u53D1\u9001\u5230\u804A\u5929\u7A97\u53E3\u4E0A</p>\n  <p>\u53EF\u5411\u673A\u5668\u4EBA\u53D1\u9001 \u83B7\u53D6\u968F\u673A\u6DA9\u56FE \u83B7\u53D6</p>\n";
export declare function apply(ctx: Context, Config: any): Promise<void>;
export declare function sendImageByAPI(session: any, apiUrl: any, Config: any): Promise<void>;
