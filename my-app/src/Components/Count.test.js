import {ballImpact, strikeImpact, hitImpact, foulImpact}  from './Count'


describe('Count.js', ()=> {

    describe('ballImpact()', ()=> {
        it('shoudl return this', ()=> {
            //expect balls and strikes reset to 0 when a player reaches 4 balls
            expect(ballImpact(3)).toBe(0)
            expect(ballImpact(1)).toBe(2)
            expect(ballImpact(2)).toBe(3)
        })
    }),

    describe('strikeImpact()', ()=> {
        it('shoudl return this', ()=> {
            //expect balls and strikes reset to 0 when a player reaches 3 strikes 
            expect(strikeImpact(2)).toBe(0)
            expect(strikeImpact(1)).toBe(2)
            expect(strikeImpact(0)).toBe(1)
        })
    }),

    describe('hitImpact()', ()=> {
        it('shoudl return this', ()=> {
            //expect balls and strikes reset to 0 when a hit is recorded
            expect(hitImpact(3)).toBe(0)
            expect(hitImpact(1)).toBe(0)
            expect(hitImpact(2)).toBe(0)
        })
    }),

    describe('foulImpact()', ()=> {
        it('shoudl return this', ()=> {
            //expect With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes
            expect(foulImpact(3)).toBe(2)
            expect(foulImpact(1)).toBe(2)
            expect(foulImpact(0)).toBe(1)
        })
    })
})


