export interface CreateGrowingSeasonRepository {
  createGrowingSeason(culture: string, start: Date, end: Date): void;
}
