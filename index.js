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
            
            /* default config */
	    if (undefined === po) {
                this.value("0.015rem");
                this.blur(mf.func.sizeSum(this.value(), this.value()));
            }
	    if (undefined === p2) {
	        this.color([190,190,190]);
	    }
	    
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
        try { return this.member("value", "size", prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    blur (prm) {
        try { return this.member("blur", "size", prm); } catch (e) {
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
        try { return this.member('color', 'color', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            let val3 = mf.func.sizeSum(this.value(), this.value(), this.value());
            cmp.style({
                "box-shadow" : val3 + ' ' + val3 + ' ' + this.blur().toString() + ' ' + '0rem ' + this.color().toString()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Shadow;
/* end of file */
