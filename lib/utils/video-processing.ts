export async function processVideoChunk(chunk: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.readAsArrayBuffer(chunk);
  });
}

export function generateThumbnail(video: HTMLVideoElement, time: number): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    resolve(canvas.toDataURL('image/jpeg'));
  });
}

export function calculateVideoQuality(width: number, height: number): string {
  if (width >= 7680 && height >= 4320) return 'UHD_8K';
  if (width >= 3840 && height >= 2160) return 'UHD_4K';
  if (width >= 1920 && height >= 1080) return 'FHD';
  return 'HD';
}