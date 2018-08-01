/**
 * @file shadow.js
 * @author simpart
 */
let mf = require('mofron');

/**
 * @class Shadow
 * @brief Shadow class for mofron effect
 */
mofron.effect.Shadow = class extends mofron.Effect {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Shadow');
            this.prmMap('value', 'color');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                return (undefined === this.m_value) ? 50 : this.m_value;
            }

            if (('number' !== typeof val) || (0 > val)) {
                throw new Error('invalid parameter');
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                if (undefined === this.m_color) {
                    this.color(new mf.Color(128,128,128));
                }
                return this.m_color;
            }
            /* setter */
            if (false === mf.func.isInclude(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.m_color = clr;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            tgt.style({
                'box-shadow' : '0px '+ this.value()/2 + 'px '+ this.value() +'px '+ '0px ' + this.color().getStyle()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            tgt.style({'box-shadow' : null});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Shadow;
/* end of file */
