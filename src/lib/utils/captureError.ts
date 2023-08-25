const status = {
  DEFAULT: 500,
  UNIDENTIFIED_CUSTOMER: 500,
};

const DEFAULTMESSAGE = "Something went wrong!";

export function captureError(Objects: unknown) {
  let error = null;
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
    const err = error[0] as any;
    error = {
      message: err.message || DEFAULTMESSAGE,
      status: (status as any)[err.code] || 500,
    };
  }

  return error;
}
