/**
 * WebMCP imperative tools for SNAP a FOTO.
 * Progressive enhancement — only registers when document.modelContext is available.
 */
const SERVICE_PATHS: Record<string, string> = {
  photobooth: '/',
  '360': '/360',
  guestbook: '/guestbook',
  'ai-photobooth': '/ai-photobooth',
};

const POLICY_PATHS: Record<string, string> = {
  privacy: '/en/privacy-policy',
  terms: '/en/terms-of-service',
};

function registerWebMcpTools(): void {
  const modelContext = document.modelContext;
  if (!modelContext?.registerTool) return;

  modelContext.registerTool({
    name: 'contact_messenger',
    description: 'Open Facebook Messenger chat with SNAP a FOTO for inquiries and booking.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    execute: async () => {
      window.open('https://m.me/snapafoto', '_blank', 'noopener,noreferrer');
      return 'Opened Facebook Messenger chat with SNAP a FOTO.';
    },
  });

  modelContext.registerTool({
    name: 'contact_line',
    description: 'Open LINE Official account @snapafoto.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    execute: async () => {
      window.open('https://lin.ee/VOh3AuJ', '_blank', 'noopener,noreferrer');
      return 'Opened LINE Official account @snapafoto.';
    },
  });

  modelContext.registerTool({
    name: 'call_phone',
    description: 'Call SNAP a FOTO for urgent inquiries at 088-266-7544.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    execute: async () => {
      window.location.href = 'tel:0882667544';
      return 'Initiated phone call to 088-266-7544.';
    },
  });

  modelContext.registerTool({
    name: 'browse_service',
    description: 'Navigate to a SNAP a FOTO service page.',
    inputSchema: {
      type: 'object',
      properties: {
        service: {
          type: 'string',
          enum: ['photobooth', '360', 'guestbook', 'ai-photobooth'],
          description: 'Service to browse.',
        },
      },
      required: ['service'],
    },
    execute: async (args) => {
      const service = args.service;
      const path = SERVICE_PATHS[service];
      if (!path) return `Unknown service: ${service}`;
      window.location.href = path;
      return `Navigating to ${service} service page.`;
    },
  });

  modelContext.registerTool({
    name: 'view_policy',
    description: 'View SNAP a FOTO legal policy documents.',
    inputSchema: {
      type: 'object',
      properties: {
        policy: {
          type: 'string',
          enum: ['privacy', 'terms'],
          description: 'Policy document to view.',
        },
      },
      required: ['policy'],
    },
    execute: async (args) => {
      const policy = args.policy;
      const path = POLICY_PATHS[policy];
      if (!path) return `Unknown policy: ${policy}`;
      window.location.href = path;
      return `Navigating to ${policy} policy page.`;
    },
  });
}

registerWebMcpTools();

export {};
