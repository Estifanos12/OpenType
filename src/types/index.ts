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

export interface Theme {
  name: string;
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    title: string;
  };
}
