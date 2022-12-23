import os from "os";
import setting from "../setting.js";

/*
 * 喵喵百分比模块：模仿内存占用示例的后缀模块
 * 在末尾生成多个喵！喵喵越少系统占用越高
 */

export function NameCardContent() {
    let config = setting.getConfig('autoGroupName');
    let times = (4 - ((1 - os.freemem() / os.totalmem()) * 4).toFixed(0));

    return `${"喵".repeat(times)}`;
}
