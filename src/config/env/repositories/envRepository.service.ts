export abstract class EnvConfigRepository {
  abstract get port(): number;
  abstract get sateliteKenobiPosition(): number[];
  abstract get sateliteSkywalkerPosition(): number[];
  abstract get sateliteSatoPosition(): number[];
  abstract get messageInitialPosition(): string;
  abstract get sateliteKenobiName(): string;
  abstract get sateliteSkywalkerName(): string;
  abstract get sateliteSatoName(): string;
}
