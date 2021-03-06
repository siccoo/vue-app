// Installation and importation of Vue Test Utils external library
// npm install @vue/test-utils --save-dev
// import Vue from 'vue';
import App from '@/App';
import { shallowMount } from '@vue/test-utils';

// describe callback() function
describe('App', () => {
    let wrapper;

    // beforeEach callback() function
    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    // it callback() function
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
        let inputField;

        beforeEach(() => {
            inputField = wrapper.find('.new-todo');
            inputField.element.value = 'New Todo';
            inputField.trigger('input');
        });

        it('should update "newTodo"', () => {
            expect(wrapper.vm.newTodo).toEqual('New Todo');
        });
    
    describe('and presses Enter', () => {
        it('should add a new todo to "todos"', () => {
            inputField.trigger('keyup.enter');
            const removeIcon = wrapper.find(".destroy");

            // removeIcon variable
            removeIcon.trigger("click");

            expect(wrapper.vm.todos).toEqual(['New Todo']);
        });
    });

    describe('and presses Enter + removes todo', () => {
        it('should have the new todo removed', () => {});
    });
    });
});



