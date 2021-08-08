import {expect} from 'chai'

const data = await Promise.resolve(['hello', 'world'])

describe('example', () => {
    data.forEach(entry => {
        it(`testing dynamic entry "${entry}"`, () => {
            expect(entry).to.equal('hello')
        })
    })
})

