
export default function logAppStarted(mode: string, port: number) {
    console.log(`Application running in ${mode.toUpperCase()} mode on http://localhost:${port}`);
}