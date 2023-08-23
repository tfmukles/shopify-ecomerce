export function captureError(Objects: unknown) {
  let error = null as any;
  function extractMessage(Objects: any) {
    for (let key in Objects) {
      const hasErrorfeild = key.includes("error");
      if (hasErrorfeild) {
        error = Objects[key];
      }
      if (!hasErrorfeild && typeof Objects[key] === "object") {
        if (Array.isArray(Objects[key])) {
          extractMessage(Objects[key][0]);
        }
        extractMessage(Objects[key]);
      }
    }
  }

  extractMessage(Objects);

  if (error && Array.isArray(error) && Object.keys(error).length > 0) {
    error = error[0].message;
  }

  return error;
}
