
export default function logAppCrashed(error: Error) {
    console.error("Application run has error:", error.message);
}