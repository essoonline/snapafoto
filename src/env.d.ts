/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface WebMcpInputSchema {
  type: string;
  properties?: Record<string, unknown>;
  required?: string[];
  enum?: string[];
  description?: string;
}

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: WebMcpInputSchema;
  execute: (args: Record<string, string>) => Promise<string>;
}

interface WebMcpModelContext {
  registerTool: (
    tool: WebMcpTool,
    options?: { signal?: AbortSignal; exposedTo?: string[] }
  ) => void;
}

interface Document {
  modelContext?: WebMcpModelContext;
}

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    toolname?: string;
    tooldescription?: string;
    toolparamdescription?: string;
    toolautosubmit?: boolean | '';
  }
}

declare namespace JSX {
  interface HTMLAttributes {
    toolname?: string;
    tooldescription?: string;
    toolparamdescription?: string;
    toolautosubmit?: boolean | '';
  }
}
