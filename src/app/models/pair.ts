import {Patient} from './patient';
export interface Pair {
  pair_id: string;
  unfinished_high: number;
  unfinished_middle: number;
  unfinished_low: number;
  patient: Patient;
}