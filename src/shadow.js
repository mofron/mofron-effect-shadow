/**
 * @file shadow.js
 */

mofron.effect.Shadow = class extends mofron.effect.Base {
    
    constructor (tgt, spd) {
        try {
            super(tgt, spd);
            this.m_value = 20;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            var _val = (undefined === val) ? null : val;
            if (null === _val) {
                return this.m_value;
            }
            if ('number' !== typeof _val) {
                throw new Error('invalid parameter');
            }
            this.m_value = _val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    effect_func (flg, vd) {
        try {
            if (true === flg) {
                this.style('box-shadow', '0px '+ this.value()/2 + 'px '+ this.value() +'px '+ '0px gray');
            } else {
                this.style('box-shadow', null);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
