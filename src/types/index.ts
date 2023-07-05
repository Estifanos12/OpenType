export interface Results {
  accuracy: number;
  cpm: number;
  wpm: number;
  error: number;
}

export interface AccuracyMetrics {
  correctChars: number;
  incorrectChars: number;
  accuracy: number;
}

export interface HistoryType {
  wordHistory: string;
  typedHistory: string;
}
