

import type { Request, Response, NextFunction } from "express";

export function asyncHandler(
  func: (req: Request, res: Response, next: NextFunction) => Promise<unknown>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    void func(req, res, next).catch(next);
  };
}