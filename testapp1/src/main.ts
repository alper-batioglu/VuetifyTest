import Vue from 'vue';
import './plugins/vuetify';
import Todo from './components/Todo.vue';
import Group from './components/Group.vue';

// import Vuetify, {
//   VApp, // required
//   VNavigationDrawer,
//   VFooter,
//   VToolbar,
//   VFadeTransition,
// } from 'vuetify/lib';


Vue.config.productionTip = false;

const app = document.createElement('div');
document.body.appendChild(app);

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');
const props = {
  todo: { name: 'alper', id: 5 },
  status: false,
};
const events = {
  mychange(param: any) {

    console.log(param);
  },
};
const compInst = new Todo({ propsData: props });
compInst.$on('mychange', events.mychange);
// var compContainer = document.createElement("div");
// app.appendChild(compContainer);
// compInst.$mount(compContainer);

compInst.$slots.default = ['Click me!', 'alper', '<h2>:(</h2>'];
compInst.$mount();
// app.appendChild(compInst.$el);

const group = new Group({ propsData: { children: [compInst] } });
group.$slots.default = [group.$createElement('div', ['Hwllo'])];
// group.$children.push(compInst);
// Vue.compile().render()
// group.$slots.default = Vue.compile(compInst).render();

group.$mount();
app.appendChild(group.$el);

// return compInst;

window.group = group;
