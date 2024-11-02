import { Context, Schema, h } from 'koishi'

export const name = '获取一张随机涩图插件'

export const reusable = true

export interface Config {}

export const Config: Schema<Config> = Schema.object({
  CustomApi: Schema.boolean().description("是否自定义图片接口").default(false),
  ApiUrl: Schema.string().default("http://154.12.16.5:3003/resc/krkr").description("接口地址"),
  Prompt: Schema.string().default("客官，请稍等片刻哦~").description("提示词"),
}).description("基础设置");

export const usage = `
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

export async function apply(ctx: Context, Config) {
  ctx.command("获取随机涩图")
    .action(async ({ session }) => {
      const apiUrl = "http://154.12.16.5:3003/resc/krkr"
      sendImageByAPI(session, apiUrl, Config);
    });
}

export async function sendImageByAPI(session, apiUrl, Config) {
  try {
    await session.send(Config.Prompt);
    if (Config.CustomApi) {
      await session.send(h("image", { url: Config.ApiUrl }) + "客官您要的涩图来了~")
    } else {
      await session.send(h("image", { url: apiUrl }) + "客官您要的涩图来了~");
    }
  } catch (error) {
    await session.send("图片发送失败，ERROR：" + error);
  }
}