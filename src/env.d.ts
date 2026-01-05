declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly LICHESS_BOT_TOKEN?: string;
      readonly STOCKFISH_PATH?: string;
    }
  }
}

export {};
