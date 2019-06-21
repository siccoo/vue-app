// Installation and importation of Vue Test Utils external library
// npm install @vue/test-utils --save-dev
// import Vue from 'vue';
import App from '@/App';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
    it('should render correct contents', () => {
        let wrapper = shallowMount(App);
        // const Constructor = Vue.extend(App);
        // const vm = new Constructor().$mount();
        expect(wrapper.find('.title').text).toBe('todos');
        expect(wrapper.find('.new-todo').element.placeholder).toBe('What needs to be done');
    });

    it('should set correct data', () => {
        const initialData = App.data();

        expect(initialData.todos).toEqual([]);
        expect(initialData.newTodo).toEqual('');
    });
});



