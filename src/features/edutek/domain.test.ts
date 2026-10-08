import { describe,it,expect } from 'vitest';
import { canAccess,isLate,weightedAverage,quizScore } from './domain';
describe('Specification rules',()=>{
 it('keeps account administration exclusive to administrators',()=>{expect(canAccess('etudiant','utilisateurs')).toBe(false);expect(canAccess('enseignant','utilisateurs')).toBe(false);expect(canAccess('admin','utilisateurs')).toBe(true)});
 it('does not expose teacher class management to students',()=>expect(canAccess('etudiant','classes')).toBe(false));
 it('uses coefficients for automatic grade averages',()=>expect(weightedAverage([{score:10,coefficient:1},{score:20,coefficient:3}])).toBe(17.5));
 it('marks submissions after the deadline late',()=>{expect(isLate('2026-10-10T00:00','2026-10-09T23:59')).toBe(true);expect(isLate('2026-10-09T23:59','2026-10-09T23:59')).toBe(false)});
 it('automatically corrects quiz answers on a scale of 20',()=>expect(quizScore(['Une pile','Faux','algorithme'],['Une pile','Vrai','algorithme'])).toBe(13.33));
});
