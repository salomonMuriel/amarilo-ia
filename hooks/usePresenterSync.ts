import { useEffect, useRef, useCallback } from 'react';

const CHANNEL_NAME = 'amarilo-presenter-sync';

interface SyncMessage {
  type: 'SLIDE_CHANGE' | 'PRESENTER_READY' | 'MAIN_READY';
  slidePath: string;
  slideIndex: number;
}

export function usePresenterSync(
  currentPath: string,
  currentIndex: number,
  onSlideChange?: (path: string) => void
) {
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    channelRef.current = new BroadcastChannel(CHANNEL_NAME);

    if (onSlideChange) {
      channelRef.current.onmessage = (event: MessageEvent<SyncMessage>) => {
        if (event.data.type === 'SLIDE_CHANGE') {
          onSlideChange(event.data.slidePath);
        }
      };
    }

    return () => {
      channelRef.current?.close();
    };
  }, [onSlideChange]);

  const broadcastSlideChange = useCallback((path: string, index: number) => {
    channelRef.current?.postMessage({
      type: 'SLIDE_CHANGE',
      slidePath: path,
      slideIndex: index,
    } as SyncMessage);
  }, []);

  // Broadcast when slide changes in main window
  useEffect(() => {
    if (!onSlideChange) {
      // Only broadcast if this is the main window (not receiving changes)
      broadcastSlideChange(currentPath, currentIndex);
    }
  }, [currentPath, currentIndex, broadcastSlideChange, onSlideChange]);

  return { broadcastSlideChange };
}
