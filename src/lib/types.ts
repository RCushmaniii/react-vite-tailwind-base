// File: src/lib/types.ts

// Represents the multiplier on a single square
export type SquareMultiplier = '2L' | '3L' | '2W' | '3W' | null;

// Represents the data for a single square on the board
export interface SquareData {
  row: number;
  col: number;
  multiplier: SquareMultiplier;
  letter: string | null; // The letter tile placed on this square
}
