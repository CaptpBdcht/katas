import { should } from 'chai';

import { WizBakTop } from './wizbaktop';

should();

describe('WizBakTop', () => {
    it('1 should be 1', () => {
        WizBakTop.of(1).should.equal('1');
    });

    it('2 should be 2', () => {
        WizBakTop.of(2).should.equal('2');
    });

    it('only divisible by 3 gives Wiz', () => {
        WizBakTop.of(6).should.equal('Wiz');
    });

    it('only divisible by 5 gives Bak', () => {
        WizBakTop.of(10).should.equal('Bak*');
    });

    it('only divisible by 7 gives Top', () => {
        WizBakTop.of(14).should.equal('Top');
    });

    it('357 contains 3, 5 and 7 each once', () => {
        WizBakTop.of(357).should.equal('WizTopWizBakTop');
    });

    it('13705 should be BakWizTop*Bak with the leading star', () => {
        WizBakTop.of(13705).should.equal('BakWizTop*Bak');
    })
});
