System.register(['@angular/router', './home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: 'keep',
                    component: home_component_1.HomeComponent
                },
                {
                    path: '',
                    redirectTo: '/keep',
                    pathMatch: 'full'
                },
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map