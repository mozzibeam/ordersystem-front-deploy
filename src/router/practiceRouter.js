import TestVue from "@/components/practice/0.TestVue.vue";
import ModelingComponent from "@/components/practice/1.ModelingComponent.vue";
import ConditionalComponent from "@/components/practice/2.ConditionalComponent.vue";

import HookComponent from "@/components/practice/3.HookComponent.vue";
import VuetifyComponent from "@/components/practice/4.VuetifyComponent.vue";
import RouteComponent from "@/components/practice/5.RouteComponent.vue";
import RouteComponent2 from "@/components/practice/5.RouteComponent2.vue";
import RouteComponent3 from "@/components/practice/5.RouteComponent3.vue";
import StoreTestComponent from "@/components/practice/6.StoreTestComponent.vue";
export const practiceRouter = [
    {
        path: "/practice/test",
        name: "TestVue",
        component: TestVue
    },
    {
        path: "/practice/modeling",
        name: "ModelingComponent",

        component: ModelingComponent
    },
    {
        path: "/practice/conditional",
        name: "ConditionalComponent",
        component: ConditionalComponent
    },
    {
        path: "/practice/hook",
        name: "HookComponent",
        component: HookComponent
    },
    {
        path: "/practice/vuetify",
        name: "VuetifyComponent",
        component: VuetifyComponent
    },
    {
        path: "/practice/route",
        name: "RouteComponent",
        component: RouteComponent
    },
    {
        path: "/practice/route2",
        name: "RouteComponent2",
        component: RouteComponent2
    },
    {
        path: "/practice/route3/:postId",
        name: "RouteComponent3",
        component: RouteComponent3
    },
    {
        path: "/practice/store",
        name: "StoreTestCompoenent",
        component: StoreTestComponent
    }
]