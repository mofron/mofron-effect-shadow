/**
 * @file shadow.js
 * @brief shadow effect for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Shadow = class extends mf.Effect {
    /**
     * initialize shadow effect
     *
     * @param p1 (object) effect option
     * @param p1 shadow size
     * @param p2 shadow color
     */
    constructor (po, p2) {
        try {
            super();
            this.name('Shadow');
            this.prmMap(['value', 'color']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter shadow size
     *
     * @param p1 (string) shadow size (css value)
     * @param p1 (undefined) call as getter
     * @return (string) shadow size (css value)
     */
    value (prm) {
        try {
            return this.member(
                'value',
                'string',
                (undefined === prm) ? prm : mf.func.getSize(prm).toString(),
                '0.015rem'
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    blur (prm) {
        try {
            return this.member(
                'blur',
                'string',
                (undefined === prm) ? prm : mf.func.getSize(prm).toString(),
                null
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter shadow color
     *
     * @param p1 (string) shadow color (css value)
     * @param p1 (undefined) call as getter
     * @return (string) shadow color (css value)
     */
    color (prm) {
        try {
            return this.member(
                'color',
                'string',
                (undefined === prm) ? prm : mf.func.getColor(prm).toString(),
                'rgb(190,190,190)'
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            if (null === this.color()) {
                this.color(
                   (null !== this.component().mainColor()) ? this.component().mainColor() : [128, 128, 128]
                );
            }
            let val3  = mf.func.sizeSum(this.value(), this.value(), this.value());
            let blur = (null === this.blur()) ? mf.func.sizeSum(this.value(), this.value()) : this.blur();
            cmp.style({
                'box-shadow' : val3+' ' + val3+' ' + blur+' ' + '0rem ' + this.color()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Shadow;
/* end of file */
