/**
 * @file shadow.js
 */

mofron.effect.Shadow = class extends mofron.Effect {
    
    value (val) {
        try {
            var _val = (undefined === val) ? null : val;
            if (null === _val) {
                if (null === this.param) {
                    return 20;
                }
                return this.param;
            }
            if ('number' !== typeof _val) {
                throw new Error('invalid parameter');
            }
            this.param = _val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initEffect (flg, eff) {
        try {
            if (true === flg) {
                eff.target.style('box-shadow', null);
            } else {
                eff.target.style('box-shadow', '0px '+ this.value()/2 + 'px '+ this.value() +'px '+ '0px gray');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    effectConts (flg, eff) {
        try {
            if (true === flg) {
                eff.target.style('box-shadow', '0px '+ this.value()/2 + 'px '+ this.value() +'px '+ '0px gray');
            } else {
                eff.target.style('box-shadow', null);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
