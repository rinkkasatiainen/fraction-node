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


export const gcd: (a: number, b: number) => number =
    (a, b) => {
        while( b !== 0){
            let t: number = b
            b = a % b
            a = t
        }
        return a
    }


class FractionImpl implements Fraction {
    public readonly numerator: number
    public readonly denominator: number

    private constructor(numerator: number, denominator: number) {
        this.numerator = numerator
        this.denominator = denominator

    }

    public static build(numerator: number, denominator: number): FractionImpl {
        const _gcd = gcd(numerator, denominator)

        return new FractionImpl( numerator / _gcd, denominator / _gcd)
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
