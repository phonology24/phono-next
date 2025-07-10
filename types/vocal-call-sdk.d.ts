


declare module 'vocal-call-sdk' {
  export class VocalCallSDK {
    constructor(config: {
      agentId: string;
      callId: string;
      container?: HTMLElement | string;
      inactiveText?: string;
      activeText?: string;
      size?: string;
      className?: string;
    });

    renderButton(): void;
    startCall(): void;
    endCall(): void;
    getStatus(): string;
    destroy(): void;

    on(event: string, callback: () => void): void;
  }
}
