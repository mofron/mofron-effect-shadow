/**
 * @file shadow.js
 * @brief shadow effect for mofron
 * @author simpart
 */
const mf = require('mofron');

/**
 * @class Shadow
 * @brief shadow effect for mofron
 */
mf.effect.Shadow = class extends mf.Effect {
    
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
                /* getter */
                if (undefined === this.m_value) {
                    this.value('0.5rem');
                }
                return this.m_value;
            }
            /* setter */
            this.m_value = mf.func.getSizeObj(val);
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
                    this.color(
                        (null === this.component().mainColor()) ? new mf.Color(128,128,128) : this.component().mainColor()
                    );
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
                'box-shadow' : '0rem '+ this.value().value()/2 + this.value().type() + ' '+ this.value().value() + this.value().type() + ' '+ '0rem ' + this.color().getStyle()
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
