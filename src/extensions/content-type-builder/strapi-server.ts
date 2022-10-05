import { exec } from "child_process";

export default (plugin: any) => {
  const componentRunAfter = [
    "createComponent",
    "deleteComponent",
    "updateComponent",
  ];
  const contentTypesRunAfter = [
    "createContentType",
    "updateContentType",
    "deleteContentType",
  ];
  componentRunAfter.forEach((name) => {
    const oldFunc = plugin.controllers.components[name];
    plugin.controllers.components[name] = async (ctx: any) => {
      await oldFunc(ctx);
      exec("npm run types");
      return ctx;
    };
  });
  contentTypesRunAfter.forEach((name) => {
    const oldFunc = plugin.controllers["content-types"][name];
    plugin.controllers["content-types"][name] = async (ctx: any) => {
      await oldFunc(ctx);
      exec("npm run types");
      return ctx;
    };
  });
  return plugin;
};
