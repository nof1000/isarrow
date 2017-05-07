const isArrow = require('./index.js');
const assert = require('assert');

describe('isArrow', () => {
    describe('String', () => {
        it('false', () => {
            assert.equal(isArrow('Hello world'), false);
        });
    });

    describe('Function', () => {
        it('false', () => {
            assert.equal(isArrow(function() {}), false);
        });
    });

    describe('Async Function', () => {
        it('false', () => {
            assert.equal(isArrow(async function() {}), false);
        });
    });

    describe('Class', () => {
        it('false', () => {
            assert.equal(isArrow(class {}), false);
        });
    });

    describe('Arrow Function', () => {
        it('true', () => {
            assert.equal(isArrow(() => {}), true);
        });
    });

    describe('Async Arrow Function', () => {
        it('true', () => {
            assert.equal(isArrow(async () => {}), true);
        });
    });

    describe('Number', () => {
        it('false', () => {
            assert.equal(isArrow(123), false);
        });
    });

    describe('Object', () => {
        it('false', () => {
            assert.equal(isArrow({}), false);
        });
    });

    describe('Array', () => {
        it('false', () => {
            assert.equal(isArrow([]), false);
        });
    });
});
