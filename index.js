/**
 * @file shadow.js
 */

mofron.effect.Shadow = class extends mofron.Effect {
    
    constructor (prm) {
        try {
            super();
            this.name('Shadow');
            this.prmOpt(
                ('number' !== typeof prm) ? prm : {value : prm}
            );
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
    
    enable (tgt) {
        try {
            tgt.style({
                'box-shadow' : '0px '+ this.value()/2 + 'px '+ this.value() +'px '+ '0px gray'
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
