"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
exports.default = (plugin) => {
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
        plugin.controllers.components[name] = async (ctx) => {
            await oldFunc(ctx);
            (0, child_process_1.exec)("npm run types");
            return ctx;
        };
    });
    contentTypesRunAfter.forEach((name) => {
        const oldFunc = plugin.controllers["content-types"][name];
        plugin.controllers["content-types"][name] = async (ctx) => {
            await oldFunc(ctx);
            (0, child_process_1.exec)("npm run types");
            return ctx;
        };
    });
    return plugin;
};
