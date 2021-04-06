export interface Fraction {
    readonly denominator: number;
    readonly numerator: number;
    plus: (addend: Fraction) => Fraction;
    minus: (substractor: Fraction) => Fraction;
    times: (multiplicator: Fraction) => Fraction;
    dividedBy: (divider: Fraction) => Fraction;
}


export const BuildFraction = {
    of: (numerator: number) => ({
        by: (denominator: number) => FractionImpl.build(numerator, denominator),
    }),
}

class FractionImpl implements Fraction {
    public readonly numerator: number
    public readonly denominator: number

    private constructor(numerator: number, denominator: number) {
        this.numerator = numerator
        this.denominator = denominator

    }

    public static build(numerator: number, denominator: number): FractionImpl {
        let commoonNorm = 2
        while (commoonNorm <=  Math.min( Math.abs( numerator ), Math.abs( denominator ))) {
            if (denominator % commoonNorm === 0 && numerator % commoonNorm === 0) {
                return FractionImpl.build(numerator / commoonNorm, denominator / commoonNorm)
            }
            commoonNorm += 1
        }
        return new FractionImpl(numerator, denominator)
    }

    public plus(addend: Fraction): Fraction {
        const n1 = addend.denominator * this.numerator
        const n2 = addend.numerator * this.denominator
        const denom = addend.denominator * this.denominator

        return FractionImpl.build(n1 + n2, denom)
    }

    public minus(substractor: Fraction): Fraction {
        const n1 = substractor.denominator * this.numerator
        const n2 = substractor.numerator * this.denominator
        const denom = substractor.denominator * this.denominator

        return FractionImpl.build(n1 - n2, denom)
    }

    public times(multiplicator: Fraction): Fraction {
        const n1 = this.numerator
        const n2 = multiplicator.numerator
        const denom = multiplicator.denominator * this.denominator

        return FractionImpl.build(n1 * n2, denom)
    }

    public dividedBy(divider: Fraction): Fraction {
        return this.times(FractionImpl.build(divider.denominator, divider.numerator))
    }
}
