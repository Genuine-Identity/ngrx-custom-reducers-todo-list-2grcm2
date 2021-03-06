"use strict";
exports.__esModule = true;
var schematics_1 = require("@angular-devkit/schematics");
var tasks_1 = require("@angular-devkit/schematics/tasks");
var schematics_core_1 = require("@ngrx/component/schematics-core");
function addModuleToPackageJson() {
    return function (host, context) {
        schematics_core_1.addPackageToPackageJson(host, 'dependencies', '@ngrx/component', schematics_core_1.platformVersion);
        context.addTask(new tasks_1.NodePackageInstallTask());
        return host;
    };
}
function default_1(options) {
    return function (host, context) {
        return schematics_1.chain([
            options && options.skipPackageJson ? schematics_1.noop() : addModuleToPackageJson(),
        ])(host, context);
    };
}
exports["default"] = default_1;
//# sourceMappingURL=index.js.map