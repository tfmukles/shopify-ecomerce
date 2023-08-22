export function errorMessage(Objects: any) {
  let error = null;
  function extractMessage(Objects: any) {
    for (let key in Objects) {
      const regex = /error/gim;
      if (regex.test(key)) {
        error = Objects[key];
      }
      if (!regex.test(key) && typeof Objects[key] === "object") {
        if (Array.isArray(Objects[key])) {
          extractMessage(Objects[key][0]);
        }
        extractMessage(Objects[key]);
      }
    }
  }

  extractMessage(Objects);

  return error;
}
