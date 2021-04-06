import {expect} from 'chai'
import {Fraction, BuildFraction} from '../src/fraction'
// import { expect } from 'chai'

describe('Fraction', () => {
    describe('is displayed in lowest term', () => {
        it('is in lowest form when divisible by numerator', () => {
            const fract = BuildFraction.of(2).by(4)
            expect(fract).to.eql(BuildFraction.of(1).by(2))
        })
        it('is in lowest form when divisible by 2', () => {
            const fract = BuildFraction.of(4).by(6)
            expect(fract).to.eql(BuildFraction.of(2).by(3))
        })
        it('is in lowest form when divisible by 4', () => {
            const fract = BuildFraction.of(8).by(20)
            expect(fract).to.eql(BuildFraction.of(2).by(5))
        })
        it('is in lowest form when divisible by 3', () => {
            const fract = BuildFraction.of(9).by(30)
            expect(fract).to.eql(BuildFraction.of(3).by(10))
        })
        it('is in lowest form when divisible by 6', () => {
            const fract = BuildFraction.of(18).by(30)
            expect(fract).to.eql(BuildFraction.of(3).by(5))
        })
        it('is in lowest form when divisible by 15', () => {
            const fract = BuildFraction.of(45).by(105)
            expect(fract).to.eql(BuildFraction.of(3).by(7))
        })
        it('has negative numerator', () => {
            const fract = BuildFraction.of(-2).by(4)
            expect(fract).to.eql(BuildFraction.of(-1).by(2))
        })
        it('whole numbers', () => {
            const fract = BuildFraction.of(16).by(4)
            expect(fract).to.eql(BuildFraction.of(4).by(1))
        })
        it('whole numbers', () => {
            const fract = BuildFraction.of(16).by(16)
            expect(fract).to.eql(BuildFraction.of(1).by(1))
        })
    })
    describe('sum', () => {
        describe('with same denominator', () => {
            it('should sum', () => {
                const first: Fraction = BuildFraction.of(1).by(3)
                const second: Fraction = BuildFraction.of(1).by(3)

                expect(first.plus(second)).to.eql(BuildFraction.of(2).by(3))
            })
        })
        describe('with common smallest possible denominator', () => {
            it('should sum fractions', () => {
                const first: Fraction = BuildFraction.of(1).by(2)
                const second: Fraction = BuildFraction.of(1).by(4)

                expect(first.plus(second)).to.eql(BuildFraction.of(3).by(4))
            })
        })
        describe('with different denominators', () => {
            it('should sum fractions', () => {
                const first: Fraction = BuildFraction.of(1).by(3)
                const second: Fraction = BuildFraction.of(1).by(4)

                expect(first.plus(second)).to.eql(BuildFraction.of(7).by(12))
            })

            it('should sum fractions', () => {
                const first: Fraction = BuildFraction.of(11).by(1)
                const second: Fraction = BuildFraction.of(4).by(3)

                expect(first.plus(second)).to.eql(BuildFraction.of(37).by(3))
            })

        })
    })
    describe('minus', () => {
        describe('with same denominator', () => {
            it('can calculate', () => {
                const first: Fraction = BuildFraction.of(3).by(4)
                const second: Fraction = BuildFraction.of(1).by(4)

                expect(first.minus(second)).to.eql(BuildFraction.of(1).by(2))
            })
            it('can result in negative numbers', () => {
                const first: Fraction = BuildFraction.of(1).by(4)
                const second: Fraction = BuildFraction.of(3).by(4)

                expect(first.minus(second)).to.eql(BuildFraction.of(-1).by(2))
            })
            it('can calculate different denominators', () => {
                const first: Fraction = BuildFraction.of(1).by(4)
                const second: Fraction = BuildFraction.of(3).by(15)

                expect(first.minus(second)).to.eql(BuildFraction.of(1).by(20))
            })
        })
        describe('with different denominators', () => {
        })
    })
    describe('sum and minus', () => {
        it('can handle minus and plus ', () => {
            const first: Fraction = BuildFraction.of(1).by(4)
            const second: Fraction = BuildFraction.of(3).by(15)

            const substr = first.minus(second)
            expect(substr.plus(second)).to.eql(first)
        })
    })
    describe('multiplication', () =>  {
        it('multiplies with same denominaiton', () => {
            const first: Fraction = BuildFraction.of(1).by(3)
            const second: Fraction = BuildFraction.of(1).by(3)

            expect(first.times(second)).to.eql(BuildFraction.of(1).by(9))
        })
        it('multiplies with different denominator', () => {
            const first: Fraction = BuildFraction.of(5).by(4)
            const second: Fraction = BuildFraction.of(3).by(4)

            expect(first.times(second)).to.eql(BuildFraction.of(15).by(16))
        })

    })
    describe('multiplication', () =>  {
        it('multiplies with same denominaiton', () => {
            const first: Fraction = BuildFraction.of(1).by(3)
            const second: Fraction = BuildFraction.of(1).by(3)

            expect(first.times(second)).to.eql(BuildFraction.of(1).by(9))
        })
        it('multiplies with different denominator', () => {
            const first: Fraction = BuildFraction.of(5).by(4)
            const second: Fraction = BuildFraction.of(3).by(4)

            expect(first.times(second)).to.eql(BuildFraction.of(15).by(16))
        })

    })

    describe('division', () =>  {
        it('multiplies with same denominaiton', () => {
            const first: Fraction = BuildFraction.of(10).by(3)
            const second: Fraction = BuildFraction.of(5).by(1)

            expect(first.dividedBy(second)).to.eql(BuildFraction.of(2).by(3))
        })
        it('multiplies with different denominator', () => {
            const first: Fraction = BuildFraction.of(1).by(2)
            const second: Fraction = BuildFraction.of(3).by(4)

            expect(first.dividedBy(second)).to.eql(BuildFraction.of(2).by(3))
        })

    })
})
