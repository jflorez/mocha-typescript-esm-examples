import {expect} from 'chai'

const d = await Promise.resolve('hello')

describe('example', () => {
    it('test', async () => {
        expect(d).to.equal('hellos')
    })
})

