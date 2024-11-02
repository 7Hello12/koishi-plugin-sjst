var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Config: () => Config,
  apply: () => apply,
  name: () => name,
  reusable: () => reusable,
  sendImageByAPI: () => sendImageByAPI,
  usage: () => usage
});
module.exports = __toCommonJS(src_exports);
var import_koishi = require("koishi");
var name = "获取一张随机涩图插件";
var reusable = true;
var Config = import_koishi.Schema.object({
  CustomApi: import_koishi.Schema.boolean().description("是否自定义图片接口").default(false),
  ApiUrl: import_koishi.Schema.string().default("http://154.12.16.5:3003/resc/krkr").description("接口地址"),
  Prompt: import_koishi.Schema.string().default("客官，请稍等片刻哦~").description("提示词")
}).description("基础设置");
var usage = `
  <style>
    #image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  <img id="image" src="https://img0.baidu.com/it/u=4028584811,3634572531&fm=253&fmt=auto?w=1366&h=800"></img>
  <p>随机获取一张涩图并发送到聊天窗口上</p>
  <p>可向机器人发送 获取随机涩图 获取</p>
`;
async function apply(ctx, Config2) {
  ctx.command("获取随机涩图").action(async ({ session }) => {
    const apiUrl = "http://154.12.16.5:3003/resc/krkr";
    sendImageByAPI(session, apiUrl, Config2);
  });
}
__name(apply, "apply");
async function sendImageByAPI(session, apiUrl, Config2) {
  try {
    await session.send(Config2.Prompt);
    if (Config2.CustomApi) {
      await session.send((0, import_koishi.h)("image", { url: Config2.ApiUrl }) + "客官您要的涩图来了~");
    } else {
      await session.send((0, import_koishi.h)("image", { url: apiUrl }) + "客官您要的涩图来了~");
    }
  } catch (error) {
    await session.send("图片发送失败，ERROR：" + error);
  }
}
__name(sendImageByAPI, "sendImageByAPI");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Config,
  apply,
  name,
  reusable,
  sendImageByAPI,
  usage
});
