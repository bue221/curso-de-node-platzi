import config from "../../config/index";

function withErrorStack(err, stack) {
  if (config.dev) {
    return { err, stack };
  }

  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message, err.stack);
}

export default {
  logErrors,
  errorHandler,
};
