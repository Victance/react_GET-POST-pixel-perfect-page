import { IPosition } from "./IPosition";

export interface IPositionResponse {
  success: Boolean,
  positions: IPosition[],
}