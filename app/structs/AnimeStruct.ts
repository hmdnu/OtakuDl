import { Response } from "~/utils";

export abstract class AnimeStructure<T> {
  protected abstract extractHTML(html: string, opt?: string): T;
  abstract get(param: string, opt?: string): Promise<Response>;
}
