declare module 'emoji-flags' {
  export interface Flag {
    code: string;
    emoji: string;
    name: string;
    unicode: string;
  }

  const flags: {
    [key: string]: Flag;
    data: Flag[];
    countryCode(code: string): Flag | undefined;
  };

  export default flags;
}
