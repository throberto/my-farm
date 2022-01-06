export interface CreateGrowingSeasonUseCase {
  execute(culture: string, start: Date, end: Date): void;
}
