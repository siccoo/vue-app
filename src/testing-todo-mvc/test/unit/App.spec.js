// Installation and importation of Vue Test Utils external library
// npm install @vue/test-utils --save-dev
// import Vue from 'vue';
import App from '@/App';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    it('should render correct contents', () => {
        let wrapper = shallowMount(App);
        // const Constructor = Vue.extend(App);
        // const vm = new Constructor().$mount();
        expect(wrapper.find('.title').text).toBe('todos');
        expect(wrapper.find('.new-todo').element.placeholder).toBe('What needs to be done?');
    });

    it('should set correct data', () => {
        // const initialData = App.data();
        expect(wrapper.vm.todos).toEqual([]);
        expect(wrapper.vm.newTodo).toEqual('');
    });

    describe('user populates the text input field', () => {
        it('should update "newTodo"', () => {});
    
    describe('and presses Enter', () => {
        it('should add a new todo to "todos"', () => {});
    });

    describe('and presses Enter + removes todo', () => {
        it('should have the new todo removed', () => {});
    });
    });
});



