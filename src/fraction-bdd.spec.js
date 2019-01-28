// import { expect } from 'chai'

describe('Fraction', () => {


    it('should sum fractions', () => {
        const first = Fraction.of(1).by(3)
        const second = Fraction.of(1).by(3)

        expect( first + second).to.eql(Fraction.of(2).by(3))
    })
})
