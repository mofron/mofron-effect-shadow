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
            
            this.value('0.25rem');
            
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter target component
     *
     * @note private method
     */
    component (prm) {
        try {
            let ret = super.component(prm);
            if ( (undefined !== prm) &&
                 (null === this.color()) ) {
                this.color(
                    (null !== prm.mainColor()) ? prm.mainColor() : [128,128,128]
                );
            }
            return ret;
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
                (undefined === prm) ? prm : mf.func.getSize(prm).toString()
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
                (undefined === prm) ? prm : mf.func.getColor(prm).toString()
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enable shadow effect
     *
     * @note private method
     */
    enable (tgt) {
        try {
            let val = mf.func.getSize(this.value());
            val.value(val.value()/2);
            tgt.style({
                'box-shadow' : '0rem '+ val.toString() + ' ' + mf.func.sizeSum(val, val).toString() + ' ' + '0rem ' + this.color()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable shadow effet
     *
     * @note private method
     */
    disable (tgt) {
        try { tgt.style({'box-shadow' : null}); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Shadow;
/* end of file */
