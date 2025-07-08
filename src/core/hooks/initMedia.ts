const mediaBoxStyle = {
    width: 240,
    height: 180,
}

const throttle = (fn: Function, delay: number) => {
    let timer: any = null;
    return () => {
        if (timer) return;
        timer = setTimeout(() => {
            fn();
            timer = null;
        }, delay)
    };
}

export const initMedia = async (onmessage: initMediaOnMessage) => {
    const container = document.createElement('div');
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    container.className = 'camera-preview';
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.width = mediaBoxStyle.width
    video.height = mediaBoxStyle.height
    video.style.display = 'none';
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.srcObject = stream;

    canvas.width = mediaBoxStyle.width
    canvas.height = mediaBoxStyle.height

    await video.play();

    container.append(canvas, video);
    document.body.appendChild(container);

    const handlingVisual = throttle(() => {
        ctx?.save();
        ctx?.translate(canvas.width, 0);
        ctx?.scale(-1, 1);
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        ctx?.restore();
        onmessage?.({
            canvas,
            image: '',
        })
    }, 1000 / 10)

    const processFrame = () => {

        handlingVisual();
        requestAnimationFrame(processFrame);
    };
    processFrame();

};

export type InitMediaData = {
    canvas: HTMLCanvasElement,
    image: string
}

export type initMediaOnMessage = (data: InitMediaData) => void | undefined;


